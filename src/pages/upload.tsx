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
import Icon from "../assets/img/group6.png";
import PointerArrow from '../assets/img/arrows-alt.png';
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
  const [success, SetSuccess] = useState(true);
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
    <Flex width="Full" align="center" justifyContent="center"
      h='100%'
    >
      <Box
        p={0}
        paddingLeft="5%"
        paddingRight="5%"
        paddingBottom="1%"
        maxWidth="901px"
        w={isTabletOrMobile ? "85%" : "90%"}
        borderWidth={1}
        marginTop={isTabletOrMobile ? "10%" : "89px"}
        marginBottom={isTabletOrMobile ? "10%" : "116px"}
        borderRadius='20px'
        borderColor={isTabletOrMobile ? "#150F1A" : "#150F1A"}
        boxShadow={isTabletOrMobile ? "" : "lg"}
        background={isTabletOrMobile ? "#150F1A" : "#150F1A"}
      >
        <Box 
          textAlign="center" 
          display="flex" 
          justifyContent="center"
          >
          <Image 
            marginTop="22.5px"
            w={{ base: "24px",
            sm: "24px",
            md: "30px",
            lg: "43px",}}
            h={{ base: "18px",
            sm: "18px",
            md: "24px",
            lg: "34px",}}
            src={Icon} 
            alt="Dan Abramov" />
        </Box>
        <Box as="div" style={{ textAlign: "center" }} marginTop="19.31px">
          <Text
            fontWeight="bold"
            textTransform="none"
            lineHeight="43px"
            fontStyle="normal"
            textAlign='center'
            color="white"
            overflow="hidden"
            fontSize={{ base: "16px", sm: "17px", md: "19px", lg: "35px" }}
            style={{ textOverflow: "ellipsis", fontFamily: "Proxima Nova" }}
          >
            {success ? "Move and zoom" : "We're at the final step, William"}
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
            display="grid"
            alignItems="center"
            justifyContent="center"
          >
            <Box as="div"
            >
              <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
                panning={panningSetting}
                wheel={wheel}
              >
                {({ instance, zoomIn, zoomOut,resetTransform, ...rest }) => (
                  <Box as="div">
                    <Box as="div"
                    
                    >
                      <Text
                        as='span'
                        fontFamily='Proxima Nova'
                        fontWeight='400'
                        fontStyle='normal'
                        fontSize={{
                          base: "12px",
                          sm: "13px",
                          md: "15px",
                          lg: "20px",
                        }}
                        lineHeight='24px'
                        color='white'
                        position='relative'
                        top={{
                          base: "-6px",
                          sm: "-6px",
                          md: "-6px",
                          lg: "-6px",
                        }}
                        marginRight='12px'
                      >
                        Zoom
                      </Text>
                      <Slider
                        aria-label="slider-ex-1"
                        marginTop='32px'
                        width={{
                          base: '150px',
                          sm: '150px',
                          md: '250px',
                          lg: '315px',
                        }}
                        defaultValue={progress}
                        onChange={(e: any) => {
                          let scaling = Math.pow(2,e / 25);
                          console.log(scaling);
                          setProgress(e);
                          handleZoomToViewCenter(instance,scaling, 1, 'easeOut');
                        }}
                      >
                        <SliderTrack
                          height='2px'>
                          <SliderFilledTrack background="#fff" />
                        </SliderTrack>
                        <SliderThumb
                          width='15px'
                          height='15px'
                           />
                      </Slider>
                    </Box>
                    <Box as='div'
                      display='flex'
                      justifyContent='center'>
                      <Box as="div" cursor="all-scroll"
                        marginTop='42px'
                        position='relative'
                      >
                        <TransformComponent>
                          <Image
                            cursor="all-scroll"
                            src={uploadimage}
                            width={{ base: "200px",
                            sm: "200px",
                            md: "300px",
                            lg: "390px",}}
                            height={{
                              base: "250px",
                              sm: "250px",
                              md: "375px",
                              lg: "487px",
                            }}
                            // style={{ width: "390px", height:"487px" }}
                            className="uploadedimage"
                            alt="zoomimage"
                          />
                        </TransformComponent>
                        <Image
                          src={PointerArrow}
                          width={{
                            base: "30px",
                            sm: "30px",
                            md: "30px",
                            lg: "43px",
                          }}
                          height={{
                            base: "30px",
                            sm: "30px",
                            md: "30px",
                            lg: "43px",
                          }}
                          opacity={0.5}
                          alt=''
                          position='absolute'
                          top={{
                            base: 'calc(50% - 15px)',
                            sm: 'calc(50% - 15px)',
                            md: 'calc(50% - 15px)',
                            lg: 'calc(50% - 21.5px)',
                          }}
                          left={{
                            base: 'calc(50% - 15px)',
                            sm: 'calc(50% - 15px)',
                            md: 'calc(50% - 15px)',
                            lg: 'calc(50% - 21.5px)',
                          }}
                          />
                      </Box>
                    </Box>
                  </Box>
                )}
              </TransformWrapper>
            </Box>
          </Box>
        )}
        <Box
          textAlign="left"
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
              display="flex"
              justifyContent="center"
              marginTop={isTabletOrMobile? '30px':"48px"}
              marginBottom={isTabletOrMobile? '30px':"67px"}
            >
              <Button
                background={hover === false ? "#fff" : "#150F1A !important"}
                variant={hover === false ? "solid" : "outline"}
                borderRadius={isTabletOrMobile? '30px' :'50px'}
                width={{ base: "340px",
                sm: "340px",
                md: "510px",
                lg: "665px",}}
                height={{ base: "40px",
                sm: "40px",
                md: "60px",
                lg: "80px",}}
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
                    fontFamily="Proxima Nova"
                    fontWeight="600"
                    fontStyle="normal"
                    lineHeight="28px"
                    color="#0A070C"
                    fontSize={{ base: "13px",
                    sm: "15px",
                    md: "18px",
                    lg: "23px",}}
                  >
                    Done
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
