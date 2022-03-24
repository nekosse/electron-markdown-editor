import React, { useState } from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SidebarItem } from '../models/SidebarItem'

type SidebarLinkProps = {
  item: SidebarItem
  items: SidebarItem[]
}

const SidebarLink = styled(Link)<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  padding: 0.5rem;
  height: 3.75rem;

  text-decoration: none;
  color: ${({ selected }) => (selected ? '#ffffff' : '#a5a5a5')};
  background-color: ${({ selected }) => (selected ? '#527455' : '#044020')};

  &:hover {
    background-color: #48705b;
    border-left: 4px solid #ffffff;
    color: #ffffff;
  }
`

const SidebarLabel = styled.span`
  margin-left: 1rem;
`

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.125rem;
  height: 3.75rem;
  padding-left: 1.5rem;
  text-decoration: none;
  color: #a5a5a5;
  &:hover {
    background-color: #48705b;
    color: #ffffff;
  }
`

const SidebarMenu: FC<SidebarLinkProps> = ({ item, items }) => {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = () => {
    setSubnav(!subnav)
    items.map(it => {
      it.selected = false
    })

    item.selected = true
  }
  return (
    <>
      <SidebarLink to={item.path} onClick={showSubnav} selected={item.selected}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item?.subnav && subnav ? item?.iconClosed : item?.iconOpened}
        </div>
      </SidebarLink>
      {subnav &&
        item?.subnav?.map((subnavItem, index) => {
          return (
            <DropdownLink to={subnavItem.path} key={index}>
              {subnavItem.icon}
              <SidebarLabel>{subnavItem.title}</SidebarLabel>
            </DropdownLink>
          )
        })}
    </>
  )
}

export default SidebarMenu
