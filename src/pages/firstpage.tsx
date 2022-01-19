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
import { BrowserRouter as Router, Link } from "react-router-dom";

import { ViewIcon, ViewOffIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import Icon from "../icon.png";
import image1 from "../assets/Rectangle187.png";
import image2 from "../assets/Rectangle201.png";
import image3 from "../assets/Rectangle203.png";
import image4 from "../assets/Rectangle205.png";
import image5 from "../assets/Rectangle207.png";
import image6 from "../assets/Rectangle209.png";
import Ellipse50 from "../assets/Ellipse50.png";
import Iconawesomegem from "../assets/Iconawesome-gem.png";
import "../custom.css";
export default function Firstpage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [hover, Serhover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(min-width:400px)" });

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
    <>
      <Box as="div" width="100%" background="#150F1A" h={20}>
        <Flex
          width="Full"
          align="center"
          marginLeft="5%"
          marginRight="5%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            as="div"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={Icon} w={100} alt="Dan Abramov" />
          </Box>
          <Box
            as="div"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              background="#201727"
              variant="solid"
              borderRadius="10px"
              height="50px"
              color="#fff"
            >
              <Link to="/login">
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
                  Login
                </Text>
              </Link>
            </Button>
            <Button
              background="#201727"
              variant="solid"
              borderRadius="10px"
              marginLeft="5px"
              height="50px"
              color="#fff"
            >
              <Link to="/signup">
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
                  Signup
                </Text>
              </Link>
            </Button>
          </Box>
        </Flex>
      </Box>
      <Flex width="Full" align="center" justifyContent="center">
        <Box
          p={0}
          paddingLeft="5%"
          paddingRight="5%"
          paddingBottom="1%"
          maxWidth="600px"
          w="70%"
          borderWidth={1}
          marginTop="3%"
          borderRadius={8}
          borderColor={isTabletOrMobile ? "#150F1A" : "#150F1A"}
          boxShadow={isTabletOrMobile ? "" : "lg"}
          background={isTabletOrMobile ? "#150F1A" : "#150F1A"}
        >
          <Box textAlign="center" mt={5} display="flex" justifyContent="center">
            <Text
              fontSize={{ base: "10px", sm: "15px", md: "20px", lg: "25px" }}
              fontFamily="system-ui"
              fontWeight="600"
            >
              Every second counts...
            </Text>
          </Box>
          <Box textAlign="center" mt={1} display="flex" justifyContent="center">
            <Text
              fontSize={{ base: "8px", sm: "10px", md: "15px", lg: "17px" }}
              fontFamily="system-ui"
              fontWeight="100"
            >
              meet your favorite creators with pay-per-second video chat
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex width="Full" justifyContent="center">
        <Box
          as="div"
          mt={5}
          p={0}
          maxWidth="600px"
          w={isTabletOrMobile ? "50%" : "100% !important"}
        >
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="#000" />}
            />
            <Input
              placeholder="Basic usage"
              color="#000"
              background="#FFF"
              width={"100%"}
            />
          </InputGroup>
        </Box>
      </Flex>
      <Flex
        width="Full"
        marginTop="8%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Row
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: isTabletOrMobile ? "" : "30%",
            }}
          >
            <Box
              as="div"
              mt={5}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={0}
              position="relative"
              cursor="pointer"
            >
              <Image
                src={image3}
                borderRadius="10px"
                h={isTabletOrMobile ? 300 : 150}
                style={{ filter: "drop-shadow(#7b7695 0px 0px 0.15rem)" }}
                alt="Dan Abramov"
              />
              <Box as="div" top="0px" left="2px" position="absolute">
                <Text
                  color="#fff"
                  fontSize={{
                    base: "13px",
                    sm: "15px",
                    md: "20px",
                    lg: "22px",
                  }}
                >
                  Cindy Moss
                </Text>
                <Text
                  color="#fff"
                  fontSize={{
                    base: "10px",
                    sm: "12px",
                    md: "15px",
                    lg: "17px",
                  }}
                >
                  @Cindy Moss
                </Text>
              </Box>
              <Box as="div" position="absolute" right="5px" top="15px">
                <Image src={Ellipse50} w={4} alt="ellipse" />
              </Box>
              <Box
                as="div"
                right={isTabletOrMobile ? "30px" : "35px"}
                bottom={isTabletOrMobile ? "8px" : "10px"}
                position="absolute"
              >
                <Box
                  as="div"
                  background="#3A384C"
                  style={{ opacity: "0.6" }}
                  width={isTabletOrMobile ? "115px" : "90px"}
                  height={isTabletOrMobile ? "35px" : "25px"}
                  borderRadius="15px"
                  position="absolute"
                ></Box>
                <Box
                  as="div"
                  display="flex"
                  style={{ zIndex: 1 }}
                  justifyContent="center"
                  position="relative"
                  top="3px"
                  left="10px"
                  alignItems="center"
                >
                  <Image w={5} h={4} src={Iconawesomegem} />
                  <Text
                    color="#fff"
                    fontSize={{
                      base: "12px",
                      sm: "15px",
                      md: "17px",
                      lg: "20px",
                    }}
                    style={{ zIndex: 5, opacity: 1 }}
                  >
                    300/sec
                  </Text>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: isTabletOrMobile ? "" : "30%",
            }}
          >
            <Box
              as="div"
              mt={5}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={0}
              position="relative"
              cursor="pointer"
            >
              <Image
                src={image2}
                borderRadius="10px"
                h={isTabletOrMobile ? 300 : 150}
                style={{ filter: "drop-shadow(#7b7695 0px 0px 0.15rem)" }}
                alt="Dan Abramov"
              />
              <Box as="div" top="0px" left="2px" position="absolute">
                <Text
                  color="#fff"
                  fontSize={{
                    base: "13px",
                    sm: "15px",
                    md: "20px",
                    lg: "22px",
                  }}
                >
                  Cindy Moss
                </Text>
                <Text
                  color="#fff"
                  fontSize={{
                    base: "10px",
                    sm: "12px",
                    md: "15px",
                    lg: "17px",
                  }}
                >
                  @Cindy Moss
                </Text>
              </Box>
              <Box as="div" position="absolute" right="5px" top="15px">
                <Image src={Ellipse50} w={4} alt="ellipse" />
              </Box>
              <Box
                as="div"
                right={isTabletOrMobile ? "30px" : "35px"}
                bottom={isTabletOrMobile ? "8px" : "10px"}
                position="absolute"
              >
                <Box
                  as="div"
                  background="#3A384C"
                  style={{ opacity: "0.6" }}
                  width={isTabletOrMobile ? "115px" : "90px"}
                  height={isTabletOrMobile ? "35px" : "25px"}
                  borderRadius="15px"
                  position="absolute"
                ></Box>
                <Box
                  as="div"
                  display="flex"
                  style={{ zIndex: 1 }}
                  justifyContent="center"
                  position="relative"
                  top="3px"
                  left="10px"
                  alignItems="center"
                >
                  <Image w={5} h={4} src={Iconawesomegem} />
                  <Text
                    color="#fff"
                    fontSize={{
                      base: "12px",
                      sm: "15px",
                      md: "17px",
                      lg: "20px",
                    }}
                    style={{ zIndex: 5, opacity: 1 }}
                  >
                    300/sec
                  </Text>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: isTabletOrMobile ? "" : "30%",
            }}
          >
            <Box
              as="div"
              mt={5}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={0}
              position="relative"
              cursor="pointer"
            >
              <Image
                src={image4}
                borderRadius="10px"
                h={isTabletOrMobile ? 300 : 150}
                style={{ filter: "drop-shadow(#7b7695 0px 0px 0.15rem)" }}
                alt="Dan Abramov"
              />
              <Box as="div" top="0px" left="2px" position="absolute">
                <Text
                  color="#fff"
                  fontSize={{
                    base: "13px",
                    sm: "15px",
                    md: "20px",
                    lg: "22px",
                  }}
                >
                  Cindy Moss
                </Text>
                <Text
                  color="#fff"
                  fontSize={{
                    base: "10px",
                    sm: "12px",
                    md: "15px",
                    lg: "17px",
                  }}
                >
                  @Cindy Moss
                </Text>
              </Box>
              <Box as="div" position="absolute" right="5px" top="15px">
                <Image src={Ellipse50} w={4} alt="ellipse" />
              </Box>
              <Box
                as="div"
                right={isTabletOrMobile ? "30px" : "35px"}
                bottom={isTabletOrMobile ? "8px" : "10px"}
                position="absolute"
              >
                <Box
                  as="div"
                  background="#3A384C"
                  style={{ opacity: "0.6" }}
                  width={isTabletOrMobile ? "115px" : "90px"}
                  height={isTabletOrMobile ? "35px" : "25px"}
                  borderRadius="15px"
                  position="absolute"
                ></Box>
                <Box
                  as="div"
                  display="flex"
                  style={{ zIndex: 1 }}
                  justifyContent="center"
                  position="relative"
                  top="3px"
                  left="10px"
                  alignItems="center"
                >
                  <Image w={5} h={4} src={Iconawesomegem} />
                  <Text
                    color="#fff"
                    fontSize={{
                      base: "12px",
                      sm: "15px",
                      md: "17px",
                      lg: "20px",
                    }}
                    style={{ zIndex: 5, opacity: 1 }}
                  >
                    300/sec
                  </Text>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: isTabletOrMobile ? "" : "30%",
            }}
          >
            <Box
              as="div"
              mt={5}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={0}
              position="relative"
              cursor="pointer"
            >
              <Image
                src={image5}
                borderRadius="10px"
                h={isTabletOrMobile ? 300 : 150}
                style={{ filter: "drop-shadow(#7b7695 0px 0px 0.15rem)" }}
                alt="Dan Abramov"
              />
              <Box as="div" top="0px" left="2px" position="absolute">
                <Text
                  color="#fff"
                  fontSize={{
                    base: "13px",
                    sm: "15px",
                    md: "20px",
                    lg: "22px",
                  }}
                >
                  Cindy Moss
                </Text>
                <Text
                  color="#fff"
                  fontSize={{
                    base: "10px",
                    sm: "12px",
                    md: "15px",
                    lg: "17px",
                  }}
                >
                  @Cindy Moss
                </Text>
              </Box>
              <Box as="div" position="absolute" right="5px" top="15px">
                <Image src={Ellipse50} w={4} alt="ellipse" />
              </Box>
              <Box
                as="div"
                right={isTabletOrMobile ? "30px" : "35px"}
                bottom={isTabletOrMobile ? "8px" : "10px"}
                position="absolute"
              >
                <Box
                  as="div"
                  background="#3A384C"
                  style={{ opacity: "0.6" }}
                  width={isTabletOrMobile ? "115px" : "90px"}
                  height={isTabletOrMobile ? "35px" : "25px"}
                  borderRadius="15px"
                  position="absolute"
                ></Box>
                <Box
                  as="div"
                  display="flex"
                  style={{ zIndex: 1 }}
                  justifyContent="center"
                  position="relative"
                  top="3px"
                  left="10px"
                  alignItems="center"
                >
                  <Image w={5} h={4} src={Iconawesomegem} />
                  <Text
                    color="#fff"
                    fontSize={{
                      base: "12px",
                      sm: "15px",
                      md: "17px",
                      lg: "20px",
                    }}
                    style={{ zIndex: 5, opacity: 1 }}
                  >
                    300/sec
                  </Text>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: isTabletOrMobile ? "" : "30%",
            }}
          >
            <Box
              as="div"
              mt={5}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={0}
              position="relative"
              cursor="pointer"
            >
              <Image
                src={image6}
                borderRadius="10px"
                h={isTabletOrMobile ? 300 : 150}
                style={{ filter: "drop-shadow(#7b7695 0px 0px 0.15rem)" }}
                alt="Dan Abramov"
              />
              <Box as="div" top="0px" left="2px" position="absolute">
                <Text
                  color="#fff"
                  fontSize={{
                    base: "13px",
                    sm: "15px",
                    md: "20px",
                    lg: "22px",
                  }}
                >
                  Cindy Moss
                </Text>
                <Text
                  color="#fff"
                  fontSize={{
                    base: "10px",
                    sm: "12px",
                    md: "15px",
                    lg: "17px",
                  }}
                >
                  @Cindy Moss
                </Text>
              </Box>
              <Box as="div" position="absolute" right="5px" top="15px">
                <Image src={Ellipse50} w={4} alt="ellipse" />
              </Box>
              <Box
                as="div"
                right={isTabletOrMobile ? "30px" : "35px"}
                bottom={isTabletOrMobile ? "8px" : "10px"}
                position="absolute"
              >
                <Box
                  as="div"
                  background="#3A384C"
                  style={{ opacity: "0.6" }}
                  width={isTabletOrMobile ? "115px" : "90px"}
                  height={isTabletOrMobile ? "35px" : "25px"}
                  borderRadius="15px"
                  position="absolute"
                ></Box>
                <Box
                  as="div"
                  display="flex"
                  style={{ zIndex: 1 }}
                  justifyContent="center"
                  position="relative"
                  top="3px"
                  left="10px"
                  alignItems="center"
                >
                  <Image w={5} h={4} src={Iconawesomegem} />
                  <Text
                    color="#fff"
                    fontSize={{
                      base: "12px",
                      sm: "15px",
                      md: "17px",
                      lg: "20px",
                    }}
                    style={{ zIndex: 5, opacity: 1 }}
                  >
                    300/sec
                  </Text>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: isTabletOrMobile ? "" : "30%",
            }}
          >
            <Box
              as="div"
              mt={5}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={0}
              position="relative"
              cursor="pointer"
            >
              <Image
                src={image1}
                borderRadius="10px"
                h={isTabletOrMobile ? 300 : 150}
                style={{ filter: "drop-shadow(#7b7695 0px 0px 0.15rem)" }}
                alt="Dan Abramov"
              />
              <Box as="div" top="0px" left="2px" position="absolute">
                <Text
                  color="#fff"
                  fontSize={{
                    base: "13px",
                    sm: "15px",
                    md: "20px",
                    lg: "22px",
                  }}
                >
                  Cindy Moss
                </Text>
                <Text
                  color="#fff"
                  fontSize={{
                    base: "10px",
                    sm: "12px",
                    md: "15px",
                    lg: "17px",
                  }}
                >
                  @Cindy Moss
                </Text>
              </Box>
              <Box as="div" position="absolute" right="5px" top="15px">
                <Image src={Ellipse50} w={4} alt="ellipse" />
              </Box>
              <Box
                as="div"
                right={isTabletOrMobile ? "30px" : "35px"}
                bottom={isTabletOrMobile ? "8px" : "10px"}
                position="absolute"
              >
                <Box
                  as="div"
                  background="#3A384C"
                  style={{ opacity: "0.6" }}
                  width={isTabletOrMobile ? "115px" : "90px"}
                  height={isTabletOrMobile ? "35px" : "25px"}
                  borderRadius="15px"
                  position="absolute"
                ></Box>
                <Box
                  as="div"
                  display="flex"
                  style={{ zIndex: 1 }}
                  justifyContent="center"
                  position="relative"
                  top="3px"
                  left="10px"
                  alignItems="center"
                >
                  <Image w={5} h={4} src={Iconawesomegem} />
                  <Text
                    color="#fff"
                    fontSize={{
                      base: "12px",
                      sm: "15px",
                      md: "17px",
                      lg: "20px",
                    }}
                    style={{ zIndex: 5, opacity: 1 }}
                  >
                    300/sec
                  </Text>
                </Box>
              </Box>
            </Box>
          </Col>
        </Row>
      </Flex>
    </>
  );
}
