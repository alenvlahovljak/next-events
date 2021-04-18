import styled from '@emotion/styled';

export const Section = styled.section`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #2b2b2b;
  padding: 2rem;
  max-width: 50rem;
  width: 80%;
  margin: -3rem auto;
  color: #d5eeeb;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  address {
    white-space: pre;
  }

  @media (min-width: 768px) {
    .logistics {
      padding: 2rem;
      margin: -5rem auto;
      gap: 3rem;
      flex-direction: row;
      align-items: stretch;
    }
  }
`;

export const Cover = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;

  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }

  img {
    width: 20rem;
    height: 20rem;
  }
`;

export const List = styled.ul`
  flex: 3;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
