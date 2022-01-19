import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  Text,
  InputGroup,
  Image,
  Select,
} from "@chakra-ui/core";

import { useMediaQuery } from "react-responsive";
import Icon from "../icon.png";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import "../custom.css";
export default function Second() {
  const [username, setName] = useState("");
  const [error, setError] = useState("");
  const [hover, Serhover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width:400px)" });
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dayarray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  let yeararray = [
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
  ];

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      window.location.assign("/upload");

      setIsLoading(false);
    } catch (error) {
      setError("Invalid username or password");
      setIsLoading(false);
    }
  };
  const mousehoverevent = () => {
    Serhover(true);
  };
  const mouseleaveevent = () => {
    Serhover(false);
  };
  const changevalue = (e: any) => {
    setName(e.target.value);
  };
  const handlemonth = (event: any) => {
    setMonth(event.target.value);
  };
  const handleDay = (event: any) => {
    setDay(event.target.value);
  };
  const handleYear = (event: any) => {
    setYear(event.target.value);
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
        marginTop={isTabletOrMobile ? "20%" : "10%"}
        borderRadius={8}
        minHeight={isTabletOrMobile ? "550px" : ""}
        borderColor={isTabletOrMobile ? "#150F1A" : "#150F1A"}
        boxShadow={isTabletOrMobile ? "" : "lg"}
        background={isTabletOrMobile ? "#150F1A" : "#150F1A"}
      >
        <Box textAlign="center" display="flex" justifyContent="center">
          <Image src={Icon} alt="Dan Abramov" />
        </Box>
        <Box as="div" style={{ textAlign: "center" }} marginTop="10px">
          <Text
            fontWeight="bold"
            textTransform="none"
            letterSpacing="wide"
            color="white"
            overflow="hidden"
            fontSize={isTabletOrMobile ? "18px" : "20px"}
            style={{ textOverflow: "ellipsis", fontFamily: "sans-serif" }}
          >
            Welcome! Let's complete your profile
          </Text>
        </Box>

        <Box my={4} textAlign="left" marginTop="15%">
          <form onSubmit={handleSubmit}>
            <FormControl
              mt={10}
              display="flex"
              justifyContent="center"
              alignItems="center"
              isRequired
            >
              <Input
                variant="outline"
                alignContent="center"
                width="100%"
                h={10}
                borderColor="#FFF"
                p={25}
                color="#FFF"
                borderRadius="7px"
                size="sm"
                alignItems="center"
                placeholder="Name"
                onChange={(e: any) => changevalue(e)}
              />
            </FormControl>
            <FormControl mt={10}>
              <FormLabel htmlFor="date" fontSize="md" color="#FFF">
                Date of birth
              </FormLabel>
            </FormControl>
            <Box>
              <Row style={{ width: "100%" }}>
                <Col xs={6} md={4}>
                  <Select
                    placeholder="Month"
                    color="#fff"
                    mt={2}
                    background="#150F1A"
                    borderColor="#FFF"
                    isRequired
                    focusBorderColor="#38B2AC"
                    onChange={(event: any) => handlemonth(event)}
                  >
                    {months.map((month) => (
                      <option
                        style={{ color: "#fff", background: "#150F1A" }}
                        value={month}
                        key={month}
                      >
                        {month}
                      </option>
                    ))}
                  </Select>
                </Col>
                <Col xs={6} md={4}>
                  <Select
                    placeholder="Day"
                    mt={2}
                    color="#fff"
                    background="#150F1A"
                    borderColor="#FFF"
                    focusBorderColor="#38B2AC"
                    onChange={(event: any) => handleDay(event)}
                    isRequired
                  >
                    {dayarray.map((day) => (
                      <option
                        style={{ color: "#fff", background: "#150F1A" }}
                        value={day}
                        key={day}
                      >
                        {day}
                      </option>
                    ))}
                  </Select>
                </Col>
                <Col xs={6} md={4}>
                  <Select
                    placeholder="Year"
                    color="#fff"
                    background="#150F1A"
                    mt={2}
                    focusBorderColor="#38B2AC"
                    borderColor="#FFF"
                    onChange={(event: any) => handleYear(event)}
                    isRequired
                  >
                    {yeararray.map((year) => (
                      <option
                        style={{ color: "#fff", background: "#150F1A" }}
                        value={year}
                        key={year}
                      >
                        {year}
                      </option>
                    ))}
                  </Select>
                </Col>
              </Row>
            </Box>
            <Box textAlign="center" mt={5}>
              <FormControl>
                <FormLabel
                  color="#fff"
                  fontSize={{
                    base: "13px",
                    sm: "14px",
                    md: "13px",
                    lg: "13px",
                  }}
                  style={{ textOverflow: "ellipsis", fontFamily: "system-ui" }}
                  overflow="hidden"
                >
                  Your age is private and will not bevisible
                </FormLabel>
              </FormControl>
            </Box>
            <Box
              as="div"
              mt={isTabletOrMobile ? 150 : 8}
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
                      base: "15px",
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
