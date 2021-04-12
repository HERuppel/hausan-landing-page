import React from 'react'

import { View, Text, FooterComponent, NavItem, Aa, lightColor, LinkedText } from '../styled/common'

import { AiOutlineInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { MdSignalWifi4Bar } from 'react-icons/md'
import { IoMailSharp } from 'react-icons/io5'

const Footer = () => {
    return (
        <FooterComponent display='flex' alignItems='center' flex-direction='column' background='linear-gradient(180deg, #0096DA, #00ACCE)' padding='20px 50px 20px 50px'>
            <View id='footer' display='grid' grid-template-columns='1.5fr 1fr 1fr' >
                <View display='flex' align-items='center' justify-content='center'>
                    <Text fontSize='50px' color={lightColor}>HAUS AN</Text>
                    <MdSignalWifi4Bar size='70px' color={lightColor}/>
                </View>
                <View display='flex' flex-direction='column' align-items='flex-start'>
                    <Text color={lightColor}>Navegação</Text>
                    <NavItem  margin='5px'>
                        <Aa href='#start'>Início</Aa>
                    </NavItem>
                    <NavItem  margin='5px'>
                        <Aa href='#description'>Descrição</Aa>
                    </NavItem>
                    <NavItem  margin='5px'>
                        <Aa href='#team'>Time</Aa>
                    </NavItem>
                    <NavItem  margin='5px'>
                        <Aa href='#about'>Sobre nós</Aa>
                    </NavItem>
                    <NavItem  margin='5px'>
                        <Aa href='#contact'>Contato</Aa>
                    </NavItem>
                </View>
                <View display='flex' flex-direction='column' align-items='flex-start'>
                    <Text color={lightColor}>Contato</Text>
                    <View  padding='0px 0px 0px 20px' display='flex' alignItems='center'>
                        <IoMailSharp size='20px' color={lightColor}/>
                        <LinkedText fontSize='18px' margin='10px' color={lightColor}>itaquari@gmail.com</LinkedText>
                    </View>
                    <View  padding='0px 0px 0px 20px' display='flex' alignItems='center'>
                        <AiFillLinkedin size='20px' color={lightColor}/>
                        <LinkedText fontSize='18px' margin='10px' color={lightColor}>iTaquari</LinkedText>
                    </View>
                    <View  padding='0px 0px 0px 20px' display='flex' alignItems='center'>
                        <AiFillFacebook size='20px' color={lightColor}/>
                        <LinkedText fontSize='18px' margin='10px' color={lightColor}>iTaquari - Engenharia de sistemas</LinkedText>
                    </View>
                    <View  padding='0px 0px 0px 20px' display='flex' alignItems='center'>
                        <AiOutlineInstagram size='20px' color={lightColor}/>
                        <LinkedText fontSize='18px' margin='10px' color={lightColor}>@itaquari_eng</LinkedText>
                    </View>
                </View>
            </View>
            <Text id='copyright' fontSize='18px' color={lightColor}>© 2021 iTaquari | Engenharia de Sistemas. [By Renato C. Ruppel] *Empresa Fictícia</Text>
        </FooterComponent>

    )
}

export default Footer