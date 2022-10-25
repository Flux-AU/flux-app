import React, {useEffect} from 'react'
import { ChakraProvider, Grid, GridItem, Box, Stack, Button } from '@chakra-ui/react'
import {
  Navigate, Routes, Route, useParams
} from "react-router-dom";
import { useRecoilState } from 'recoil';
import {v4 as uuidv4} from 'uuid';
import { createStore } from "little-state-machine";

import Header from './components/Header'
// import Sidebar from './components/Sidebar'
import Main from './components/Main';
import Footer from './components/Footer'
import theme from './assets/theme'
import Fonts from './assets/fonts/Fonts'
// import AccountSection from './components/Form/AccountSection';
// import StageSection from './components/Form/StageSection'
// import ApplicantDetailsSection from './components/Form/ApplicantDetailsSection';
// import PropertyAddressSection from './components/Form/PropertyAddressSection'
// import AgencyDetailsSection from './components/Form/AgencyDetailsSection';
// import AgencyKnownSection from './components/Form/AgencyKnownSection';
// import PropertyDetailsSection from './components/Form/PropertyDetailsSection';
// import QualifyingQuestionsSection from './components/Form/QualifyingQuestionsSection';
import { StateMachineProvider } from 'little-state-machine';
import { AppRoutes } from './routes'
import { sessionIdState } from './atoms'
import ErrorPage from './ErrorPage';
// import { store } from './store'
// TODO:
// * React Router - route to each part of form with unique URL
// * React Hook Form - handle saving form data and submit

createStore({
  data: {
    hasAccount: Boolean,
    stage: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    postcode: Number,
    agentKnown: Boolean,
    weeklyRent: Number,
    bondAmount: Number,
    leaseStart: Date,
    leaseEnd: Date,
    relationshipStatus: String,
    dependents: Number,
    gender: String,
    dateOfBirth: Date,
    currentAddress: String,
    yearsAtAddress: Number,
    employmentStatus: String,
    jobTitle: String,
    employerName: String

  }
})

function App() {
  const [id, setId] = useRecoilState(sessionIdState)
  
  useEffect(() => {
    const newId = uuidv4()
    setId(newId)
    console.log(newId)

  }, [])
  
  return (
    <>
      <StateMachineProvider>      
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
              <GridItem bg='white' area={'header'} borderBottom='1px' borderColor={"brand.midGrey"} mb={10}>
                <Header />
              </GridItem>
              {/* <GridItem area={'sidebar'}>
                <Sidebar />
              </GridItem> */}
              <GridItem area={'main'}>
                <Routes>
                  <Route path="/" element={<Navigate replace to="/application/account" />} />
                  {/* <Route name="app" path="/" element={<Main />} /> */}
                  <Route name="main" path={`/application/*`} element={<AppRoutes />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
                {/* <Main /> */}
              </GridItem>
              <GridItem pb={20} area={'footer'}>
                <Footer/>
              </GridItem>
            </Grid>
            {/* <Navigation /> */}
          </ChakraProvider>
      </StateMachineProvider>
    </>
  )
}


export default App;
