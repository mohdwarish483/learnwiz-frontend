import {
  Box,
  Button,
  Container,
  IconButton,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/actions/profile';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// componernt
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  // const [confirmpassword, setConfirmpassword] = useState('');
  // const [newpassword, setNewpassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState('');

  // usePrams
  const params = useParams('');
  console.log(params.token);

  const { loading, message } = useSelector(state => state.profile);
  var { error } = useSelector(state => state.profile);

  // new password checker
  // const passwordHandler = () => {
  //   if (password === confirmpassword) {
  //     setNewpassword(password);
  //   } else {
  //     error = 'password and confirm password are not matching';
  //   }
  // };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(resetPassword(params.token, newPassword));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/login');
    }
  }, [dispatch, error, message, navigate]);
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
              <InputGroup>
                <Input
                  required
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  placeholder="New Password"
                  type={showNewPassword ? 'text' : 'password'} // Set type to "text" when showPassword is true
                  focusBorderColor={'rgb(12,120,254)'}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    icon={showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    style={{ background: 'transparent' }} // Set background color to white
                  />
                </InputRightElement>
              </InputGroup>
              {/* <Input
                required
                value={confirmpassword}
                onChange={e => {
                  setConfirmpassword(e.target.value);
                }}
                placeholder="Confirm New Password"
                type="password"
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
              /> */}
              <Button
                type="submit"
                w={'full'}
                colorScheme="messenger"
                // onSubmit={passwordHandler}
                isLoading={loading}
              >
                Update Password
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Stack>
  );
};

export default ResetPassword;
