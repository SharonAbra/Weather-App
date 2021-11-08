import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { fetchKey, handleValid } from "../redux/actions.js";
import Validation from "./Validation";

export default function Search() {

  const dispatch = useDispatch();
  const invalidCity = useSelector((state) => state.invalidCity);
  const [ modalShow, setModalShow ] = useState(false);
  const letters = /^[A-Za-z]+$/;

  function handleSearch(e) {
    e.preventDefault();
    let text = e.target.search.value;
    if (text.match(letters)) {
      dispatch(fetchKey(text));
    } else {
      setModalShow(true);
    }
    e.target.search.value = "";
  }

  useEffect(() => {
    if (invalidCity === true) {
      setModalShow(true);
    }
  }, [invalidCity]);

  function handleClose() {
    setModalShow(false);
    dispatch(handleValid());
  }

  // A modal component (Validation.js) will appear if the searched text is not in English, or if the city name is invalid
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center text-center">
          <div className="form-container">
            <form className="form" onSubmit={(e) => handleSearch(e)}>
              <input
                type="text"
                name="search"
                placeholder="Type a city name"
                className="input"
              ></input>
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </form>
          </div>
        </Row>
      </Container>
      <Validation show={modalShow} onHide={handleClose} />
    </>
  );
}
