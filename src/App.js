import React from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Alert variant="success">Life is like a </Alert>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const Alert = styled.div`
  ${props => `
    background-color: ${props.variant === 'error' ? '#D64B2E66' : '#57C53966'};
    color: ${props.variant === 'error' ? '#D64B2E' : '#57C539'};
    border: 1px solid ${props.variant === 'error' ? '#D64B2E' : '#57C539'};
  `}
  border-radius: 2px;
`;

export default App;
