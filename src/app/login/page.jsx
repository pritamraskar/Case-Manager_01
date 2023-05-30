"use client";
import React from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";
import { headers } from "../../../next.config";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // USING React Query to make the code optimize
  // const submitData = useMutation({
  //   mutationFn: async (data) => {
  //     const res = await axios.post(`https://2b25-43-225-192-26.in.ngrok.io/user/authenticate`, data);
  //     console.log("Loged Response: ", res);
  //     return res;
  //   },
  //   onSuccess: () => {
  //     router.push("/dashboard");
  //     toast.success("Logged in successfully");
  //   },
  // });

  const submitData = async (data) => {

    // USING AXIOS
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log(data);
    const res = await axios.post(
      "https://2a0f-43-225-192-26.in.ngrok.io/user/authenticate",
      data,
      { headers: headers, withCredentials: true, method : 'POST' },
    );
    console.log("Response", res);

    // USING FETCH
    // const res = await fetch(
    //   "https://c2e8-43-225-192-26.in.ngrok.io/user/authenticate",
    //   {
    //     method: "POST",
    //     withCredentials: true,
    //     crossorigin: true,
    //     mode: "no-cors",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );

    // console.log(res);
  };

  return (
    <main className="bg-white px-12 py-[70px] rounded-lg w-[550px]">
      <form onSubmit={handleSubmit(submitData)} className="flex flex-col gap-5">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          {...register("username", { required: true })}
          className="formfield"
        />
        {errors.username && (
          <span className="-mt-5 px-2 text-sm text-red-600">
            * Username canot be empty
          </span>
        )}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="formfield"
        />
        {errors.password && (
          <span className="-mt-5 px-2 text-sm text-red-600">
            * Password cannot be empty
          </span>
        )}
        <div className="flex flex-row gap-3">
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <span className="text-slate-500">Keep me loged in</span>
        </div>

        <button
          className="bg-primaryBlue w-fit text-white px-10 py-2 rounded shadow-lg hover:shadow-none hover:bg-primaryBlue/90 hover:scale-95 transition-all duration-300"
          type="submit"
        >
          Login
        </button>
      </form>
    </main>
  );
}
