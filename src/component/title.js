import styled from 'styled-components'; //css, keyframes, ThemeProvider, createGlobalStyle 

export default function Title(props){
    const Title = styled.h1`
    color:whitesmoke;
    margin:3% 6%
    `;

    return(
        <Title>{props.title}</Title>
    )
}
