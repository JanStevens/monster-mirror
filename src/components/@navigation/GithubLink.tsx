import { css, cx } from '@style/css';
import { button } from '@style/recipes';
import { Github } from 'lucide-react';

const GithubLink = () => {
  return (
    <a
      href="https://github.com/JanStevens/monster-mirror"
      target="_blank"
      className={cx(
        button({ variant: 'ghost' }),
        css({ px: '0', display: { base: 'none', sm: 'inline-flex' } }),
      )}
    >
      <Github />
    </a>
  );
};

export default GithubLink;
