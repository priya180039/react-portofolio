import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const [color, setColor] = useState("white");
  const { isLoading, response, setResponse, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      setResponse(null);
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values) => {
      try {
        await submit(values);
        formik.resetForm();
      } catch (error) {
        console.log(error.response.data);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Your name not allowed to be empty"),
      email: Yup.string().email("Email not valid").required("Email required"),
      type: Yup.string().required("Select type of enquiry"),
      comment: Yup.string()
        .required("Please give a comment")
        .min(25, "Please specify your message in 25 characters long"),
    }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit(e);
  };

  const handleBlur = (e) => {
    formik.handleBlur(e);
    setColor("white");
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#19202b"
      p={8}
      py={16}
      spacing={8}
      w="full"
    >
      <VStack w="80%" alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box py={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.name && formik.errors.name}
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  {...formik.getFieldProps("name")}
                />
                <FormErrorMessage>
                  {formik.touched.name && formik.errors.name}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>
                  {formik.touched.email && formik.errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.type && formik.errors.type}
              >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  color={color}
                  onFocus={() => setColor("black")}
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" disabled>
                    Type
                  </option>
                  <option value="hireMe">Hire me as an employee</option>
                  <option value="freelance">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>
                  {formik.touched.type && formik.errors.type}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={(e) => {
                    formik.setFieldValue("comment", e.target.value);
                  }}
                  {...formik.getFieldProps("comment")}
                />
                {formik.touched.comment && formik.errors.comment && (
                  <Box
                    style={{
                      textAlign: "right",
                      marginTop: "-1.5rem",
                      marginRight: ".5rem",
                      fontSize: "1rem",
                    }}
                  >
                    {formik.values.comment.length + "/25"}
                  </Box>
                )}
                <FormErrorMessage>
                  {formik.touched.comment && formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="gray"
                color="#19202b"
                width="full"
                disabled={isLoading}
              >
                {!isLoading ? "Submit" : "Loading..."}
              </Button>
              <Button
                type="reset"
                colorScheme="gray"
                color="#19202b"
                width="full"
                onClick={() => formik.handleReset()}
              >
                Reset
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
