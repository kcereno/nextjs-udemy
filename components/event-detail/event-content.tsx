import classes from './event-content.module.css';

interface Props {
  children: React.ReactNode;
}

function EventContent({ children }: Props) {
  return <section className={classes.content}>{children}</section>;
}

export default EventContent;
