import React, { useState } from 'react';
import styled from 'styled-components/native';
import Counter from "../components/Counter";
import Button from "../components/Button";
import { ScrollView } from 'react-native-gesture-handler';

export default function CounterScreen() {

    const [counter, setCounter] = useState(0);

    return (
        <ScrollView>
            <Container>
                <Header>
                <PageTitle>Contador de copos d'água</PageTitle>
                </Header>

                <CounterWrapper>
                    <Counter value={counter}/>
                    <ResetButton onPress={() => setCounter(0)}>Zerar</ResetButton>
                </CounterWrapper>

                <Footer>
                    <Button onPress={() => setCounter(counter + 1)}>Adicionar</Button>
                </Footer>
        </Container>
        </ScrollView>
    )
} 

const Container = styled.View`
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 80%;

`;

const Header = styled.View`
    margin-top: 10px;
`;

const PageTitle = styled.Text`
    font-size: 23px;
    font-weight: bold; 
    color: #0000FF; 
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;   
`;

const CounterWrapper = styled.View`
    
`;

const ResetButton = styled(Button)``;


const Footer = styled.View`
    width: 100px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    `;
    