import styles from './Container.module.css';

export default function Container({ children, className = '', as: Tag = 'div', ...props }) {
  const classNames = [styles.container, className].filter(Boolean).join(' ');

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}
