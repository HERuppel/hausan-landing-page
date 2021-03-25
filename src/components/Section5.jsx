import React from 'react'

import { View, Text, Section, secondaryColor, Input,  TextArea, Touchable, lightColor, darkColor, opacBlack } from '../styled/common'

import { IoMailSharp, IoLocationSharp } from 'react-icons/io5'
import { RiPhoneFill } from 'react-icons/ri'

const Section5 = () => {
    return (
        <Section id='contact'>
            <View id='section5' display='flex' flexDirection='column' align-items='flex-start' justifyContent='flex-start' padding='0px 0px 100px 90px'>
                <Text fontSize='35px' color={secondaryColor} padding='0px 0px 0px 20px' margin='0px'>CONTATO</Text>
                <View id='form' display='grid' grid-template-columns='1fr 2fr'>
                        <View id='info' display='block' margin='35px 0px 0px 0px' justifyContent='flex-start'>
                            <View display='flex' margin='10px'>
                                <View>
                                    <IoLocationSharp size='50px' color={secondaryColor}/>
                                </View>
                                <View display='flex' flexDirection='column'>
                                    <Text margin='5px' color={darkColor}>Localização</Text>
                                    <Text margin='5px' fontSize='17px' color={opacBlack}>Taquari dos Ribeiros -<br/>Zona Rural -<br/>Próximo ao Marumbi</Text>
                                </View>
                            </View>
                            <View display='flex' margin='10px'>
                                <View>
                                    <IoMailSharp style={{ margin: 5 }} size='40px' color={secondaryColor}/>
                                </View>
                                <View display='flex' flexDirection='column'>
                                    <Text margin='5px' color={darkColor}>E-mail</Text>
                                    <Text margin='5px' fontSize='17px' color={opacBlack}>itaquari@gmail.com</Text>
                                </View>
                            </View>
                            <View display='flex' margin='10px'>
                                <View>
                                    <RiPhoneFill style={{ margin: 5 }} size='40px' color={secondaryColor}/>
                                </View>
                                <View display='flex' flexDirection='column'>
                                    <Text margin='5px' color={darkColor}>Fone</Text>
                                    <Text margin='5px' fontSize='17px' color={opacBlack}>+55 (42) 9 9824-3423</Text>
                                </View>
                            </View>
                        </View>
                    <View id='inputs' display='block' width='55vw' margin='40px 0px 0px 0px'>
                        <View id='nameemail' display='grid' grid-template-columns='1fr 1fr' grid-gap='30px'>
                            <Input type='text' id='name' placeholder='Nome' /> 
                            <Input type='text' id='email' placeholder='E-mail' />
                        </View>
                        <View display='grid' width='100%' margin='auto'> 
                            <Input type='text' id='subject' placeholder='Assunto'/>
                            <TextArea id='msg' placeholder='Mensagem'/>
                            <View text-align='center'>
                                <Touchable id='msg' type='submit' backgroundColor={secondaryColor} width='50%' borderRadius='100px' padding='10px' color={lightColor}>
                                    Enviar
                                </Touchable>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Section>
    )
}

export default Section5