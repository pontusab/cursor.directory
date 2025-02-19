import { GithubSignin } from "@/components/github-signin";
import { GoogleSignin } from "@/components/google-signin";
import { Suspense } from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 w-full max-w-sm mx-auto">
      <div className="max-w-md w-full text-center -mt-32">
        <p className="text-md mt-4">
          Join the growing Windsurf <br />
          community and learn together.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <Suspense fallback={null}>
            <div className="flex flex-col gap-4">
              <GithubSignin />
              <GoogleSignin />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
