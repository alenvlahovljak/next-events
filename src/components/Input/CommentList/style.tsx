import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    text-align: left;
    padding: 0.5rem 0;
    border-bottom: 2px solid #ccc;
  }

  p {
    margin: 0;
  }

  li div {
    text-align: right;
    font-style: italic;
  }

  address {
    display: inline;
  }
`;
