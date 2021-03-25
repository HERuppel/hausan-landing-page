import React from 'react'

import { View, Text, Section, secondaryColor } from '../styled/common'

import Card from './Card'
import ProfilePic from '../assets/valmor.jpg'
import ProfilePic2 from '../assets/tuca.jpg'
import ProfilePic3 from '../assets/neni.jpeg'
import ProfilePic4 from '../assets/venancio.jpg'
import ProfilePic5 from '../assets/fcaminhao.jpg'
import ProfilePic6 from '../assets/sanfra.png'
import ProfilePic7 from '../assets/carimbo.png'

const Section3 = () => {

    return (
        <Section id='team'>
            <View min-height='100vh' display='block' flexDirection='column' justifyContent='center' alignItems='center'>
               <Text id='teamtitle' textAlign='left' padding='0px 0px 0px 100px' fontSize='35px' color={secondaryColor}>NOSSO TIME</Text>
               <View display='flex'  justifyContent='center' flexWrap='wrap'>
                    <Card 
                        photo={ProfilePic6}
                        name='Lando "Landinho Ribeiro"'
                        role='Presidente'
                    />
                    <Card 
                        photo={ProfilePic2}
                        name='Antônio "Tuca"'
                        role='Front-End'
                    />
                    <Card 
                        photo={ProfilePic3}
                        name='Dirlei "Neni do Cambau"'
                        role='Back-End'
                    />
                    <Card 
                        photo={ProfilePic4}
                        name='Mariano "Batateiro"'
                        role='Mobile'
                    />
                    <Card 
                        photo={ProfilePic5}
                        name='Odilor'
                        role='Designer'
                    />
                    <Card 
                        photo={ProfilePic}
                        name='Valmor "Da Prefeitura"'
                        role='Quebra-galho'
                    />
                    <Card 
                        photo={ProfilePic7}
                        name='Carimbo'
                        role='Beta Tester'
                    />
               </View>
            </View>
        </Section>
    )
}

export default Section3