import React, { useState, useEffect } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink
} from "@react-pdf/renderer";

import { PDFViewer } from "@react-pdf/renderer";

import backgroundImage from "../../assets/certificado.jpg";

const styles = StyleSheet.create({
  page: {
    height: 400,
    width: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center"
  },
  image: {
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%"
  },
  ViewtextTitle: {
    width: 180,
    height: 50,
    position: "absolute",
    marginTop: 150,
    marginLeft: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  textTitle: {
    fontSize: 35,
    fontFamily: "Helvetica"
  },
  ViewText: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 700,
    height: 180,
    position: "absolute",
    marginTop: 200,
    marginLeft: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  textText: {
    fontSize: 17,
    fontFamily: "Helvetica",
    lineHeight: 2
  },
  ViewData: {
    width: 284,
    height: 25,
    position: "absolute",
    marginTop: 386,
    marginLeft: 505,
    justifyContent: "center",
    alignItems: "center"
  },
  textData: {
    fontSize: 15,
    fontFamily: "Helvetica",
    textDecoration: "underline"
  },
  NomeAluno: {
    fontSize: 18,
    fontFamily: "Helvetica",
    textDecoration: "underline"
  },
  NomeExposicao: {
    fontSize: 18,
    fontFamily: "Helvetica",
    textDecoration: "underline"
  }
});

export default function Certificate(props) {
  const Aluno = props.location.state.list;
  console.log(Aluno);
  const [state, setState] = useState({
    Aluno: {
      nome: "Alisson Renan Macedo",
      curso: "Photoshop",
      exposicao: "Exposição de desenho Infantil",
      dataInicio: "11/10/2019",
      dataFim: "30/11/2019",
      titulo: "Expositor",
      dataFinal: "Ribeirão Preto, 21 de Novembro de 2019"
    }
  });

  const MyDocument = (
    <Document style={{ width: "100%", height: "100%" }}>
      <Page style={styles.page} size="A4" orientation="landscape">
        <View style={styles.centerImage}>
          <Image style={styles.image} src={backgroundImage} />
          <View style={styles.ViewtextTitle}>
            <Text style={styles.textTitle}>{Aluno.title}</Text>
          </View>
          <View style={styles.ViewText}>
            <Text style={styles.textText}>
              A Bauhaus Brasil confere o título de expositor a{" "}
              <Text style={styles.NomeAluno}>{Aluno.name}</Text>, e o parabeniza
              pelo excelente trabalho realizado na exposição artística{" "}
              <Text style={styles.NomeExposicao}>{Aluno.exposicao}</Text>,
              exposta na Escola Bauhaus Brasil nos dias {Aluno.dataInicio} a{" "}
              {Aluno.dataFim}.
            </Text>
          </View>
          <View style={styles.ViewData}>
            <Text style={styles.textData}>{Aluno.dataCertificado}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        {MyDocument}
      </PDFViewer>
    </>
  );
}
