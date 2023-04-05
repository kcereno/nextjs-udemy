import classes from './logistics-item.module.css';

interface Props {
  icon: React.FC;
  children: React.ReactNode;
}

function LogisticsItem({ icon: Icon, children }: Props) {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
