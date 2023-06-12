import Hero from "./Hero"
import Features from "./Features"
import { Box, Stack, Flex } from '@chakra-ui/react';

const Home = () => {
    return (
        <>
            <Hero />
    
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 1, md: 4 }}
            py={{ base: 10, md: 6 }}>
            
                <Features/>
            
        </Stack>
        </>
    );
}

export default Home;