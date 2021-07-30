import logo from '../img/logo.png'
import styled from 'styled-components' //css, keyframes, ThemeProvider, createGlobalStyle 
import NavBar from './navBar'
export default function Header(){
  const Section = styled.section`
  position:sticky;
  width:100%;
  background-color:#2237;
  height:10vh;
  margin:auto;
  display:flex;
  justify-content:space-evenly;

  `;
  const Logo = styled.img`
  margin-left:5%;
  width:10%;
  height:10vh;
  `;
  const Nav = styled.nav`
  width:50%;
  height:5vh;
  display:flex;
  margin:auto;

  `;
  const Ul = styled.ul`
  width:100%;
  display:flex;
  list-style:none;
  margin:auto;
  `;
  const Input = styled.input.attrs({type:'search'})`
  width:20%;
  height:5vh;
  font-size:20px;
  text-align:center;
  margin:auto;
  border:none;
  border-radius:2%;

  &:focus{
    font-size:18px;
    text-align:start;
    background-color:#fed941;
    font-weight: lighter;
  }
  `;
  return(
    <>
    <Section>
      <Logo src={logo}/> 
      <Nav>
        <Ul>
          <NavBar/>
        </Ul>
      </Nav>
      <Input className="SearchM"placeholder="Buscar Pelicula"/>
    </Section>
    </>
  )
}
