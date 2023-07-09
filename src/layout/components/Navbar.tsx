import Logotype from "./Logotype";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center border-b border-t-slate-100/25 bg-slate-100/20 p-4 backdrop-blur-2xl md:px-8">
      <div className="flex w-full max-w-screen-lg flex-row items-center justify-between">
        <Logotype />
        <MobileMenu />
      </div>
    </div>
  );
}
