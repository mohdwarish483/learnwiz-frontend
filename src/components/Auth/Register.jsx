import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
  Avatar,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/actions/user';

export const fileCss = {
  cursor: 'pointer',
  width: '110%',
  border: 'none',
  color: 'rgb(12,109,254)',
  backgroundColor: 'white',
  marginLeft: '-5%',
  fontWeight: 'bold',
};
const fileUploadStyle = {
  '&::file-selector-button': fileCss,
};
const Register = () => {
  const dispatch = useDispatch();
  //set state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imagepreview, setImagepreview] = useState('');
  const [image, setImage] = useState('');

  // image handler
  const fileHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagepreview(reader.result);
      setImage(file);
    };
  };

  // submitHandler

  const submitHandler = e => {
    e.preventDefault();
    const MyFormData = new FormData();

    MyFormData.append('name', name);
    MyFormData.append('email', email);
    MyFormData.append('password', password);
    MyFormData.append('file', image);
    dispatch(register(MyFormData));
  };
  // form component
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
            Start Your Skills Journey Today
          </Heading>
          <Text fontSize={'xl'}>
            * By signing up, you agree to our Terms of Use and acknowledge
            you’ve read our Privacy Policy
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
          borderRadius={'xl'}
          bg={'white'}
        >
          <Heading textTransform={'uppercase'}>Registration</Heading>
          <form style={{ width: '100%' }} onSubmit={submitHandler}>
            <Stack flexDir={'row'} justifyContent={'center'}>
              <Avatar size={'lg'} src={imagepreview} />
            </Stack>
            <Box>
              <FormLabel htmlFor="name" children={'Your Name'} />
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
              <FormLabel htmlFor="password" children={'Password'} />
              <Input
                required
                id="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Your Password"
                type="password"
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
              />
            </Box>
            <Box my={4}>
              <FormLabel htmlFor="Uploadavatar" children={'Upload Avtar'} />
              <Input
                padding={1}
                required
                id="profilepic"
                type="file"
                css={fileUploadStyle}
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
                onChange={fileHandler}
              />
            </Box>
            <Button my={4} colorScheme="messenger" type="submit" width={'100%'}>
              SignUp
            </Button>
            <Box px={2} fontWeight={'semibold'}>
              Already have an account?{' '}
              <Link to={'/login'}>
                <Button
                  colorScheme={'messenger'}
                  fontWeight={'bold'}
                  variant={'link'}
                >
                  Login
                </Button>
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </Stack>
  );
};

export default Register;
