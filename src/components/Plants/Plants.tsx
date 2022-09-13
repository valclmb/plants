import { useEffect, useState } from "react";
import "./Plants.css";
import { Plant } from "../../models/Plant";

export const Plants = () => {
  const [plants, setPlants] = useState<Plant[]>();
  const apiUrl: string = process.env.REACT_APP_API_URL || "";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => setPlants(json));
  }, [apiUrl]);

  return (
    <section className="plants">
      {plants?.map((plant) => (
        <div key={plant.id}>{plant.name}</div>
      ))}
    </section>
  );
};
