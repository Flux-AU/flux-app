import { atom } from 'recoil'

export const countState = atom({
  key: 'count',
  default: 0
})

export const selectedAddressState = atom({
  key: 'selectedAddress',
  default: false
})

export const geoCodeState = atom({
  key: 'geoCode',
  default: {
    lat: -27.4705,
    lng: 153.0260
  }
})

export const knowsAgentState = atom({
  key: 'knowsAgent',
  default: false
})

export const sessionIdState = atom({
  key: 'sessionId',
  default: ''
})