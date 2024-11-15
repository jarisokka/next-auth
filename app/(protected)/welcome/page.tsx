import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const WelcomePage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center pt-10">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold text-white">You are now signed in</h1>
      </div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>Sign out</Button>
      </form>
    </div>
  );
};

export default WelcomePage;
