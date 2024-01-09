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
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const Request = () => {
  // states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

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
            Welcome to Course Request Form
          </Heading>
          <Text fontSize={'xl'}>
            like a course? you are one step away from accessing it
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
          borderRadius={'xl'}
          width={'100%'}
          p={'16'}
          bg={'white'}
        >
          <Heading>Course Request</Heading>
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
              <FormLabel htmlFor="message" children={'Course Details'} />
              <Textarea
                required
                id="course"
                value={course}
                onChange={e => {
                  setCourse(e.target.value);
                }}
                placeholder="Enter the details of requested course..."
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
              />
            </Box>
            <Box>
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
            <Box
              px={2}
              display={'flex'}
              textAlign={'center'}
              alignItems={'center'}
            >
              Check Available Courses here{' '}
              <Link to={'/courses'}>
                <Button
                  py={'4px'}
                  colorScheme={'messenger'}
                  fontWeight={'bold'}
                  variant={'link'}
                >
                  <HiOutlineArrowCircleRight
                    display={'flex'}
                    fontSize={'22px'}
                  />
                </Button>
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </Stack>
  );
};

export default Request;
