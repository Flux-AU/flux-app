import React from 'react'
import { 
  FormControl, 
  FormLabel, 
  Input, 
  Grid,
  GridItem } from '@chakra-ui/react'

function ContractDetailsSection() {
  return (
    <>
      <Grid 
          mt={4}
          templateAreas={`"name"
                          "demographic"
                          "contact"`
                          }
          gridTemplateRows="repeat(3, 1fr)" 
          gridTemplateColumns="1fr 1fr" 
          alignItems="center"
          justifyItems="center"
          gap={['1','4']}
          w="auto"
          mx="auto">
          <GridItem justifySelf="end">
            <FormControl>
                <FormLabel
                  color="black"
                  zIndex="4"
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  position="absolute"
                  top="1px"
                  left={3}
                >
                  Agency Name
                </FormLabel>
                <Input
                  focusBorderColor="brand.primary"
                  bg="white"
                  w={["200px"]}
                  pt={6}
                  pb={4}
                  px={3}
                  borderRadius="md"
                  fontSize="sm"
                  color={"black"}
                />
            </FormControl>
          </GridItem>
          <GridItem justifySelf="start">
            <FormControl>
              <FormLabel
                color="black"
                zIndex="4"
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                position="absolute"
                top="1px"
                left={3}
              >
                Realtor Name
              </FormLabel>
              <Input
                focusBorderColor="brand.primary"
                bg="white"
                w={["200px"]}
                pt={6}
                pb={4}
                px={3}
                borderRadius="md"
                fontSize="sm"
                color={"black"}
              />
            </FormControl>
          </GridItem>
          <GridItem justifySelf="end">
            <FormControl>
                <FormLabel
                  color="black"
                  zIndex="4"
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  position="absolute"
                  top="1px"
                  left={3}
                >
                  Weekly Rent
                </FormLabel>
                <Input
                  focusBorderColor="brand.primary"
                  bg="white"
                  w={["200px"]}
                  pt={6}
                  pb={4}
                  px={3}
                  borderRadius="md"
                  fontSize="sm"
                  color={"black"}
                />
            </FormControl>
          </GridItem>
          <GridItem justifySelf="start">
            <FormControl>
              <FormLabel
                color="black"
                zIndex="4"
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                position="absolute"
                top="1px"
                left={3}
              >
                Bond Amount
              </FormLabel>
              <Input
                focusBorderColor="brand.primary"
                bg="white"
                w={["200px"]}
                pt={6}
                pb={4}
                px={3}
                borderRadius="md"
                fontSize="sm"
                color={"black"}
              />
            </FormControl>
          </GridItem>
          <GridItem justifySelf="end">
            <FormControl>
                <FormLabel
                  color="black"
                  zIndex="4"
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  position="absolute"
                  top="1px"
                  left={3}
                >
                  Lease Start
                </FormLabel>
                <Input
                  focusBorderColor="brand.primary"
                  bg="white"
                  w={["200px"]}
                  pt={6}
                  pb={4}
                  px={3}
                  borderRadius="md"
                  fontSize="sm"
                  color={"black"}
                />
            </FormControl>
          </GridItem>
          <GridItem justifySelf="start">
            <FormControl>
              <FormLabel
                color="black"
                zIndex="4"
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                position="absolute"
                top="1px"
                left={3}
              >
                Lease End
              </FormLabel>
              <Input
                focusBorderColor="brand.primary"
                bg="white"
                w={["200px"]}
                pt={6}
                pb={4}
                px={3}
                borderRadius="md"
                fontSize="sm"
                color={"black"}
              />
            </FormControl>
          </GridItem>
      </Grid>
    </>
  )
}

export default ContractDetailsSection