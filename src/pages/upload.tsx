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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core";

import { useMediaQuery } from "react-responsive";
import Icon from "../icon.png";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import uploadimage from "../assets/Rectangle100.png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "../custom.css";
import { handleZoomToViewCenter } from "./function/zoom";

export default function Upload() {
  const [username, setName] = useState("");
  const [error, setError] = useState("");
  const [hover, Serhover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filelist, setFilelist] = useState<any>([]);
  const [progress, setProgress] = useState(0);
  const [imgData, setImgData] = useState<any>(null);
  const [imageexistflag, setImageflagexist] = useState<any>(false);
  const [displayflagupload, setFlagupload] = useState(false);
  const [success, SetSuccess] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width:400px)" });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const regex = /[A-Z]/g;
    const found = username.match(regex);

    try {
      setIsLoading(false);
      if (filelist.length === 0) {
        setError("* Select a picture");
      } else {
        SetSuccess(true);
      }
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
  const onChangePicture = (e: any) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      const newfile = e.target.files[0];
      const updatelist = [...filelist, newfile];
      setFilelist(updatelist);
      console.log(filelist);
      setImageflagexist(true);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      setFlagupload(true);
    }
  };

  const panningSetting = {velocityDisabled:true};
  const wheel = {wheelDisabled:true};
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
        minHeight={isTabletOrMobile ? "600px" : ""}
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
            fontSize={{ base: "16px", sm: "17px", md: "19px", lg: "20px" }}
            style={{ textOverflow: "ellipsis", fontFamily: "sans-serif" }}
          >
            {success ? "Move and Zoom" : "We're at the final step, William"}
          </Text>
        </Box>
        {!success && (
          <Box
            as="div"
            mt={isTabletOrMobile ? 10 : 10}
            display="grid"
            alignItems="center"
            justifyContent="center"
          >
            {!displayflagupload && (
              <Box as="div" display="flex" alignItems="center">
                <Box as="div" position="relative">
                  <AddIcon
                    cursor="pointer"
                    borderStyle="dashed"
                    borderRadius="50%"
                    fontSize={isTabletOrMobile ? "40px" : "50px"}
                    padding="10px"
                    borderWidth="2px"
                    borderColor="#fff"
                    color="#fff"
                  ></AddIcon>
                  <input
                    id="profilePic"
                    type="file"
                    onChange={(e: any) => onChangePicture(e)}
                  />
                </Box>
                <FormLabel
                  htmlFor="date"
                  ml={5}
                  fontSize={{
                    base: "15px",
                    sm: "15px",
                    md: "20px",
                    lg: "21px",
                  }}
                  color="#FFF"
                  fontWeight="400"
                >
                  Upload a picture
                </FormLabel>
              </Box>
            )}
            {!displayflagupload && (
              <Text
                color="#e73434"
                mt={1}
                textAlign="center"
                fontSize={{
                  base: "12px",
                  sm: "13px",
                  md: "15px",
                  lg: "15px",
                }}
                style={{ textOverflow: "ellipsis" }}
                overflow="hidden"
              >
                {error}
              </Text>
            )}
            <Box as="div">
              {filelist.map((value: any, index: any) => (
                <Image
                  key={index}
                  src={uploadimage}
                  borderRadius="5px"
                  alt="Dan Abramov"
                />
              ))}
            </Box>
          </Box>
        )}
        {success && (
          <Box
            as="div"
            mt={isTabletOrMobile ? 10 : 3}
            display="grid"
            alignItems="center"
            justifyContent="center"
          >
            <Box as="div">
              <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
                panning={panningSetting}
                wheel={wheel}
              >
                {({ instance, zoomIn, zoomOut,resetTransform, ...rest }) => (
                  <Box as="div">
                    <Box as="div">
                      <Slider
                        aria-label="slider-ex-1"
                        defaultValue={progress}
                        onChange={(e: any) => {
                          let scaling = Math.pow(2,e / 25);
                          console.log(scaling);
                          setProgress(e);
                          handleZoomToViewCenter(instance,scaling, 1, 'easeOut');
                        }}
                      >
                        <SliderTrack>
                          <SliderFilledTrack background="#fff" />
                        </SliderTrack>
                        <SliderThumb />
                      </Slider>
                    </Box>
                    <Box as="div" cursor="all-scroll">
                      <TransformComponent>
                        <Image
                          cursor="all-scroll"
                          src={uploadimage}
                          style={{ width: "100%" }}
                          className="uploadedimage"
                          alt="zoomimage"
                        />
                      </TransformComponent>
                    </Box>
                  </Box>
                )}
              </TransformWrapper>
            </Box>
          </Box>
        )}
        <Box
          my={4}
          textAlign="left"
          marginTop={isTabletOrMobile ? "18%" : "5%"}
        >
          <form onSubmit={handleSubmit}>
            {!success && (
              <FormControl mt={10}>
                <FormLabel htmlFor="date" fontSize="md" color="#FFF">
                  Choose a username
                </FormLabel>
              </FormControl>
            )}
            {!success && (
              <FormControl
                display="flex"
                justifyContent="center"
                alignItems="center"
                isRequired
              >
                <InputGroup width="100%" display="flex" alignItems="center">
                  <Input
                    variant="flushed"
                    alignContent="center"
                    width="100%"
                    h={10}
                    borderColor="#FFF"
                    p={0}
                    color="#FFF"
                    borderRadius="2px"
                    size="sm"
                    alignItems="center"
                    placeholder="Username"
                    onChange={(e: any) => changevalue(e)}
                  />
                  {success && <CheckIcon color="green" />}
                </InputGroup>
              </FormControl>
            )}
            <Box
              as="div"
              mt={isTabletOrMobile ? 190 : 10}
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
                      sm: "16px",
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
