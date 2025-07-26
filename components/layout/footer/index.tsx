import {
  Box,
  Container,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Container maxW={'1300px'}>
      <Box
        pt={{ base: '40px', lg: '80px' }}
        px={{ base: '30px', lg: '185px' }}
        rounded={{ base: 8, lg: 30 }}
        bg={'primary'}
      >
        <HStack
          flexWrap={'wrap'}
          w={'full'}
          justifyContent={'space-between'}
          alignItems={'start'}
        >
          <Stack color={'light'}>
            <Text fontSize={{ base: 13, lg: 25 }} fontWeight={700}>
              Main menu
            </Text>
            <Stack mt={{ base: 7, lg: '50px' }} gap={{ base: 5, lg: 8 }}>
              <Link
                href='#why-us'
                _hover={{ color: 'red' }}
                fontSize={{ base: 13, lg: 24 }}
              >
                Why us
              </Link>
              <Link
                href='#partners'
                _hover={{ color: 'red' }}
                fontSize={{ base: 13, lg: 24 }}
              >
                Partners
              </Link>
              <Link
                href='#reviews'
                _hover={{ color: 'red' }}
                fontSize={{ base: 13, lg: 24 }}
              >
                Reviews
              </Link>
              <Link
                href='#contact'
                _hover={{ color: 'red' }}
                fontSize={{ base: 13, lg: 24 }}
              >
                Contact
              </Link>
            </Stack>
          </Stack>
          <Stack color={'light'}>
            <Text fontSize={{ base: 13, lg: 25 }} fontWeight={700}>
              Contacts
            </Text>
            <Stack mt={{ base: 7, lg: '50px' }} gap={{ base: 5, lg: 8 }}>
              {/* <Link
                href='tel:6364421334'
                color={'red'}
                fontWeight={'bold'}
                fontSize={{ base: 13, lg: 24 }}
              >
                (636)-442-1334
              </Link> */}
              <Link
                href='tel:6363844444'
                fontWeight={'bold'}
                color={'red'}
                fontSize={{ base: 13, lg: 24 }}
              >
                636-384-4444
              </Link>
              <Box>
                <Text fontWeight={'semibold'} fontSize={{ base: 13, lg: 24 }}>
                  Email:
                </Text>
                <Link
                  href='mailto:anfreightlogistics@gmail.com'
                  fontSize={{ base: 13, lg: 24 }}
                >
                  anfreightlogistics@gmail.com
                </Link>
              </Box>
            </Stack>
          </Stack>
          <Stack color={'light'}>
            <Text fontSize={{ base: 13, lg: 25 }} fontWeight={700}>
              Address
            </Text>
            <Stack
              maxW={'343px'}
              mt={{ base: 7, lg: '50px' }}
              gap={{ base: 5, lg: 8 }}
            >
              <Box
                width={{ base: '186px', lg: '343px' }}
                mt={{ base: '25px', lg: '40px' }}
                height={{ base: '101px', lg: '186px' }}
              >
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1666.4016846723173!2d-90.50173542591752!3d38.804972069393976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df2f6eb5a5c02f%3A0xac0ccf77ea17e344!2s2952%20W%20Adams%20St%2C%20St%20Charles%2C%20MO%2063301%2C%20USA!5e0!3m2!1sen!2s!4v1752766262499!5m2!1sen!2s'
                  width='100%'
                  height='100%'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  style={{ border: 0 }}
                />
              </Box>
              <Text
                maxW={{ base: '186px', lg: '343px' }}
                fontSize={{ base: 11, lg: 18 }}
              >
                2952 W ADAMS ST SAINT CHARLES, MO 63301{' '}
              </Text>
            </Stack>
          </Stack>
        </HStack>
        <HStack
          display={{ base: 'none', lg: 'flex' }}
          justifyContent={{ base: 'start', lg: 'end' }}
          gap={5}
        >
          <Link
            target='_blank'
            href='https://www.youtube.com/@GFSGROUPLLC'
            rounded={'full'}
          >
            <Image w={6} src={'/icons/youtube.svg'} alt='yotube' />
          </Link>
          <Link
            target='_blank'
            href='https://www.facebook.com/people/GFS-GROUP-LLC/61563779612468/'
            rounded={'full'}
          >
            <Image w={6} src={'/icons/facebook.svg'} alt='yotube' />
          </Link>
          <Link
            target='_blank'
            href='https://www.instagram.com/anfreightlogistics?igsh=YWpvYWx6NWhyazRl&utm_source=qr'
            rounded={'full'}
          >
            <Image w={6} src={'/icons/instagram.svg'} alt='yotube' />
          </Link>
        </HStack>
        <Box
          display={{ base: 'none', lg: 'block' }}
          mb={'50px'}
          mt={2}
          h={'1px'}
          bg={'red'}
        />
        <HStack
          fontSize={{ base: 11, lg: 'md' }}
          pb={3}
          justifyContent={'space-between'}
          w={'full'}
          display={{ base: 'none', lg: 'flex' }}
        >
          <Text color={'red'}>© 2025 ANFREIGHT. All Rights Reserved.</Text>
          <Link color={'red'}>Terms of Service</Link>
          <Link color={'red'}>Privacy Policy</Link>
        </HStack>
        <HStack
          display={{ base: 'flex', lg: 'none' }}
          justifyContent={'space-between'}
          w={'full'}
          pb={'10px'}
        >
          <Box>
            <HStack
              py={3}
              justifyContent={{ base: 'start', lg: 'end' }}
              gap={5}
            >
              <Link
                target='_blank'
                href='https://www.youtube.com/@GFSGROUPLLC'
                rounded={'full'}
              >
                <Image w={6} src={'/icons/youtube.svg'} alt='yotube' />
              </Link>
              <Link
                target='_blank'
                href='https://www.facebook.com/people/GFS-GROUP-LLC/61563779612468/'
                rounded={'full'}
              >
                <Image w={6} src={'/icons/facebook.svg'} alt='yotube' />
              </Link>
              <Link
                target='_blank'
                href='https://www.instagram.com/anfreightlogistics?igsh=YWpvYWx6NWhyazRl&utm_source=qr'
                rounded={'full'}
              >
                <Image w={6} src={'/icons/instagram.svg'} alt='yotube' />
              </Link>
            </HStack>
            <Text fontSize={10} color={'red'}>
              © 2025 ANFREIGHT. All Rights Reserved.
            </Text>
          </Box>
          <Stack>
            <Link fontSize={11} color={'red'}>
              Terms of Service
            </Link>
            <Link fontSize={11} color={'red'}>
              Privacy Policy
            </Link>
          </Stack>
        </HStack>
      </Box>
    </Container>
  );
}
