import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Webbanner from "../img/fest3.jpg";

export default function Banner() {
  return (
    <>
      <Box width="100%">
        <Image src={Webbanner} alt="Workers fest" />
      </Box>
    </>
  );
}
