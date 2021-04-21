import { useState, useEffect, useContext, FC } from 'react';
import NotificationContext from '@/context/notification-context';

import CommentList from '../CommentList/CommentList';
import NewComment from '../NewComment/NewComment';
import { Container } from './style';

export interface CommentsProps {
  eventId: string | string[] | undefined;
}

const Comments: FC<CommentsProps> = ({ eventId }) => {
  const notificationCtx = useContext(NotificationContext);

  const [comments, setComments] = useState<Record<string, any>[]>([]);
  const [showComments, setShowComments] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch(`/api/comments/${eventId}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
          setIsLoading(false);
        });
    }
  }, [showComments]);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData: Record<string, string>) => {
    notificationCtx.showNotification({
      title: `Sending comment...`,
      message: `Your comment is currently being stored into a database.`,
      status: `pending`,
    });

    fetch(`/api/comments/${eventId}`, {
      method: `POST`,
      body: JSON.stringify(commentData),
      headers: { 'Content-Type': `application/json` },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return res.json().then((data) => {
          throw new Error(data.message || `Something went wrong!`);
        });
      })
      .then(() => {
        notificationCtx.showNotification({
          title: `Success!`,
          message: `Your comment was saved!`,
          status: `success`,
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: `Error!`,
          message: err.message || `Something went wrong!`,
          status: `error`,
        });
      });
  };

  return (
    <Container>
      <button type="button" onClick={toggleCommentsHandler}>
        {showComments ? `Hide` : `Show`} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isLoading && <CommentList items={comments} />}
      {showComments && isLoading && <p>Loading...</p>}
    </Container>
  );
};

export default Comments;
