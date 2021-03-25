import React, { useState } from 'react'
import $ from 'jquery'

import { Nav as NavBar, NavItem, Aa, lightColor, View } from '../styled/common'

import { AiOutlineMenu } from 'react-icons/ai'
import Menu from './Menu'


const Nav = () => { 

    const [menu, setMenu] = useState(false)

    const openMenu = () => {
        $('body').css({ 'overflow': 'hidden' })
        setMenu(true)
    }

    const closeMenu = () => {
        $('body').css({ 'overflow': 'visible' })
        setMenu(false)
    }

    return (
        <NavBar justify-content='space-between' flex-direction='row-reverse'>
            <NavBar id='menulinks'>
                <NavItem>
                    <Aa style={{ paddingLeft: 10, paddingRight: 10 }} id='astart' href='#start' onClick={() => setMenu(false)}>Início</Aa>
                </NavItem>
                <NavItem>
                    <Aa style={{ paddingLeft: 10, paddingRight: 10 }} id='adescription' href='#description' onClick={() => setMenu(false)}>Descrição</Aa>
                </NavItem>
                <NavItem>
                    <Aa style={{ paddingLeft: 10, paddingRight: 10 }} id='ateam' href='#team' onClick={() => setMenu(false)}>Time</Aa>
                </NavItem>
                <NavItem>
                    <Aa style={{ paddingLeft: 10, paddingRight: 10 }} id='aabout' href='#about' onClick={() => setMenu(false)}>Sobre nós</Aa>
                </NavItem>
                <NavItem>
                    <Aa style={{ paddingLeft: 10, paddingRight: 10 }} id='acontact' href='#contact' onClick={() => setMenu(false)}>Contato</Aa>
                </NavItem>
            </NavBar>
            <View  id='menubtn' display='none'>
                <NavItem>
                    <Aa id='menubtna' onClick={() => openMenu()}><AiOutlineMenu id='menuiconbtn' color={lightColor} size='30px' /></Aa>
                </NavItem>
            </View>
            <Menu setMenu={() => closeMenu()} display={menu ? 'block' : 'none'}/>
        </NavBar>
    )
}

export default Nav