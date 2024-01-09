import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  Flex,
  Avatar,
  Box,
  IconButton,
  StepSeparator,
} from '@chakra-ui/react';
import '.././Home/home.css';
import { Rating } from 'react-simple-star-rating';
import { RiChatNewLine, RiPlayListAddLine } from 'react-icons/ri';
import React, { useEffect, useState } from 'react';
import web from '../../assets/images/webdev.jpg';
import { Link } from 'react-router-dom';
import { buttonStyles } from '../Layout/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/course';
import { toast } from 'react-toastify';
import { Line } from 'react-chartjs-2';
import { SiBreaker } from 'react-icons/si';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

// courseCard

const CourseCard = ({
  views,
  title,
  imageSrc,
  id,
  playlistHandler,
  creator,
  description,
  lectureCount,
  price,
  avtar,
  loading,
}) => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = rate => {
    setRating(rate);
  };

  return (
    <Card width={['xxs', 'xs']} className="course" mb={0} boxShadow={'xl'}>
      <CardHeader p={0}>
        <Image
          borderTopRadius="2%"
          objectFit="cover"
          src={imageSrc}
          alt="Chakra UI"
        />
      </CardHeader>
      <CardBody p={6} pt={2}>
        <VStack alignItems={'flex-start'}>
          <Stack>
            <Heading
              textAlign={'left'}
              size="sm"
              maxW="200px"
              fontFamily="sans-serif"
              noOfLines={3}
            >
              {title}
            </Heading>
            <Text noOfLines={2} display={'flex'} justifyContent={'flex-start'}>
              {description}
            </Text>
          </Stack>
          <Flex width={'100%'} justifyContent={'space-between'}>
            <Flex
              flex="1"
              gap={4}
              justifyContent={'flex-start'}
              alignItems="center"
              flexWrap="wrap"
            >
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Box>
                <Heading size="sm">Creator</Heading>
                <Heading fontFamily="serif" size={'sm'}>
                  {creator}
                </Heading>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <Heading size="sm">
                  <Rating
                    textAlign={'center'}
                    flexDirection="row"
                    onClick={handleRating}
                    ratingValue={rating}
                    size={18}
                    label
                    transition
                    fillColor="orange"
                    emptyColor="gray"
                    className="foo"
                  />
                </Heading>
                <Text textAlign={'center'} fontWeight="bold">
                  Rating - {rating}
                </Text>
              </Box>
            </Flex>
          </Flex>

          <HStack
            width="100%"
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <Heading textTransform="uppercase" textAlign="center" size="xs">
              {`Lectures - ${lectureCount}`}
            </Heading>
            <Heading textTransform="uppercase" textAlign="center" size="xs">
              views - {views}
            </Heading>
          </HStack>
        </VStack>
      </CardBody>

      <CardFooter p={6} pt={0} alignItems={'center'}>
        <HStack width={'100%'} justifyContent={'space-between'}>
          <Link to={`/course/${id}`}>
            <Button
              className="shady-secondary"
              flex={1}
              size={'sm'}
              colorScheme="messenger"
            >
              Watch Now
            </Button>
          </Link>
          <Button
            css={{
              // buttonStyles,
              border: '1px solid',
            }}
            size={'sm'}
            onClick={() => playlistHandler(id)}
            maxW={'max-content'}
            flex={1}
            isLoading={loading}
          >
            <HStack fontSize={'md'}>
              <RiPlayListAddLine /> <span>Playlist</span>
            </HStack>
          </Button>

          <Text fontSize={'xl'} fontWeight={'semibold'}>
            ₹{price}
          </Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

// courses main page
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const { loading, courses, error, message } = useSelector(
    state => state.course
  );

  // playlist handler
  const addToplaylistHandler = async id => {
    console.log('added to palylist', id);
    await dispatch(addToPlaylist(id));
    dispatch(loadUser());
  };
  const categoryArray = [
    'Web Development',
    'Artificial Intelligent',
    'Machine Learning',
    'Javascript',
    'React',
    'App development',
    'Marketing Course',
    'DSA',
  ];

  console.log(error);
  console.log(message);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }

    dispatch(getAllCourses(category, keyword));
  }, [category, keyword, error, message, dispatch]);
  return (
    <>
      <Stack className="backcolor" mt={'10vh'}>
        <Container
          minHeight={'95vh'}
          maxW={'container.lg'}
          paddingY={'8'}
          className="backcolor"
        >
          <Heading m={'8'}>All Courses</Heading>
          <Input
            border={'1px solid rgba(0,0,0,0.175)'}
            shadow={'0px 0px 6px rgba(100,100,100,0.5)'}
            type="text"
            value={keyword}
            backgroundColor={'white'}
            onChange={e => setKeyword(e.target.value)}
            placeholder="Search a Course..."
          />
          <HStack
            overflowX={'auto'}
            paddingY={8}
            css={{ '&::-webkit-scrollbar': { display: 'none' } }}
          >
            {categoryArray.map((item, index) => (
              <Button
                colorScheme="messenger"
                key={index}
                onClick={() => setCategory(item)}
                minW={60}
              >
                <Text children={item} />
              </Button>
            ))}
          </HStack>
          <Stack
            direction={['column', 'row']}
            flexWrap={'wrap'}
            justifyContent={['flex-start', 'space-evenly']}
            alignItems={['center', 'flex-start']}
          >
            {courses.length > 0 ? (
              courses.map(item => (
                <CourseCard
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  imageSrc={item.poster.url}
                  id={item._id}
                  creator={item.createdBy}
                  lectureCount={item.numOfVideos}
                  views={item.views}
                  playlistHandler={addToplaylistHandler}
                  loading={loading}
                  price={299}
                />
              ))
            ) : (
              <Heading opacity={'0.8'} mt={'8'}>
                No Course Found Matching With Your Search
              </Heading>
            )}
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Courses;
