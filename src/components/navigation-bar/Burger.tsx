import { Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { CloseIcon } from '@chakra-ui/icons'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { useLinks } from './Links'

const Burger = (): JSX.Element => {
  const links = useLinks()
  const [menuItems, setMenuItems] = useState<Array<JSX.Element>>()

  // Generate the menu items
  useEffect(() => {
    if (!links || links.length == 0) return

    const buffer = []
    for (const link of links) {
      buffer.push(<MenuItem>{link}</MenuItem>)
    }

    setMenuItems(buffer)
  }, [ links ])

  return <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton display={{ base: 'block', md: 'none' }}>
          {isOpen ? <CloseIcon /> : <Icon as={HiOutlineMenuAlt4} />}
        </MenuButton>
        <MenuList>
          {menuItems}
        </MenuList>
      </>
    )}
  </Menu>
}

export default Burger