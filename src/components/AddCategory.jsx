import { useState } from 'react';
import { Box, Input, Tooltip } from '@chakra-ui/react';

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( { target } ) => setInputValue(target?.value ?? '');

    const onFormSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length <= 0) return;

        onNewCategory(inputValue);
        setInputValue('');
    };

    return (
        <Box marginY={ 6 }>
            <form onSubmit={ onFormSubmit }>
                <Tooltip label="Press Enter" aria-label='A tooltip'>
                    <Input
                        variant={ 'filled' }
                        placeholder={ 'Search Gif' }
                        value={ inputValue }
                        onChange={ onInputChange }
                        rounded={ 0 }
                        padding={ 7 }
                    />
                </Tooltip>
            </form>
        </Box>
    )
}