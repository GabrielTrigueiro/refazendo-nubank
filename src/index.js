import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

//<></> Serve para poder encapsular mais de um componente
//status bar muda a cor da barra de cima do aplicativo
const App = () => (
    <>  
        <StatusBar barStyle='light-content' backgroundColor="#8b10ae"/>
        <Routes />
    </>
);

export default App;
