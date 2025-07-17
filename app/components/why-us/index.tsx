import {
  Center,
  Container,
  SimpleGrid,
  Span,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const knowDatas = [
  {
    title: '01',
    text: 'Experienced & Safety-Focused Drivers',
  },
  {
    title: '02',
    text: 'On-Time Delivery Guarantee',
  },
  {
    title: '03',
    text: 'Well-Maintained Equipment',
  },
  {
    title: '04',
    text: '24/7 Support & Real-Time Updates',
  },
];

function WhyUs() {
  return (
    <Container maxW={'1360px'}>
      <Center gap={{ base: 3, lg: 7 }} flexDir={'column'} color={'primary'}>
        <Text fontWeight={'semibold'} fontSize={{ base: '33px', lg: '51px' }}>
          Why <Span color={'red'}>us?</Span>
        </Text>
        <Text
          maxW={'787px'}
          textAlign={'center'}
          fontSize={{ base: '11px', lg: '25px' }}
          lineHeight={{ base: '14px', lg: '32px' }}
        >
          When you choose AN Freight Logistics, you’re choosing peace of mind on
          every mile.
        </Text>
      </Center>
      <Center
        bg={'primary'}
        color={'light'}
        mt={{ base: '40px', lg: '80px' }}
        rounded={{ base: 8, lg: 30 }}
        gap={{ base: '40px', lg: '150px' }}
      >
        <Text fontSize={{ base: 87, lg: 340 }}>3+</Text>
        <Text fontSize={{ base: 20, lg: 80 }}>
          YEARS OF <br /> EXCELLENT <br /> SERVICE
        </Text>
      </Center>
      <SimpleGrid
        pt={{ base: '56px', lg: '140px' }}
        gap={{ base: '10px', lg: 6 }}
        columns={{ base: 2, lg: 4 }}
      >
        {knowDatas?.map((el) => (
          <Stack key={el.title} alignItems={'center'} color={'primary'}>
            <Text fontWeight={500} fontSize={{ base: 34, lg: 63 }}>
              {el?.title}
            </Text>
            <Text textAlign={'center'} fontSize={{ base: 11, lg: 21 }}>
              {el?.text}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default WhyUs;
