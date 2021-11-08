import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { handleDarkMode, setUnitLetter, changeUnit } from "../redux/actions.js";
import sun from "../images/logo_sun.png";

export default function NavBar() {
  const darkButton = useSelector((state) => state.darkButton);
  const metric = useSelector((state) => state.metric);
  const [unit, setUnit] = useState();
  const dispatch = useDispatch();

  // Navbar includes buttons to change units and dark mode
  function handleDarkModeClick() {
    dispatch(handleDarkMode());
  }

  useEffect(() => {
    if (metric === false) {
      setUnit("Celsius");
      dispatch(setUnitLetter("F"));
    } else {
      setUnit("Fahrenheit");
      dispatch(setUnitLetter("C"));
    }
  }, [metric]);

  function handleUnit() {
    dispatch(changeUnit());
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{ fontSize: "25px" }}
      >
        <Container>
          <img src={sun} alt="sun" width="40px"></img>
          <Navbar.Brand href="/">Weather App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
              <Button
                variant="outline-primary"
                style={{ width: "150px", margin: "10px 10px" }}
                onClick={handleDarkModeClick}
                className="dark-button"
              >
                Change to {darkButton}
              </Button>
              <Button
                variant="outline-warning"
                style={{ width: "150px", margin: "10px 10px" }}
                onClick={handleUnit}
              >
                Change to {unit}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
