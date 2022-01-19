import React, { useState, useEffect } from "react";
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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from "@chakra-ui/core";
import { ViewIcon, ViewOffIcon, PhoneIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import Icon from "../icon.png";
import "../custom.css";
export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [code1, setcode1] = useState("");
  const [code2, setcode2] = useState("");
  const [code3, setcode3] = useState("");
  const [code4, setcode4] = useState("");
  const [required, setrequrire] = useState("");
  const [textspan, setNexttext] = useState("");
  const [show, setShow] = useState(false);
  const [hover, Serhover] = useState(false);
  const [codeflag, SetSendcodeflag] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width:400px)" });

  useEffect(() => {
    // Update the document title using the browser API
  }, []);
  const handlecode1 = (e: any) => {
    if (e.target.value.length == 1) {
      let newcode1 = e.target.value;
      console.log(newcode1);
      setcode1(newcode1);
    } else if (e.target.value.length == 0) {
      setcode1("");
    }
  };
  const handlecode2 = (e: any) => {
    if (e.target.value.length == 1) {
      let newcode1 = e.target.value;
      console.log(newcode1);
      setcode2(newcode1);
    } else if (e.target.value.length == 0) {
      setcode2("");
    }
  };
  const handlecode3 = (e: any) => {
    if (e.target.value.length == 1) {
      let newcode1 = e.target.value;
      console.log(newcode1);
      setcode3(newcode1);
    } else if (e.target.value.length == 0) {
      setcode3("");
    }
  };
  const handlecode4 = (e: any) => {
    if (e.target.value.length == 1) {
      let newcode1 = e.target.value;
      console.log(newcode1);
      setcode4(newcode1);
    } else if (e.target.value.length == 0) {
      setcode4("");
    }
  };
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
        console.log(email);
        setError("");
        // window.location.assign("/second");
      }
      setIsLoading(false);
    } catch (error) {
      setError("Invalid username or password");
      setIsLoading(false);
      setPassword("");
    }
  };
  const sendcode = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    let patt = new RegExp(
      /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/
    );
    const found = patt.test(phone);
    console.log(found);

    try {
      if (!code1 || !code2 || !code3 || !code4) {
        console.log("require");
        setrequrire("* Field is required.");
      } else {
        let codepattern = /^[0-9]*$/;
        let codeall = code1 + code2 + code3 + code4;
        console.log(codeall);
        if (codepattern.test(codeall)) {
          console.log("numer");
          setrequrire("");
        } else {
          setrequrire("Invaild code");
        }
      }
      if (!found) {
        setNexttext("Invaild Phone Number");
      }
      if (phone && country && found) {
        setNexttext(
          "We will send a text with a verification code.Message and data rates may apply"
        );
        SetSendcodeflag(true);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setPhone("");
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
        minHeight={isTabletOrMobile ? "600px" : ""}
        marginTop={isTabletOrMobile ? "20%" : "10% !important"}
        borderRadius={8}
        borderColor="#150F1A"
        boxShadow="lg"
        background="#150F1A"
      >
        <Box
          textAlign="center"
          marginTop={isTabletOrMobile ? "10%" : ""}
          display="flex"
          justifyContent="center"
        >
          <Image src={Icon} alt="Dan Abramov" />
        </Box>
        <Box as="div" marginTop="2%">
          <Text
            fontWeight="bold"
            textTransform="none"
            letterSpacing="wide"
            marginTop={isTabletOrMobile ? "10%" : ""}
            textAlign="center"
            color="white"
            overflow="hidden"
            fontSize={{ base: "15px", sm: "17px", md: "20px", lg: "20px" }}
            style={{ textOverflow: "ellipsis", fontFamily: "sans-serif" }}
          >
            Welcome back,Let's log you in
          </Text>
        </Box>
        <Tabs isFitted mt={isTabletOrMobile ? 100 : 10}>
          <TabList>
            <Tab>Phone</Tab>
            <Tab>Email or username</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box my={4} textAlign="left" marginTop="10%">
                <form onSubmit={sendcode}>
                  {!codeflag && (
                    <FormControl isRequired mt={6}>
                      <InputGroup
                        borderStyle="solid"
                        borderWidth="1px"
                        mt={5}
                        borderColor="#FFF"
                      >
                        <InputLeftElement width="25%">
                          <Select
                            variant="outline"
                            onChange={(event) =>
                              setCountry(event.currentTarget.value)
                            }
                            placeholder="Country"
                          >
                            <option style={{ color: "#000" }} value="US+1">
                              US+1
                            </option>
                          </Select>
                        </InputLeftElement>
                        <Input
                          width="75%"
                          type="tel"
                          h={10}
                          marginLeft="25%"
                          onChange={(event) =>
                            setPhone(event.currentTarget.value)
                          }
                          placeholder="Phone number"
                        />
                      </InputGroup>
                      <Box as="div" mt={3}>
                        <Text
                          color="#fff"
                          textAlign="center"
                          fontSize={{
                            base: "8px",
                            sm: "10px",
                            md: "12px",
                            lg: "13px",
                          }}
                          style={{ textOverflow: "ellipsis" }}
                          overflow="hidden"
                        >
                          {textspan}
                        </Text>
                      </Box>
                    </FormControl>
                  )}
                  {codeflag && (
                    <FormControl isRequired mt={0}>
                      <Text
                        color="#fff"
                        textAlign="left"
                        fontSize={{
                          base: "10px",
                          sm: "12px",
                          md: "15px",
                          lg: "20px",
                        }}
                        style={{ textOverflow: "ellipsis" }}
                        overflow="hidden"
                      >
                        My code is
                      </Text>
                      <Box as="div" mt={5} width="100%">
                        <Row style={{ width: "100%" }}>
                          <Col md={3}>
                            <Input
                              mt={2}
                              value={code1}
                              onChange={(e: any) => handlecode1(e)}
                              focusBorderColor="lime"
                            />
                          </Col>
                          <Col md={3}>
                            <Input
                              value={code2}
                              onChange={(e) => handlecode2(e)}
                              mt={2}
                              focusBorderColor="lime"
                            />
                          </Col>
                          <Col md={3}>
                            <Input
                              value={code3}
                              onChange={(e) => handlecode3(e)}
                              mt={2}
                              focusBorderColor="lime"
                            />
                          </Col>
                          <Col md={3}>
                            <Input
                              value={code4}
                              onChange={(e) => handlecode4(e)}
                              mt={2}
                              focusBorderColor="lime"
                            />
                          </Col>
                        </Row>
                      </Box>
                      <Box as="div" mt={2}>
                        <Text
                          color="#c32727"
                          textAlign="left"
                          fontSize={{
                            base: "8px",
                            sm: "10px",
                            md: "13px",
                            lg: "15px",
                          }}
                          style={{ textOverflow: "ellipsis" }}
                          overflow="hidden"
                        >
                          {required}
                        </Text>
                      </Box>
                      <Box as="div" mt={5}>
                        <InputGroup size="md" mt={10}>
                          <InputRightElement width="40%" justifyContent="end">
                            <Text
                              color="#fff"
                              textAlign="right"
                              fontSize={{
                                base: "10px",
                                sm: "13px",
                                md: "15px",
                                lg: "17px",
                              }}
                              style={{ textOverflow: "ellipsis" }}
                              overflow="hidden"
                            >
                              {phone}
                            </Text>
                          </InputRightElement>
                        </InputGroup>
                        <Text
                          color="#fff"
                          mt={10}
                          textAlign="right"
                          cursor="pointer"
                          onClick={sendcode}
                          fontSize={{
                            base: "10px",
                            sm: "13px",
                            md: "15px",
                            lg: "17px",
                          }}
                          style={{ textOverflow: "ellipsis" }}
                          overflow="hidden"
                        >
                          resend
                        </Text>
                      </Box>
                    </FormControl>
                  )}
                  {!codeflag && (
                    <Box
                      as="div"
                      marginTop={isTabletOrMobile ? "50%" : "10%"}
                      display="flex"
                      justifyContent="center"
                    >
                      <Button
                        background={
                          hover === false ? "#fff" : "#150F1A !important"
                        }
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
                          <CircularProgress
                            isIndeterminate
                            size="24px"
                            color="teal"
                          />
                        ) : (
                          <Text
                            style={{ textOverflow: "ellipsis" }}
                            overflow="hidden"
                            fontSize={{
                              base: "10px",
                              sm: "12px",
                              md: "15px",
                              lg: "15px",
                            }}
                          >
                            Send code
                          </Text>
                        )}
                      </Button>
                    </Box>
                  )}
                </form>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box my={4} textAlign="left" marginTop="10%">
                <form onSubmit={handleSubmit}>
                  <FormControl isRequired mt={6}>
                    <InputGroup size="md">
                      <Input
                        type="email"
                        variant="flushed"
                        placeholder="Email or username"
                        size="sm"
                        width="98%"
                        onChange={(event) =>
                          setEmail(event.currentTarget.value)
                        }
                      />
                    </InputGroup>
                    <InputGroup size="md" mt={10}>
                      <Input
                        type={show ? "text" : "password"}
                        variant="flushed"
                        placeholder="********"
                        size="sm"
                        width="98%"
                        onChange={(event) =>
                          setPassword(event.currentTarget.value)
                        }
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Box as="div">
                      <Text
                        color="#375590"
                        textAlign="center"
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
                    </Box>
                  </FormControl>
                  <Box
                    as="div"
                    marginTop={isTabletOrMobile ? "20%" : "10%"}
                    display="flex"
                    justifyContent="center"
                  >
                    <Button
                      background={
                        hover === false ? "#fff" : "#150F1A !important"
                      }
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
                        <CircularProgress
                          isIndeterminate
                          size="24px"
                          color="teal"
                        />
                      ) : (
                        <Text
                          style={{ textOverflow: "ellipsis" }}
                          overflow="hidden"
                          fontSize={{
                            base: "10px",
                            sm: "12px",
                            md: "15px",
                            lg: "15px",
                          }}
                        >
                          Enter
                        </Text>
                      )}
                    </Button>
                  </Box>
                </form>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
