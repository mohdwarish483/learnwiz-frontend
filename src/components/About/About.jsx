import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import homevideo from '../../assets/videos/intro2.mp4';
import myprofile from '../../assets/images/myprofile.png';
import { Link } from 'react-router-dom';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition';

// founder card

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '4']}>
      <VStack>
        <Avatar
          src={
            'https://www.lovesove.com/wp-content/uploads/2021/06/Sad-Dp-Black-Lovesove.jpg'
          }
          boxSize={['36', '40']}
        />
        <Text opacity={'0.7'}>Co-Founder</Text>
        <Heading size={['sm', 'sm']} children={'Mohd Warish'} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Text px={8}>
          Hi, I'm Warish! I'm an undergraduate student with a passion for coding
          and software development. I'm currently pursuing a degree in computer
          science and have been coding for over 2 years now. I'm proficient in
          several programming languages, including Python, Java script and C++.
          At LearnWiz we provide quality content at affordable prices.
        </Text>
      </VStack>
    </Stack>
  );
};

// video box component

const VideoPlayer = () => (
  <Box width={'100%'} boxShadow={'lg'} borderRadius={'12px'}>
    <video
      autoPlay
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={homevideo}
      loop
    ></video>
  </Box>
);

// Terms component

const TandC = ({ termsAndCondition }) => (
  <Box mt={'12'}>
    <Heading size={'md'}>Terms and Condition</Heading>
    <Box h={'sm'} py={'5'} overflowY={'scroll'}>
      <Text
        letterSpacing={'widest'}
        fontFamily={'heading'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
    </Box>
    <Heading my={'4'} size={'xs'}>
      Refund will be given if cancelled within 7 days of subscription
    </Heading>
  </Box>
);

const About = () => {
  return (
    <Stack className="backcolor" mt={'10vh'}>
      <Container
        maxW={'container.lg'}
        p={'16'}
        px={['0', '16']}
        boxShadow={'lg'}
        gap={8}
        my={'16'}
        display={'flex'}
        flexDirection={'column'}
      >
        <Heading textAlign={['center']}>About Us</Heading>
        <Founder />
        <Stack
          flexDirection={['column', 'row']}
          justifyContent={['center', 'flex-start']}
          alignItems={'center'}
          pb={'6'}
          gap={'12'}
        >
          <Text
            px={['8', '0']}
            fontFamily={'cursive'}
            textAlign={['center', 'left']}
          >
            LearnWiz is a video streaming platform with premium courses from top
            experts all over the world that are available for premium
            subscribers. We promise to deliver high Quality courses and teach
            you from beginners to advance levels of concepts.
          </Text>
          <Link to={'/subscribe'} _hover={{ variant: 'solid' }}>
            {' '}
            <Button
              size={'md'}
              width={'200px'}
              colorScheme="messenger"
              variant={'outline'}
              transition={'0.6s cubic-bezier(0, 0, 0.5, 1)'}
              _hover={{
                backgroundColor: 'var(--primary-btn-color)',
                color: 'white',
                variant: 'none',
              }}
            >
              Checkout Our Plans
            </Button>
          </Link>
        </Stack>
        <Flex
          width={'100%'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <VideoPlayer />
          <TandC termsAndCondition={termsAndCondition} />
          <HStack width={'full'}>
            <RiSecurePaymentFill />
            <Heading
              children={'Payment is secured by RazorPay'}
              textTransform={'uppercase'}
              fontFamily={'sans-serif'}
              size={'xs'}
            />
          </HStack>
        </Flex>
      </Container>
    </Stack>
  );
};

export default About;
