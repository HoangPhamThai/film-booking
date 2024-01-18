import React from "react";
import {
  labelAccount,
  labelCollections,
  labelMyAccount,
  labelPolicy,
  labelPrivacy,
  labelSecurity,
  labelTermsOfUse,
  labelUserGuide,
} from "../constants/dictionary";

export default function Footer() {
  const itemTextCss = "mt-5 text-gray-400";
  const titleTextCss = "font-bold text-xl text-white";
  return (
    <div className=" h-[300px] w-full bg-slate-800 grid grid-cols-2 mt-5 p-10 text-center">
      <div className="mx-auto ">
        <h1 className={titleTextCss}>{labelPolicy}</h1>
        <p className={itemTextCss}>{labelTermsOfUse}</p>
        <p className={itemTextCss}>{labelPrivacy}</p>
        <p className={itemTextCss}>{labelSecurity}</p>
      </div>
      <div className="mx-auto">
        <h1 className={titleTextCss}>{labelAccount}</h1>
        <p className={itemTextCss}>{labelUserGuide}</p>
        <p className={itemTextCss}>{labelMyAccount}</p>
        <p className={itemTextCss}>{labelCollections}</p>
      </div>
    </div>
  );
}
