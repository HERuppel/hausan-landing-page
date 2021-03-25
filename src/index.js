import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle, ScrollTop } from './styled/common'

import { AiOutlineArrowUp } from 'react-icons/ai'

import Nav from './components/Nav'
import Menu from './components/Menu'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Footer from './components/Footer'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Nav />
    <Menu />
    <ScrollTop id='scrolltop' href='#start'>
      <AiOutlineArrowUp color='#FFF' size='30px' />
    </ScrollTop>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Footer />
  </React.Fragment>
  ,document.getElementById('root')
)
