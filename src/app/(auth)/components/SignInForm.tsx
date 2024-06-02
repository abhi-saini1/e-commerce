"use client";
import Button from "@/components/Ui/Button";
import Input from "@/components/Ui/Input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import toast from "react-hot-toast";

const SignInForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        throw new Error(result.error);
      }
      toast.success("Successfully Signed in");
      router.refresh;
      router.push("/");
    } catch (error: any) {
      toast.error(error.message || "Authentication failed");
    }
  };
  return (
    <div className="main-container py-20">
      <div className="lg:flex lg:flex-row  flex flex-col items-center justify-center lg:gap-32">
        <div className="">
          <Image
            src="/form.jpg"
            className="m-5 h-[400px] w-[400px] lg:h-[450px] lg:w-[450px]  rounded-md"
            alt=""
            width={800}
            height={800}
          />
        </div>

        <div className="mt-10 m-5">
          <div className="lg:text-4xl font-bold uppercase ">
            <h1>Join the Nike</h1>
          </div>

          <form className="mt-4 m-4" onSubmit={handleSubmit} ref={formRef}>
            <div className="mt-2">
              <Input type="email" id="email" label="Email" />
            </div>
            <div className="mt-2">
              <Input type="password" id="password" label="Password" />
            </div>
            <div className="mt-2">
              <Button type="submit">Login</Button>
            </div>
            <div className="mt-5 flex items-center justify-center">
              <span className="text-[11px]">Or Connect With</span>
            </div>
            <div className="flex gap-6 items-center justify-center mt-5">
              <Link href="#">
                <Image
                  src="/google.png"
                  className="w-[25px] h-auto"
                  width={300}
                  height={300}
                  alt=""
                />
              </Link>
              <Link href={""}>
                <Image
                  src="/apple-logo.png"
                  className="w-[25px] h-auto"
                  width={300}
                  height={300}
                  alt=""
                />
              </Link>
              <Link href={""}>
                <Image
                  src="/facebook.png"
                  className="w-[25px] h-auto"
                  width={300}
                  height={300}
                  alt=""
                />
              </Link>
            </div>
            <div className="mt-5 flex items-center justify-center">
              <p className="text-[11px]">
                Dont have an account? Create one
                <Link href="/signup">
                  <span className="text-[#3479AF] text-[12px] cursor-pointer ">
                    {" "}
                    Sign Up{" "}
                  </span>
                </Link>{" "}
                &#8594;
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
