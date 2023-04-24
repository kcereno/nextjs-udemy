import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import { Comment } from '@/models/interfaces';
import NotificationContext from '@/store/notification-context';

interface Props {
  eventId: string;
}

function Comments({ eventId }: Props) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const { showNotification, hideNotification } =
    useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      // fetch data
      fetch('/api/comments/' + eventId)
        .then((res) => res.json())
        .then((data) => {
          const eventComments = data.comments.filter(
            (comment: any) => comment.eventId === eventId
          );

          setComments(eventComments);
        });
    }
  }, [showComments, eventId]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler({ email, name, text }: Comment) {
    const commentData: Comment = {
      email,
      name,
      text,
      eventId,
    };

    showNotification({
      title: 'Submitted',
      message: 'Pending',
      status: 'pending',
    });

    const apiPath = '/api/comments/' + eventId;

    try {
      const response = await fetch(apiPath, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('addCommentHandler ~ response:', response);

      const data = await response.json();
      console.log('addCommentHandler ~ data:', data);

      showNotification({
        title: 'Success',
        message: data.message,
        status: 'success',
      });
    } catch (error) {
      console.log('addCommentHandler ~ error:', error);
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
