import React from "react";
import { Avatar, Box, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo from "../assets/photo.jpg";
import { Typewriter } from "react-simple-typewriter";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    zIndex={0}
  >
    <VStack spacing={8}>
      <VStack>
        <Avatar name="Bagus" src={photo} size="xl" />
        <Text as="p" fontSize="1.1rem">
          Hello, I'm Bagus
        </Text>
      </VStack>
      <Heading textAlign="center">
        <Typewriter
          words={[
            "A frontend website developer specialized in ReactJS",
            "A recent IT graduate driven by a strong curiosity to learn more",
          ]}
          loop={true} // Mengulang pengetikan
          cursor={true}
          delaySpeed={1500}
          cursorStyle="|"
          cursorColor="red"
          cursorBlinking={true}
          typeSpeed={30} // Kecepatan pengetikan (dalam milidetik)
          deleteSpeed={20} // Kecepatan penghapusan (jika memilih untuk menghapus)
        />
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
