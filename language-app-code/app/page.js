import styles from './page.module.css';

export const metadata = {
  title: 'Gujarati Learning App',
  description: 'Learn Gujarati with ease',
};

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Gujarati Learning App</a>
        </h1>

        <p className={styles.description}>
          Start learning Gujarati today!
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Alphabet &rarr;</h2>
            <p>Learn the Gujarati alphabet.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Vocabulary &rarr;</h2>
            <p>Expand your Gujarati vocabulary.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Grammar &rarr;</h2>
            <p>Understand Gujarati grammar.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Practice &rarr;</h2>
            <p>Practice with exercises and quizzes.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
