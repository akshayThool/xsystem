import type { ReactElement } from 'react';
// eslint-disable-next-line import/order
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5em;
  text-align: center;
`;

export default function Home(): ReactElement {
  const message = 'Hello World';

  return <Title>{message}</Title>;
}
