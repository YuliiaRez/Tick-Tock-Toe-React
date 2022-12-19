import React, { useState } from "react";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, Container, Col, Row, Button } from "reactstrap";
import "./App.css";

const itemArray = new Array(9).fill("empty");
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const reloadGame = () => {};
  const checkIsWinner = () => {};
  const changeItem =itemNumber => {};

  return (
    <div>
      <Icon />
    </div>
  );
};

export default App;
