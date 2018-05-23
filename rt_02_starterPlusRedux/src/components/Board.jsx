import React from "react";
import "./../index.css";

import Row from "./Row";

export default function Board() {

  // NOTE: key is needed to avoid the warning: Each child in an array or iterator should have a unique "key" prop.
  const rows = Array(3).fill(null).map((row, r) => {
      return <Row key={r} r={r} />;
    });

  return <div>{rows}</div>;
}
