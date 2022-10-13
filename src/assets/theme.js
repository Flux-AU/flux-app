import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    "primaryDark": '#e71882',
    "primary": '#ff1b90', //primary
    "primaryLight": '#ff70b9',
    "black": '#fff',
    "lightGrey": '#f6f6f6',
    "midGrey": "#ececec",
    "darkGrey": "#d4d4d4",
    "hoverGrey": "#B7B7B7",
  },
}

const theme = extendTheme({ 
  colors,
  fonts: {
      heading: `'Metropolis Bold', sans-serif`,
      body: `'Inter', sans-serif`,
  }

})

export default theme