import { useRef, useState, FC } from 'react';

import { Form, Row, Control } from './style';

export interface NewCommentProps {
  onAddComment: ({
    email,
    name,
    text,
  }: {
    email: string;
    name: string;
    text: string;
  }) => void;
}

const NewComment: FC<NewCommentProps> = ({ onAddComment }) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const commentInputRef = useRef<HTMLTextAreaElement | null>(null);

  const sendCommentHandler = (event: any) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredName = nameInputRef.current?.value;
    const enteredComment = commentInputRef.current?.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() == `` ||
      !enteredEmail.includes(`@`) ||
      !enteredName ||
      enteredName.trim() == `` ||
      !enteredComment ||
      enteredComment.trim() == ``
    ) {
      setIsInvalid(true);
      return;
    }

    onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  };

  return (
    <Form>
      <Row>
        <Control>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </Control>
        <Control>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </Control>
      </Row>
      <Control>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" rows={5} ref={commentInputRef} />
      </Control>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button type="submit">Submit</button>
    </Form>
  );
};

export default NewComment;
