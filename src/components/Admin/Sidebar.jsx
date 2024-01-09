import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

// link button functional component

const LinkButton = ({ url, Icon, text, active }) => (
  <Link to={`/admin/${url}`}>
    <Button
      fontSize={'large'}
      variant="ghost"
      colorScheme={active ? 'messenger' : ''}
    >
      <Icon style={{ margin: '4px' }} />
      {text}
    </Button>
  </Link>
);

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack backgroundColor={'white'} alignItems={'flex-start'} spacing={'4'} pt={['20','28']} px={'1'} boxShadow={'xl'}>
      <LinkButton
        Icon={RiDashboardFill}
        text="Dashboard"
        url={'dashboard'}
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        Icon={RiAddCircleFill}
        text="Create Course"
        url={'createcourse'}
        active={location.pathname === '/admin/createcourse'}
      />
      <LinkButton
        Icon={RiEyeFill}
        text="Courses"
        url={'courses'}
        active={location.pathname === '/admin/courses'}
      />
      <LinkButton
        Icon={RiUser3Fill}
        text="Users"
        url={'users'}
        active={location.pathname === '/admin/users'}
      />
    </VStack>
  );
};

export default Sidebar;

// link function component
