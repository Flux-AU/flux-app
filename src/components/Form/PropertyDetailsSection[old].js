// import React, { useState, useMemo, useRef, useCallback, useEffect} from 'react'
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import { 
//   CircularProgress,
//   Center, 
//   Box, 
//   FormControl, 
//   FormLabel, 
//   Input, 
//   Icon, 
//   VStack, 
//   ListItem, 
//   UnorderedList,
//   Grid,
//   GridItem } from '@chakra-ui/react'
// // import usePlacesAutocomplete, {
// //   getGeocode,
// //   getLatLng,
// // } from "use-places-autocomplete";
// import { GoLocation } from 'react-icons/go'
// // import PlacesAutocomplete, { geocodeByAddress,
// //   geocodeByPlaceId,
// //   getLatLng } from 'react-places-autocomplete';



// import ContractDetailsSection from './ContractDetailsSection';
// import mapStyles from '../../assets/mapStyles'

// // https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=YOUR_API_KEY
// // https://www.youtube.com/watch?v=WZcxJGmLbSo
// // https://snazzymaps.com/
// // https://rapidapi.com/

// const containerStyle = {
//   width: '580px',
//   height: '120px'
// };

// const center = {
//   lat: -27.4705,
//   lng: 153.0260
// }

// const radius = 0.5 

// const zone = {
//   bounds: {
//     north: center.lat + radius,
//     south: center.lat - radius,
//     east: center.lng + radius,
//     west: center.lng - radius,
//   },
//   location: {
//     lat: -27.4705,
//     lng: 153.0260
//   },
//   radius: 0.5,
//   restrictions: {
//     country: 'au'
//   },
//   options: {
//     strictBounds: true,
//   }
// };

// const mapOptions = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   draggable: false
// }

// function PropertyDetailsSection() {
//   return (
//     <>
//       <Places />
//     </>
//   )
// }

// function Places() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries: ['places']
//   })

//   if (!isLoaded) return <Center><CircularProgress isIndeterminate color='brand.primary' /></Center>

//   return (
//   <Center>
//     <Map />
//   </Center>
//   )
// }

// function Map() {
//   // const center = useMemo(([lat,lng]) => ({lat: lat, lng: lng}), [])
//   // const center = useMemo(() => (zone), []);

//   const [map, setMap] = useState(null)

//   const onLoad = useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = useCallback(function callback(map) {
//     setMap(null)
//   }, [])


//   // pass selected location as a marker on map
//   const [selected, setSelected] = useState(null)

//   return (
//     <VStack>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={13}
//         options={mapOptions}
//       >
//         {selected && <Marker icon={{fillColor: 'brands.primary'}} position={selected} />}
//       </GoogleMap>
//       <Box>
//         {/* <PlacesAutocomplete setSelected={setSelected} /> */}
//       </Box>
//     </VStack>
//   )
// }

// function PlacesAutoComplete({ setSelected }) {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions:{
//       // location: {zone},
//       location: zone.location,
//       radius: zone.radius,
//       // restrictions: zone.restrictions,
//       options: zone.options
//     }
//   });
  
//   const addressRef = useRef()

//   const handleSelect =
//     ({ description }) =>
//     () => {
//       // When user selects a place, we can replace the keyword without request data from API
//       // by setting the second parameter to "false"
//       setValue(description, false);
//       clearSuggestions();

//       // Get latitude and longitude via utility functions
//       getGeocode({ address: description}).then((results) => {
//         const { lat, lng } = getLatLng(results[0]);
//         console.log("📍 Coordinates: ", { lat, lng });
//       });
//     };

//   // const addMarker = async () => {
//   //   if (addressRef.current.value === '') return

//   //   setValue(addressRef.current.value, false)
//   //   clearSuggestions();
//   //   getGeocode({ address: addressRef.current.value }).then(results => {
//   //     const { lat, lng } = getLatLng(results[0]);
//   //     console.log("📍 Coordinates: ", { lat, lng });
//   //     // setSelected({ lat, lng });
//   //   });
//   // }

//   const renderSuggestions = () => {
//     data.map((suggestion) => {
//       console.log(suggestion.structured_formatting)
//       const {
//         place_id,
//         structured_formatting: { main_text, secondary_text },
//       } = suggestion;

//       return (
//         <ListItem zIndex={10} key={place_id} onClick={handleSelect(suggestion)}>
//           <strong>{main_text}</strong> <small>{secondary_text}</small>
//         </ListItem>
//       );
//     });
//   }

//   useEffect(() => console.log(value))

//   return (
//     <>
//       <FormControl>
//         <FormLabel
//           color="black"
//           zIndex="4"
//           fontSize="xs"
//           fontWeight="bold"
//           textTransform="uppercase"
//           position="absolute"
//           top={2.5}
//           left={3}
//         >
//           <Icon as={GoLocation} w={5} h={5} />
//         </FormLabel>
//         {/* <Autocomplete bounds={zone.bounds} restrictions={zone.restrictions} options={zone.options}> */}
//         {/* <Autocomplete
//         // apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
//         options={{
//           fields: {place_id: "ChIJM9KTrJpXkWsRQK_e81qjAgQ"}
//         }}
//         onPlaceSelected={(place) => {
//           console.log(place);
//         }}
//         /> */}
//           <Input
//             focusBorderColor="brand.primary" 
//             bg="white"
//             w={["350px"]}
//             py={5}
//             px={3}
//             pl={10}
//             borderRadius="md"
//             fontSize="xs"
//             color="black"
//             value={value}
//             onChange={e => setValue(e.target.value)}
//             disabled={!ready}
//             placeholder="TYPE AN ADDRESS"
//             ref={addressRef}
//           />
          
//         {/* </Autocomplete> */}
//       </FormControl>
      
//       {/* {status === "OK" && <UnorderedList>{renderSuggestions()}</UnorderedList>} */}
//     </>

// //     // <Combobox onSelect={handleSelect}>
// //     //   <ComboboxInput
// //     //     value={value}
// //     //     onChange={(e) => setValue(e.target.value)}
// //     //     disabled={!ready}
// //     //     placeholder="STREET ADDRESS, CITY, STATE, POSTCODE"
// //     //   />
// //     //   <ComboboxPopover>
// //     //     <ComboboxList>
// //     //       {status === "OK" &&
// //     //         data.map(({ place_id, description }) => (
// //     //           <ComboboxOption key={place_id} value={description} />
// //     //         ))}
// //     //     </ComboboxList>
// //     //   </ComboboxPopover>
// //     // </Combobox>
// //   )
// // }

// // function LocationSearchInput() {
// //   const [address, setAddress] = useState('')

// //   const handleSelect = address => {
// //     geocodeByAddress(address)
// //     .then(results => getLatLng(results[0]))
// //     .then(latLng => console.log('Success', latLng))
// //     .catch(error => console.error('Error', error));
// //   }

// //   return (
// //     <PlacesAutocomplete value={address} onChange={e => setAddress(e.target.value)} onSelect={handleSelect}>
// //       {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
// //         <FormControl>
// //           <FormLabel
// //             color="black"
// //             zIndex="4"
// //             fontSize="xs"
// //             fontWeight="bold"
// //             textTransform="uppercase"
// //             position="absolute"
// //             top={2.5}
// //             left={3}
// //           >
// //             <Icon as={GoLocation} w={5} h={5} />
// //           </FormLabel>
// //           <Input
// //             {...getInputProps({
// //               placeholder: 'Search Places ...',
// //               className: 'location-search-input',
// //             })}
// //             focusBorderColor="brand.primary" 
// //             bg="white"
// //             w={["350px"]}
// //             py={5}
// //             px={3}
// //             pl={10}
// //             borderRadius="md"
// //             fontSize="xs"
// //             color="black"
// //             // value={value}
// //             // onChange={e => setValue(e.target.value)}
// //             // disabled={!ready}
// //             placeholder="TYPE AN ADDRESS"
// //             // ref={addressRef}
// //           />
// //           <Box className="autocomplete-dropdown-container">
// //               {loading && <div>Loading...</div>}
// //               {suggestions.map(suggestion => {
// //                 const className = suggestion.active
// //                   ? 'suggestion-item--active'
// //                   : 'suggestion-item';
// //                 // inline style for demonstration purpose
// //                 const style = suggestion.active
// //                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
// //                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
// //                 return (
// //                   <Box
// //                     {...getSuggestionItemProps(suggestion, {
// //                       className,
// //                       style,
// //                     })}
// //                   >
// //                     <span>{suggestion.description}</span>
// //                   </Box>
// //                 );
// //               })}
// //             </Box>
// //         </FormControl>
// //       )}
// //     </PlacesAutocomplete>
// //   )
// // }


// export default PropertyDetailsSection