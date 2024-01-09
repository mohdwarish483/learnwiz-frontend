import { Button, Container, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Stack className="backcolor">
      <Container height={'90vh'}>
        <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
          <RiErrorWarningFill color="rgb(12,120,254)" size={'5rem'} />
          <Heading my={4} textAlign={'center'}>
            Page Not Found
          </Heading>
          <Link to={'/'}>
            <Button
              flex={1}
              size={'md'}
              colorScheme="messenger"
              className="shady"
              rounded={'full'}
            >
              Go to Home
            </Button>
          </Link>
        </VStack>
      </Container>
    </Stack>
  );
};

export default NotFound;
