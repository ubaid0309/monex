"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomFormInput from "./CustomFormInput";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(50),
});

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-5">
        <Link href={"/"} className="flex  cursor-pointer items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={32}
            height={32}
            alt="monex logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Monex
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 font-semibold lg:text-36 text-gray-900">
            {user ? "Link Account" : type == "sign-in" ? "Log in" : "Sign up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started "
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4"></div>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div className="form-item">
                    <FormLabel className="form-label">Email</FormLabel>
                    <div className="flex flex-col w-full">
                      <FormControl>
                        <Input
                          className="input-class"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="form-message mt-2" />
                    </div>
                  </div>
                )}
              />
              <CustomFormInput
                form={form}
                name="password"
                label={"Password"}
                type="password"
              />

              <Button type="submit" className="w-fit">
                Submit
              </Button>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;
