import React from 'react'
import { Box, Center, Image } from '@chakra-ui/react'

import FluxLogoPrimary from '../assets/images/fluxlogoprimary.png'

function Header(){
  return (
    <header>
      <Box pl={6} pr={6} pt={3} pb={3}>
        <Center>
          <Image src={FluxLogoPrimary} alt='Flux Logo' w={90}/>
        </Center>
      </Box>
    </header>
  )
}

export default Header