import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

//imports para as animações
import { Animated } from 'react-native';

import Menu from '~/components/Menu';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import { Container, Content, Card, CardHeader, CardContent, CardFooter,
Title, Description, Annotation } from './styles'

export default function Main(){ 
  return(
    <Container>
      <Header />

      <Content>
        <Menu />

          <Card>

              <CardHeader>
                <Icon name='attach-money' size={28} color='#666'/>
                <Icon name='visibility-off' size={28} color='#666'/>
              </CardHeader>
              <CardContent>
                <Title>Saldo disponivel</Title>
                <Description>R$ 7.611,21</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferencia de R$ 20,00 recebida de Luana Vidal às 06:00h
                </Annotation>
              </CardFooter>

          </Card>

      </Content>

      <Tabs />
    </Container>
  );
}