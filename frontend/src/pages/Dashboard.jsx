import React from 'react';
import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Badge,
  Divider
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaChartBar,
  FaBullseye,
  FaCog,
  FaRobot,
  FaUsers,
  FaGlobeAmericas,
  FaChartLine
} from 'react-icons/fa';
import { statsData, missionData } from '../data/mockData';

const NavItem = ({ icon, children, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Box
      as={RouterLink}
      to={to}
      display="flex"
      alignItems="center"
      gap={3}
      px={4}
      py={3}
      borderRadius="lg"
      bg={isActive ? 'rgba(78, 227, 216, 0.1)' : 'transparent'}
      color={isActive ? 'brand.300' : 'text.secondary'}
      fontWeight={isActive ? 'semibold' : 'normal'}
      transition="all 0.3s ease"
      _hover={{
        bg: 'rgba(78, 227, 216, 0.1)',
        color: 'brand.300',
        transform: 'translateX(4px)'
      }}
    >
      <Icon as={icon} boxSize={5} />
      <Text>{children}</Text>
    </Box>
  );
};

const StatCard = ({ title, value, icon, trend, description }) => {
  const iconMap = {
    robot: FaRobot,
    users: FaUsers,
    globe: FaGlobeAmericas,
    'trending-down': FaChartLine
  };
  const IconComponent = iconMap[icon] || FaRobot;

  return (
    <Box
      bg="rgba(30, 53, 82, 0.4)"
      backdropFilter="blur(10px)"
      p={6}
      borderRadius="xl"
      border="1px solid"
      borderColor="rgba(78, 227, 216, 0.1)"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-50%"
        right="-50%"
        w="150px"
        h="150px"
        bg="radial-gradient(circle, rgba(78, 227, 216, 0.1) 0%, transparent 70%)"
        filter="blur(40px)"
      />
      <VStack spacing={3} align="flex-start" position="relative" zIndex={1}>
        <HStack justify="space-between" w="full">
          <Icon as={IconComponent} boxSize={8} color="brand.300" />
          <Badge
            colorScheme="green"
            fontSize="xs"
            px={2}
            py={1}
            borderRadius="md"
            bg="rgba(78, 227, 216, 0.1)"
            color="brand.300"
          >
            {trend}
          </Badge>
        </HStack>
        <Box>
          <Text fontSize="3xl" fontWeight="bold" color="text.primary">
            {value}
          </Text>
          <Text fontSize="sm" color="text.secondary" fontWeight="semibold">
            {title}
          </Text>
        </Box>
        <Text fontSize="xs" color="text.secondary">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

const InfoCard = ({ title, content, icon }) => {
  return (
    <Box
      bg="rgba(30, 53, 82, 0.4)"
      backdropFilter="blur(10px)"
      p={8}
      borderRadius="xl"
      border="1px solid"
      borderColor="rgba(78, 227, 216, 0.1)"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
      h="full"
    >
      <VStack spacing={4} align="flex-start">
        <Icon as={icon} boxSize={10} color="brand.300" />
        <Heading size="lg" color="text.primary">
          {title}
        </Heading>
        <Text color="text.secondary" lineHeight="tall">
          {content}
        </Text>
      </VStack>
    </Box>
  );
};

export default function Dashboard() {
  return (
    <Flex minH="100vh" bg="bg.primary">
      {/* Sidebar */}
      <Box
        w="280px"
        bg="rgba(22, 40, 63, 0.6)"
        backdropFilter="blur(10px)"
        borderRight="1px solid"
        borderColor="rgba(78, 227, 216, 0.1)"
        p={6}
        display={{ base: 'none', md: 'block' }}
      >
        <VStack spacing={8} align="stretch">
          <Box>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, brand.300, blue.primary)"
              bgClip="text"
              mb={2}
            >
              HOPE
            </Text>
            <Text fontSize="sm" color="text.secondary">
              Dashboard Analytics
            </Text>
          </Box>

          <Divider borderColor="rgba(78, 227, 216, 0.1)" />

          <VStack spacing={2} align="stretch">
            <NavItem icon={FaHome} to="/">
              Inicio
            </NavItem>
            <NavItem icon={FaChartBar} to="/dashboard">
              Dashboard
            </NavItem>
            <NavItem icon={FaBullseye} to="/#mission">
              Misión & Visión
            </NavItem>
            <NavItem icon={FaCog} to="/#tech">
              Tecnología
            </NavItem>
          </VStack>
        </VStack>
      </Box>

      {/* Main content */}
      <Box flex={1} overflowY="auto">
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <Box>
              <Heading size="2xl" color="text.primary" mb={2}>
                Panel de Control
              </Heading>
              <Text color="text.secondary" fontSize="lg">
                Monitoreo de impacto y estadísticas en tiempo real
              </Text>
            </Box>

            {/* Stats Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {statsData.map((stat) => (
                <StatCard key={stat.id} {...stat} />
              ))}
            </SimpleGrid>

            {/* Mission & Vision */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
              <InfoCard
                title="Nuestra Misión"
                content={missionData.mission}
                icon={FaBullseye}
              />
              <InfoCard
                title="Nuestra Visión"
                content={missionData.vision}
                icon={FaGlobeAmericas}
              />
            </SimpleGrid>

            {/* Values */}
            <Box
              bg="rgba(30, 53, 82, 0.4)"
              backdropFilter="blur(10px)"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="rgba(78, 227, 216, 0.1)"
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
            >
              <Heading size="lg" color="text.primary" mb={6}>
                Nuestros Valores
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {missionData.values.map((value) => (
                  <Box key={value.id}>
                    <Text fontWeight="bold" color="brand.300" mb={2}>
                      {value.title}
                    </Text>
                    <Text color="text.secondary" fontSize="sm">
                      {value.description}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
