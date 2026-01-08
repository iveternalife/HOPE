import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon
} from '@chakra-ui/react';
import { techFeatures } from '../data/mockData';
import { FaBrain, FaHand, FaBatteryFull, FaCog, FaCube, FaMicrochip } from 'react-icons/fa';

const iconMap = {
  brain: FaBrain,
  hand: FaHand,
  battery: FaBatteryFull,
  settings: FaCog,
  box: FaCube,
  cpu: FaMicrochip
};

export default function TechSection() {
  return (
    <Box id="tech" py={20} bg="bg.primary" position="relative">
      {/* Background gradient */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="600px"
        h="600px"
        bg="radial-gradient(circle, rgba(78, 227, 216, 0.05) 0%, transparent 70%)"
        filter="blur(80px)"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
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
              Tecnología Avanzada
            </Text>
            <Heading size="2xl" color="text.primary" mb={4}>
              Innovación que Marca la Diferencia
            </Heading>
            <Text fontSize="lg" color="text.secondary" maxW="700px" mx="auto">
              Nuestras prótesis robóticas integran tecnología de última generación para ofrecer funcionalidad, comodidad y accesibilidad sin precedentes.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {techFeatures.map((feature) => {
              const IconComponent = iconMap[feature.icon] || FaMicrochip;
              return (
                <Box
                  key={feature.id}
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
                  {/* Animated glow */}
                  <Box
                    position="absolute"
                    top="-100%"
                    left="-100%"
                    w="200%"
                    h="200%"
                    bg="radial-gradient(circle, rgba(78, 227, 216, 0.05) 0%, transparent 50%)"
                    opacity={0}
                    transition="opacity 0.3s ease"
                    _groupHover={{ opacity: 1 }}
                  />

                  <VStack spacing={5} align="flex-start" position="relative" zIndex={1}>
                    <Box
                      p={3}
                      bg="rgba(78, 227, 216, 0.1)"
                      borderRadius="lg"
                    >
                      <Icon as={IconComponent} boxSize={8} color="brand.300" />
                    </Box>
                    <Heading size="md" color="text.primary">
                      {feature.title}
                    </Heading>
                    <Text color="text.secondary" fontSize="sm" lineHeight="tall">
                      {feature.description}
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
