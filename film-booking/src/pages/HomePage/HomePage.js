import React from "react";

import TabMovie from "./TabMovie/TabMovie";
import ListMovie from "./ListMovie";
export default function HomePage() {
  return (
    <div className="container">
      <ListMovie />
      <TabMovie />
    </div>
  );
}
