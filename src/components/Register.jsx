/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { toast } from "react-toastify";
import TextInput from "../common/TextInput";
import CommonBtn from "../common/CommonBtn";

export default function Register() {
  const [firstname, setfirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setemail] = useState();
  const [telephone, settelephone] = useState();

  const getName = (e) => {
    setfirstName(e.target.value);
  };
  const getLastName = (e) => {
    setLastName(e.target.value);
  };
  const getEmail = (e) => {
    setemail(e.target.value);
  };
  const getPhone = (e) => {
    settelephone(e.target.value);
  };
  const Submit = async (e) => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      telephone,
    };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/register`,
        data
      );
      console.log(res);
      toast.success("Registration Successfull");
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit");
    }
  };
  return (
    <>
      <Box width="100%" margin="auto" textAlign="center" padding="4em 0">
        <Box width="100%" margin="2em auto" textAlign="center">
          <Flex
            justifyContent="center"
            alignItems="center"
            px="2em"
            py="3em"
            flexWrap="wrap"
          >
            <Box border="2px solid #1b1143" p="2em" borderRadius="15px">
              <Heading textAlign="center" pb="1em" fontSize="2.5em">
                Register to Attend
              </Heading>
              <Box m="2px auto">
                <Box as="form" onSubmit={Submit}>
                  <TextInput
                    type="text"
                    placeholder="First name"
                    name="firstname"
                    value={firstname}
                    onChange={getName}
                  />

                  <TextInput
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    value={lastname}
                    onChange={getLastName}
                  />

                  <TextInput
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={getEmail}
                  />

                  <TextInput
                    type="text"
                    name="telephone"
                    placeholder="Telephone Number"
                    value={telephone}
                    onChange={getPhone}
                  />

                  <CommonBtn
                    type="submit"
                    fontSize="2em"
                    py="1em"
                    px="2.5em"
                    margin="2em 0 0 0"
                  >
                    Register
                  </CommonBtn>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
