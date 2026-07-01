import styles from './Card.module.css';

export default function Card({ children, className = '', as: Tag = 'article', ...props }) {
  const classNames = [styles.card, className].filter(Boolean).join(' ');

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}
