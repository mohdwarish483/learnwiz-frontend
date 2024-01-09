import {
  Button,
  Container,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { InputRightElement, InputGroup, IconButton } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(changePassword(oldPassword, newPassword));
    // if (newPassword === confirmPassword) {
    //   dispatch(changePassword(oldPassword, newPassword));
    // } else {
    //   dispatch({type'password is not matching');
    // }
  };

  const { loading, message, error } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      navigate('/profile');
    }
  }, [dispatch, error, message, navigate]);

  return (
    <Stack className="backcolor" mt={'10vh'}>
      <Container py="16" minH={'90vh'}>
        <form onSubmit={submitHandler}>
          <Heading textTransform={'uppercase'} my="8" textAlign={'center'}>
            Change Password
          </Heading>

          <VStack spacing={'8'}>
            <InputGroup>
              <Input
                required
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
                placeholder="Old Password"
                type={showOldPassword ? 'text' : 'password'} // Set type to "text" when showPassword is true
                focusBorderColor={'rgb(12,120,254)'}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  icon={showOldPassword ? <FaEyeSlash /> : <FaEye />}
                  style={{ background: 'transparent' }} // Set background color to white
                />
              </InputRightElement>
            </InputGroup>
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
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              type={'password'}
              focusBorderColor={'rgb(12,120,254)'}
            /> */}

            <Button
              isLoading={loading}
              w="full"
              colorScheme={'messenger'}
              type="submit"
            >
              Update Password
            </Button>
          </VStack>
        </form>
      </Container>
    </Stack>
  );
};

export default ChangePassword;
