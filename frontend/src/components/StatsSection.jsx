import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Badge
} from '@chakra-ui/react';
import { statsData } from '../data/mockData';
import { FaRobot, FaUsers, FaGlobeAmericas, FaChartLine } from 'react-icons/fa';

const iconMap = {
  robot: FaRobot,
  users: FaUsers,
  globe: FaGlobeAmericas,
  'trending-down': FaChartLine
};

export default function StatsSection() {
  return (
    <Box py={20} bg="bg.primary" position="relative">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="brand.300"
              letterSpacing="wider"
              textTransform="uppercase"
              mb={4}
            >
              Impacto Global
            </Text>
            <Heading size="2xl" color="text.primary" mb={4}>
              Transformando Vidas
            </Heading>
            <Text fontSize="lg" color="text.secondary" maxW="600px" mx="auto">
              Nuestro compromiso con la accesibilidad y la innovación está generando un impacto real en comunidades vulnerables.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} w="full">
            {statsData.map((stat) => {
              const IconComponent = iconMap[stat.icon] || FaRobot;
              return (
                <Box
                  key={stat.id}
                  bg="rgba(30, 53, 82, 0.4)"
                  backdropFilter="blur(10px)"
                  p={8}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="rgba(78, 227, 216, 0.1)"
                  boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
                  position="relative"
                  overflow="hidden"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(78, 227, 216, 0.2)',
                    borderColor: 'brand.300'
                  }}
                >
                  {/* Glow effect */}
                  <Box
                    position="absolute"
                    top="-50%"
                    right="-50%"
                    w="200px"
                    h="200px"
                    bg="radial-gradient(circle, rgba(78, 227, 216, 0.1) 0%, transparent 70%)"
                    filter="blur(40px)"
                  />

                  <VStack spacing={4} align="flex-start" position="relative" zIndex={1}>
                    <Icon as={IconComponent} boxSize={10} color="brand.300" />
                    <Box>
                      <Text fontSize="4xl" fontWeight="bold" color="text.primary">
                        {stat.value}
                      </Text>
                      <Text fontSize="md" color="text.secondary" fontWeight="semibold">
                        {stat.title}
                      </Text>
                    </Box>
                    <Badge
                      colorScheme="green"
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="md"
                      bg="rgba(78, 227, 216, 0.1)"
                      color="brand.300"
                    >
                      {stat.trend}
                    </Badge>
                    <Text fontSize="sm" color="text.secondary">
                      {stat.description}
                    </Text>
                  </VStack>
                </Box>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
