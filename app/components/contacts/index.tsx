'use client';
import {
  Box,
  Center,
  Container,
  HStack,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { LuClock3 } from 'react-icons/lu';

const benifitCards = [
  {
    title: '(636)-442-1334',
    icon: IoCallOutline,
  },
  {
    title: ' anfreightlogistics@gmail.com',
    icon: MdOutlineMailOutline,
  },
  {
    title: '2952 W ADAMS ST SAINT CHARLES, MO   63301',
    icon: GrLocation,
  },
  {
    title: '24/7 for dispatch and support',
    icon: LuClock3,
  },
];

function Contacts() {
  const iconSize = useBreakpointValue({ base: 17, lg: 31 });

  return (
    <Container maxW={'1360px'} mt={{ base: '35px', lg: '100px' }}>
      <Text
        color={'primary'}
        textAlign={'center'}
        fontWeight={'semibold'}
        fontSize={{ base: 33, lg: 51 }}
      >
        Contacts
      </Text>
      <Text
        fontSize={{ base: 11, lg: 25 }}
        mt={{ base: 3, lg: 6 }}
        maxW={'787px'}
        color={'primary'}
        textAlign={'center'}
        mx={'auto'}
      >
        If you have any questions about delivery, partnership, or want to learn
        more about our logistics services — feel free to reach out. The
        ANFREIGHT team is always here to help!
      </Text>
      <Box
        mt={{ base: '25px', lg: '40px' }}
        width='100%'
        height={{ base: '200px', lg: '730px' }}
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
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={{ base: '5px', lg: '18px' }}
        mt={{ base: '17px', lg: '66px' }}
        mb={{ base: '86px', lg: '175px' }}
      >
        {benifitCards?.map((el) => {
          const IconComponent = el.icon;

          return (
            <HStack
              key={el.title}
              bg={'primary'}
              color={'white'}
              gap={{ base: 3, lg: 6 }}
              p={{ base: 6, lg: '43px' }}
              rounded={{ base: 16, lg: 40 }}
            >
              <Center
                w={{ base: '38px', lg: '71px' }}
                h={{ base: '38px', lg: '71px' }}
                bg={'#75ADEF'}
                rounded={'full'}
              >
                <IconComponent color='white' size={iconSize} />
              </Center>
              <Text maxW={'80%'} fontSize={{ base: '14px', lg: '28px' }}>
                {el?.title}
              </Text>
            </HStack>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}

export default Contacts;
