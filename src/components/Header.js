import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: priyabagus@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/priya180039",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/priya-bagus-amanullah-2a7256250/",
  },
];

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerCollapse, setHeaderCollapse] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > scrollPosition) {
        setHeaderCollapse(true);
      } else {
        setHeaderCollapse(false);
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      transform={headerCollapse ? "translateY(-100%)" : "translateY(0)"}
      transition="transform 0.3s ease-in-out"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={10}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Text
                as="a"
                fontSize="xl"
                href="/#projects-session"
                onClick={() => handleClick("projects")()}
              >
                Projects
              </Text>
              <Text
                as="a"
                fontSize="xl"
                href="/#contactme-session"
                onClick={() => handleClick("contactme")()}
              >
                Contact Me
              </Text>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
