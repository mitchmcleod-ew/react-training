import { FC, PropsWithChildren } from "react";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export type RootProps = PropsWithChildren<unknown>; // {};

export const Root: FC<RootProps> = () => {
  return <div className="page-3">
    <div>
      <Navbar />
    </div>
    <div className="p-4">
      <Outlet />
    </div>
  </div>
}