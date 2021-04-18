import { FC } from 'react';

import Link from 'next/link';
import { LinkButton } from './style';

export interface ButtonProps {
  link?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <LinkButton>{children}</LinkButton>
      </Link>
    );
  }

  return <LinkButton onClick={onClick}>{children}</LinkButton>;
};

export default Button;
