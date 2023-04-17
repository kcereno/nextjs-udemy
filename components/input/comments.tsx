import { useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import { Comment } from '@/models/interfaces';

interface Props {
  eventId: string;
}

function Comments({ eventId }: Props) {
  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler({ email, name, text }: Comment) {
    const newComment: Comment = {
      email,
      name,
      text,
    };

    const response = await fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('addCommentHandler ~ data:', data);
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}

export default Comments;
