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
import { FaBullseye, FaEye, FaHeart, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import { missionData } from '../data/mockData';

const valueIcons = {
  'Accesibilidad': FaUsers,
  'Innovación': FaLightbulb,
  'Empatía': FaHeart,
  'Impacto Social': FaRocket
};

export default function MissionSection() {
  return (
    <Box id="mission" py={20} bg="bg.primary">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* Mission */}
          <Box
            w="full"
            bg="rgba(30, 53, 82, 0.4)"
            backdropFilter="blur(10px)"
            p={10}
            borderRadius="2xl"
            border="1px solid"
            borderColor="rgba(78, 227, 216, 0.1)"
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-50%"
              right="-10%"
              w="300px"
              h="300px"
              bg="radial-gradient(circle, rgba(78, 227, 216, 0.1) 0%, transparent 70%)"
              filter="blur(60px)"
            />
            <VStack spacing={6} position="relative" zIndex={1}>
              <Icon as={FaBullseye} boxSize={12} color="brand.300" />
              <Heading size="xl" color="text.primary" textAlign="center">
                Nuestra Misión
              </Heading>
              <Text
                fontSize="lg"
                color="text.secondary"
                textAlign="center"
                maxW="800px"
                lineHeight="tall"
              >
                {missionData.mission}
              </Text>
            </VStack>
          </Box>

          {/* Vision */}
          <Box
            w="full"
            bg="rgba(30, 53, 82, 0.4)"
            backdropFilter="blur(10px)"
            p={10}
            borderRadius="2xl"
            border="1px solid"
            borderColor="rgba(78, 227, 216, 0.1)"
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-50%"
              left="-10%"
              w="300px"
              h="300px"
              bg="radial-gradient(circle, rgba(47, 95, 160, 0.1) 0%, transparent 70%)"
              filter="blur(60px)"
            />
            <VStack spacing={6} position="relative" zIndex={1}>
              <Icon as={FaEye} boxSize={12} color="brand.300" />
              <Heading size="xl" color="text.primary" textAlign="center">
                Nuestra Visión
              </Heading>
              <Text
                fontSize="lg"
                color="text.secondary"
                textAlign="center"
                maxW="800px"
                lineHeight="tall"
              >
                {missionData.vision}
              </Text>
            </VStack>
          </Box>

          {/* Values */}
          <Box w="full">
            <Heading size="xl" color="text.primary" textAlign="center" mb={10}>
              Nuestros Valores
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {missionData.values.map((value) => {
                const IconComponent = valueIcons[value.title] || FaHeart;
                return (
                  <Box
                    key={value.id}
                    bg="rgba(30, 53, 82, 0.4)"
                    backdropFilter="blur(10px)"
                    p={8}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="rgba(78, 227, 216, 0.1)"
                    boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(78, 227, 216, 0.2)',
                      borderColor: 'brand.300'
                    }}
                  >
                    <VStack spacing={4} align="flex-start">
                      <Icon as={IconComponent} boxSize={8} color="brand.300" />
                      <Heading size="md" color="text.primary">
                        {value.title}
                      </Heading>
                      <Text color="text.secondary" fontSize="sm" lineHeight="tall">
                        {value.description}
                      </Text>
                    </VStack>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
