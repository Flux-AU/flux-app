import React from 'react'
import { Box, Heading, Stack, FormControl, FormLabel, VStack, Flex, useRadioGroup } from '@chakra-ui/react'
import { useStateMachine } from "little-state-machine";
import { useForm } from 'react-hook-form'
import { withRouter } from "react-router-dom";

import updateAction from "../../updateAction";
import RadioCard from './RadioCard';
import { dialogue } from '../../dialogue'

function AccountSection(props) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = data => {
    actions.updateAction(data);
  };

  const [text] = dialogue.filter(item => item.section === 'Account Section')

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <>
      <Flex direction="column" align="center" justify="center" mb="40px" >
        <Heading as="h2" textAlign='center' >{text.headings[0]}</Heading>
        <Heading as="h2" textAlign='center'>{text.headings[1]}</Heading>
      </Flex>
      <Stack direction="column" w="100%" alignSelf="center" justifySelf="center" mb={10}>
        <Flex direction="column" align="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="account">
              <FormLabel cursor="pointer" mb="16px" mx="auto">
                <VStack {...group} spacing={[3, 3, 4]}>
                  {text.options.map((value) => {
                    const radio = getRadioProps({ value })
                    return (
                      <RadioCard {...register("hasAccount")} key={value} {...radio} w={["200px", "300px"]}>
                        {value}
                      </RadioCard>
                    )
                  })}
                </VStack>
              </FormLabel>
            </FormControl>
          </form>
        </Flex>
      </Stack>
    </>
  )
}

export default AccountSection