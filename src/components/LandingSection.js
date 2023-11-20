import React from "react";
import {
  Avatar,
  Box,
  Heading,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo from "../assets/photo.jpg";
import { Typewriter } from "react-simple-typewriter";

const LandingSection = () => {
  const isSmallerThanMedium = useMediaQuery("(max-width: 768px)");
  return (
    <FullScreenSection
      id="bio-section"
      pt={10}
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
      zIndex={0}
    >
      <VStack spacing={6}>
        <VStack>
          <Avatar name="Bagus" src={photo} size="xl" />
          <Text as="p" fontSize="1.1rem">
            Hello, I'm Bagus
          </Text>
        </VStack>
        <Heading
          fontSize={isSmallerThanMedium[0] ? "1.5rem" : "2.2rem"}
          textAlign="center"
          px={4}
        >
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
};

export default LandingSection;
