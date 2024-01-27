import React from 'react';
import { css } from '@emotion/react'; // css in javascript library
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiGitPullRequestLine,
  RiMenu5Line,
  RiFileList3Line,
  RiHome8Line,
  RiProfileLine,
  RiUserLine,
  RiLogoutBoxLine,
  RiPhoneLine,
} from 'react-icons/ri';
import { Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user';

// using css template literal from css-in-javascript library
const buttonStyles = css`
  width: auto;
  border: 1px solid transparent;
  &:hover {
    background-color: 'blackAlpha.900';
    border: 1px solid rgb(12, 120, 254);
    transition: border 1s ease-in-out, background-color 1s ease-in-out;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.175);
  }
`;

const LinkComponent = ({ onClick, icon, title = 'home', url = '/' }) => (
  <Link to={url} onClick={onClick}>
    <Button variant="ghost" css={buttonStyles}>
      <HStack justifyContent={'space-around'}>
        {icon}
        <span>{title}</span>
      </HStack>
    </Button>
  </Link>
);

const Header = ({ isAuthenticated = false, user }) => {
  const dispatch = useDispatch();
  const { onClose, onOpen, isOpen } = useDisclosure();
  const logoutHandler = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <HStack
      position={'fixed'}
      top={'0px'}
      left={'0px'}
      width={'100vw'}
      height={'10vh'}
      alignItems={'center'}
      px={['0', '0', '32']}
      py={'2'}
      zIndex={'10000000'}
      bg={'white'}
      justifyContent={['center', 'center', 'space-between']}
      boxShadow={
        '0px 1px 10px -5px rgb(12 120 250 / 48%), 0px 5px 5px -5px rgb(12 120 250 / 43%)'
      }
    >
      <Link to={'/'} width={'100%'}>
        <Heading color={'rgb(12,109,254)'}>
          Learn
          <Text display={'inline-flex'} color={'black'}>
            Wiz
          </Text>
        </Heading>
      </Link>
      <ColorModeSwitcher zIndex={'overlay'} />
      <Button
        onClick={isOpen ? onClose : onOpen}
        colorScheme={'messenger'}
        rounded={'full'}
        h={['44px', '44px', '48px']}
        width={['44px', '44px', '48px']}
        position={'fixed'}
        left={['5', '8']}
        zIndex={'overlay'}
      >
        <RiMenu5Line></RiMenu5Line>
      </Button>
      <HStack spacing={'4'} display={['none', 'none', 'flex']}>
        {isAuthenticated ? (
          <>
            <Button
              onClick={logoutHandler}
              variant={'solid'}
              colorScheme="messenger"
              className="shady"
              rounded={'full'}
              width={'120px'}
            >
              <HStack justifyContent={'space-around'}>
                <RiLogoutBoxLine />
                <span>Logout</span>
              </HStack>
            </Button>
          </>
        ) : (
          <>
            <Link to={'/login'}>
              <Button
                className="shady"
                colorScheme="messenger"
                width={'120px'}
                onClick={onClose}
                rounded={'full'}
              >
                SignIn
              </Button>
            </Link>{' '}
            <Link to={'/register'}>
              <Button
                className="shady"
                colorScheme="messenger"
                width={'120px'}
                onClick={onClose}
                rounded={'full'}
              >
                SignUp
              </Button>
            </Link>
          </>
        )}
        ;
      </HStack>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(6px)'} />
        <DrawerContent>
          <DrawerBody>
            <VStack spacing={4} alignItems={'flex-start'} py={'14vh'}>
              <LinkComponent
                onClick={onClose}
                icon={<RiHome8Line />}
                url="/"
                title="Home"
              />
              {user && user.role === 'admin' && (
                <LinkComponent
                  onClick={onClose}
                  icon={<RiDashboardLine />}
                  url="/admin/dashboard"
                  title="Dashboard"
                />
              )}
              {isAuthenticated && (
                <LinkComponent
                  onClick={onClose}
                  icon={<RiUserLine />}
                  url="/profile"
                  title="Profile"
                />
              )}
              <LinkComponent
                onClick={onClose}
                icon={<RiFileList3Line />}
                url="/allcourses"
                title="All Courses"
              />
              <LinkComponent
                onClick={onClose}
                icon={<RiGitPullRequestLine />}
                url="/request"
                title="Request A Course"
              />
              <LinkComponent
                onClick={onClose}
                icon={<RiPhoneLine />}
                url="/contact"
                title="Contact Us"
              />
              <LinkComponent
                onClick={onClose}
                icon={<Icon as={RiProfileLine} />}
                url="/about"
                title="About Us"
              />
              <HStack mt={'2'}>
                {isAuthenticated ? (
                  <>
                    <Button
                      onClick={logoutHandler}
                      variant={'solid'}
                      colorScheme="messenger"
                      css={buttonStyles}
                      width={['100px', '110px']}
                    >
                      {' '}
                      <HStack justifyContent={'space-around'}>
                        <RiLogoutBoxLine />
                        <span>Logout</span>
                      </HStack>
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to={'/login'}>
                      {' '}
                      <Button
                        className="shady"
                        onClick={onClose}
                        colorScheme="messenger"
                        width={['100px', '110px']}
                      >
                        SignIn
                      </Button>
                    </Link>{' '}
                    <p>OR</p>
                    <Link to={'/register'}>
                      {' '}
                      <Button
                        className="shady"
                        onClick={onClose}
                        colorScheme="messenger"
                        width={['100px', '110px']}
                      >
                        SignUp
                      </Button>
                    </Link>
                  </>
                )}
                ;
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export { Header, buttonStyles };
