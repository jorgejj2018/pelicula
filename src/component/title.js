import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

export default function Title(props){
    const Title = styled.h1`
    color:whitesmoke;
    margin:3% 6%
    `;

    return(
        <Title>{props.title}</Title>
    )
}
