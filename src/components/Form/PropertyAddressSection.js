import React, { useEffect, useState } from 'react'
import { 
  Center, 
  Heading, 
  CircularProgress, 
  VStack, 
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Icon
} from '@chakra-ui/react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useRecoilValue } from 'recoil'
import { MdLocationOn } from "react-icons/md";

// import { addressState } from '../../atoms'
import AutoComplete from './AutoComplete';
import { dialogue } from '../../dialogue'
import mapStyles from '../../assets/mapStyles'
import { geoCodeState, selectedAddressState } from '../../atoms';

const containerStyle = {
  width: '580px',
  height: '200px'
};

const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  draggable: false
}

const iconStyle = {
  path: 'M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
  fillColor: "brand.primary",
  scale: 2,
}

function PropertyAddressSection() {

  const [text] = dialogue.filter(item => item.section === 'Property Address Section')

  const firstName= 'Will'

  return (
    <div>
      <Center mb="40px">
        <Heading as="h2" fontSize='2em' w="30ch" textAlign="center">{text.headings[0]}{firstName}{text.headings[1]}</Heading>
      </Center>
      <Center>
        <Places />
      </Center>
    </div>
  )
}


// Load the Google Maps API
function Places() {
  const selectedAddress = useRecoilValue(selectedAddressState)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  })

  if (!isLoaded) return <Center><CircularProgress isIndeterminate color='brand.primary' /></Center>

  return (
    <>
      <Flex direction='column' justify='center' align='center'>
        {selectedAddress ? <Map /> : null}
        <Center mt='20px'>
          <AddressBar />
        </Center>
      </Flex>
    </>
  )
}

// Address bar to show rental
function AddressBar() {

  return (
    <AutoComplete />
    )
}

// Render the map
function Map() {
  const geoCode = useRecoilValue(geoCodeState)

  const [map, setMap] = useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(geoCode);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <VStack>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={geoCode}
        zoom={13}
        options={mapOptions}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        {geoCode && <Marker zIndex={29999} position={geoCode} animation='DROP'/>}
      </GoogleMap>
    </VStack>
  )
}

export default PropertyAddressSection