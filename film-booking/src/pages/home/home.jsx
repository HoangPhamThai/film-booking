import React from "react";
import ListMovie from "./list_movie";
import TabMovie from "./tab_movie/tab_movie";

export default function Home() {
  return (
    <div className="container">
      <div className="mt-[50px]">
        <ListMovie />
      </div>

      <div className="mt-[50px]">
        <TabMovie />
      </div>
    </div>
  );
}
