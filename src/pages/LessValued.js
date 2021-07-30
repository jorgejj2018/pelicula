import Title from '../component/title';
import styled from 'styled-components';// css, keyframes, ThemeProvider, createGlobalStyle 
import Card from '../component/card';
let prueba = [
    {
        id:13,
        img:"https://i.ibb.co/2tbzZ5q/12.jpg",
        value:"2.0"
    },     
    {
        id:2,
        img:"https://i.ibb.co/hLD0KjN/19.jpg",
        value:"3.5"
    },
    {
        id:17,
        img:"https://i.ibb.co/R9B8H9f/9.jpg",
        value:"5.0"
    },        
    {
        id:18,
        img:"https://i.ibb.co/2Nn6YnS/8.jpg",
        value:"4.0"
    },   
    {
        id:9,
        img:"https://i.ibb.co/QCz5c2x/5.jpg",
        value:"6.0"
    },
    {
        id:6,
        img:" https://i.ibb.co/D7CtKVW/1.jpg",
        value:"6.5"
    },
    {
        id:7,
        img:"https://i.ibb.co/6XZdWJj/16.jpg",
        value:"7.0"
    },
    {
        id:7,
        img:"https://i.ibb.co/2Kcr9Nd/15.jpg",
        value:"7.0"
    },        {
        id:7,
        img:"https://i.ibb.co/HPNdT6s/3.jpg",
        value:"7.0"
    }, 
    {
        id:12,
        img:"https://i.ibb.co/mSYPmjT/11.jpg",
        value:"6.0"
    }, 
    {
        id:19,
        img:" https://i.ibb.co/r4Z0Hj3/6.jpg",
        value:"7.0"
    },        {
        id:20,
        img:"https://i.ibb.co/QCz5c2x/5.jpg",
        value:"7.0"
    },   


]

const LessValued = () => {

    const MainCard = styled.section`
    width:100%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    `;
    return (
        <>
        <Title title="Peliculas Regulares"/>
        <MainCard>       
       {prueba.map(el => <Card key={el.id} image={el.img} rating={el.value}/>)}
        </MainCard>
        </>

    )
}

export default LessValued
