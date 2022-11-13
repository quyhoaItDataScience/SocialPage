import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { getUsers } from "../api/user";
import Card from "../components/Card";

function Hompage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [users]);

  return (
    <>
      <Container>
        <Row className="mb-5">
          <Col
            xs={12}
            md={6}
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <h1
              className="h1"
              style={{
                color: "#f6ad55",
                fontSize: "55px",
              }}
            >
              Kết nối những người cùng chí hướng
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <Image
              src="https://st2.depositphotos.com/3643473/6206/i/600/depositphotos_62060665-stock-photo-people-connecting-cable.jpg"
              fluid
            />
          </Col>
        </Row>

        <div className="row gap-5 mt-5">
          {users?.map((user) => (
            <Card key={user?.id} user={user} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Hompage;
