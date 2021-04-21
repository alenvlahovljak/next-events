import styled from '@emotion/styled';

export const Container = styled.section`
  margin: 3rem auto;
  width: 90%;
  max-width: 20rem;

  h2 {
    text-align: center;
  }

  button {
    background-color: #03be9f;
    border: 1px solid #03be9f;
    color: #dafff7;
    border-radius: 0 6px 6px 0;
    font: inherit;
    cursor: pointer;
  }

  button:hover,
  button:active {
    background-color: #02afa1;
    border-color: #02afa1;
  }
`;

export const Control = styled.div`
  display: flex;

  input {
    flex: 1;
    font: inherit;
    padding: 0.25rem;
    border-radius: 4px 0 0 4px;
    border: 1px solid #ccc;
  }
`;
