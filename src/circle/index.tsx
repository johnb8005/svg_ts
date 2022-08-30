import React from "react";
import { Layout, Point, Line, Rhombus, Circle } from "../lib";
export default () => {
  const [nLines, setNlines] = React.useState<number>(36);
  const circleCenter = { x: 300, y: 300 };
  const r = 200;

  const thetas: number[] = new Array(nLines).fill(0).map((_x, i) => {
    return ((Math.PI * 2) / nLines) * i;
  });

  const strokeWidth = 0.5;

  const stroke = "blue";
  return (
    <>
      <input
        max={400}
        type={"range"}
        value={nLines}
        onChange={(v) => setNlines(Number(v.target.value))}
      />
      <Layout>
        <>
          {thetas.map((theta, i) => (
            <React.Fragment key={i}>
              <Line
                strokeWidth={strokeWidth}
                stroke={stroke}
                p1={{ x: circleCenter.x - r, y: circleCenter.y }}
                p2={{
                  x: circleCenter.x + r * Math.cos(theta),
                  y: circleCenter.y + r * Math.sin(theta),
                }}
              />
              <Line
                strokeWidth={strokeWidth}
                stroke={stroke}
                p1={{ x: circleCenter.x, y: circleCenter.y + r }}
                p2={{
                  x: circleCenter.x + r * Math.cos(theta),
                  y: circleCenter.y + r * Math.sin(theta),
                }}
              />
              <Line
                strokeWidth={strokeWidth}
                stroke={stroke}
                p1={{ x: circleCenter.x + r, y: circleCenter.y }}
                p2={{
                  x: circleCenter.x + r * Math.cos(theta),
                  y: circleCenter.y + r * Math.sin(theta),
                }}
              />
              <Line
                strokeWidth={strokeWidth}
                stroke={stroke}
                p1={{ x: circleCenter.x, y: circleCenter.y - r }}
                p2={{
                  x: circleCenter.x + r * Math.cos(theta),
                  y: circleCenter.y + r * Math.sin(theta),
                }}
              />
            </React.Fragment>
          ))}
        </>
        <Circle r={r} coord={circleCenter} />
      </Layout>
    </>
  );
};
