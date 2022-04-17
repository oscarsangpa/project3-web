import React from "react";
import { useGetSearchResult } from "../../services/useGetSearchResult";

export default function Search() {
  const getData = useGetSearchResult();
  return (
    <div>
      <div>Página Search</div>
      <div>
        <div>RESULTADOS</div>
        <div>isLoading : {getData.isLoading ? "CARGANDO" : "RESUELTO"}</div>
        <div>TENEMOS DATOS: {getData.data}</div>
        <div>ERROR: {getData.error}</div>
      </div>
    </div>
  );
}
