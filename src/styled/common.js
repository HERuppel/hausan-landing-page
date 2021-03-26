import styled, { createGlobalStyle } from 'styled-components'

export const primaryColor = '#00ACCE'

export const secondaryColor = '#0096DA'

export const greyTextColor = '#DBDBDB'

export const lightColor = '#FFF'

export const darkColor = '#141414'

export const opacBlack = '#7A7A7A'

export const firstMagenta = '#99005C'

export const secondMagenta = '#B70072'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth !important;
        margin: 0;
        overflow-x: hidden !important;
    }

    html {
        overflow-x: hidden !important;
    }

    @media (max-width: 548px) {
        #descbuttons {
            grid-gap: 15px;
            padding: 0px;
        }

        #containerabout {
            padding: 4vw;
        }

        #containerdesc {
            padding: 4vw;
        }

        #section5 {
            padding: 0px 0px 100px 0px;
            align-items: center;
        }

        #copyright {
            text-align: left;
        }

        #footer {
            padding: 0px;
        }

    }

    @media (max-width: 1100px) {
        
        #form {
            grid-template-columns: 1fr;
        }

        #rightdesc {
            padding: 0px;
        }
        

        #desctitle {
            padding: 20px 0px 0px 0px;
        }

        #teamtitle {
            padding: 20px 0px 0px 0px;
            text-align: center;
        }

        #abouttitle {
            padding: 20px 0px 0px 0px;
        }

        #aboutright {
            margin: 0px;
        }

        #5rightcontents {
            margin: 0px;
        }

        #aboutleft {
            padding: 0px;
        }

        #section4 {
            align-items: center;
        }

        #container2 {
            align-items: center;
        }
        
        #containerdesc {
            display: flex;
            flex-direction: column;
        }
    
    }

    @media (max-width: 700px) {
        #form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #nameemail {
            grid-template-columns: 1fr;
            grid-gap: 10px;
        }

        #buildtext {
            display: flex;
            flex-direction: row;
        }

    }

    @media (max-width: 1366px) {
        img:not(#photo) {
            max-width: 70%; 
            max-height: 70%;
        }

        #buttoncontainer {
            flex-direction: column;
        }

         
    }

    @media (max-width: 900px) {
        #footer {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {

        
        #menubtn {
            display: flex;
        }

        #touchable {
            width: 260px;
        }

        #container1 {
            display: flex;
            flex-direction: column;
        }

        #containerabout {
            display: flex;
            flex-direction: column;

        }

        #section4 {
            padding: 0px;
        }

        #container2 {
            padding: 0px;
        }

        #menulinks {
            display: none;
        }

    }

    //TODO: MEDIA 768PX WIDTH NAVBAR === MENU TOUCH
    @media (max-width: 400px) {

        #storebuttons {
            max-width: 50%;
            max-height: auto;
        }
    }

    @media (max-width: 300px) {
        #title1 {
            font-size: 15vw;
        }
    }


`

export const View = styled.div`
    max-width: 100vw;

    &#aboutcard {
        transition: 0.5s;
        height: 320px;
        width: 220px;
    }

    &#aboutcard:hover {
        transition: 0.5s;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
    }
    ${props => props}
`

export const Image = styled.img`
    src: ${props => props.src ? props.src : null};
    alt: ${props => props.alt ? props.alt : null};
    height: auto;
    max-width: 100%;
    display: block;
    transform: ${props => props};
    filter: ${props => props};
`

export const Item = styled.div`
    position: relative;
    width: 300px;
    height: 400px; 
    display: flex;
    justify-content: center; 
    align-items: center;
    margin: 40px;
    background-color: '#000';
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
    overflow: hidden;

`

export const Content = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-color: #FFF;
    width: 100%;
    height: 80px;
    text-align: center;
    box-sizing: border-box;
    transition: 0.5s;
    transform: translateY(100px);

    & h2 {
        font-size: 25px;
        padding: 0;
        margin: 5px 0 0;
    }

    & span {
        color: #bbb;
        font-size: 18px;
    }

    ${Item}:hover & {
        transform: translateY(0);
    }

    ${props => props};
`

export const ImageBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    & ${Image} {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s;
        opacity: 1;
    }

    ${Item}:hover & ${Image} {
        opacity: 0.3;
    }
`

export const Ul = styled.ul`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: flex;
    margin: 0%;
    padding: 0;
