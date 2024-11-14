export { auth as middleware } from "@/auth";

export const config = {
  mathcher: ["/((?!.+\\.[\\w]+$|_next).*", "/", "/(api|trpc)(.*))"],
};
