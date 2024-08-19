import React from 'react'
import {Button} from '../Button'
import logo from '../../assets/logo-dio.png'
import {
    Container,
    Row,
    Wrapper,
    SearchInputContainer,
    Menu,
    MenuRight,
    Input
} from './styles'

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
            <img src={logo} alt='Logo Dio'/>
            <SearchInputContainer>
              <Input placeholder='Buscar'/>
            </SearchInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
        </Row>
        <Row>
            <MenuRight href='#'> Home </MenuRight>
            <Button title="Entar"/>
            <Button title="Cadastrar"/>
        </Row>
      </Container>
    </Wrapper>
  )
}

export {Header}