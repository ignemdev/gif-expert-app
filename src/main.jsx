import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
// import './styles.css';
import { GifExpertApp } from './GifExpertApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <GifExpertApp/>
        </ChakraProvider>
    </React.StrictMode>
)
