import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  // states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Stack width={'100vw'} className="backcolor" mt={'10vh'}>
      <Box bg={'rgb(12,120,254)'} width={'100%'} h={'60vh'} zIndex={'10'}>
        <VStack
          spacing={'6'}
          color={'white'}
          justifyContent={'flex-start'}
          width={'100%'}
          h={'100%'}
          pt={'32'}
        >
          <Heading fontWeight={'600'} fontSize={'6xl'}>
            Welcome to our help section
          </Heading>
          <Text fontSize={'xl'}>
            need help? just send your query details we will get back to you.
          </Text>
        </VStack>
      </Box>
      <Container
        minHeight={'90vh'}
        h={'auto'}
        mt={'-32'}
        zIndex={'200'}
        pb={'16'}
      >
        <VStack
          height={'full'}
          justifyContent={'center'}
          spacing={'2'}
          boxShadow={'xl'}
          width={'100%'}
          p={'16'}
          bg={'white'}
          borderRadius={'xl'}
        >
          <Heading>Contact Us</Heading>
          <form style={{ width: '100%' }}>
            <Box my={4}>
              <FormLabel htmlFor="email" children={'Your Name'} />
              <Input
                required
                id="name"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
                placeholder="john doe"
                type="text"
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
              />
            </Box>
            <Box my={4}>
              <FormLabel htmlFor="email" children={'Email Address'} />
              <Input
                required
                id="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                placeholder="xyz@gmail.com"
                type="email"
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
              />
            </Box>
            <Box my={4}>
              <FormLabel htmlFor="message" children={'Message'} />
              <Textarea
                required
                id="message"
                value={message}
                onChange={e => {
                  setMessage(e.target.value);
                }}
                placeholder="Enter Your Message here..."
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
              />
            </Box>
            <Box className="shady">
              <Button
                flex={1}
                my={4}
                colorScheme="messenger"
                type="submit"
                width={'100%'}
              >
                Send Mail
              </Button>
            </Box>
            <Box px={2}>
              Request for a course?{' '}
              <Link to={'/request'}>
                <Button
                  colorScheme={'messenger'}
                  fontWeight={'bold'}
                  variant={'link'}
                >
                  click here
                </Button>
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </Stack>
  );
};

export default Contact;
