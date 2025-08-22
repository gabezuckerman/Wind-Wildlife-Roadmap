import React, { useState } from "react";
import "../styles/Matrix.css";

type FlipCardProps = {
  front: string;
  back: string;
  knowledge: "little" | "moderate" | "well";
  nrelCanHelp?: boolean;
};

export const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  knowledge,
  nrelCanHelp,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Prevent click from bubbling to overlay when clicking inside card
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <>
      {expanded && (
        <div className="flip-card-overlay" onClick={() => { setExpanded(false); setFlipped(false); }}>
          <div
            className={`flip-card knowledge-${knowledge}${nrelCanHelp ? " nrel-dashed" : ""} flip-card-expanded${flipped ? " flipped" : ""}`}
            onClick={(e) => { stopPropagation(e); setFlipped((f) => !f); }}
            tabIndex={0}
            role="button"
            aria-pressed={flipped}
            style={{ outline: "none" }}
          >
            <button
              className="flip-card-close"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
                setFlipped(false); // Reset flip on close
              }}
            >
              &times;
            </button>
            <div className="flip-card-inner">
              <div className="flip-card-front">{front}</div>
              <div className="flip-card-back">{back}</div>
            </div>
          </div>
        </div>
      )}
      {!expanded && (
        <div
          className={`flip-card knowledge-${knowledge}${nrelCanHelp ? " nrel-dashed" : ""}${flipped ? " flipped" : ""}`}
          onClick={() => setFlipped((f) => !f)}
          tabIndex={0}
          role="button"
          aria-pressed={flipped}
          style={{ outline: "none", position: "relative" }}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">{front}</div>
            <div className="flip-card-back">{back}</div>
          </div>
          {flipped && (
            <button
              className="flip-card-expand"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(true);
                setFlipped(false); // Optionally reset flip on expand
              }}
              title="Expand"
            >
              ⬈
            </button>
          )}
        </div>
      )}
    </>
  );
};