import React from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorage.service";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const localFavs = getFavFromStorage();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid container">
        {localFavs.length
          ? localFavs.map((dentistFav) => (
              <Card {...dentistFav} key={dentistFav.matricula} />
            ))
          : null}
      </div>
    </>
  );
};


export default Favs;
