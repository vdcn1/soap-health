import React, { useState } from "react";
import InputMask from "react-input-mask";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import "../common-styles/card.scss";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function SignUp() {
  const phoneRegExp: RegExp = new RegExp("[_]");
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false);
  const schema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required().email("E-mail must be valid!"),
    phone: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    setIsValidPhone(!phoneRegExp.test(event.target.value));
  };

  const handleEmailChange = async () => {
    await trigger("email");
    // console.log(valid);
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

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
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { value, onChange, ...field } }) => (
            <input
              // {...register("email", {
              //   pattern: {
              //     value: emailRegExp,
              //     message: "Please, enter a valid e-mail"
              //   },
              //   required: true,
              // })}
              {...field}
              onChange={({ target: { value } }) => {
                onChange(value);
                handleEmailChange();
              }}
              placeholder="E-mail"
            />
          )}
        />
        {errors.email && <span>Invalid e-mail</span>}
        <InputMask
          {...register("phone", {
            required: true,
          })}
          mask="(99) 99999-9999"
          type="tel"
          placeholder="(99) 99999-9999"
          value={phone}
          onChange={handlePhoneChange}
        />
        {!isValidPhone && <span>Invalid phone</span>}
        <input
          className="register-btn"
          type="submit"
          name="Register"
          disabled={!isValid}
        ></input>
      </form>
    </div>
  );
}
