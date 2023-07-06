export default function Decoration() {
  return (
    <div className="relative col-span-2 hidden h-full w-full grid-cols-1 grid-rows-2 overflow-hidden bg-slate-100 lg:col-start-2 lg:col-end-2 lg:grid">
      <div className="absolute left-1/2 top-1/2 z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-t from-blue-600 to-blue-500 drop-shadow-xl"></div>
      <div className="z-20 row-start-2 row-end-2 w-full border-t border-t-slate-100/25 bg-slate-100/20 backdrop-blur-2xl"></div>
    </div>
  );
}
