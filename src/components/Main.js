import React, { useRef, useState } from 'react'
import { 
  Show, 
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel, 
  useColorModeValue, 
  Flex, 
  Icon, 
  Text, 
  Stack, 
  Progress, 
  Box, 
  Center, 
  Heading,
  FormControl,
  FormLabel,
  Checkbox,
  Radio,
  useRadioGroup,
  VStack } from '@chakra-ui/react'
import { BsCircleFill, BsCircle, BsBorderWidth } from "react-icons/bs"; 

import AccountSection from './Form/AccountSection';
import StageSection from './Form/StageSection'
import ApplicantDetailsSection from './Form/ApplicantDetailsSection';
import PropertyDetailsSection from './Form/PropertyDetailsSection';

function Main(){
  // Set colour of text
  const textColor = useColorModeValue("black", "gray.700");
  const iconColor = useColorModeValue("brand.primary", "gray.700");

  const [activeBullets, setActiveBullets] = useState({
    account: true, 
    stage: false,
    applicantDetails: false,
    propertyDetails: false,
    qualifyingQuestions: false,
    identityVerification: false,
    review: false,
  });

  const [checkboxes, setCheckboxes] = useState({
    design: false,
    code: false,
    develop: false
  });

  // Ref to switch tabs
  const accountTab = useRef();
  const stageTab = useRef();
  const applicantDetailsTab = useRef();
  const propertyDetailsTab = useRef();
  const qualifyingQuestionsTab = useRef();
  const identityVerificationTab = useRef();
  const reviewTab = useRef();

  return (
    <div>
      <Tabs variant="unstyled" display="flex" flexDirection="column" overflow="hidden">
        <Show breakpoint='(min-width: 768px)'>
          <TabList
              display={["none", "flex"]}
              align="center"
              alignItems="flex-start"
              alignSelf="center"
              justifySelf="center"
          >
            <Tab
              ref={accountTab}
              _focus="none"
              w={{ md: "80px", lg: "150px" }}
              onClick={() =>
                setActiveBullets({
                  ...activeBullets,
                  account: true,
                  stage: false,
                  applicantDetails: false,
                  propertyDetails: false,
                  qualifyingQuestions: false,
                  identityVerification: false,
                  review: false,
                })
              }
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                position="relative"
                _before={{
                  content: "''",
                  width: { md: "80px", lg: "150px" },
                  height: "3px",
                  bg: activeBullets.account ? textColor : "gray.700",
                  left: { sm: "12px", md: "26px" },
                  top: { sm: activeBullets.account ? "7px" : "5px", md: null },
                  position: "absolute",
                  bottom: activeBullets.account ? "40px" : "38px",
                  zIndex: 1,
                  transition: "all .3s ease"
                }}
              >
                <Icon
                  as={BsCircleFill}
                  color={activeBullets.account ? iconColor : "gray.700"}
                  w={activeBullets.account ? "16px" : "12px"}
                  h={activeBullets.account ? "16px" : "12px"}
                  mt={activeBullets.account ? "0px" : "2px"}
                  mb={activeBullets.account ? "8px" : "12px"}
                  zIndex={"2"}
                />
                <Text
                  color={activeBullets.account ? textColor : "gray.700"}
                  fontWeight={activeBullets.account ? "bold" : "normal"}
                  display={{ sm: "none", md: "block" }}
                  fontSize="sm"
                >
                  Account
                </Text>
              </Flex>
            </Tab>
            <Tab
              ref={stageTab}
              _focus="none"
              w={{ md: "80px", lg: "150px" }}
              onClick={() =>
                setActiveBullets({
                  ...activeBullets,
                  account: true,
                  stage: true,
                  applicantDetails: false,
                  propertyDetails: false,
                  qualifyingQuestions: false,
                  identityVerification: false,
                  review: false,
                })
              }
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                position="relative"
                _before={{
                  content: "''",
                  width: { md: "80px", lg: "150px" },
                  height: "3px",
                  bg: activeBullets.stage ? textColor : "gray.700",
                  left: { sm: "12px", md: "20px" },
                  top: { sm: activeBullets.stage ? "7px" : "7px", md: null },
                  position: "absolute",
                  bottom: activeBullets.stage ? "40px" : "38px",
                  zIndex: 1,
                  transition: "all .3s ease"
                }}
              >
                <Icon
                  as={BsCircleFill}
                  color={activeBullets.stage ? iconColor : "gray.700"}
                  w={activeBullets.stage ? "16px" : "12px"}
                  h={activeBullets.stage ? "16px" : "12px"}
                  mt={activeBullets.stage ? "0px" : "2px"}
                  mb={activeBullets.stage ? "8px" : "10px"}
                  zIndex={"3"}
                />
                <Text
                  color={activeBullets.stage ? textColor : "gray.700"}
                  fontWeight={activeBullets.stage ? "bold" : "normal"}
                  display={{ sm: "none", md: "block" }}
                  fontSize="sm"
                >
                  Stage
                </Text>
              </Flex>
            </Tab>
            <Tab
              ref={applicantDetailsTab}
              _focus="none"
              w={{ md: "80px", lg: "150px" }}
              onClick={() =>
                setActiveBullets({
                  ...activeBullets,
                  account: true,
                  stage: true,
                  applicantDetails: true,
                  propertyDetails: false,
                  qualifyingQuestions: false,
                  identityVerification: false,
                  review: false,
                })
              }
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                position="relative"
                _before={{
                  content: "''",
                  width: { md: "80px", lg: "150px" },
                  height: "3px",
                  bg: activeBullets.applicantDetails ? textColor : "gray.700",
                  left: { md: "30px", lg: "55px"},
                  top: { sm: activeBullets.applicantDetails ? "7px" : "7px", md: null },
                  position: "absolute",
                  bottom: activeBullets.applicantDetails ? "40px" : "38px",
                  zIndex: 1,
                  transition: "all .3s ease"
                }}
              >
                <Icon
                  as={BsCircleFill}
                  color={activeBullets.applicantDetails ? iconColor : "gray.700"}
                  w={activeBullets.applicantDetails ? "16px" : "12px"}
                  h={activeBullets.applicantDetails ? "16px" : "12px"}
                  mt={activeBullets.applicantDetails ? "0px" : "2px"}
                  mb={activeBullets.applicantDetails ? "8px" : "12px"}
                  zIndex={"2"}
                />
                <Text
                  color={activeBullets.applicantDetails ? textColor : "gray.700"}
                  fontWeight={activeBullets.applicantDetails ? "bold" : "normal"}
                  display={{ sm: "none", md: "block" }}
                  fontSize="sm"
                >
                  Applicant Details
                </Text>
              </Flex>
            </Tab>
            <Tab
              ref={propertyDetailsTab}
              _focus="none"
              w={{ md: "80px", lg: "150px" }}
              onClick={() =>
                setActiveBullets({
                  ...activeBullets,
                  account: true,
                  stage: true,
                  applicantDetails: true,
                  propertyDetails: true,
                  qualifyingQuestions: false,
                  identityVerification: false,
                  review: false,
                })
              }
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                position="relative"
                _before={{
                  content: "''",
                  width: { md: "80px", lg: "150px" },
                  height: "3px",
                  bg: activeBullets.propertyDetails ? textColor : "gray.700",
                  left: { md: "30px", lg: "55px"},
                  top: { sm: activeBullets.propertyDetails ? "7px" : "7px", md: null },
                  position: "absolute",
                  bottom: activeBullets.propertyDetails ? "40px" : "38px",
                  zIndex: 1,
                  transition: "all .3s ease"
                }}
              >
                <Icon
                  as={BsCircleFill}
                  color={activeBullets.propertyDetails ? iconColor : "gray.700"}
                  w={activeBullets.propertyDetails ? "16px" : "12px"}
                  h={activeBullets.propertyDetails ? "16px" : "12px"}
                  mt={activeBullets.propertyDetails ? "0px" : "2px"}
                  mb={activeBullets.propertyDetails ? "8px" : "12px"}
                  zIndex={"2"}
                />
                <Text
                  color={activeBullets.propertyDetails ? textColor : "gray.700"}
                  fontWeight={activeBullets.propertyDetails ? "bold" : "normal"}
                  display={{ sm: "none", md: "block" }}
                  fontSize="sm"
                >
                  Property Details
                </Text>
              </Flex>
            </Tab>
            <Tab
              ref={qualifyingQuestionsTab}
              _focus="none"
              w={{ md: "80px", lg: "150px" }}
              onClick={() =>
                setActiveBullets({
                  ...activeBullets,
                  account: true,
                  stage: true,
                  applicantDetails: true,
                  propertyDetails: true,
                  qualifyingQuestions: true,
                  identityVerification: false,
                  review: false,
                })
              }
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                position="relative"
                _before={{
                  content: "''",
                  width: { md: "80px", lg: "150px" },
                  height: "3px",
                  bg: activeBullets.qualifyingQuestions ? textColor : "gray.700",
                  left: { md: "30px", lg: "55px"},
                  top: { sm: activeBullets.qualifyingQuestions ? "7px" : "7px", md: null },
                  position: "absolute",
                  bottom: activeBullets.qualifyingQuestions ? "40px" : "38px",
                  zIndex: 1,
                  transition: "all .3s ease"
                }}
              >
                <Icon
                  as={BsCircleFill}
                  color={activeBullets.qualifyingQuestions ? iconColor : "gray.700"}
                  w={activeBullets.qualifyingQuestions ? "16px" : "12px"}
                  h={activeBullets.qualifyingQuestions ? "16px" : "12px"}
                  mt={activeBullets.qualifyingQuestions ? "0px" : "2px"}
                  mb={activeBullets.qualifyingQuestions ? "8px" : "12px"}
                  zIndex={"2"}
                />
                <Text
                  color={activeBullets.qualifyingQuestions ? textColor : "gray.700"}
                  fontWeight={activeBullets.qualifyingQuestions ? "bold" : "normal"}
                  display={{ sm: "none", md: "block" }}
                  fontSize="sm"
                >
                  Qualifying Questions
                </Text>
              </Flex>
            </Tab>
            <Tab
              ref={identityVerificationTab}
              _focus="none"
              w={{ md: "80px", lg: "150px" }}
              onClick={() =>
                setActiveBullets({
                  ...activeBullets,
                  account: true,
                  stage: true,
                  applicantDetails: true,
                  propertyDetails: true,
                  qualifyingQuestions: true,
                  identityVerification: true,
                  review: false,
                })
              }
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                position="relative"
                _before={{
                  content: "''",
                  width: { md: "80px", lg: "150px" },
                  height: "3px",
                  bg: activeBullets.identityVerification ? textColor : "gray.700",
                  left: { md: "35px", lg: "55px"},
                  top: { sm: activeBullets.identityVerification ? "7px" : "7px", md: null },
                  position: "absolute",
                  bottom: activeBullets.identityVerification ? "40px" : "38px",
                  zIndex: 1,
                  transition: "all .3s ease"
                }}
              >
                <Icon
                  as={BsCircleFill}
                  color={activeBullets.identityVerification ? iconColor : "gray.700"}
                  w={activeBullets.identityVerification ? "16px" : "12px"}
                  h={activeBullets.identityVerification ? "16px" : "12px"}
                  mt={activeBullets.identityVerification ? "0px" : "2px"}
                  mb={activeBullets.identityVerification ? "8px" : "12px"}
                  zIndex={"2"}
                />
                <Text
                  color={activeBullets.identityVerification ? textColor : "gray.700"}
                  fontWeight={activeBullets.identityVerification ? "bold" : "normal"}
                  display={{ sm: "none", md: "block" }}
                  fontSize="sm"
                >
                  Identity Verification
                </Text>
              </Flex>
            </Tab>
            <Tab
              ref={reviewTab}
              _focus="none"
              w={{ md: "80px", lg: "150px" }}
              onClick={() =>
                setActiveBullets({
                  ...activeBullets,
                  account: true,
                  stage: true,
                  applicantDetails: true,
                  propertyDetails: true,
                  qualifyingQuestions: true,
                  identityVerification: true,
                  review: true,
                })
              }
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                position="relative"
                _before={{
                  
                }}
              >
                <Icon
                  as={BsCircleFill}
                  color={activeBullets.review ? iconColor : "gray.700"}
                  w={activeBullets.review ? "16px" : "12px"}
                  h={activeBullets.review ? "16px" : "12px"}
                  mt={activeBullets.review ? "0px" : "2px"}
                  mb={activeBullets.review ? "8px" : "12px"}
                  zIndex={"2"}
                />
                <Text
                  color={activeBullets.review ? textColor : "gray.700"}
                  fontWeight={activeBullets.review ? "bold" : "normal"}
                  display={{ sm: "none", md: "block" }}
                  fontSize="sm"
                >
                  Review
                </Text>
              </Flex>
            </Tab>
          </TabList>
        </Show>
        <TabPanels mt="24px" maxW={{ md: "90%", lg: "100%" }}>
          <TabPanel >
            <AccountSection />
          </TabPanel>
          <TabPanel >
            <StageSection />
          </TabPanel>
          <TabPanel >
            <ApplicantDetailsSection />
          </TabPanel>
          <TabPanel >
            <PropertyDetailsSection />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Main