`

export const Li = styled.li`
    list-style: none;

    & a {
        text-decoration: none;
    }

    & .i {
        display: block;
        width: 45px;
        height: 45px;
        color: #FFF;
        position: relative;
        font-size: 25px;
        text-align: center;
        line-height: 45px;
        border-radius: 50%;
        margin: 0 5px;
        transition: 0.5s;
        transform: translateY(200px);
        opacity: 0;
    }

    ${Item}:hover ${Ul} & .i {
        transform: translateY(0);
        opacity: 1;
    }

    ${Item}:hover ${Ul} &:nth-child(1) {
        transition-delay: 0.1s;
    }
`

export const MenuContainer = styled.div`
    display: ${props => props.display ? props.display : 'none'};
    position: fixed;
    z-index: 15;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 97%;
    height: 97%;
    background: ${lightColor};
    margin: auto;
    border-radius: 10px;
`

export const IconWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    left: 0;
    bottom: 0;
    background: white;
    transition: all .5s;
    transform: translateY(100%);
`

export const Icon = styled.i`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: ${secondaryColor};
    visibility: hidden;
    position: absolute;

    ${IconWrapper}:hover & {
        transform: translateY(0);
    }

`

export const Section = styled.section(props => ({
    ...props
}))

export const ScrollTop = styled.a`
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: ${firstMagenta};
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: none;
    z-index: 1;
    margin: 0px 20px 20px 0px;
    justify-content: center;
    align-items: center;
    visibility:hidden;
    opacity: 0;
    transition: visibility 0.5s linear, opacity 0.5s linear;


    &:hover {
        cursor: pointer;
        background-color: #850050;
    }

    &:focus {
        outline: none;
    }
`


export const Nav = styled.nav`
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: ${props => props.background ? 'rgba(0, 0, 0, .4)' : null};
    transition: ${props => props.background ? '500ms' : '500ms'};
    z-index: 9;
    ${props => props};
    
`

export const NavItem = styled.button`
    background: transparent;
    border-radius: 20px;
    outline: none;
    border-width: 0px;
    font-size: 20px;
    margin: 20px;
    color: ${greyTextColor};
    padding: 5px 10px 5px 10px;
    display: flex;


    ${props => props};
`

export const H2 = styled.h2`
    ${props => props};
`

export const FooterComponent = styled.footer`
    ${props => props}
`

export const TextArea = styled.textarea`
    display: flex;
    border-radius: 30px;
    border: 1px ${greyTextColor} solid;
    width: 100%;
    height: 100px;
    border-radius: 15px;
    font-family: 'Open Sans';
    resize: vertical;
    min-height: 40px;
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;


    &:focus {
        outline: none;
        transition: 0.3s;
        box-shadow: 0 0px 5px rgba(0, 172, 206, 1);
    }
`

export const Input = styled.input`
    padding: 10px 0px 10px 10px;
    border-radius: 30px;
    border: 1px ${greyTextColor} solid;
    display: flex;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;

    &::placeholder {
        text-align: left;
        font-family: 'Open Sans';
    }

    &:focus {
        transition: 0.3s;
        outline: none;
        box-shadow: 0 0px 5px rgb(0, 172, 206);
    }

    ${props => props}

`

export const Aa = styled.a`
    color: ${props => props.color ? props.color : lightColor};
    text-decoration: none;
    scroll-behavior: smooth;
    font-family: 'Open Sans';
    font-weight: bold;
    position: relative;
    padding: 5px;
    font-size: 16px;

    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: ${firstMagenta};
        transition: all 300ms ease-in-out;
    }

    &:not(#menubtna):hover::after {
        left: 25%;
        width: 50%;
    }

    &#menubtna:hover {
        cursor: pointer;
    }
`

export const LinkedText = styled.a`
    text-decoration: none;
    ${props => props};
    font-family: 'Open Sans';

    &:hover {
        cursor: pointer;
    }
`

export const Touchable = styled.button`
    outline: none;
    background: transparent;
    border-width: 0px;
    cursor: pointer;
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 18px;
    transition: 0.5s;

    &:hover#msg {
        transition: 0.5s;
        background-color: #0279b1;
    }

    &#descicons {
        padding: 10px 20px 10px 20px;
        box-shadow: 0 1px 10px rgba(0, 0, 0, .4);
    }


    &:hover#descicons {
        outline: none;
        transition: 0.3s;
        box-shadow: 0 5px 20px rgba(0, 0, 0, .2);
    }

    &:hover:not(#msg, #descicons){
        background-color: rgba(0, 0, 0, .05);
    }


    &:focus {
        outline: none;
    }
    ${props => props}
`

export const Text = styled.h1(props => ({
    fontSize: 20,
    color: greyTextColor,
    margin: 20,
    ...props
}))

export const Paragraph = styled.p `
    font-size: 20px;
    margin: 20px;
    color: ${opacBlack};
    ${props => props};
`

