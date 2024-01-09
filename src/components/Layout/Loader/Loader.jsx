import { Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
const Loader = () => {
  return (
    <VStack h="100vh" justifyContent={'center'} alignItems={'center'}>
      <Stack style={{ transform: 'scale(2)' }}>
        <InfinitySpin width="200" color="rgb(12,120,254)" />
      </Stack>
    </VStack>
  );
};

export default Loader;
