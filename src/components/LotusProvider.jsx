import { ChakraProvider } from '@chakra-ui/react';

function LotusProvider({children}) {
    return (
        <ChakraProvider >{ children}</ChakraProvider>
    );
}

export default LotusProvider;