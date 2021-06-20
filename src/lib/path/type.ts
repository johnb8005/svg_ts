import * as T from "../type";

export interface PathProps {
  start: T.Coord;
  end: T.Coord;
  curvatureRatio: number;
  displayCircles: boolean;
}
