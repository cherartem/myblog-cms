export default function Greeting() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-center text-4xl font-semibold">Welcome back!</h1>
      <p className="text-center text-lg text-slate-400">
        You have to sign in first to use MyBlog's content management system.
      </p>
    </div>
  );
}
