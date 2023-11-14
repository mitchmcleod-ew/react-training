import { FC } from "react";
import { Link } from "react-router-dom";

export type NavbarProps = unknown; // {};

export const Navbar: FC<NavbarProps> = () => {
  return <div className="navbar flex gap-x-4 p-4">
    <Link to="/page-1" className="w-24 h-10 border rounded flex items-center justify-center">Page 1</Link>
    <Link to="/page-2" className="w-24 h-10 border rounded flex items-center justify-center">Page 2</Link>
    <Link to="/page-3" className="w-24 h-10 border rounded flex items-center justify-center">Page 3</Link>
  </div>
}