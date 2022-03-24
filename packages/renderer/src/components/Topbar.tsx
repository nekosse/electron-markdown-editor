import React, { FC } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineMenu } from 'react-icons/ai'
import styled from 'styled-components'
import LogoJardin from '../images/logo-jardin.svg'

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  background-color: #0a6823;
`
const NavIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 2rem;
`

const Topbar: FC<{
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  visible: boolean
}> = ({ setVisible, visible }) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon onClick={() => setVisible(!visible)}>
            <AiOutlineMenu></AiOutlineMenu>
          </NavIcon>
          <img className="logoJardin" src={LogoJardin} />
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Topbar
