import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs.js';
import { GifGridHeader } from './GifGridHeader';
import { Center, CircularProgress, Divider, Wrap } from '@chakra-ui/react';

export const GifGrid = ( props ) => {
    const { category, onDeleteCategory } = props;
    
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <GifGridHeader { ...props }/>

            { isLoading && (
                <Center>
                    <CircularProgress isIndeterminate value={ 30 } size='120px'/>
                </Center>
            ) }

            <Wrap justify='space-evenly' align='center' spacing='30px' marginY={ 5 }>
                { images.map(image =>
                    (<GifItem
                        key={ image?.id }
                        { ...image }
                    />)
                ) }
            </Wrap>

            <Divider marginY={ 5 }/>
        </>
    )
}