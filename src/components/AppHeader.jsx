import { Heading } from '@chakra-ui/react';

export const AppHeader = ( { title } ) => (
    <Heading
        textAlign={ 'center' }
        margin={ 6 }
        as={ 'h1' }
        size={ '2xl' }>
        { title }
    </Heading>
)