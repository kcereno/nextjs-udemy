import classes from './error-alert.module.css';

interface Props {
  children: React.ReactNode;
}

function ErrorAlert({ children }: Props) {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
