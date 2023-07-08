import Logotype from "./Logotype";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex w-full flex-row items-center justify-between border-b border-t-slate-100/25 bg-slate-100/20 p-4 backdrop-blur-2xl">
      <Logotype />
      <MobileMenu />
    </div>
  );
}
