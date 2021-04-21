import { useState, useEffect, FC } from 'react';

import CommentList from '../CommentList/CommentList';
import NewComment from '../NewComment/NewComment';
import { Container } from './style';

export interface CommentsProps {
  eventId: string | string[] | undefined;
}

const Comments: FC<CommentsProps> = ({ eventId }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((res) => res.json())
        .then((data) => setComments(data.comments));
    }
  }, [showComments]);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData: Record<string, string>) => {
    fetch(`/api/comments/${eventId}`, {
      method: `POST`,
      body: JSON.stringify(commentData),
      headers: { 'Content-Type': `application/json` },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Container>
      <button type="button" onClick={toggleCommentsHandler}>
        {showComments ? `Hide` : `Show`} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </Container>
  );
};

export default Comments;
