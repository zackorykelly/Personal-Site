import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-slate-600">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 px-10 py-5 text-gray-300">
        <div className="flex flex-col justify-between">
          <Link className="w-fit" to={"/"}>
            <div>Zack Kelly</div>
          </Link>
          <div>Copywrite</div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Link to={"/"}>Home</Link>
          <Link to={"/portfolio"}>Portfolio</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
