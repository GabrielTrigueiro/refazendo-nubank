import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, 
SignOutButtonText } from './styles';
import QRCode from 'react-native-qrcode-svg';

export default function Menu(){
    return(
        <Container >
            <Code>
                <QRCode
                    value='https://www.youtube.com/watch?v=6DsvARHM_EE'
                    size={80}
                    bgColor='#fff'
                    color={'#8B10AE'}
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name='help-outline' size={20} color='#fff' />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='person-outline' size={20} color='#fff' />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='credit-card' size={20} color='#fff' />
                    <NavText>Cartão online</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='smartphone' size={20} color='#fff' />
                    <NavText>Configuração do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {} } >
                <SignOutButtonText>Sair do app</SignOutButtonText>
            </SignOutButton>

        </Container>
    );
}