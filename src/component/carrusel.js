import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

export default function Carrusel(){

    const ThemePrimary = {
        bgColor: "#fed941",
        color: "#000000",
    }
    const ThemeDark = {
        bgColor: "#000000",
        color: "#fed941",
    }

    const Section = styled.section`
    background-image:url(https://i.ibb.co/N9dKGr1/b1.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    width:50%;
    height:30vh;
    margin:2% auto;
    border-radius:8px;
    display:flex;
    `;
    const  DivButton = styled.div`
    width:70%;
    height:8vh;
    display:flex;
    margin:20% 0%;
    
    `;

    const Button = styled.button`
    background-color:${({theme}) => theme.bgColor};
    width:25%;
    height:5vh;
    margin:2% 5%;
    border:none;
    border-radius:4px;
    color:${({theme}) => theme.color};

    &:hover{
    transform:scale(1.2);
    cursor:pointer;
    }
    `;
    
    return(
        <>
        <Section>
            <DivButton>
            <ThemeProvider theme={ThemePrimary}>
            <Button>Ver Ahora</Button>
            </ThemeProvider>

            <ThemeProvider theme={ThemeDark}>
            <Button>Ver Despues</Button>
             </ThemeProvider>

            </DivButton>
        
        </Section>
        </>

    )
}
