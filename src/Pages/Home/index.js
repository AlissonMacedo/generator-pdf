import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { MdCloudDownload, MdDeleteForever } from "react-icons/md";

import { Container, Content, ButtonAdd, DivHeader } from "./styles";

import { postNewTask } from "../../store/modules/task/actions";

const schema = Yup.object().shape({
  title: Yup.string().required("O titulo é obrigatório"),
  name: Yup.string().required("O nome é obrigatório."),
  exposicao: Yup.string().required("A exposição é obrigatória."),
  dataInicio: Yup.string().required("A data de Início é obrigatória."),
  dataFim: Yup.string().required("A data de final é obrigatória."),
  dataCertificado: Yup.string().required("A data do certificado é obrigatória.")
  //seu erro está aqui
  //mesmo que ele não seja required...
  //vc tem que colocar se não o unform nao envia os dados pro handlesubmit
});

export default function Home() {
  const [state, setState] = useState([]);
  const [newName, setNewName] = useState([]);

  async function handleSubmit({
    title,
    name,
    exposicao,
    dataInicio,
    dataFim,
    dataCertificado
  }) {
    const data = {
      name: name,
      title: title,
      exposicao: exposicao,
      dataInicio: dataInicio,
      dataFim: dataFim,
      dataCertificado: dataCertificado
    };

    await setState([...state, data]);
    console.log(state);
  }

  function handleInputChange(e) {
    setNewName(e.target.value);
  }

  function handleDelete(name) {
    setState(state.filter(t => t !== name));
  }

  useEffect(() => {
    const list = localStorage.getItem("list");

    if (list) {
      setState(JSON.parse(list));
    }
  }, []);

  useEffect(() => {
    function SetaList() {
      localStorage.setItem("list", JSON.stringify(state));
    }
    SetaList();
  }, [state]);

  return (
    <>
      <Container>
        <Content>
          <DivHeader>
            <a>Formulário de Cadastro</a>
          </DivHeader>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="title" placeholder="Titulo" type="text" />
            <Input name="name" placeholder="Nome completo" type="text" />
            <Input
              name="exposicao"
              placeholder="Nome da Exposição"
              type="text"
            />
            <Input
              name="dataInicio"
              placeholder="Data Início...Ex: 18/12/2019"
              type="text"
            />
            <Input
              name="dataFim"
              placeholder="Data Fim...Ex: 18/12/2019"
              type="text"
            />
            <Input
              name="dataCertificado"
              placeholder="Data do Certificado"
              type="text"
            />
            <ButtonAdd type="submit">Adicionar</ButtonAdd>
          </Form>
        </Content>
        <Content>
          <DivHeader>
            <a>Lista de alunos</a>
          </DivHeader>
          <table>
            {state.map(list => (
              <tr>
                <th
                  style={{
                    width: "60%"
                  }}
                >
                  {list.name}
                </th>
                <th>
                  <Link to={{ pathname: "/certificate", state: { list } }}>
                    <MdCloudDownload color="#333" size={20} />
                  </Link>
                </th>
                <th>
                  <button onClick={() => handleDelete(list)}>
                    <MdDeleteForever color="#333" size={20} />
                  </button>
                </th>
              </tr>
            ))}
          </table>
        </Content>
      </Container>
    </>
  );
}
