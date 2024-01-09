import { Box, Button, Container, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/actions/profile';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(state => state.profile);
  const submitHandler = e => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);
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
            Get Back Your Account in One Click
          </Heading>
          <Text fontSize={'xl'}>
            Just enter your registered email id and get the password
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
          <Heading textAlign={'center'}>FORGOT PASSWORD</Heading>
          <form style={{ width: '100%' }} onSubmit={submitHandler}>
            <VStack spacing={'8'} my={'4'}>
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
              <Button
                type="submit"
                w={'full'}
                colorScheme="messenger"
                className="shady"
                isLoading={loading}
              >
                Send Reset Link
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Stack>
  );
};

export default ForgetPassword;
