import { useRouteError } from "react-router-dom";
import { Box, Flex, Heading, Text} from '@chakra-ui/react'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex direction="column" justify="center" align="center" >
      <Box>
        <Heading as="h1">Oops!</Heading>
      </Box>
      <Box>
        <Text>Sorry, an unexpected error has occurred.</Text>   
      </Box>
      <Box>
        <Text>
          <i>{error.statusText || error.message}</i>
        </Text>
      </Box>
    </Flex>
  );
}