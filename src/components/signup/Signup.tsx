import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import "../common-styles/card.scss";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
export default function SignUp() {
  const phoneRegExp: RegExp = new RegExp("[0-9]");
  const [phone, setPhone] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>();

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const emailRegExp: RegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  return (
    <div>
      <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Sign Up</p>
        <input
          {...register("firstName", {
            required: true,
          })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", {
            required: true,
          })}
          placeholder="Last Name"
        />
        <input
          {...register("email", {
            pattern: emailRegExp,
            required: true,
          })}
          placeholder="E-mail"
        />
        {errors.email && errors.email.type === "pattern" && (
          <span>Invalid e-mail</span>
        )}
        <InputMask
          {...register("phone", {
            pattern: phoneRegExp,
            required: true,
          })}
          mask="(99) 99999-9999"
          type="tel"
          placeholder="(99) 99999-9999"
          value={phone}
          onChange={handlePhoneChange}
        />
        <input type="submit" disabled={!isValid}></input>
      </form>
    </div>
  );
}
