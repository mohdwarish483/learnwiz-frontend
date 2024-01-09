import React from 'react';
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react';
import {RiPlayListAddLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CategoryCard = ({ bgm, children, items }) => (
  <Card
    backgroundColor={'rgba(255,255,255,255)'}
    borderRadius={'12'}
    className="landing-page-details"
  >
    <CardHeader
      position={'relative'}
      minH={'180px'}
      maxH={'240px'}
      display={'flex'}
      objectFit={'contain'}
      borderTopRadius={'22'}
      alignItems={'center'}
      justifyContent={'center'}
      background={`url(${bgm})`}
      backgroundSize="cover"
      backgroundPosition="center"
      border={['8px solid white', '12px solid white']}
      style={{ borderBottom: '0px solid white' }}
      _before={{
        content: `''`,
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: '0.2',
        borderTopRadius: '22',
      }}
    >
      <Heading
        textAlign={'center'}
        fontSize={['30px', '40px']}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        color="white"
        zIndex={'overlay'}
      >
        {children}
      </Heading>
    </CardHeader>
    <CardBody p={['2', '5']}>
      <HStack
        width={'100%'}
        justifyContent={'center'}
        alignItems="center"
        gap={['4']}
      >
        <VStack gap={0}>
          <Text fontWeight="semibold" fontSize={['sm']}>
            Items
          </Text>
          <Text fontSize={'sm'}>144</Text>
        </VStack>
        <Link to={'/allcourses'}>
          {' '}
          <Button
            flex={1}
            variant="outline"
            border={'1px solid grey'}
            size={['xs', 'md']}
            leftIcon={<RiPlayListAddLine></RiPlayListAddLine>}
          >
            Explore Course Videos
          </Button>
        </Link>
      </HStack>
    </CardBody>
  </Card>
);
export default CategoryCard;
