import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { SidebarData } from './SidebarData'
import SidebarMenu from './SidebarMenu'
import LogoJardin from '../images/logo-jardin.svg'

const SidebarNav = styled.div<{ sidebar: boolean }>`
  display: flex;
  background-color: #044020;
  width: ${({ sidebar }) => (sidebar ? '250px' : '0px')};
  height: 100vh;
  flex-direction: column;
`

const SidebarWrap = styled.div`
  color: #a5a5a5;
`

const Sidebar: FC<{ visible: boolean }> = ({ visible }) => {
  const data = SidebarData
  return (
    <>
      <SidebarNav sidebar={visible}>
        <SidebarWrap>
          {data.map((item, index) => {
            return <SidebarMenu item={item} key={index} items={data} />
          })}
        </SidebarWrap>
        <img className="logoJardin" src={LogoJardin} />
      </SidebarNav>
    </>
  )
}

export default Sidebar
