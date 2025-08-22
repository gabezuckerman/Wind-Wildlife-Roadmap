import React from "react";
import { matrixData } from "../data/matrixData";
import { FlipCard } from "./FlipCard";
import "../styles/Matrix.css";

const speciesEmojis: Record<string, string> = {
  "Bats": "🦇",
  "Eagles": "🦅",
  "Prairie Chicken": "🐔",
  "Songbirds": "🎶",
  "Marine Mammals": "🐬",
};

const concernEmojis: Record<string, string> = {
  "Curtailment Effectiveness": "⚡",
  "Permitting & Monitoring": "📋",
  "Population Impact": "👥",
  "Collision Risk": "💥",
  "Noise Impact": "🔊",
};

const speciesList = Array.from(new Set(matrixData.map((d) => d.species)));
const concernList = Array.from(new Set(matrixData.map((d) => d.concern)));

export const Matrix: React.FC = () => (
  <div className="matrix-container">
    <h2 className="matrix-title">WETOSA Wind-Wildlife Roadmap</h2>
    <div className="matrix-header-row"
      style={{
        display: "grid",
        gridTemplateColumns: `160px repeat(${concernList.length}, 1fr)`,
        fontWeight: "bold",
        fontSize: "1.1rem",
        marginBottom: "0.2rem",
        paddingLeft: 0,
        paddingBottom: "0.2rem",
      }}
    >
      <span className="matrix-header-cell">Species</span>
      {concernList.map((concern) => (
        <span className="matrix-header-cell" key={concern}>
          {concernEmojis[concern] ? `${concernEmojis[concern]} ` : ""}
          {concern}
        </span>
      ))}
    </div>
    <div className="matrix-grid">
      {speciesList.map((species, rowIdx) => (
        <div
          className="species-row-bg matrix-grid-row"
          key={species}
          style={{
            display: "grid",
            gridTemplateColumns: `160px repeat(${concernList.length}, 1fr)`,
            alignItems: "stretch",
            marginBottom: "16px",
            borderRadius: "18px",
            background: "#f5f5f7",
            border: "2px solid #bdbdbd",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div className="species-cell" style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "1.1em",
            padding: "0.7rem",
            background: "#f5f5f7",
          }}>
            {speciesEmojis[species] ? `${speciesEmojis[species]} ` : ""}
            {species}
          </div>
          {concernList.map((concern, colIdx) => {
            const entry = matrixData.find(
              (d) => d.species === species && d.concern === concern
            );
            return (
              <div
                key={concern}
                style={{
                  padding: "0.7rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f5f5f7",
                }}
              >
                {entry ? (
                  <FlipCard
                    front={entry.problem}
                    back={entry.solution}
                    knowledge={entry.knowledge}
                    nrelCanHelp={entry.nrelCanHelp}
                  />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
    <div className="matrix-legend">
      <span>
        <span className="legend-box legend-little" /> Little known
      </span>
      <span>
        <span className="legend-box legend-moderate" /> Moderate knowledge
      </span>
      <span>
        <span className="legend-box legend-well" /> Well known
      </span>
      <span>
        <span className="legend-box legend-dashed" /> NREL can help
      </span>
    </div>
  </div>
);