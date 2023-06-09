import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineClockCircle } from 'react-icons/ai';
import PayForm from './PayForm';
import AddToBalanceForm from './AddToBalanceForm';



function StatsCard(props) {
  const { title, stat, icon, bgColor } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      backgroundColor={bgColor}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontFamily={'inter'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Here's a summary of your account.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'BNB Credit'}
          stat={'0.05'}
          icon={<MdOutlineAccountBalanceWallet size={'3em'} />}
        />
        <StatsCard
          title={'BNB Due'}
          stat={'0.001'}
          icon={<RiMoneyDollarCircleLine size={'3em'} />}
        />
        <StatsCard
          title={'Ride Minutes'}
          stat={'7'}
          icon={<AiOutlineClockCircle size={'3em'} />}
        />
        <StatsCard
          title={'Bike Status'}
          stat={'Available'}
          bgColor={'green.200'}

        />
      </SimpleGrid>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <AddToBalanceForm/>
        <PayForm/>
      </Flex>
    </Box>
  );
}