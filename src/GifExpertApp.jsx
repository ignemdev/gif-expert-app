import { useState } from 'react';
import {
    AddCategory,
    GifGrid,
    AppHeader
} from './components';
import { Box } from '@chakra-ui/react';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'City Pop' ]);

    const onCategoryAdded = ( newCategory ) => {
        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories ]);
    };

    const onCategoryRemoved = ( categoryToRemove ) => {
        if (categories.length <= 0) return;

        const filteredCategories = categories.filter(category => (category !== categoryToRemove))
        setCategories([ ...filteredCategories ]);
    };

    return (
        <>
            <AppHeader title={ 'Ignacio\'s Gif App' }/>

            <Box paddingX={ 7 }>
                <AddCategory onNewCategory={ onCategoryAdded }/>
                <Box marginY={ 4 }>
                    { categories.map(( category ) => (
                        <GifGrid
                            key={ category }
                            category={ category }
                            onDeleteCategory={ onCategoryRemoved }
                        />
                    )) }
                </Box>
            </Box>
        </>
    )
}