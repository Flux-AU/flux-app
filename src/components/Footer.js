import React, { useEffect } from 'react'
import { Box, Center, Stack, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { useRecoilState, useRecoilValue } from 'recoil'
import { countState, knowsAgentState } from '../atoms'

const sectionUrls = [
  'account',
  'stage',
  'applicant-details',
  'property-address',
  'agency-details',
  'agency-information',
  'property-details',
  'qualifying-questions'
]

function Footer(){
  let navigate = useNavigate()
  const [ count, setCount ] = useRecoilState(countState)
  const knowsAgent = useRecoilValue(knowsAgentState)

  // call function whenver count state updates
  useEffect(() => {
    console.log('knowsAgent', knowsAgent)
    console.log(count)
    urlHandler()
  }, [count])

  const urlHandler = () => {
    // console.log('URL handler called')
    navigate(`/application/${sectionUrls[count]}`)
  }

  const handleBack = () => {
    if(count === 0){
      return
    } else if (!knowsAgent){ 
      setCount(count-2)
    } else {
      setCount(count-1)
    }
  }
  const handleNext = () => {
    if (!knowsAgent) {
      setCount(count+2)
    } else{
      setCount(count+1)
    }
  }
  const handleSubmit = () => {
    console.log('Data Submitted')
  }
  
  return (
    <footer>
      <Box pt={3} borderTop="1px" borderColor="brand.midGrey" w="100%">
        <Stack pt={6} direction='row' align='center' justify='space-around'>
          <Button _dicolorScheme='black' _hover={{bg: 'brand.midGrey'}} variant='outline' colorScheme='black' textTransform={"uppercase"} pl={[8,14]} pr={[8,14]} pt={2} pb={2} onClick={handleBack}>
            Back
          </Button>
          {count===10 ? 
          <Button bg="brand.primary" _hover={{ bg: 'brand.primaryDark' }} color="#fff" variant='solid' textTransform={"uppercase"} pl={[8,14]} pr={[8,14]} pt={2} pb={2} onClick={handleSubmit} type="submit">
            Submit
          </Button> : 
          <Button bg="brand.primary" _hover={{ bg: 'brand.primaryDark' }} color="#fff" variant='solid' textTransform={"uppercase"} pl={[8,14]} pr={[8,14]} pt={2} pb={2} onClick={handleNext}>
            Next
          </Button>}
        </Stack>
      </Box>
    </footer>
  )
}

export default Footer