/* eslint-disable no-unused-vars */
import React from 'react';
import { VStack, chakra } from '@chakra-ui/react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import {
  Box,
  Stack,
  HStack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';

// list header component

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'600'} fontSize={'lg'} mb={2} color={'white'}>
      {children}
    </Text>
  );
};

// footer

const Footer = () => {
  return (
    <Box
      minH={'10vh'}
      width={'100vw'}
      color={'white'}
      h={'100%'}
    >
      <Stack
        bg={'blackAlpha.900'}
        py={'24'}
        pt={'48'}
        clipPath={'polygon(0% 80px,100% 0%,100% 100% ,0% 100%)'}
        width={'100%'}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={16}
          justifyContent={'center'}
          gridTemplateColumns={{
            base: '1fr',
            sm: '1fr 1fr',
            md: '2fr 1fr 1fr 1fr',
          }}
          px={['5', '8', '32']}
        >
          <VStack justifyContent={'space-between'} alignItems={'flex-start'}>
            <Heading>
              Learn
              <Text display={'inline-flex'} color={'rgb(12,120,254)'}>
                Wiz
              </Text>
            </Heading>
            <Text fontWeight={'600'} fontSize={'lg'} mb={2} color={'white'}>
              your learning partner
            </Text>
            <Text color={'whiteAlpha.700'}>
              A platform for enhancing the learning speed with innovative and
              expert-led courses
            </Text>
          </VStack>
          <VStack align={'flex-start'} color={'whiteAlpha.700'}>
            <ListHeader>Profile</ListHeader>
            <Link href={'/about'}>About Us</Link>
            <Link href={'/admin/dashboard'}>DashBoard</Link>
            <Link href={'/profile'}>My Account</Link>
          </VStack>

          <VStack align={'flex-start'} color={'whiteAlpha.700'}>
            <ListHeader>Product</ListHeader>
            <Link href={'/subscribe'}>Our Prices</Link>
            <Link href={'/allcourses'}>All Course</Link>
            <Link href={'/request'}>Request A Course</Link>
          </VStack>

          <VStack align={'flex-start'} color={'whiteAlpha.700'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'/privacypolicy'}>Privacy Policy</Link>
            <Link href={'/termscondition'}>Terms of Service</Link>
            <Link href={'/refundpolicy'}>Refund and Other</Link>
          </VStack>
        </SimpleGrid>
      </Stack>

      <Box
        bg={'blackAlpha.900'}
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        width={'100%'}
        height={'100%'}
      >
        <Stack
          py={4}
          direction={{ base: 'column', md: 'row' }}
          px={['16', '32']}
          spacing={4}
          justifyContent={['center', 'space-around']}
          alignItems={'center'}
        >
          <Text>© 2023 LearnFlix. All Rights Reserved</Text>
          <HStack
            color={'white'}
            fontSize={'40'}
            spacing={['2', '10']}
            justifyContent={'center'}
          >
            {/* rel = noreferrer instruct the browser to hide the Referer header when following the link. This can help protect user privacy by preventing the linked site from accessing the referring URL */}
            <a rel="noreferrer" href="http://youtube.com" target={'_blank'}>
              <TiSocialYoutubeCircular />{' '}
            </a>
            <a rel="noreferrer" href="http://instagram.com" target={'_blank'}>
              <TiSocialInstagramCircular />
            </a>
            <a rel="noreferrer" href="http://github.com" target={'_blank'}>
              <DiGithub />
            </a>{' '}
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
