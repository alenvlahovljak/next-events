import { useState, FC } from 'react';

import CommentList from '../CommentList/CommentList';
import NewComment from '../NewComment/NewComment';
import { Container } from './style';

export interface CommentsProps {
  eventId: string;
}

const Comments: FC<CommentsProps> = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData: any) => {
    // send data to API
  };

  return (
    <Container>
      <button type="button" onClick={toggleCommentsHandler}>
        {showComments ? `Hide` : `Show`} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </Container>
  );
};

export default Comments;
