import React from 'react'
import { Box, Center, Stack, Button } from '@chakra-ui/react'

function Footer({ handleBack, handleNext, handleSubmit, finalStage=false }){

  return (
    <footer>
      <Box pt={3} borderTop="1px" borderColor="brand.midGrey" w="100%">
        <Stack pt={6} direction='row' align='center' justify='space-around'>
          <Button colorScheme='black' _hover={{bg: 'brand.midGrey'}} variant='outline' textTransform={"uppercase"} pl={[8,14]} pr={[8,14]} pt={2} pb={2} onClick={handleBack}>
            Back
          </Button>
          {finalStage ? 
          <Button bg="brand.primary" _hover={{ bg: 'brand.primaryDark' }} color="#fff" variant='solid' textTransform={"uppercase"} pl={[8,14]} pr={[8,14]} pt={2} pb={2} onClick={handleSubmit}>
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