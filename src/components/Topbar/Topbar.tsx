import { Link } from "@tanstack/react-router";

function Topbar() {
  return (
    <>
      <div className="flex justify-end px-3 py-1 text-sm font-bold bg-purple-100">
        #StandWithPalestine 🍉
      </div>
      <nav className="sticky top-0 z-50 px-8 py-4 bg-white shadow-md">
        <h1 className="text-lg font-semibold text-slate-800">
          <Link to="/">Apriza Prasetio</Link>
        </h1>
      </nav>
    </>
  );
}

export default Topbar;
