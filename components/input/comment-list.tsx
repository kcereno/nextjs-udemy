import classes from './comment-list.module.css';
import { Comment } from '@/models/interfaces';

interface Props {
  comments: Comment[];
}

function CommentList({ comments }: Props) {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {comments.map((comment) => (
        <li key={comment.eventId}>
          <p>{comment.text}</p>
          <div className="">
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
