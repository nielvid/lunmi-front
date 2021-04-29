import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageWrapper from "./layout/PageWrapper";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Mobilemenu from "./common/Mobilemenu";
import Header from "./common/Header";
import Banner from "./components/Banner";
import Footer from "./common/Footer";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Register from "./components/Register";

function App() {
  const [state, setstate] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setstate(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [window]);
  return (
    <>
      <ChakraProvider>
        <ToastContainer />
        <PageWrapper>
          <Router>
            {state < 720 ? <Mobilemenu /> : <Header />};
            <Banner />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/events">
                <Signup />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/speaker/:slug">
                <Profile />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </PageWrapper>
      </ChakraProvider>
    </>
  );
}

export default App;
