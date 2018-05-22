import React from "react";
import "./../index.css";

import Row from "./Row";

export default function Board() {
  const rows = Array(3).fill(null).map((row, r) => {
      return <Row r={r} />;
    });

  return <div>{rows}</div>;
}
