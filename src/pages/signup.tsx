import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  Input,
  Button,
  CircularProgress,
  Text,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Image,
} from "@chakra-ui/core";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";

import Icon from "../icon.png";
import "../custom.css";
export default function Signup() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [hover, Serhover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width:400px)" });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const regex = /[A-Z]/g;
    const found = password.match(regex);
    console.log(found);

    try {
      if (password.length < 6) {
        console.log(password);
        setError("Password must be at least 6 characters");
      } else if (password.length >= 40) {
        setError("Password must not exceed 40 characters");
      } else if (found === null && password.length >= 6) {
        setError("Password must have at least 1 capital letter");
      } else if (
        found != null &&
        password.length >= 6 &&
        password.length <= 40
      ) {
        console.log("push");
        window.location.assign("/second");
      }
      // await userLogin({ password });
      setIsLoading(false);
    } catch (error) {
      setError("Invalid username or password");
      setIsLoading(false);
      setPassword("");
    }
  };
  const handleClick = () => setShow(!show);
  const mousehoverevent = () => {
    Serhover(true);
    console.log(hover);
  };
  const mouseleaveevent = () => {
    Serhover(false);
    console.log(hover);
  };
  return (
    <Flex width="Full" align="center" justifyContent="center">
      <Box
        p={0}
        paddingLeft="5%"
        paddingRight="5%"
        paddingBottom="1%"
        maxWidth="600px"
        w={isTabletOrMobile ? "85%" : "70%"}
        borderWidth={1}
        marginTop={isTabletOrMobile ? "30%" : "10%"}
        borderRadius={8}
        minHeight={isTabletOrMobile ? "550px" : ""}
        borderColor={isTabletOrMobile ? "#150F1A" : "#150F1A"}
        boxShadow={isTabletOrMobile ? "" : "lg"}
        background={isTabletOrMobile ? "#150F1A" : "#150F1A"}
      >
        <Box textAlign="center" display="flex" justifyContent="center">
          <Image src={Icon} alt="Dan Abramov" />
        </Box>
        <Box w={isTabletOrMobile ? "65%" : "50%"} as="div" marginTop="10%">
          <Text
            fontWeight="bold"
            textTransform="none"
            letterSpacing="wide"
            color="white"
            overflow="hidden"
            fontSize={isTabletOrMobile ? "20px" : "23px"}
            style={{ textOverflow: "ellipsis", fontFamily: "sans-serif" }}
          >
            Set a password for adam@gmail.com
          </Text>
        </Box>
        <Box
          my={4}
          textAlign="left"
          marginTop={isTabletOrMobile ? "40%" : "20%"}
        >
          <form onSubmit={handleSubmit}>
            <FormControl isRequired mt={6}>
              <Input
                type={show ? "text" : "password"}
                variant="flushed"
                placeholder="********"
                size="sm"
                width="98%"
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </FormControl>
            <Box as="div">
              <InputGroup size="md">
                <InputLeftElement width="50%">
                  <Text
                    color="#375590"
                    fontSize={{
                      base: "8px",
                      sm: "10px",
                      md: "13px",
                      lg: "13px",
                    }}
                    style={{ textOverflow: "ellipsis" }}
                    overflow="hidden"
                  >
                    {error}
                  </Text>
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box
              as="div"
              marginTop={isTabletOrMobile ? "50%" : "20%"}
              display="flex"
              justifyContent="center"
            >
              <Button
                background={hover === false ? "#fff" : "#150F1A !important"}
                variant={hover === false ? "solid" : "outline"}
                borderRadius="20px"
                width="70%"
                height="50px"
                mt={5}
                type="submit"
                color={hover === false ? "#000" : "#fff"}
                onMouseEnter={() => mousehoverevent()}
                onMouseLeave={() => mouseleaveevent()}
              >
                {isLoading ? (
                  <CircularProgress isIndeterminate size="24px" color="teal" />
                ) : (
                  <Text
                    style={{ textOverflow: "ellipsis" }}
                    overflow="hidden"
                    fontSize={{
                      base: "14px",
                      sm: "15px",
                      md: "18px",
                      lg: "20px",
                    }}
                  >
                    Continue
                  </Text>
                )}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
