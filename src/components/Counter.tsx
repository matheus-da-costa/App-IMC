import React from 'react';
import styled from 'styled-components/native';

export default function Counter({ value }) {
    return (
        <Background>
            <CounterNumber>{value}</CounterNumber>
        </Background>
    )
}

const Background = styled.View`
    width: 200px;
    height: 200px
    background-color: #00009C;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin: 50px;
`;

const CounterNumber = styled.Text`
    font-size: 120px;
    color: #C0D9D9;
`;