import React from 'react'

import { View, Text, Image, Section, lightColor, Touchable } from '../styled/common'

import AppDemo from '../assets/AppDemo.png'

import { SiApple, SiGoogleplay } from 'react-icons/si'

const Section1 = () => {

    return (
        <Section id='start'>
            <View id='container1' min-height='100vh' padding='0px 0px 20px 0px' display='grid' background='linear-gradient(180deg,#0096DA, #00ACCE)' grid-template-columns='1fr 1fr'>
                <View display='flex' alignItems='center' flexDirection='column' justifyContent='center' flex={2}>
                    <Text id='title1' color={lightColor} fontSize='50px'>HAUS AN</Text>
                    <View margin='20px'>
                        <Text fontSize='20px' color={lightColor} margin='0px' textAlign='center' padding='0px 20px 0px 20px'>Seu gerenciador de espaços inteligentes.</Text>
                    </View>
                    <View id='buttoncontainer' display='flex' justifyContent='center' alignItems='center' >
                        <Touchable id='touchable' width='230px' border-width='1px' border-color={lightColor} border-radius='10px' margin='2vw' padding='10px 30px 10px 30px'>
                            <Text fontSize='12px' margin='0px'>Disponível na</Text>
                            <View display='flex' justify-content='center' align-items='center'>
                                <SiGoogleplay size='30px' color={lightColor} />
                                <Text color={lightColor} fontSize='18px' margin='0px 5px 0px 10px'>Google Play</Text>
                            </View>
                        </Touchable>
                        <Touchable id='touchable' width='230px' border-width='1px' border-color={lightColor} border-radius='10px' margin='2vw'  padding='10px 30px 10px 30px'>
                            <Text fontSize='12px' margin='0px'>Disponível na</Text>
                            <View display='flex' justify-content='center' align-items='center'>
                                <SiApple size='30px' color={lightColor} />
                                <Text color={lightColor} fontSize='18px' margin='0px 5px 0px 10px'>App Store</Text>
                            </View>
                        </Touchable>
                    </View>
                </View>
                <View justifyContent='center' display='flex' alignItems='center' padding='20px 0px 20px 0px' flex={1}>
                    <Image src={AppDemo} />
                </View>
            </View>

        </Section>
    )
}

export default Section1