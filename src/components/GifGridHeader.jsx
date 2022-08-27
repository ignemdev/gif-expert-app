import { Heading, Tag, TagCloseButton } from '@chakra-ui/react';

export const GifGridHeader = ( { category, onDeleteCategory } ) => {

    const onClickHandler = () => {
        onDeleteCategory(category);
    };

    return (
        <Tag padding={ 3 } rounded={ 0 }>
            <Heading as='h3' size={ 'lg' }>
                { category }
            </Heading>
            <TagCloseButton onClick={ onClickHandler }/>
        </Tag>
    )
}