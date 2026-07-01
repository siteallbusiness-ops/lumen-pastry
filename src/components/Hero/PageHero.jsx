import Container from '@/components/Common/Container/Container';
import styles from './PageHero.module.css';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className={styles.pageHero}>
      <Container>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.pageTitle}>{title}</h1>
        {description && <p className={styles.pageDescription}>{description}</p>}
      </Container>
    </section>
  );
}
