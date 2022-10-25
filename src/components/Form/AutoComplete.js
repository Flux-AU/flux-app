import { useRef, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Icon
} from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go'
import { useRecoilState } from 'recoil'

import { geoCodeState, selectedAddressState } from '../../atoms'

// ** Remember to restrict google api to domain

const locationRestrictions = [
  {
    city: 'Brisbane',
    lat: -27.4705,
    lng: 153.0260,
  },
]

const AutoComplete = () => {
  const [ geoCode, setGeoCode ] = useRecoilState(geoCodeState)
  const [ selectedAddress, setSelectedAddress ] = useRecoilState(selectedAddressState)

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const center = { lat: locationRestrictions[0].lat, lng: locationRestrictions[0].lng}
  const defaultBounds = {
    north: center.lat + 0.5,
    south: center.lat - 0.5,
    east: center.lng + 0.5,
    west: center.lng - 0.5,
  };
  const options = {
    types: ['address'],
    bounds: defaultBounds,
    componentRestrictions: { country: "au" },
    fields: ["address_components", "geometry", "icon", "name"],
    strictBounds: true
  };
  
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
    inputRef.current,
    options
    );
    autoCompleteRef.current.setFields(["place_id", "geometry", "name"]);
    // autoCompleteRef.current.clearInstanceListeners(inputRef);
    autoCompleteRef.current.addListener("place_changed", async function () {
    const place = await autoCompleteRef.current.getPlace();
    setGeoCode({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()})
    setSelectedAddress(true)
    // console.log(place.geometry.location.lat())
    // console.log(place.geometry.location.lng())
    });
  });

  return (
    <FormControl>
      <FormLabel
        color="black"
        zIndex="4"
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        position="absolute"
        top={2.5}
        left={3}
      >
        <Icon as={GoLocation} w={5} h={5} />
      </FormLabel>
      <Input
        ref={inputRef}
        focusBorderColor="brand.primary" 
        bg="white"
        w={["350px"]}
        py={5}
        px={3}
        pl={10}
        borderRadius="md"
        fontSize="xs"
        color="black"
        // value={value}
        // onChange={e => setValue(e.target.value)}
        // disabled={!ready}
        placeholder="TYPE AN ADDRESS"
      />
    </FormControl>
  );
  };

export default AutoComplete;