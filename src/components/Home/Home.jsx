import React from 'react';
import {
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Box,
  HStack,
  Grid,
  SimpleGrid,
  StackDivider,
  Divider,
  MenuDivider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import hero from '../../assets/images/online study2.png';
import web from '../../assets/images/webdev.jpg';
import bg from '../../assets/images/blob-haikei 3.svg';
import flexible from '../../assets/images/laptop study.png';
import project from '../../assets/images/css coding.png';
import money from '../../assets/images/money-transfer-monochromatic-7d771.png';

import ai from '../../assets/images/ai.jpg';
import machine from '../../assets/images/machine2.jpg';
import dsa from '../../assets/images/dsa.jpg';
import app from '../../assets/images/app2.jpg';
import react from '../../assets/images/reactjs.jpg';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import './home.css';
import homevideo from '../../assets/videos/intro2.mp4';
import CategoryCard from '../Courses/CategoryCard.jsx';

const Home = () => {
  const cardCourses = [
    {
      bgm: web,
      children: 'Web Development',
    },
    {
      bgm: ai,
      children: 'Artificial Intelligent',
    },
    {
      bgm: machine,
      children: 'Machine Learning',
    },
    {
      bgm: app,
      children: 'App Development',
    },
    {
      bgm: react,
      children: 'React Js',
    },
    {
      bgm: dsa,
      children: 'Data Structure & Algo',
    },
  ];

  return (
    <Box
      className="container"
      display="flex"
      flexDirection="column"
      width="100vw"
      // paddingTop={'30vh'}
      mt={'10vh'}
      // background={'rgb(12,254,46)'}
      // border={'4px solid blue'}
    >
      <VStack
        width={'100%'}
        minH={'90vh'}
        position={'relative'}
        alignItems={'center'}
        m={'0'}
        p={'0'}
        className="landing-page"
        justifyContent={'center'}
        spacing={'0'}
        bgColor={'white'}
        // border={'4px solid red'}
        backgroundImage={bg}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
      >
        {/* TagLine box */}
        <Grid
          templateColumns={{
            sm: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr',
          }}
          // className="tagline-box"
          width={'100%'}
          gap={['0', '0', '8']}
          px={['5', '8']}
          pb={'16'}
          // border={'4px solid blue'}
          height={['auto', 'auto', 'auto']}
        >
          <VStack
            alignItems={['center', 'center', 'flex-start']}
            justifyContent={'center'}
            spacing={4}
            height={['100%', '100%']}
            px={['0', '8']}
            minWidth={'50%'}
            zIndex={'5'}
            order={['2', '2', '1']}
            // border={'4px solid black'}
          >
            <Heading textAlign={['center', 'left']} fontSize={['5xl', '7xl']}>
              LearnWiz
            </Heading>
            <Heading textAlign={['center', 'left']} color={'black'}>
              Enhance Your Learning Speed
            </Heading>
            <Text
              textAlign={['center', 'left']}
              fontFamily={'monospace'}
              fontWeight={'semibold'}
              fontSize={'lg'}
            >
              Unlock Your Potential Today With Innovative and Expert-led Courses
            </Text>
            <Link to={'/allcourses'}>
              {' '}
              <Button
                className="shady"
                colorScheme={'messenger'}
                rounded={'full'}
                size={'md'}
                width={'180px'}
              >
                Explore Now
              </Button>
            </Link>
          </VStack>
          {/* hero box */}
          <Box
            // className="hero-box"
            width={'100%'}
            py={'8'}
            display="flex"
            alignItems={'center'}
            justifyContent={'center'}
            order={['1', '1', '2']}
            // border={'4px solid yellow'}
          >
            <Image width={'100%'} src={hero} objectFit="contain" />
          </Box>
        </Grid>
      </VStack>
      <Stack
        width={'100%'}
        flexDirection={['column', 'column', 'row']}
        justifyContent={'space-evenly'}
        spacing={['8', '8', '16']}
        padding={['8', '16']}
        backgroundColor={'white'}
      >
        <VStack
          width={'100%'}
          borderRadius={'12'}
          padding={'8'}
          justifyContent={'center'}
          alignItems={'center'}
          className="landing-page-details"
          style={{ backgroundColor: 'var(--secondary-btn-color)' }}
        >
          <Heading fontSize={'2xl'}>250+</Heading>
          <Text>Students</Text>{' '}
        </VStack>
        <VStack
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
          className="landing-page-details"
          borderRadius={'12'}
          padding={'8'}
          style={{ backgroundColor: 'var(--secondary-btn-color)' }}
        >
          <Heading fontSize={'2xl'}>100+</Heading>
          <Text>Experts</Text>{' '}
        </VStack>
        <VStack
          justifyContent={'center'}
          alignItems={'center'}
          className="landing-page-details"
          width={['100%', '100%', '500%']}
          borderRadius={'12'}
          padding={'8'}
          style={{ backgroundColor: 'var(--primary-btn-color)' }}
          color={'white'}
        >
          <Heading fontSize={'2xl'}>500+</Heading>
          <Text>Courses</Text>{' '}
        </VStack>
      </Stack>
      <Stack
        width="100%"
        p={['5', '16']}
        flexDirection="column"
        spacing={4}
        className={'backcolor'}
        justifyContent={'center'}
      >
        {/* <Heading fontSize="xl">Top Categories ➤</Heading> */}
        <Heading textAlign={'center'}>
          Advance Your Career. Learn In-demand Skills.
        </Heading>
        <Text textAlign={'center'}>
          Upskill in web development, machine learning, dsa, business analytics
          and many more.
        </Text>
        <Stack spacing={'8'}>
          <Heading
            alignSelf={'center'}
            color={'var(--primary-btn-color)'}
            borderBottom={'2px solid'}
          >
            Skills-In-Demand
          </Heading>
          <SimpleGrid
            templateColumns="repeat(auto-fill, minmax(200px, 350px))"
            spacing={'4'}
            justifyContent="center"
          >
            {cardCourses.map((item, index) => (
              <CategoryCard
                key={index}
                bgm={item.bgm}
                children={item.children}
              />
            ))}
          </SimpleGrid>
          <Box textAlign={'center'} marginTop={'6'}>
            <Link to={'/allcourses'} _hover={{ variant: 'solid' }}>
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
                More Categories
              </Button>
            </Link>
          </Box>
        </Stack>
      </Stack>

      <Box
        height="auto"
        padding={6}
        bg={'rgb(12,120,254)'}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="space-evenly"
      >
        <Heading
          textAlign="center"
          fontFamily="body"
          color="white"
          children="OUR PARTNER"
        />
        <HStack
          width="100%"
          justifyContent="space-evenly"
          className="brands-banner"
          alignItems="center"
          mt="1rem"
          textAlign="center"
          fontSize="xl"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <Stack
        width="100%"
        p={['5', '16']}
        flexDirection="column"
        spacing={'6'}
        justifyContent={'center'}
        style={{ backgroundColor: 'var(--primary-background-color)' }}
      >
        {/* <Heading fontSize="xl">Top Categories ➤</Heading> */}
        <Heading textAlign={'center'}>Why Choose Us</Heading>
        <Text
          textAlign={'center'}
          color={'var(--primary-btn-color)'}
          fontSize={'2xl'}
        >
          Our Courses are...
        </Text>
        <Stack
          borderRadius={'24'}
          width={['100%', '100%']}
          padding={['5', '16']}
          marginTop={'6'}
          justifyContent={'center'}
          style={{ backgroundColor: 'var(--secondary-background-color)' }}
        >
          <Grid
            templateColumns={{
              sm: '1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr',
            }}
            // className="tagline-box"
            width={'100%'}
            gap={['0', '0', '8']}
            px={['5', '8']}
            // border={'4px solid blue'}
            height={['auto', 'auto', 'auto']}
          >
            <Box
              // className="hero-box"
              width={'100%'}
              py={'8'}
              display="flex"
              alignItems={'center'}
              justifyContent={'center'}
              order={['1', '1', '2']}
              // border={'4px solid yellow'}
            >
              <Image width={'60%'} src={flexible} objectFit="contain" />
            </Box>

            <VStack
              alignItems={['center', 'center', 'flex-start']}
              justifyContent={'center'}
              spacing={4}
              height={['100%', '100%']}
              px={['0', '8']}
              minWidth={'50%'}
              zIndex={'5'}
              order={['2', '2', '1']}
              // border={'4px solid black'}
            >
              <Heading textAlign={['center', 'left']} fontSize={['xl']}>
                ONLINE & FLEXIBLE—SO YOU CAN LEARN ANYTIME & ANYWHERE
              </Heading>
              <Text textAlign={['center', 'left']} fontSize={'lg'}>
                Our courses are all online and self-paced, meaning you can take
                them wherever and whenever it’s convenient for you. So whether
                you’re in your breakroom at work during lunch or it’s 9PM and
                you’ve just put your kids to bed, these courses were designed to
                seamlessly fit into your life.
              </Text>
            </VStack>
          </Grid>
        </Stack>
        <Stack
          borderRadius={'24'}
          width={['100%', '100%']}
          padding={['5', '16']}
          marginTop={'6'}
          justifyContent={'center'}
          style={{ backgroundColor: 'var(--secondary-background-color)' }}
        >
          <Grid
            templateColumns={{
              sm: '1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr',
            }}
            // className="tagline-box"
            width={'100%'}
            gap={['0', '0', '8']}
            px={['5', '8']}
            // border={'4px solid blue'}
            height={['auto', 'auto', 'auto']}
          >
            <Box
              // className="hero-box"
              width={'100%'}
              py={'8'}
              display="flex"
              alignItems={'center'}
              justifyContent={'center'}
              order={['2', '2', '1']}
              // border={'4px solid yellow'}
            >
              <Image width={'60%'} src={project} objectFit="contain" />
            </Box>

            <VStack
              alignItems={['center', 'center', 'flex-start']}
              justifyContent={'center'}
              spacing={4}
              height={['100%', '100%']}
              px={['0', '8']}
              minWidth={'50%'}
              zIndex={'5'}
              order={['1', '1', '2']}
              // border={'4px solid black'}
            >
              <Heading textAlign={['center', 'left']} fontSize={['xl']}>
                PROJECT-BASED—SO YOU CAN BUILD A BADASS PORTFOLIO
              </Heading>
              <Text textAlign={['center', 'left']} fontSize={'lg'}>
                Our expertly-designed courses are also project-based, meaning
                you won’t just learn theory. You’ll put the skills you’re
                learning into action right away by completing actual projects
                that you can add to your portfolio and show off to hiring
                managers.
              </Text>
            </VStack>
          </Grid>
        </Stack>
        <Stack
          borderRadius={'24'}
          width={['100%', '100%']}
          padding={['5', '16']}
          marginTop={'6'}
          justifyContent={'center'}
          style={{ backgroundColor: 'var(--secondary-background-color)' }}
        >
          <Grid
            templateColumns={{
              sm: '1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr',
            }}
            // className="tagline-box"
            width={'100%'}
            gap={['0', '0', '8']}
            px={['5', '8']}
            // border={'4px solid blue'}
            height={['auto', 'auto', 'auto']}
          >
            <Box
              // className="hero-box"
              width={'100%'}
              py={'8'}
              display="flex"
              alignItems={'center'}
              justifyContent={'center'}
              order={['1', '1', '2']}
              // border={'4px solid yellow'}
            >
              <Image width={'60%'} src={money} objectFit="contain" />
            </Box>

            <VStack
              alignItems={['center', 'center', 'flex-start']}
              justifyContent={'center'}
              spacing={4}
              height={['100%', '100%']}
              px={['0', '8']}
              minWidth={'50%'}
              zIndex={'5'}
              order={['2', '2', '1']}
              // border={'4px solid black'}
            >
              <Heading textAlign={['center', 'left']} fontSize={['xl']}>
                7-DAY MONEY BACK GUARANTEE
              </Heading>
              <Text textAlign={['center', 'left']} fontSize={'lg'}>
                We know changing careers is a big step, so we want to make sure
                that you feel comfortable investing in LearnWiz—and yourself! If
                you decide within 7 days of enrollment that LearnWiz or a career
                in tech is not for you, you can request a full refund.
              </Text>
            </VStack>
          </Grid>
        </Stack>
        <Stack
          borderRadius={'24'}
          width={['100%', '100%']}
          paddingX={['5', '16']}
          marginTop={'6'}
          justifyContent={'center'}
          style={{ backgroundColor: 'var(--secondary-background-color)' }}
        >
          <Grid
            templateColumns={{
              sm: '1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr',
            }}
            py={'16'}
            width={'100%'}
            gap={['0', '0', '8']}
            px={['5', '8']}
            height={['auto', 'auto', 'auto']}
          >
            <Box
              // className="hero-box"
              width={'100%'}
              py={'8'}
              display="flex"
              alignItems={'center'}
              justifyContent={'center'}
              order={['2', '2', '1']}
              // border={'4px solid yellow'}
            >
              <video
                autoPlay={false}
                controls
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                src={homevideo}
              ></video>
            </Box>

            <VStack
              alignItems={['center', 'center', 'flex-start']}
              justifyContent={'center'}
              spacing={4}
              height={['100%', '100%']}
              px={['0', '8']}
              minWidth={'50%'}
              zIndex={'5'}
              order={['1', '1', '2']}
              // border={'4px solid black'}
            >
              <Heading textAlign={['center', 'left']} color={'black'}>
                High Quality video and Premium Content
              </Heading>
              <Text
                textAlign={['center', 'left']}
                fontFamily={'monospace'}
                fontWeight={'semibold'}
                fontSize={'lg'}
              >
                Unlock Your Potential Today With Innovative and Expert-led
                Courses
              </Text>
              <Link to={'/allcourses'}>
                {' '}
                <Button
                  className="shady"
                  colorScheme={'messenger'}
                  rounded={'full'}
                  size={'md'}
                  width={'180px'}
                >
                  Explore Courses
                </Button>
              </Link>
            </VStack>
          </Grid>
        </Stack>
        <HStack></HStack>
      </Stack>
    </Box>
  );
};

export default Home;
