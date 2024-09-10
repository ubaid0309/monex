import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { TestContext } from "node:test";

interface CustomFormInputProps {
  form: any;
  name: string;
  label: string;
  type: string;
}
const CustomFormInput = ({
  form,
  name,
  label,
  type = "text",
}: CustomFormInputProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex flex-col w-full">
              <FormControl>
                <Input
                  className="input-class"
                  placeholder="Enter your email"
                  type={type}
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        )}
      />
    </>
  );
};

export default CustomFormInput;
