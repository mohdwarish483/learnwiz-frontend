import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import animationData from '../../assets/images/Animation - 1706386259441.json';
import Lottie from 'react-lottie';

function PaymentSuccess() {
  const location = useLocation();

  const searchObject = new URLSearchParams(location?.search);

  const referenceId = searchObject?.get('reference');

  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Stack width={'100vw'} className="backcolor" mt={'10vh'}>
      <Box bgColor={'rgb(12,109,254)'} width={'100%'} h={'60vh'} zIndex={'10'}>
        <VStack
          spacing={'6'}
          color={'white'}
          justifyContent={'flex-start'}
          width={'100%'}
          h={'100%'}
          pt={'32'}
        >
          <Heading fontWeight={'600'} fontSize={'6xl'}>
            Hurrah! Payment Successful
          </Heading>
          <Text fontSize={'xl'}>
            if not satisfied? you can cancellout your subscription within 7 days
          </Text>
        </VStack>
      </Box>
      <Container
        minHeight={'90vh'}
        h={'auto'}
        mt={['-20', '-20', '-24', '-24', '-32']}
        zIndex={'200'}
        pb={'16'}
      >
        <VStack
          borderRadius={'8'}
          height={'full'}
          justifyContent={'center'}
          spacing={'2'}
          boxShadow={'xl'}
          width={'100%'}
          p={'8'}
          pt={'0'}
          bg={'white'}
        >
          <VStack textAlign={'center'} p={'6'} pt={'0'} spacing={'6'}>
            <Heading size={'xs'} mb={'-16'} mt={'16'}>
              {referenceId ? `Reference ID : ${referenceId}` : 'No payment'}
            </Heading>
            <Lottie options={defaultOptions} width={'80%'} />
            <Text marginTop={'-16'}>
              Congratulations! you have became a pro member. Now You a have
              access to premium content
            </Text>

            <Button
              size={'md'}
              className="shady"
              colorScheme="messenger"
              onClick={() => navigate('/profile')}
            >
              Go to Profile
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Stack>
  );
}

export default PaymentSuccess;
