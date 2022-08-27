import {
    Box,
    Center,
    Heading,
    Image,
    WrapItem
} from '@chakra-ui/react';

export const GifItem = ( { title, url } ) => {

    return (
        <WrapItem>
            <Center>
                <Box p={ 5 } backgroundColor={ 'gray.100' } w={ '350px' } shadow='lg'>
                    <Image
                        src={ url }
                        alt={ title }
                        w={ '100%' }
                    />
                    <Heading fontSize='xl' textAlign={ 'center' }>{ title }</Heading>
                </Box>
            </Center>
        </WrapItem>
    )
}