'use client';

import { css } from '@style/css';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [level, setLevel] = useState(0);

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDir: 'column',
      })}
    >
      <h1 className={css({ fontSize: '3rem', mb: 6 })}>Select Scenario</h1>
      <select
        className={css({ fontSize: '2rem', mb: 6, minWidth: '200px' })}
        onChange={(e) => setLevel(Number(e.target.value))}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
          <option key={level} value={level}>
            Party Level: {level}
          </option>
        ))}
      </select>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(10, 1fr)',
          gap: 4,
        })}
      >
        {SCENARIO_DEFINITIONS.map((scenario) => (
          <Link
            key={scenario.id}
            href={{ pathname: `/scenarios/${scenario.id}`, query: { level } }}
            className={css({
              p: 1,
              fontSize: '2.5rem',
              border: '1px solid white',
              borderRadius: 4,
              textAlign: 'center',
              lineHeight: 0.9,
              width: '65px',
              color: 'white',
            })}
          >
            {scenario.id}
          </Link>
        ))}
      </div>
    </div>
  );
}
