import React from 'react'
import {
  Route,
  Routes
} from "react-router-dom"; 

import AccountSection from './components/Form/AccountSection';
import StageSection from './components/Form/StageSection'
import ApplicantDetailsSection from './components/Form/ApplicantDetailsSection';
import PropertyAddressSection from './components/Form/PropertyAddressSection'
import AgencyDetailsSection from './components/Form/AgencyDetailsSection';
import AgencyKnownSection from './components/Form/AgencyKnownSection';
import PropertyDetailsSection from './components/Form/PropertyDetailsSection';
import QualifyingQuestionsSection from './components/Form/QualifyingQuestionsSection';


export function AppRoutes() {
  return (
    <Routes>
      <Route index path="account" element={<AccountSection/>}/>
      <Route path="stage" element={<StageSection />}/>
      <Route path="applicant-details" element={<ApplicantDetailsSection/>}/>
      <Route path="property-address" element={<PropertyAddressSection/>}/>
      <Route path="agency-details" element={<AgencyDetailsSection/>}/>
      <Route path="agency-information" element={<AgencyKnownSection/>}/>
      <Route path="property-details" element={<PropertyDetailsSection/>}/>
      <Route path="qualifying-questions" element={<QualifyingQuestionsSection/>}/>
    </Routes>
  )
}


// const router = createBrowserRouter([
//   {
//     path: "/application/",
//     element: <Main />,
//     errorElement: <ErrorPage />,
//     children: [
//     ],
//   },
//   {
//     path: "/application/account",
//     element: <AccountSection />,
//     children: [
//       // { index: true, element: <AccountSection /> }
      
//     ],
//   },
//   {
//     path: "/application/stage",
//     element: <StageSection />,
//     children: [          
//     ],
//   },
//   {
//     path: "/application/applicant-details",
//     element: <ApplicantDetailsSection />,
//   },
//   {
//     path: "/application/property-address",
//     element: <PropertyAddressSection />,
//   },
//   {
//     path: "/application/agency-details",
//     element: <AgencyDetailsSection />,
//   },
//   {
//     path: "/application/agency-information",
//     element: <AgencyKnownSection />,
//   },
//   {
//     path: "/application/property-details",
//     element: <PropertyDetailsSection />,
//   },
//   {
//     path: "/application/qualifying-questions",
//     element: <QualifyingQuestionsSection />,
//   },
// ], 
// // {basename: "/application/"}
// );

// export default router