import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

import styled from "@emotion/styled";

function App() {
  return (
    <Container>
      <Header titulo="Cotizador de seguros" />;
      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
    </Container>
  );
}

//styles App

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

export default App;
