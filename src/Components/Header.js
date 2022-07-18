import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-600">
      <div className=" max-w-[1400px] mx-auto flex justify-between px-10 py-5 text-gray-300">
        <Link to={"/"}>
          <div className="text-4xl">Zack Kelly</div>
        </Link>
        <div className="flex gap-10 items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/portfolio"}>Portfolio</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
