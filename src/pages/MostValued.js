import Title from '../component/title';
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import Card from '../component/card';
let prueba = [
    {
        id:16,
        img:"https://i.ibb.co/7bHL6sM/7.jpg",
        value:"10"
    },   
    {
        id:10,
        img:"https://i.ibb.co/rfsKHqG/10.jpg",
        value:"9.0"
    },
    {
        id:3,
        img:"https://i.ibb.co/Rj8SkMC/18.jpg",
        value:"9.5"
    },
    {
        id:4,
        img:"https://i.ibb.co/gzGGBWf/17.jpg",
        value:"9.5"
    },
    {
        id:8,
        img:"https://i.ibb.co/3Ms9dXC/4.jpg",
        value:"9.0"
    },        
    {
        id:5,
        img:"https://i.ibb.co/6Pv1zyq/2.jpg ",
        value:"8.5"
    },
    {
        id:15,
        img:"https://i.ibb.co/XZSDgCB/13.jpg",
        value:"7.4"
    },  
    {
        id:1,
        img:"https://i.ibb.co/gMDgFC5/20.jpg",
        value:"7.5"
    },



]

const MostValued = () => {

    const MainCard = styled.section`
    width:100%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    `;
    return (
        <>
        <Title title="Mejores Peliculas"/>
        <MainCard>       
       {prueba.map(el => <Card key={el.id} image={el.img} rating={el.value}/>)}
        </MainCard>
        </>

    )
}

export default MostValued
