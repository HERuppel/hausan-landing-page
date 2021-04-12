import React from 'react'

import { View, Text, Section, secondaryColor } from '../styled/common'

import Card from './Card'
import ProfilePic from '../assets/profile.jpg'

const Section3 = () => {

    return (
        <Section id='team'>
            <View min-height='100vh' display='block' flexDirection='column' justifyContent='center' alignItems='center'>
               <Text id='teamtitle' textAlign='left' padding='0px 0px 0px 100px' fontSize='35px' color={secondaryColor}>NOSSO TIME</Text>
               <View display='flex' flexWrap='wrap' justifyContent='center'>
                    <Card 
                        photo={ProfilePic}
                        name='Developer'
                        role='Front-end'
                        number={1}
                    />
                    <Card 
                        photo={ProfilePic}
                        name='Developer'
                        role='Back-end'
                        number={2}
                    />
                    <Card 
                        photo={ProfilePic}
                        name='Developer'
                        role='Mobile'
                        number={3}
                    />
                    <Card 
                        photo={ProfilePic}
                        name='Developer'
                        role='Python Dev'
                        number={4}
                    />
                    
               </View>
            </View>
        </Section>
    )
}

export default Section3