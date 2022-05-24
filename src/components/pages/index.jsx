import {Button, Input} from '@chakra-ui/react'
import LotusProvider from '../LotusProvider';

function HomePage() {
    return (
        <LotusProvider>
            <Button>This is Chakra</Button>
            <Input/>
        </LotusProvider>
    );
}

export default HomePage;

