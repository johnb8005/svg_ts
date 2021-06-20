import React, { useState, useEffect } from "react";

import { Layout } from "../lib";
import { PathWSquare } from "../lib/path";

import * as U from "./utils";

const FiboPaths = ({
  nIter,
  w,
  displayCircles,
  displaySquares,
  curvatureRatio,
}: {
  nIter: number;
  w: number;
  displayCircles: boolean;
  displaySquares: boolean;
  curvatureRatio: number;
}) => (
  <Layout>
    {U.computeDirections(nIter).map((_, j) => (
      <PathWSquare
        key={j}
        start={{ x: 400 + _.dx1 * w, y: 300 + _.dy1 * w }}
        end={{ x: 400 + _.dx2 * w, y: 300 + _.dy2 * w }}
        displaySquares={displaySquares}
        displayCircles={displayCircles}
        curvatureRatio={curvatureRatio}
      />
    ))}
  </Layout>
);

export default () => {
  const [curvatureRatio, setCurvatureRatio] = useState(U.goldenRatio - 1);
  const [displaySquares, setDisplaySquares] = useState(true);
  const [displayCircles, setDisplayCircles] = useState(true);
  const [nIter, setNIter] = useState(21);
  const [w, setW] = useState(0.4);
  const [animationOn, setAnimationOn] = useState(false);
  const wMax = 10;
  const wMin = 0.01;

  // https://stackoverflow.com/questions/46160461/how-do-you-set-the-document-title-in-react
  useEffect(() => {
    document.title = "Fibonacci";
  }, []);

  const keepAnimationRunning = () => {
    const wInc = 0.1;
    const dt = 100;

    if (animationOn === true) {
      if (wMax > w) {
        setTimeout(() => {
          setW(w + wInc);
        }, dt);
      } else {
        setAnimationOn(false);
      }
    }
  };

  keepAnimationRunning();

  return (
    <>
      <ul>
        <li>
          Curvature ratio:{" "}
          <input
            type="range"
            min={0}
            max={100}
            onChange={(e) => setCurvatureRatio(Number(e.target.value) / 100)}
          />{" "}
          <code>{curvatureRatio.toFixed(2)}</code>
        </li>
        <li>
          Display square:{" "}
          <input
            type="checkbox"
            checked={displaySquares}
            onChange={() => setDisplaySquares(!displaySquares)}
          />
        </li>
        <li>
          Display circles:{" "}
          <input
            type="checkbox"
            checked={displayCircles}
            onChange={() => setDisplayCircles(!displayCircles)}
          />
        </li>
        <li>
          # iterations:{" "}
          <input
            type="number"
            value={nIter}
            onChange={(e) => setNIter(Number(e.target.value))}
          />
        </li>
        <li>
          w:{" "}
          <input
            type="range"
            min={wMin * 100}
            max={wMax * 100}
            value={w * 100}
            onChange={(e) => setW(Number(e.target.value) / 100)}
          />
        </li>
        <li>
          <button
            onClick={() => {
              setW(wMin);
              setAnimationOn(true);
            }}
          >
            Launch Animation
          </button>
        </li>
      </ul>

      <FiboPaths
        nIter={nIter}
        displaySquares={displaySquares}
        displayCircles={displayCircles}
        curvatureRatio={curvatureRatio}
        w={w}
      />
    </>
  );
};
