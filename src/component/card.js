import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

export default function Card(props){

    

    const Card = styled.div`
    position: relative; 
    width:15%;
    height:40vh;
    border-radius:2%;
    margin:5% auto;
    margin-bottom:2%;
    display:flex;

    box-shadow:-5px 5px 15px ;


    &:hover{
        cursor:pointer;
        transform:scale(1.1);
    }
    `;
    const CtnScore = styled.div`
    position: absolute; 
    background-color:#fed941;
    width:50%;
    height:6vh;
    margin:10% 0%;
    border:solid 0.1px #fed941;
    border-radius:2px 80px 80px 2px; 
    box-shadow:-6px 0px 15px ;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    `;
    const Img = styled.img`
    position:absolute;
    background-color:blue;
    width:100%;
    height:inherit;
    border-radius:inherit;
    `;
    const Score = styled.h3`
    margin-right:10%;
    color:#0F0E17;
    font-weight:bold;
    text-shadow: -3px 5px 5px #223;
    `;

    return(
        <Card>
            <Img src={props.image}/>
            <CtnScore>
                <Score>{props.rating}</Score>
            </CtnScore>
        </Card>
    )
}


