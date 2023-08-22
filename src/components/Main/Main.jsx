import React from "react";
import "../Main/Main.css";
import Card from "../Card/Card";

import { sortAscending, sortDescending } from "../../utils/sortFunction";

const Main = ({ data, setData }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 className="wrapper">
        Search <span>Star Wars</span>
        {
          <div className="btn-container">
            <button
              onClick={() => {
                sortAscending(data, setData);
              }}
            >
              Ascending
            </button>
            <button
              onClick={() => {
                sortDescending(data, setData);
              }}
            >
              Descending
            </button>
            <input type="text" placeholder="Search for data..." />
          </div>
        }
      </h1>
      <div
        style={{
          display: "grid",
          gridRow: "initial",
          gridColumn: "initial",
          gridTemplateRows: "repeat(3, 350px)",
          gridTemplateColumns: "repeat(3, 300px)",
        }}
      >
        {data.map((people, index) => (
          <Card
            key={people.name}
            name={people.name}
            imgSrc={`https://starwars-visualguide.com/assets/img/characters/${
              index + 1
            }.jpg`}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
