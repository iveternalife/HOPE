import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
  Stack,
  IconButton,
  Container
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavLink = ({ children, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Box
      as={RouterLink}
      to={to}
      px={3}
      py={2}
      rounded={'md'}
      color={isActive ? 'brand.300' : 'text.secondary'}
      fontWeight={isActive ? 'semibold' : 'normal'}
      _hover={{
        textDecoration: 'none',
        color: 'brand.300',
        transform: 'translateY(-2px)',
      }}
      transition="all 0.3s ease"
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="rgba(11, 14, 17, 0.8)"
      backdropFilter="blur(10px)"
      px={4}
      position="fixed"
      w="100%"
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="rgba(78, 227, 216, 0.1)"
    >
      <Container maxW="container.xl">
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box
              as={RouterLink}
              to="/"
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, brand.300, blue.primary)"
              bgClip="text"
              _hover={{ transform: 'scale(1.05)' }}
              transition="transform 0.3s ease"
            >
              {/* Espacio para logo - usuario lo integrará después */}
              HOPE
            </Box>
            <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/#mission">Misión</NavLink>
              <NavLink to="/#tech">Tecnología</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
            <Button
              variant={'solid'}
              size={'md'}
              mr={4}
            >
              Apoyar la Iniciativa
            </Button>
          </Flex>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            color="brand.300"
            _hover={{ bg: 'rgba(78, 227, 216, 0.1)' }}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/#mission">Misión</NavLink>
              <NavLink to="/#tech">Tecnología</NavLink>
              <Button variant={'solid'} size={'sm'} w="full">
                Apoyar la Iniciativa
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
