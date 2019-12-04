import React from "react";
import { MdRemoveRedEye, MdCloudDownload } from "react-icons/md";

import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function certificates() {
  return (
    <Container>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 0.5,
            borderBottom: "solid",
            borderBottomColor: "#eee",
            paddingBottom: 10
          }}
        >
          <h1>Lista de alunos</h1>
        </div>
        <div>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: 10,
              padding: 10
            }}
          >
            <div>
              <a style={{ paddingRight: 40 }}>Nome do Fulano</a>
            </div>
            <Link to="/certificate">
              <MdRemoveRedEye color="#333" size={20} />
            </Link>
            <Link to="/certificate">
              <MdCloudDownload color="#333" size={20} />
            </Link>
          </li>
        </div>
      </div>
    </Container>
  );
}
