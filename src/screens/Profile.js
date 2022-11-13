import React from "react";
import { Button, Container, Form, Image, Row } from "react-bootstrap";

const defaultUserUrl = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

function Profile() {
  return (
    <>
      <div className="d-flex justify-content-center position-relative">
        <Image
          src={defaultUserUrl}
          roundedCircle
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <span
          className="position-absolute top-100 start-50 translate-middle"
          style={{
            width: "50px",
            height: "50px",
          }}
        >
          <i class="bx bx-camera">hihi</i>
        </span>
      </div>
      <h2 className="h2 mb-5 text-center">Edit profile</h2>
      <Container
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Row
          style={{
            width: "600px",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Hobbies</Form.Label>
              <Form.Control type="text" placeholder="Hobbies" />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Edit
              </Button>
            </div>
          </Form>{" "}
        </Row>
      </Container>
    </>
  );
}

export default Profile;
