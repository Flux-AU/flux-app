import React from 'react'
import { VStack, Box, Button } from '@chakra-ui/react'

const SidebarItems = [
  'Account',
  'Stage',
  'Applicant Details',
  'Property Details',
  'Qualifying Questions',
  'Identity Verification',
  'Last Step'
]


function Sidebar(){

  return (
    <nav>
      <VStack bg="white" borderRadius={10} p={4} boxShadow='xl' align="start">
        {SidebarItems.map(item => (
          <Button colorScheme={'None'} color={"black"} fontWeight={"normal"} _hover={{color: 'brand.primary'}}>
            <Box mb={3}>
              {item}
            </Box>
          </Button>
        ))}
      </VStack>
    </nav>
  )
}

export default Sidebar