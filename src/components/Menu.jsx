import React from 'react'

import { View, MenuContainer, Aa, NavItem, secondaryColor } from '../styled/common'


import { AiOutlineClose } from 'react-icons/ai'

const Menu = ({ display, setMenu }) => {
    return (
        <MenuContainer display={display} id='menuContainer'>
            <View display='flex' flex-direction='row-reverse'>
                <NavItem margin='14px' padding-right='15px' display='block'>
                    <Aa onClick={setMenu} id='menubtna'><AiOutlineClose id='menuiconbtn' size='30px' color={secondaryColor} /></Aa>
                </NavItem>
            </View>
            <View id='columnlinks' display='flex' flex-direction='column' align-items='center'>
                <NavItem margin='10px'>
                    <Aa color={secondaryColor} margin='0px' href='#start' onClick={setMenu}>Início</Aa>
                </NavItem>
                <NavItem margin='10px'>
                    <Aa color={secondaryColor} margin='0px' href='#description' onClick={setMenu}>Descrição</Aa>
                </NavItem>
                <NavItem margin='10px'>
                    <Aa color={secondaryColor} margin='0px' href='#team' onClick={setMenu}>Time</Aa>
                </NavItem>
                <NavItem margin='10px'>
                    <Aa color={secondaryColor} margin='0px' href='#about' onClick={setMenu}>Sobre</Aa>
                </NavItem>
                <NavItem margin='10px'>
                    <Aa color={secondaryColor} margin='0px' href='#contact' onClick={setMenu}>Contato</Aa>
                </NavItem>            
            </View>
        </MenuContainer>
    )
}

export default Menu