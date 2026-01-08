import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  VStack
} from '@chakra-ui/react';
import { FaArrowRight, FaHeart } from 'react-icons/fa';
import Globe3D from '../components/Globe3D';
import { Link as RouterLink } from 'react-router-dom';

export default function HeroSection() {
  return (
    <Box
      minH="100vh"
      pt={20}
      position="relative"
      overflow="hidden"
    >
      {/* Background pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.05}
        bgImage="linear-gradient(rgba(78, 227, 216, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(78, 227, 216, 0.1) 1px, transparent 1px)"
        bgSize="50px 50px"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          minH="calc(100vh - 80px)"
          gap={12}
        >
          {/* Left content */}
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={8}
            flex={1}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Box>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="brand.300"
                letterSpacing="wider"
                textTransform="uppercase"
                mb={4}
              >
                Innovación con Propósito
              </Text>
              <Heading
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="bold"
                lineHeight="1.1"
                mb={6}
              >
                <Text as="span" color="text.primary">
                  HOPE
                </Text>
                <br />
                <Text
                  as="span"
                  bgGradient="linear(to-r, brand.300, blue.primary)"
                  bgClip="text"
                >
                  Robotic Prosthetics
                </Text>
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="text.secondary"
                maxW="600px"
                lineHeight="tall"
              >
                Tecnología que devuelve autonomía. Prótesis robóticas avanzadas y accesibles para transformar vidas en comunidades vulnerables.
              </Text>
            </Box>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              w={{ base: 'full', sm: 'auto' }}
            >
              <Button
                as={RouterLink}
                to="#mission"
                variant="solid"
                size="lg"
                rightIcon={<FaArrowRight />}
                px={8}
                w={{ base: 'full', sm: 'auto' }}
              >
                Conocer el Proyecto
              </Button>
              <Button
                as={RouterLink}
                to="#support"
                variant="outline"
                size="lg"
                leftIcon={<FaHeart />}
                px={8}
                w={{ base: 'full', sm: 'auto' }}
              >
                Apoyar la Iniciativa
              </Button>
            </Stack>

            {/* Stats preview */}
            <Flex
              gap={8}
              mt={8}
              wrap="wrap"
              justify={{ base: 'center', lg: 'flex-start' }}
            >
              <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="brand.300">247+</Text>
                <Text fontSize="sm" color="text.secondary">Prótesis</Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="brand.300">1,850+</Text>
                <Text fontSize="sm" color="text.secondary">Vidas Transformadas</Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color="brand.300">23</Text>
                <Text fontSize="sm" color="text.secondary">Países</Text>
              </Box>
            </Flex>
          </VStack>

          {/* Right - 3D Globe */}
          <Box
            flex={1}
            w="full"
            h={{ base: '400px', md: '500px', lg: '600px' }}
            position="relative"
          >
            <Globe3D />
            
            {/* Glow effect behind globe */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="400px"
              h="400px"
              bg="radial-gradient(circle, rgba(78, 227, 216, 0.2) 0%, transparent 70%)"
              filter="blur(40px)"
              zIndex={-1}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
