import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { buySubscription } from './../../redux/actions/user';
import { server } from '../../redux/store';
import axios from 'axios';
import { toast } from 'react-toastify';
import logo from '../../assets/images/logo.png';

const Subscriber = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');
  console.log('calling key', key);

  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );
  const { error: courseError } = useSelector(state => state.course);

  // subscribed handler
  const subscribedHandler = async () => {
    const {
      data: { key },
    } = await axios.get(`${server}/razorpaykey`, { withCredentials: true });
    setKey(key);
    console.log('subscribed handler called');
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: 'clearError' });
    }
    console.log('calling susbscription id', subscriptionId);
    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'LearnWiz',
          description:
            'Get access to all premium content in single subscription',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '9991463786',
          },
          notes: {
            address: 'Ferozepur Jhirka, Nuh, Haryana - 122104',
          },
          theme: {
            color: `var(--primary-btn-color)`,
          },
        };
        console.log('calling options before opening razorpay popup', options);

        const razor = new window.Razorpay(options);
        console.log('calling razorpay instance', razor);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    error,
    courseError,
    user.name,
    user.email,
    key,
    subscriptionId,
  ]);
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
            Subscribe For Premium Courses
          </Heading>
          <Text fontSize={'xl'}>
            like a course? you are just one step away from accessing it
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
          <VStack
            width={'full'}
            bg={'rgb(12,120,254)'}
            h={'30vh'}
            justifyContent={'center'}
            spacing={'6'}
            __css={{ clipPath: 'circle(30vh at 50% 0%)' }} // Modified clip path
          >
            <Heading textAlign={'center'}>Premium Plan</Heading>
            <Text
              color={'white'}
              textAlign={'center'}
              fontWeight={'bold'}
              fontSize={'2xl'}
            >
              Pro Pack - ₹399
            </Text>
          </VStack>

          <VStack textAlign={'center'} spacing={'6'} p={'6'}>
            <Text>
              You are just one step away from beginning your skills journey{' '}
              <Text>
                Join pro Pack today and get access to all premium content
              </Text>
            </Text>

            <Heading size={'md'}>{`₹399 Only`}</Heading>
            <Box>
              <Heading
                textTransform={'uppercase'}
                size={'sm'}
              >{`100% refund at cancellation`}</Heading>
              <Text fontSize={'xs'}>*Terms & Condition Apply</Text>
            </Box>
            <Link to={''}>
              <Button
                flex={1}
                size={'md'}
                colorScheme="messenger"
                onClick={subscribedHandler}
                isLoading={loading}
              >
                Subscribe Now
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Stack>
  );
};

export default Subscriber;
