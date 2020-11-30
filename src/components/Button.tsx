import React, { Children } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export default function Button({children, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <ButtonContainer>
            <ButtonText>{children} </ButtonText>
        </ButtonContainer>
        </TouchableOpacity>
    )
}

const ButtonContainer = styled.View`
    background-color: #57e1ee; 
    padding: 14px 24px;
    border-radius: 16px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 150px;
`;

const ButtonText = styled.Text`
    color: black;
    font-size: 20px;
`;