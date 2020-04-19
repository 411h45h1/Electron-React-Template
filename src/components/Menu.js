import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Electron from "electron";
const remote = Electron.remote;
let window = remote.getCurrentWindow();

export const Menu = ({ title }) => {
  return (
    <Container fluid>
      <Row>
        <Col>{/* Menu area */}</Col>
        <Col>{title}</Col>
        <Col>
          <ButtonGroup className="App-header-control">
            <Button
              variant="light"
              onClick={() => {
                console.log("minimize");
                window.minimize();
              }}
            >
              _
            </Button>
            <Button
              variant="light"
              onClick={() => {
                console.log("maximize");
                if (!window.isMaximized()) {
                  window.maximize();
                } else {
                  window.unmaximize();
                }
              }}
            >
              ‾
            </Button>

            <DropdownButton
              as={ButtonGroup}
              title="Logout/Off"
              variant="danger"
            >
              <Dropdown.Item
                eventKey="1"
                onClick={() => {
                  console.log("Off");
                  window.close();
                }}
              >
                Off
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                onClick={() => {
                  console.log("Logout");
                }}
              >
                Logout
              </Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
