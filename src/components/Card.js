import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box rounded="xl" bg="gray.100">
      <VStack spacing={6}>
        <Image src={imageSrc} rounded="xl" />
        <Heading px={4} w="full" color="black" size="md">
          {title}
        </Heading>
        <Text px={4} m={0} color="black" as="p">
          {description}
        </Text>
        <HStack as="button" w="full" pb={4} px={4}>
          <Text color="black">See more</Text>
          <FontAwesomeIcon color="black" icon={faArrowRight} size={"1x"} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
