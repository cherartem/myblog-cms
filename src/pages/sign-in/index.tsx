import Copyright from "./components/Copyright";
import Decoration from "./components/Decoration";
import Greeting from "./components/Greeting";
import Logotype from "./components/Logotype";
import SignInForm from "./components/SignInForm";

export const SignInPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-8 font-raleway text-slate-900 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:p-0">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 md:max-w-sm lg:col-start-1 lg:col-end-1">
        <Logotype />
        <Greeting />
        <SignInForm />
        <Copyright />
      </div>
      <Decoration />
    </div>
  );
};
