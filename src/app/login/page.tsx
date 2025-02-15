import { GithubSignin } from "@/components/github-signin";
// import { GoogleSignin } from "@/components/google-signin";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 w-full max-w-sm mx-auto">
      <div className="max-w-md w-full text-center -mt-32">
        <h1 className="text-4xl font-mono">Cursor Directory</h1>
        <p className="text-[#878787] text-md mt-4">
          Join our community of Cursor <br />
          customization enthusiasts.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <GithubSignin />
          {/* <GoogleSignin /> */}
        </div>
      </div>
    </div>
  );
}
