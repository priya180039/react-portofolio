import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Hoax News Detection",
    description:
      "A tool that was built for final project purpose. Built using flask that contains logic to convert text to vector, then process it using model that was created using Skip-gram and Random Forest. The final output will be shown whether the news text is hoax or valid.",
    getImageSrc: () => require("../images/photo1.png"),
    iframeSrc: "https://cleauve2.domcloud.dev/",
    codeSrc: "https://github.com/priya180039/myproject",
  },
  {
    title: "Fortech",
    description:
      "Built a tech-focused discussion forum website using Node.js and React.js. Utilized Express.js, Sequelize, CORS, and various backend libraries to establish the backend server, conducting extensive testing using REST Client during development, and Postman to assess the endpoints online. Developed the frontend with React.js and Tailwind CSS to craft components and design. Using Axios for API fetching from the backend and configured login authentication using createAsyncThunk with Redux Toolkit.",
    getImageSrc: () => require("../images/photo2.png"),
    iframeSrc: "https://cleauve-fortech.vercel.app/welcome",
    codeSrc: "https://github.com/priya180039/react-website",
  },
  {
    title: "Cleanime (On Progress)",
    description:
      "A website that collect anime informations that stored on public API. This was one of my practice to get more fluent in interacting with APIs. Anime that collected was show in grid layout and there's search bar to search specific anime's name that will shows all anime that contains that name, also at some sections i added infinite scroll feature to increase user experience.",
    getImageSrc: () => require("../images/photo3.png"),
    iframeSrc: "https://cleauve-cleanime.vercel.app/",
    codeSrc: "https://github.com/priya180039/react-cleanime",
  },
  {
    title: "Portofolio Website",
    description:
      "A website that was created to contains all my projects. This website was built using React.js also Chakra UI as UI framework",
    getImageSrc: () => require("../images/photo4.png"),
    iframeSrc: "https://cleauve-portofolio.vercel.app/",
    codeSrc: "https://github.com/priya180039/react-portofolio",
  },
];

const ProjectsSection = () => {
  const isSmallerThanMedium = useMediaQuery("(max-width: 768px)");
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={
          isSmallerThanMedium[0] ? "1fr" : "repeat(2,minmax(0,1fr))"
        }
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            iframeSrc={project.iframeSrc}
            codeSrc={project.codeSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
