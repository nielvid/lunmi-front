import React from "react";
import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
// import { ReactComponent as Logo } from "../img/logo.svg";

// eslint-disable-next-line react/prop-types
export default function TextInput({
  icon,
  name,
  register,
  onChange,
  type,
  placeholder,
}) {
  return (
    <>
      <InputGroup
        borderRightRadius="15px"
        background="white"
        border="2px solid #572CD8"
        m="3px 0"
      >
        <InputLeftElement
          py="1.5rem"
          px="2.5rem"
          fontSize="2rem"
          background="#572CD8"
          border="none"
          pointerEvents="none"
          alignItems="center"
          icon={icon}
        >
          {icon}
        </InputLeftElement>
        <Input
          ref={register}
          py="1.5rem"
          px="2.5rem"
          ml="1.5em"
          fontSize="2rem"
          type={type}
          color="black"
          alignItems="center"
          name={name}
          borderRightRadius="15px"
          border="none"
          outline="none"
          placeholder={placeholder}
          onChange={onChange}
        />
      </InputGroup>
    </>
  );
}
