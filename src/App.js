import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";

import styled from "@emotion/styled";

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  //extraer datos
  const { datos } = resumen;

  return (
    <Container>
      <Header titulo="Cotizador de seguros" />;
      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} />
        <Resumen datos={datos} />
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
