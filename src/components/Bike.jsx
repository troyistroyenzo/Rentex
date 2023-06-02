import { Button } from '@chakra-ui/react'
import { Box, Image, Text, Stack } from '@chakra-ui/react'


const Bike = ({ bike }) => {
    return (
        <Box boxSize="lg" mx={2}>
            <Image src={bike} mb={10}/>
            <Text>Loren Ipsum</Text>
            <Stack spacing={0} direction={'row'} align={'center'}f justify={'center'} mt={5}>
                <Button
                color={'white'}
                m={2}
                fontSize={'sm'}
                fontWeight={600}
                colorScheme={'teal'}
                bg={'teal.500'}
                px={6}
                _hover={{
                    bg: 'teal.300',
                }}>
                Checkout Bikke
                </Button>
                <Button
                color={'white'}
                m={2}
                fontSize={'sm'}
                fontWeight={600}
                colorScheme={'teal'}
                bg={'teal.500'}
                px={6}
                _hover={{
                    bg: 'teal.300',
                }}>
                Checkin Bike
                </Button>
            </Stack>
        </Box>
    )
}

export default Bike