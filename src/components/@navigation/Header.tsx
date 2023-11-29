import { sva } from '@style/css';

const styles = sva({
  slots: ['main', 'header'],
  base: {
    header: {
      bg: 'bg.canvas',
      display: 'flex',
      flexDirection: 'column',
      left: '0',
      position: 'fixed',
      right: '0',
      top: '0',
      zIndex: 'dropdown',
      borderBottomWidth: '2px',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      justifyContent: 'center',
      pt: { base: '16', lg: '20' },
    },
  },
})();

interface Props {
  children: React.ReactNode;
}

export const Header = ({ children }: Props) => (
  <header className={styles.header}>{children}</header>
);

export const Main = ({ children }: Props) => (
  <main className={styles.main}>{children}</main>
);
