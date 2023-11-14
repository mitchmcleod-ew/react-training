// Intro and basics

// Class and functional

import { FC } from "react";
import { ClassComponent } from "../components/ClassComponent";
import { FuncComponent } from "../components/FuncComponent";

export type Page1Props = unknown; // {};

export const Page1: FC<Page1Props> = () => {
  return <div className="page-1">
    <div>
      <ClassComponent someProp="I'm a prop" />
      <FuncComponent someProp="I'm a prop too" />
    </div>
  </div>
}