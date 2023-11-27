import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";

const Card = ({
  title,
  description,
  imageSrc,
  tech,
  time,
  iframeSrc,
  codeSrc,
}) => {
  const [isHover, setHover] = useState(false);
  const isSmallerThanMedium = useMediaQuery("(max-width: 768px)");
  const isSmallerThanSmall = useMediaQuery("(max-width: 640px)");

  return (
    <Box rounded="xl" bg="gray.100">
      <VStack spacing={6}>
        <Box
          pos="relative"
          w="full"
          roundedTop="xl"
          overflow="hidden"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="wrapper"
          pt={!isSmallerThanSmall[0] && "25px"}
        >
          {isSmallerThanSmall[0] ? (
            <Image src={imageSrc} roundedTop="xl" />
          ) : (
            <iframe title={title} src={iframeSrc} allowFullScreen></iframe>
          )}
          {isSmallerThanMedium[0] ? (
            <>
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="black"
                opacity="0.7"
                zIndex="1"
              ></Box>
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                zIndex="1"
              >
                <Button
                  as="a"
                  href={codeSrc}
                  target="_blank"
                  colorScheme="blue"
                  size={isSmallerThanSmall[0] ? "md" : "lg"}
                  mr="3"
                >
                  <BiCodeAlt
                    fontSize={isSmallerThanSmall[0] ? "1.25rem" : "2.75rem"}
                  />
                </Button>
                <Button
                  as="a"
                  href={iframeSrc}
                  target="_blank"
                  colorScheme="green"
                  size={isSmallerThanSmall[0] ? "md" : "lg"}
                >
                  <MdOpenInNew
                    fontSize={isSmallerThanSmall[0] ? "1rem" : "2rem"}
                  />
                </Button>
              </Box>
            </>
          ) : (
            isHover && (
              <>
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="black"
                  opacity="0.7"
                  zIndex="1"
                ></Box>
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  textAlign="center"
                  zIndex="1"
                >
                  <Button
                    as="a"
                    href={codeSrc}
                    target="_blank"
                    colorScheme="blue"
                    size="lg"
                    mr="3"
                  >
                    <BiCodeAlt fontSize="2.75rem" />
                  </Button>
                  <Button
                    as="a"
                    href={iframeSrc}
                    target="_blank"
                    colorScheme="green"
                    size="lg"
                  >
                    <MdOpenInNew fontSize="2rem" />
                  </Button>
                </Box>
              </>
            )
          )}
        </Box>
        <Heading px={4} w="full" color="black" size="md">
          {title}
        </Heading>
        <Text px={4} m={0} color="black" as="p">
          {description}
        </Text>
        <Text textAlign="left" px={4} w="full" color="black" as="p">
          {"Tech Stack: " + tech}
        </Text>
        <Text textAlign="left" px={4} w="full" pb={4} color="black" as="p">
          {"Duration: " + time}
        </Text>
        {/* <HStack as="button" w="full" pb={4} px={4}>
          <Text color="black">See more</Text>
          <FontAwesomeIcon color="black" icon={faArrowRight} size={"1x"} />
        </HStack> */}
      </VStack>
    </Box>
  );
};

export default Card;
