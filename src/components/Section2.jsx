import React, { useState } from 'react'

import { View, Text, Section, secondaryColor, Paragraph, Touchable, lightColor } from '../styled/common'


import { FaRegLightbulb, FaLock } from 'react-icons/fa'
import { IoMdOptions } from 'react-icons/io'
import { RiHomeWifiFill, RiHandHeartLine, RiQuestionLine } from 'react-icons/ri'
import { IoThermometerOutline } from 'react-icons/io5'

const Section2 = () => {
    const [active, setActive] = useState('light')

    const textSelector = () => {
        if (active === 'light')
            return 'O mais amplo suporte disponível no mercado em relação à iluminação de espaços, rápido e intuitivo.'+
             ' Controle o estado, as cores e a temperatura de sua lâmpada inteligente.'
        if (active === 'term')
            return 'Como outro pilar essencial da automação residencial, disponibilizamos acompanhamento para dispositivos'+
            ' de supervisão e controle de temperatura. A climatização com recursos inteligentes e sensitivos.'
        return 'Indispensável, uma maneira de ter certeza sobre o estado de portas, portões e janelas de sua casa.'+
        ' A Comodidade aliada à segurança como um fator de extrema importância, nada mais contemporâneo que isso.'
    }

    return (
        <Section id='description'>
            <View id='container2' min-height='100vh' display='flex' padding='0px 25px 0px 25px' flexDirection='column' justifyContent='flex-start' alignItems='flex-start'>
                <Text id='desctitle' fontSize='30px' color={secondaryColor} margin='0px' padding='20px 20px 20px 90px'>CONHEÇA O HAUS AN</Text>
                <View id='containerdesc' display='grid' grid-template-columns='1fr 1fr' padding='0px 70px 0px 70px'>
                        <View id='leftdesc' display='flex' flexDirection='column'  alignItems='center' justifyContent='flex-start' margin={30}>  
                            <RiHomeWifiFill size='100px' color={secondaryColor} style={{ marginBottom: 10 }}/>
                            <Paragraph textAlign='justify' fontSize='20px' margin='0px 0px 20px 0px' margin-top='10px'>
                                Uma ideia. A ideia de tornar ações domésticas rotineiras mais 
                                <span style={{ color: secondaryColor, fontWeight: 'bold' }}> confortáveis</span>.
                                Controle seus dispositivos inteligentes através de nosso aplicativo, além do controle por toque e da possibilidade de conexão com 
                                <span style={{ color: secondaryColor, fontWeight: 'bold' }}> Alexa</span>,
                                disponibilizamos um controle de voz próprio.
                            </Paragraph>
                            <View id='descbuttons' display='grid' grid-template-columns='1fr 1fr 1fr' grid-gap='50px' margin='20px 0px 0px 0px' padding='20px'>
                                <Touchable id='descicons' onClick={() => setActive('light')} backgroundColor={active === 'light' ? secondaryColor : null}>
                                    <FaRegLightbulb size='5vw' color={active === 'light' ? lightColor : secondaryColor} />
                                </Touchable>
                                <Touchable id='descicons' onClick={() => setActive('term')} backgroundColor={active === 'term' ? secondaryColor : null}>
                                    <IoThermometerOutline size='5vw' color={active === 'term' ? lightColor : secondaryColor} />
                                </Touchable>
                                <Touchable id='descicons' onClick={() => setActive('lock')} backgroundColor={active === 'lock' ? secondaryColor : null}>
                                    <FaLock size='5vw' color={active === 'lock' ? lightColor : secondaryColor} />
                                </Touchable>
                            </View>
                            <View>
                                <Text margin='30px 0px 30px 0px' fontSize='22px' color={secondaryColor}>{active === 'light' ? 'Iluminação' : active === 'term' ? 'Climatização' : 'Segurança'}</Text>
                            </View>
                            <Paragraph id='icontexts' margin='0px' textAlign='justify'>
                                {textSelector()}
                            </Paragraph>
                        </View>
                        <View id='rightdesc' display='flex' flex={1} flexDirection='column' alignItems='center' justifyContent='flex-start' margin={30}>
                            {/* <View display='flex' flexDirection='column'  alignItems='center'>
                                <BsEye size='60px' style={{ marginBottom: 10 }} color={secondaryColor} />
                                <Text fontSize='20px' margin='0px' color={secondaryColor}>Design Intuitivo</Text>
                                <Paragraph fontSize='20px' textAlign='justify'  margin='20px 0px 20px 0px'>Visando uma melhor expiriência de usuário, tanto o layout geral como a paleta de cores foram pensados para melhor cumprir o papel de facilitador.</Paragraph>
                            </View> */}
                            <View display='flex' flexDirection='column' alignItems='center'>
                                <IoMdOptions size='60px' style={{ marginBottom: 10 }} color={secondaryColor} />
                                <Text fontSize='20px' margin='0px' color={secondaryColor}>Acessibilidade</Text>
                                <Paragraph fontSize='20px' textAlign='justify'  margin='20px 0px 20px 0px'>Por padrão o aplicativo contém opções disponíveis para os modos de daltonismo, bem como controle dos dispositivos por voz.</Paragraph>
                            </View>
                            <View display='flex' flexDirection='column' alignItems='center'>
                                <RiHandHeartLine size='60px' style={{ marginBottom: 10 }} color={secondaryColor} />
                                <Text fontSize='20px' margin='0px' color={secondaryColor}>Interface Amigável</Text>
                                <Paragraph fontSize='20px' textAlign='justify'  margin='20px 0px 40px 0px'>Uma atividade tão comum como acender uma lâmpada não deveria exigir um curso superior, não é mesmo?</Paragraph>
                            </View>
                            <View display='flex' flexDirection='column' alignItems='center'>
                                <RiQuestionLine size='60px' style={{ marginBottom: 10 }} color={secondaryColor} />
                                <Text fontSize='20px' margin='0px' color={secondaryColor}>Haus An? An?</Text>
                                <Paragraph fontSize='20px' textAlign='justify'  margin='20px 0px 40px 0px'>Em uma tradução livre do alemão, "casa ligada", uma singela homenagem aos imigrantes alemães do Rio Volga que nos trouxeram até aqui.</Paragraph>
                            </View>
                        </View> 
                </View>
            </View>
        </Section>
        
    )
}

export default Section2