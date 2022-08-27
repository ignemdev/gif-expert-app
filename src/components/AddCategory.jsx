import { useState } from 'react';

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
        <form onSubmit={ onFormSubmit }>
            <input
                type="text"
                placeholder={ 'Search Gif' }
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}