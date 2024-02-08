import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileCss } from '../Auth/Register';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromPlaylist,
  updateProfilePicture,
} from '../../redux/actions/profile';
import { cancelSubscription, loadUser } from '../../redux/actions/user';
import { toast } from 'react-toastify';

// modal for change photo function
function ChangePhotoBox({
  isOpen,
  onClose,
  changeImageSubmitHandler,
  loading,
}) {
  //state management
  const [imagePreview, setImagePreview] = useState('');
  const [image, setImage] = useState('');

  // image handler
  const fileHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };

  // close handler

  const closeHandler = () => {
    onClose();
    setImage('');
    setImagePreview('');
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent alignItems={'center'} p={'2'}>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'6'}>
                {imagePreview && (
                  <Avatar src={imagePreview} boxSize={'48'}></Avatar>
                )}
                <Input
                  type="file"
                  css={fileCss}
                  onChange={fileHandler}
                  isRequired={'required'}
                />
                <Button
                  isLoading={loading}
                  type="submit"
                  colorScheme="messenger"
                  width={'106%'}
                >
                  Chnage Photo Now
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter p={'6'}>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
// profile component

const Profile = ({ user }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, message, error } = useSelector(state => state.profile);
  const {
    loading: subscriptionLoading,
    message: subscriptionMessage,
    error: subscriptionError,
  } = useSelector(state => state.subscription);

  // changeImageSubmitHandler
  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    const MyFormData = new FormData();
    MyFormData.append('file', image);
    await dispatch(updateProfilePicture(MyFormData));
    dispatch(loadUser());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (subscriptionError) {
      toast.error(subscriptionError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionMessage) {
      toast.success(subscriptionMessage);
      dispatch({ type: 'clearMessage' });
      dispatch(loadUser());
    }
  }, [
    dispatch,
    error,
    message,
    navigate,
    subscriptionError,
    subscriptionMessage,
  ]);

  // cancel handler

  const cancelSubscriptionHandler = async () => {
    dispatch(cancelSubscription());
  };

  // playlist handler

  const removeFromPlaylistHandler = async id => {
    console.log(id);
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };

  return (
    <Stack className="backcolor" width={'100vw'} mt={'10vh'}>
      <Container maxW={'container.lg'} minH={'95vh'} py={'8'}>
        <Heading m={'8'} textTransform={'uppercase'}>
          Profile
        </Heading>
        <Stack
          justifyContent={'flex-start'}
          direction={['column', 'row']}
          alignItems={'center'}
          spacing={['8', '16']}
          padding={'8'}
        >
          <VStack>
            <Avatar boxSize={'48'} src={user.avatar.url}></Avatar>
            <Button
              size={'sm'}
              colorScheme="messenger"
              onClick={onOpen}
              className="shady"
              rounded={'full'}
            >
              Change Photo
            </Button>
          </VStack>
          <VStack alignItems={'flex-start'}>
            <HStack>
              <Text fontWeight={'bold'}>Name</Text>
              <Text>{user.name}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={'bold'}>Email</Text>
              <Text>{user.email}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={'bold'}>createdAt</Text>
              <Text>{user.createdAt.split('T')[0]}</Text>
            </HStack>
            {user.role !== 'admin' && (
              <HStack>
                <Text fontWeight={'bold'}>Subscription</Text>
                {user.subscription && user.subscription.status === 'active' ? (
                  <Button
                    size={'sm'}
                    flex={1}
                    colorScheme={'red'}
                    rounded={'full'}
                    isLoading={subscriptionLoading}
                    className="shady-secondary"
                    onClick={cancelSubscriptionHandler}
                  >
                    Cancel Subscription
                  </Button>
                ) : (
                  <Link to={'/subscribe'}>
                    <Button
                      size={'sm'}
                      flex={1}
                      colorScheme="messenger"
                      className="shady-secondary"
                      rounded={'full'}
                    >
                      Subscribe Now
                    </Button>
                  </Link>
                )}
              </HStack>
            )}

            <Stack direction={['column', 'row']} alignItems={'center'}>
              <Link to={'/updateprofile'}>
                <Button
                  size={'sm'}
                  flex={1}
                  border={'1px solid rgb(12,120,254)'}
                  className="shady-secondary"
                  rounded={'full'}
                >
                  Update Profile
                </Button>
              </Link>
              <Link to={'/changepassword'}>
                <Button
                  size={'sm'}
                  flex={1}
                  border={'1px solid rgb(12,120,254)'}
                  className="shady-secondary"
                  rounded={'full'}
                >
                  Change Password
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Stack>
        <Divider border={'1px solid rgb(200,200,200)'} marginY={'12'} />
        <Heading size={'md'}>My Playlist</Heading>
        {user.playlist.length > 0 ? (
          <HStack
            width={'100%'}
            overflowX={'auto'}
            paddingY={8}
            spacing={'8'}
            css={{ '&::-webkit-scrollbar': { display: 'none' } }}
          >
            {user.playlist.map((item, index) => (
              <Card
                minWidth={'240px'}
                gap={'0'}
                backgroundColor={'rgba(255,255,255,255)'}
                border={'1px solid'}
                borderColor={'blackAlpha.300'}
                borderRadius={'lg'}
                padding={'2'}
              >
                <CardHeader
                  minH={'180px'}
                  borderTopRadius={'lg'}
                  objectFit={'contain'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  background={`url(${item.poster})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                />

                <CardBody pt={'2'}>
                  <VStack width={'100%'}>
                    <Text noOfLines={1} fontWeight={'bold'}>
                      {item.courseTitle}
                    </Text>

                    <HStack justifyContent={'space-around'} width={'100%'}>
                      <Link to={`/course/${item.course}`}>
                        <Button flex={1} size={'sm'} colorScheme="messenger">
                          Watch Now
                        </Button>
                      </Link>
                      <Button
                        size={'sm'}
                        isLoading={loading}
                        onClick={() => removeFromPlaylistHandler(item.course)}
                      >
                        <RiDeleteBin7Fill color="red" />
                      </Button>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </HStack>
        ) : (
          <Text alignSelf={'center'} marginTop={'4'}>
            There is no saved playlist
          </Text>
        )}

        <ChangePhotoBox
          isOpen={isOpen}
          onClose={onClose}
          changeImageSubmitHandler={changeImageSubmitHandler}
          loading={loading}
        />
      </Container>
    </Stack>
  );
};
export default Profile;
