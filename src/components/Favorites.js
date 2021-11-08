import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import FavoriteLocation from "./FavoriteLocation";

export default function Favorites() {
  const favoritesList = JSON.parse(localStorage.getItem("favoritesList"));

  if (favoritesList === null || favoritesList.length < 1) {
    return (
      <>
        <Row className="text-center favorites-title">
          <h1>My Favorite Locations</h1>
        </Row>
        <Row className="text-center">
          <h4>No favorites yet</h4>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Container>
            <Row className="text-center favorites-title">
                <h1>My Favorite Locations</h1>
            </Row>
            <Row className="d-flex justify-content-center">
                {favoritesList.map((item, i) => {
                return (
                    <Col key={i} md={2}>
                    <FavoriteLocation id={i} favoriteKey={item} />
                    </Col>
                );
                })}
            </Row>
        </Container>
      </>
    );
  }
}
