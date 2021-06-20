import React from "react";

export default ({
  min,
  max,
  value,
  onChange,
}: {
  min: number;
  max: number;
  value: number;
  onChange: (x: number) => void;
}) => (
  <input
    type="range"
    value={value}
    min={min}
    max={max}
    onChange={(e) => {
      const x = Number(e.target.value);
      onChange(x);
    }}
  />
);
