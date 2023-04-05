import Button from '@/ui/Button';
import classes from './results-title.module.css';

interface Props {
  date: Date;
}

function ResultsTitle({ date }: Props) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1 className="mb-5">Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
