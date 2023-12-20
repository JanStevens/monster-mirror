import { glob } from 'glob';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import SVGSpriter from 'svg-sprite';
import type Vinyl from 'vinyl';

const cwd = process.cwd();
const destDir = path.join(cwd, 'src');
const files = glob.sync(path.join(cwd, 'icons', '*.svg'));

const addSvgFiles = (spriter: SVGSpriter.SVGSpriter, files: string[]) => {
  for (const file of files) {
    const filePath = path.join(cwd, file);
    const basename = path.basename(file);

    spriter.add(
      path.resolve(filePath),
      basename,
      fs.readFileSync(file, { encoding: 'utf-8' }),
    );
  }
  return spriter;
};

const svgoConfig = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    { name: 'removeXMLNS' },
    {
      name: 'prefixIds',
    },
  ],
};

const writeSvgSprite = (result: Record<string, Vinyl.BufferFile>) => {
  for (const type of Object.values(result)) {
    fs.mkdirSync(path.dirname(type.path), { recursive: true });
    fs.writeFileSync(type.path, type.contents);
  }
};

const writeSvgTypings = (shapes: { name: string }[]) => {
  const header = 'export const IconNames = [';
  const constants = shapes.map((shape) => `  '${shape.name}',`).join('\n');
  const footer = '] as const;\n';

  fs.writeFileSync(
    path.join(destDir, 'icons', 'types.ts'),
    [header, constants, footer].join('\n'),
  );
};

const run = async () => {
  const spriter = new SVGSpriter({
    dest: destDir,
    log: 'debug',
    svg: {
      doctypeDeclaration: false,
      xmlDeclaration: false,
    },
    mode: {
      symbol: {
        dest: 'icons',
        sprite: 'sprite',
      },
    },
    shape: {
      // @ts-expect-error not sure how to type this
      transform: [{ svgo: svgoConfig }],
    },
  });

  const {
    result: { symbol: results },
    data: { symbol: shapes },
  } = await addSvgFiles(spriter, files).compileAsync();
  writeSvgSprite(results);
  writeSvgTypings(shapes.shapes);
};

Promise.all([run()]).catch((error) => console.error(error));
