import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Flex,
  Icon,
  Divider
} from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      bg="bg.primary"
      borderTop="1px solid"
      borderColor="rgba(78, 227, 216, 0.1)"
      mt={20}
    >
      <Container maxW="container.xl" py={10}>
        <Stack spacing={8}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'center', md: 'flex-start' }}
            gap={8}
          >
            <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                bgGradient="linear(to-r, brand.300, blue.primary)"
                bgClip="text"
              >
                HOPE
              </Text>
              <Text color="text.secondary" fontSize="sm" maxW="300px" textAlign={{ base: 'center', md: 'left' }}>
                Tecnología que devuelve autonomía.
                Prótesis robóticas accesibles para todos.
              </Text>
            </Stack>

            <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
              <Text fontWeight="semibold" color="text.primary">Enlaces</Text>
              <Stack spacing={2} align={{ base: 'center', md: 'flex-start' }}>
                <Link href="/#mission" color="text.secondary" _hover={{ color: 'brand.300' }}>Misión</Link>
                <Link href="/#tech" color="text.secondary" _hover={{ color: 'brand.300' }}>Tecnología</Link>
                <Link href="/dashboard" color="text.secondary" _hover={{ color: 'brand.300' }}>Dashboard</Link>
              </Stack>
            </Stack>

            <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
              <Text fontWeight="semibold" color="text.primary">Contacto</Text>
              <Stack spacing={2} align={{ base: 'center', md: 'flex-start' }}>
                <Link href="mailto:info@hope-prosthetics.org" color="text.secondary" _hover={{ color: 'brand.300' }}>
                  info@hope-prosthetics.org
                </Link>
                <Text color="text.secondary" fontSize="sm">+1 (555) 123-4567</Text>
              </Stack>
            </Stack>

            <Stack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
              <Text fontWeight="semibold" color="text.primary">Síguenos</Text>
              <Flex gap={4}>
                <Link href="#" _hover={{ color: 'brand.300', transform: 'translateY(-2px)' }} transition="all 0.3s">
                  <Icon as={FaGithub} boxSize={6} color="text.secondary" />
                </Link>
                <Link href="#" _hover={{ color: 'brand.300', transform: 'translateY(-2px)' }} transition="all 0.3s">
                  <Icon as={FaTwitter} boxSize={6} color="text.secondary" />
                </Link>
                <Link href="#" _hover={{ color: 'brand.300', transform: 'translateY(-2px)' }} transition="all 0.3s">
                  <Icon as={FaLinkedin} boxSize={6} color="text.secondary" />
                </Link>
                <Link href="#" _hover={{ color: 'brand.300', transform: 'translateY(-2px)' }} transition="all 0.3s">
                  <Icon as={FaEnvelope} boxSize={6} color="text.secondary" />
                </Link>
              </Flex>
            </Stack>
          </Flex>

          <Divider borderColor="rgba(78, 227, 216, 0.1)" />

          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text fontSize="sm" color="text.secondary">
              © 2025 HOPE Robotic Prosthetics. Todos los derechos reservados.
            </Text>
            <Flex gap={6}>
              <Link href="#" fontSize="sm" color="text.secondary" _hover={{ color: 'brand.300' }}>
                Privacidad
              </Link>
              <Link href="#" fontSize="sm" color="text.secondary" _hover={{ color: 'brand.300' }}>
                Términos
              </Link>
              <Link href="#" fontSize="sm" color="text.secondary" _hover={{ color: 'brand.300' }}>
                Cookies
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
