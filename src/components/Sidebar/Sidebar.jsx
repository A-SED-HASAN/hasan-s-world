import React from 'react'
import Menu from './Menu'
import ToggleBtn from './ToggleBtn'
import Overlay from './Overlay'
import { useGlobalContext } from '../../context'
export default function Sidebar() {
  const { toggleSidebar, isSidebarOpen } = useGlobalContext()

  return (
    <>
      <Overlay closeFn={toggleSidebar} condition={isSidebarOpen} />
      <ToggleBtn />
      <Menu />
    </>
  )
}
