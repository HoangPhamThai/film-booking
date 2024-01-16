import React from "react";
import List from "./TabMovie/List";
import TabMovie from "./TabMovie/TabMovie";
export default function HomePage() {
  return (
    <div className="container">
      <List />
      <TabMovie />
    </div>
  );
}
