import React, { useState } from "react";
// import axios from "axios";

import {
  FormControl,
  Box,
  Flex,
  Heading,
  Text,
  List,
  Link,
} from "@chakra-ui/react";

import TextInput from "../common/TextInput";
import CommonBtn from "../common/CommonBtn";
import Speakers from "./Speakers";
import Ola from "../img/ola.jpeg";
import Ann from "../img/ann.jpeg";
import Jef from "../img/jef.jpeg";

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  // const [lastname, setLastName] = useState();
  // const [email, setemail] = useState();
  // const [telephone, settelephone] = useState();

  const FirstName = (e) => {
    setFirstname(e.target.value);
    // eslint-disable-next-line no-console
    console.log(firstname);
  };

  /* const submit = (e) => {
    e.preventDefault();

    const res = axios.post("https://lunmi-back.herokuapp.com/register");
    // eslint-disable-next-line no-console
    console.log(res);
  };
*/

  return (
    <>
      <Box width="100%" padding="4em 0">
        <Box width="100%" margin="2em auto">
          <Box mb="4em">
            <Heading
              fontSize={["3.5rem", "4.5rem", "6rem"]}
              color="#1b1143"
              textAlign="center"
            >
              Worker&apos;s Fest 1.0
            </Heading>
          </Box>

          <Flex justifyContent="space-around" flexWrap="wrap">
            <Box
              mx="2.5em"
              fontSize="2em"
              w="40em"
              textAlign="justify"
              mb="2em"
            >
              <Heading py="1em">Fast-Track Your way to the top</Heading>
              <Text>
                Top 9 Secrets of Climbing Any Organisational Ladder with Speed
                by the PRO&#39;s
              </Text>
              <List>Are you really game for this?</List>
              <List>
                Do you desire to climb to the top of your organisational ladder?
              </List>
              <List>
                Do you often get sidetracked at work while others get promoted?
              </List>
              <List>
                {" "}
                Do you know, it only takes about 15years to climb to the top of
                any organisation ladder?
              </List>
              <List>
                Do you also know you can become that exceptional fast-growing,
                top earner &pos;overnight&pos;?
              </List>
              <Heading py="1em">Yes, You Can!</Heading>
              <Text>
                That&#39;s why you can&#39;t afford to miss this meeting.
                It&#39;s a one-day event you will ever be grateful you attended.
                Our vision is to help you fast-track your growth, where others
                simply halt. We will not only show you how to keep your job but
                also how to quickly climb up and become one of the decision
                makers in your organisation.{" "}
              </Text>
              <Text>
                Our Facilitators are live-by-example key officers of their
                organisations.
              </Text>
              <Heading py="1em">In this one-day event, you will learn;</Heading>
              <List>The right attitude necessary for workplace success.</List>
              <List>How to win over hard/harsh bosses.</List>
              <List>
                How to make yourself indispensable in your organisation.
              </List>
              <List /> How to Fast-Track your way to the top in any
              organisation.
              <List> How to position yourself for better opportunities.</List>
              <List>And,And, many more.</List>
              <Text>So, see you on May 1, 2021 To your rapid growth,</Text>
            </Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              px="1em"
              flexWrap="wrap"
            >
              <Box border="2px solid blue" p="3em 1em" borderRadius="15px">
                <Heading textAlign="center" py="1em">
                  Register for this Event
                </Heading>
                <Box m="2px auto">
                  <FormControl>
                    <TextInput
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      value={firstname}
                      onChange={FirstName}
                    />

                    <TextInput
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />

                    <TextInput type="text" name="email" placeholder="Email" />
                    <TextInput
                      type="text"
                      name="telephone"
                      placeholder="Telephone Number"
                    />

                    <CommonBtn padding="1em 2em" fontSize="2em">
                      Register
                    </CommonBtn>
                  </FormControl>
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex
            id="speakers"
            justifyContent="space-between"
            flexWrap="wrap"
            px="2em"
            py="3em"
            margin="2em auto"
          >
            <Box>
              {" "}
              <Speakers speaker="Olawale Stevens" image={Ola} />
            </Box>
            <Box>
              {" "}
              <Speakers speaker="Ann Stevens" image={Ann} />
            </Box>
            <Box>
              {" "}
              <Speakers speaker="Jeffrey Ehikioya Itepu" image={Jef} />
              <Heading>CEO of Pertinence Properties </Heading>
              <Text fontSize="2em" textAlign="center">
                <Link to="/">Read Profile</Link>
              </Text>
            </Box>

            <Box>
              {" "}
              <Speakers
                speaker="BOSEDE OLUSOLA-OBASA"
                image="https://res.cloudinary.com/nigerianlegion/image/upload/v1619561162/bose_imf0w8.jpg"
              />
              <Heading fontSize="1.7em">
                CEO, 1st Royal Character & Values Limited{" "}
              </Heading>
              <Text fontSize="2em" textAlign="center">
                <Link to="/">Read Profile</Link>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
