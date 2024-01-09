import {
  Box,
  Button,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import homevideo from '../../assets/videos/intro2.mp4';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CourseDisplay = () => {
  const location = useLocation();
  //right click prevention

  window.addEventListener('contextmenu', e => {
    if (location.pathname === '/course/:id') {
      e.preventDefault();
    }
  });

  // course details
  const courseDetails = [
    {
      courseTitle: 'learnwiz tutorial',
      creator: 'mohd warish',
    },
  ];

  const [lectureNumber, setLectureNumber] = useState(0);
  // lectures

  const lectures = [
    {
      _id: 's1',
      title: 'sample1',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's2',
      title: 'sample2',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's3',
      title: 'sample3',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's4',
      title: 'sample4',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's5',
      title: 'sample5',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's6',
      title: 'sample6',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's7',
      title: 'sample7',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's8',
      title: 'sample8',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's9',
      title: 'samp9',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's10',
      title: 'samp10',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's11',
      title: 'sampl1',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's12',
      title: 'sampl2',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's13',
      title: 'sampl3',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's14',
      title: 'sampl4',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's15',
      title: 'sampl5',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's16',
      title: 'sampl6',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's17',
      title: 'sampl7',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's18',
      title: 'sampl8',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's19',
      title: 'sampl9',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's20',
      title: 'samp20',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's21',
      title: 'samp21',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's22',
      title: 'samp22',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's23',
      title: 'samp23',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's24',
      title: 'samp24',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's25',
      title: 'samp25',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's26',
      title: 'sampl26',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's27',
      title: 'samp27',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
    {
      _id: 's28',
      title: 'samp28',
      description: 'assd  ahjjjj  sakjkslls kllks',
      video: {
        url: 'sadfhjjk',
      },
    },
  ];

  return (
    <Stack width={'100vw'} className="backcolor" py={['16', '16']} mt={'10vh'}>
      <Grid
        gap={['auto', '8']}
        padding={'8'}
        minH={'90vh'}
        templateColumns={['1fr', '2fr 1fr']}
      >
        <Box width={'100%'}>
          <Box
            border={'1px'}
            borderColor={'blackAlpha.300'}
            borderRadius={'xl'}
          >
            <video
              autoPlay={false}
              muted
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              src={homevideo}
            ></video>
          </Box>
          <VStack
            border={'1px'}
            borderColor={'blackAlpha.300'}
            borderRadius={'lg'}
            gap={'0px'}
            alignItems={'left'}
            my={'4'}
            backgroundColor={'white'}
          >
            <Heading m={'2'} fontSize={'x-large'}>{`#${lectureNumber + 1} ${
              lectures[lectureNumber].title
            }`}</Heading>
            <Text m={'2'}>{lectures[lectureNumber].description}</Text>
          </VStack>
        </Box>

        {/* side course detail card */}

        <VStack
          maxH={'90vh'}
          border={'1px solid'}
          borderColor={'blackAlpha.300'}
          borderRadius={'lg'}
          gap={'0'}
        >
          <Box
            width={'full'}
            bg={'var(--primary-btn-color)'}
            p={4}
            color={'white'}
            css={{ borderRadius: '6px 6px 0px 0px' }}
          >
            <Heading textAlign={'center'} fontSize={'lg'}>
              {' '}
              {courseDetails[0].courseTitle}
            </Heading>
            <Text
              textAlign={'center'}
            >{`by - ${courseDetails[0].creator}`}</Text>
          </Box>
          <VStack
            width={'100%'}
            overflowY={'auto'}
            spacing={'0'}
            borderRadius={'0 0 8px 8px'}
            backgroundColor={'white'}
          >
            {lectures.map((item, index) => (
              <Button
                width={'100%'}
                border={'hidden'}
                onClick={() => setLectureNumber(index)}
                key={item._id}
                variant={'ghost'}
                colorScheme="gray"
                style={{
                  padding: '1rem',
                  textAlign: 'center',
                }}
              >
                <Text noOfLines={2}>{`#${index + 1} ${item.title}`}</Text>
              </Button>
            ))}
          </VStack>
        </VStack>
      </Grid>
    </Stack>
  );
};

export default CourseDisplay;
