import { cn } from '../../utils';
import styles from './styles.module.css';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  return <button className={cn(className, styles.button)} {...restProps} />;
}
