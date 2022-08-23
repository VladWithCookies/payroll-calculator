import { Container, Center, Heading } from '@chakra-ui/react';

export default function Home({ children }) {
  return (
    <Container>
      <Center
        pt={10}
        pb={10}
      >
        <Heading as="h1">
          Tax Calculator
        </Heading>
      </Center>
      {children}
    </Container>
  );
}
