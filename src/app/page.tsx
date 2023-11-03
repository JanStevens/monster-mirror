'use client';

import { css } from '@style/css';
import { SCENARIO_DEFINITIONS } from 'data/scenarios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [level, setLevel] = useState(1);
  const [scenario, setScenario] = useState(1);

  const handleScenarioLoad = () => {
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
        Select Scenario & Level
      </h1>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDir: { smDown: 'column', md: 'row' },
          gap: 8,
        })}
      >
        <select
          className={css({
            fontSize: '2rem',
            width: { smDown: '100%' },
            color: 'black',
            p: '4px 10px 4px',
          })}
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
        >
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
            width: { smDown: '100%' },
            p: '4px 10px 4px',
          })}
          value={scenario}
          onChange={(e) => setScenario(Number(e.target.value))}
        >
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
            width: { smDown: '100%' },
          })}
          onClick={handleScenarioLoad}
        >
          Start
        </button>
      </div>
    </div>
  );
}
