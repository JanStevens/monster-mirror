'use client';

import { css } from '@style/css';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [level, setLevel] = useState<number | undefined>();
  const [scenario, setScenario] = useState<number | undefined>();

  const handleScenarioLoad = () => {
    if (level === undefined || scenario === undefined) return;
    router.push(`/scenarios/${scenario}?level=${level}`);
  };

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDir: 'column',
        height: '100svh',
        textAlign: 'center',
        ml: 8,
        mr: 8,
      })}
    >
      <h1 className={css({ fontSize: '3rem', mb: '12' })}>
        Select scenario & level
      </h1>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDir: { lgDown: 'column', base: 'row' },
          gap: { lgDown: 4, base: 8 },
        })}
      >
        <select
          className={css({
            fontSize: '2rem',
            width: { lgDown: '100%' },
            color: 'black',
            p: '4px 10px 4px',
          })}
          value={level}
          defaultValue=""
          onChange={(e) => setLevel(Number(e.target.value))}
        >
          <option value="" disabled>
            Select level
          </option>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((level) => (
            <option key={level} value={level}>
              Party Level: {level}
            </option>
          ))}
        </select>
        <select
          className={css({
            fontSize: '2rem',
            color: 'black',
            width: { lgDown: '100%' },
            p: '4px 10px 4px',
          })}
          defaultValue=""
          value={scenario}
          onChange={(e) => setScenario(Number(e.target.value))}
        >
          <option value="" disabled>
            Select scenario
          </option>
          {SCENARIO_DEFINITIONS.map((scenario) => (
            <option key={scenario.id} value={scenario.id}>
              {scenario.name}
            </option>
          ))}
        </select>
        <button
          className={css({
            fontSize: '2em',
            p: '4px 15px 4px',
            bgColor: 'white',
            color: 'black',
            borderRadius: '8px',
            lineHeight: 1,
            height: '50px',
            width: { lgDown: '100%' },
            cursor: 'pointer',
            _disabled: {
              bg: { base: 'gray.700', _hover: 'gray.700' },
              color: { base: 'var(--colors-gray-500)' },
              cursor: 'not-allowed',
            },
          })}
          disabled={level === undefined || scenario === undefined}
          onClick={handleScenarioLoad}
        >
          Start
        </button>
      </div>
    </div>
  );
}
