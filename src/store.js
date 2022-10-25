import { createStore } from "little-state-machine";

export const store = createStore({
  data: {
    hasAccount: Boolean,
    stage: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    postcode: Number,
    agentKnown: Boolean,
    weeklyRent: Number,
    bondAmount: Number,
    leaseStart: Date,
    leaseEnd: Date,
    relationshipStatus: String,
    dependents: Number,
    gender: String,
    dateOfBirth: Date,
    currentAddress: String,
    yearsAtAddress: Number,
    employmentStatus: String,
    jobTitle: String,
    employerName: String

  }
})