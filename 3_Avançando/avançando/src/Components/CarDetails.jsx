import React from "react";
const CarDetails = ({brand, km, color, novo}) => {
  return (
    <div className="CarrosNovos">
      {novo ? (
          <div >
            <h2>Detalhes do carro</h2>
            <ul>
              <li>Marca: {brand}</li>
              <li>KM: {km}</li>
              <li>Cor: {color}</li>
            </ul>
          </div>
      ) : ("")}
    </div>
  );
};

export default CarDetails;