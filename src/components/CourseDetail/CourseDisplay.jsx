import {
  Box,
  Button,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseLectures } from '../../redux/actions/course';
import Loader from '../Layout/Loader/Loader';

const CourseDisplay = ({ user }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const params = useParams();

  const { lectures, loading } = useSelector(state => state?.course);
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

  useEffect(() => {
    dispatch(getCourseLectures(params?.id));
  }, [params?.id, dispatch]);

  if (
    user?.role !== 'admin' &&
    (user?.subscription === undefined ||
      user?.subscription?.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }
  return (
    <Stack width={'100vw'} className="backcolor" py={['16', '16']} mt={'10vh'}>
      {loading ? (
        <Loader />
      ) : (
        <Grid
          gap={['auto', '8']}
          padding={'8'}
          minH={'90vh'}
          templateColumns={['1fr', '2fr 1fr']}
        >
          {lectures && lectures?.length > 0 ? (
            <>
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
                    src={lectures[lectureNumber]?.video?.url}
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
                  <Heading m={'2'} fontSize={'x-large'}>{`#${
                    lectureNumber + 1
                  } ${lectures[lectureNumber]?.title}`}</Heading>
                  <Text m={'2'}>{lectures[lectureNumber]?.description}</Text>
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
                    {courseDetails[0]?.courseTitle}
                  </Heading>
                  <Text
                    textAlign={'center'}
                  >{`by - ${courseDetails[0]?.creator}`}</Text>
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
                      <Text noOfLines={2}>{`#${index + 1} ${
                        item?.title
                      }`}</Text>
                    </Button>
                  ))}
                </VStack>
              </VStack>
            </>
          ) : (
            <Heading textAlign={'center'}>No Lectures in This Course</Heading>
          )}
        </Grid>
      )}
    </Stack>
  );
};

export default CourseDisplay;
