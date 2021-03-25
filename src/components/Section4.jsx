import React from 'react'
import { Paragraph, secondaryColor, Section, Text, View } from '../styled/common'

import { FaRegCompass } from 'react-icons/fa'
import { FiFlag } from 'react-icons/fi'
import { BiTask } from 'react-icons/bi'
import { IoMdPeople } from 'react-icons/io'

const Section4 = () => {
    return ( 
        <Section id='about'>
            <View id='section4' min-height='100vh' padding='0px 25px 0px 25px' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='flex-start'>
                <Text id='abouttitle' fontSize='30px' color={secondaryColor} margin='0px' padding='20px 20px 20px 90px'>SOBRE NÓS</Text>
                <View id='containerabout' display='grid' grid-template-columns='1fr' padding='0px 70px 0px 70px'>
                    <View id='aboutleft' display='flex' flexDirection='column'  alignItems='center' justifyContent='flex-start' margin={30}>
                        <FiFlag size='100px' color={secondaryColor} style={{ margin: 20 }}/>
                        <Paragraph margin='0px' text-align='justify' >Fundada no interior do Paraná, a
                            <span style={{ color: secondaryColor, fontWeight: 'bold' }}> iTaquari </span>
                            é uma empresa formada por profissionais da área da tecnologia, focada em desenvolvimento e manutenção de sistemas.
                            Nossos serviços vão desde a interface usuário-máquina, Front-end, até os serviços que operam por trás dos panos, Back-end.
                        </Paragraph> 
                    </View>
                    <View id='aboutright' display='flex' flex={1} alignItems='center' justifyContent='center' margin='30px' flexWrap='wrap'>
                        <View id='aboutcard' margin='10px 30px 10px 30px' padding='10px 30px 10px 30px' box-shadow='0 1px 10px rgba(0, 0, 0, 0.4)' display='flex' flexDirection='column' alignItems='center'>
                            <FaRegCompass size='100px' color={secondaryColor} style={{ margin: 20 }}/>
                            <Paragraph margin='0px' text-align='center' >Como uma empresa em crescimento, estamos procurando nosso norte. Primeiro o Butiazal, Depois o mundo!
                            </Paragraph> 
                        </View>
                        <View id='aboutcard' margin='10px 30px 10px 30px' padding='10px 30px 10px 30px' box-shadow='0 1px 10px rgba(0, 0, 0, 0.4)' display='flex' flexDirection='column' alignItems='center'>
                            <BiTask size='100px' color={secondaryColor} style={{ margin: 20 }}/>
                            <Paragraph margin='0px' text-align='center' >Sempre buscando cada vez mais projetos e desenvolvendo-os alinhados às tendências do mercado de tecnologia.
                            </Paragraph>      
                        </View>
                        <View id='aboutcard' margin='10px 30px 10px 30px' padding='10px 30px 10px 30px' box-shadow='0 1px 10px rgba(0, 0, 0, 0.4)' display='flex' flexDirection='column' alignItems='center'>
                            <IoMdPeople size='100px' color={secondaryColor} style={{ margin: 20 }}/>
                            <Paragraph margin='0px' text-align='center' >A iTaquari também tem interesse em parcerias com outras empresas, visando o crescimento mútuo do setor.
                            </Paragraph>      
                        </View>
                    </View>   
                </View>
            </View>
        </Section>
    )
}

export default Section4