import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { Wrapper, Content } from "./styles";

import { postNewTask } from "../../store/modules/task/actions";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório.")
});

export default function FormMulario() {
  const [list, setList] = useState([""]);

  function handleSubmit({ name }) {
    setList([...list, name]);

    console.log(list);
  }

  return (
    <>
      <Content>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome completo" />
          <button type="submit">Adicionar</button>
          <a>{list}</a>
          <Link to="/">Já tenho login</Link>
        </Form>
      </Content>
    </>
  );
}
