"use client"

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="pt-10 flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="font-bold text-white text-6xl">
          Login
        </h1>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
