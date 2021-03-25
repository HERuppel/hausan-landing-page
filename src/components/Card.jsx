import React from 'react'

import { Image, Ul, Item, ImageBox , Li, Content } from '../styled/common'

import { AiOutlineInstagram, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'

const Card = ({ name, photo, role, instagram, linkedin, github }) => {

    const instaLink = instagram ? `https://www.instagram.com/${instagram}` : 'https://www.instagram.com/'
    const linkedinLink = linkedin ? `https://www.linkedin.com/${linkedin}` : 'https://www.linkedin.com/'
    const gitLink = github ? `https://www.github.com/${github}` : 'https://www.github.com/'

    return (
        <Item> 
            <ImageBox> 
                <Image id='photo' height='100%' src={photo} />
            </ImageBox>
            <Ul>
                <Li><a rel='noreferrer' href={instaLink} target='_blank'><AiOutlineInstagram className='i' size='30px' color='#000'></AiOutlineInstagram></a></Li> {/* Li:  fa fa-facebook */}
                <Li><a rel='noreferrer' href={linkedinLink} target='_blank'><AiOutlineLinkedin className='i' size='30px' color='#000'></AiOutlineLinkedin></a></Li> {/* Li:  fa fa-facebook */}
                <Li><a rel='noreferrer' href={gitLink} target='_blank'><AiFillGithub className='i' size='30px' color='#000'></AiFillGithub></a></Li> {/* Li:  fa fa-facebook */}
            </Ul>
            <Content>
                <h2>
                    {name} <br/>
                    <span>{role}</span>
                </h2>
            </Content>
        </Item>
    )
}

export default Card