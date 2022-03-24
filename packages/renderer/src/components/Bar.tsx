import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Bar.scss'
import { SidebarData } from './SidebarData'
import LogoJardin from '../images/logo-jardin.svg'

const Bar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [stepHeight, setStepHeight] = useState(0)
  const sidebarRef = useRef<any>()
  const indicatorRef = useRef<any>()
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        '.sidebar__menu__item'
      )
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`
      setStepHeight(sidebarItem.clientHeight)
    }, 50)
  }, [])

  // change active index
  useEffect(() => {
    const curPath = location.pathname.split('/')[1]

    const activeItem = SidebarData.findIndex(item => item.section === curPath)
    setActiveIndex(curPath.length === 0 ? 0 : activeItem)
  }, [location])
  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <img className="sidebar__logoJardin" src={LogoJardin} />

        <div className="sidebar__logo">JardinStrator</div>
      </div>

      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {SidebarData.map((item, index) => (
          <Link to={item.path} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Bar
