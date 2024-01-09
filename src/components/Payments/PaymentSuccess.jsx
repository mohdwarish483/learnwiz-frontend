import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleLine } from 'react-icons/ri';
function PaymentSuccess() {
  return (
    // <Stack className="backcolor" height={'100vh'}>
    //   <Container height={'90vh'} p={16}>
    //     <Heading my={8} textAlign={'center'}>
    //       You Got Pro Pack
    //     </Heading>
    //     <VStack
    //       pb={'8'}
    //       backgroundColor={'white'}
    //       boxShadow={'lg'}
    //       alignItems={'center'}
    //       borderRadius={'lg'}
    //     >
    //       <Box
    //         p={4}
    //         css={{ borderRadius: '8px 8px 0 0' }}
    //         width={'full'}
    //         bg={'green'}
    //       >
    //         <Text color={'white'} textAlign={'center'} fontWeight={'bold'} fontSize={'xl'}>
    //           Payment Successful
    //         </Text>
    //       </Box>
    //       <Box p={4}>
    //         <VStack textAlign={'center'} px={'8'} spacing={'4'}>
    // <Text>
    //   Congratulations! you have became a pro member. Now You have
    //   access to premium content
    // </Text>
    // <Heading size={'4xl'}>
    //   <RiCheckboxCircleLine color="green" />
    // </Heading>
    // <Heading size={'xs'}>
    //   {' '}
    //   Reference ID : ldfannnnnsLKSLSAl : fndsxcm
    // </Heading>
    // <Link to={'/profile'} className="shady" my={'4'}>
    //   <Button flex={1} size={'md'} colorScheme="messenger">
    //     Go to Profile
    //   </Button>
    // </Link>
    //         </VStack>
    //       </Box>
    //     </VStack>
    //   </Container>
    // </Stack>
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
        >
          <VStack
            width={'full'}
            bgColor={'whatsapp.600'}
            h={'30vh'}
            justifyContent={'center'}
            spacing={'6'}
            __css={{ clipPath: 'circle(30vh at 50% 0%)' }} // Modified clip path
          >
            <Heading textAlign={'center'} color={'white'}>
              Success
            </Heading>
            <Text
              color={'white'}
              textAlign={'center'}
              fontWeight={'bold'}
              fontSize={'2xl'}
            ></Text>
          </VStack>

          <VStack textAlign={'center'} spacing={'6'} p={'6'}>
            <Text>
              Congratulations! you have became a pro member. Now You have access
              to premium content
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleLine color="green" />
            </Heading>
            <Heading size={'xs'}>
              {' '}
              Reference ID : ldfannnnnsLKSLSAl : fndsxcm
            </Heading>
            <Link to={'/profile'} className="shady" my={'4'}>
              <Button flex={1} size={'md'} colorScheme={'whatsapp'}>
                Go to Profile
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Stack>
  );
}

export default PaymentSuccess;
