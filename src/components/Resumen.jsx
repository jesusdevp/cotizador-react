import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { primerMayuscula } from "../helper";

const Resumen = ({ datos }) => {
  //extraer de datos
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;

  return (
    <ContainerResumen>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {primerMayuscula(marca)} </li>
        <li>Plan: {primerMayuscula(plan)} </li>
        <li>Año del auto: {year} </li>
      </ul>
    </ContainerResumen>
  );
};

//PropTypes
Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};

//styles Resumen

const ContainerResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

export default Resumen;
