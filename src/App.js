import * as React from 'react'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import theme from './assets/theme'
import Fonts from './assets/fonts/Fonts'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Grid 
        bg="brand.lightGrey"
        // templateAreas={`"header header header header"
        //                 "... sidebar main ..."
        //                 "... sidebar footer ..."`}
        // gridTemplateRows={'auto 1fr'}
        // gridTemplateColumns={'auto 330px minmax(0px, 750px) auto'}
        templateAreas={`"header "
                          "main"
                          "footer"`
                        }
        gridTemplateRows='auto 1fr auto'
        gridTemplateColumns='1fr'
        gap={['0','4']}   
        w="100vw"
        h="100vh"
        mx="auto"
      >
        <GridItem bg='white' area={'header'} borderBottom='1px' borderColor={"brand.midGrey"}>
          <Header />
        </GridItem>
        {/* <GridItem area={'sidebar'}>
          <Sidebar />
        </GridItem> */}
        <GridItem area={'main'}>
          <Main />
        </GridItem>
        <GridItem pb={20} area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
      {/* <Header /> */}
      {/* <Navigation /> */}
    </ChakraProvider>
  )
}

export default App;
