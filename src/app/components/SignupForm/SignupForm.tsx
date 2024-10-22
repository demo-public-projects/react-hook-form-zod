"use client";

import { z } from "zod";
import styles from "./SignupForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z
  .object({
    userName: z.string().min(2).max(30),
    userEmail: z.string().email(),
    birthDate: z.date().max(new Date(), { message: "Too young!" }),
    password: z.string().min(5).max(12),
    passwordConfirmation: z.string().min(5).max(12),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

type userSignupDataType = z.infer<typeof userSchema>;

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userSignupDataType>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: userSignupDataType) => {
    alert("Booking successful!");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="userName" className={styles.label}>
          Name
        </label>
        <input
          id="userName"
          className={styles.input}
          {...register("userName")}
        />
        {errors.userName && (
          <p className={styles.errorMessage}>{errors.userName.message}</p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="userEmail" className={styles.label}>
          Email
        </label>
        <input
          id="userEmail"
          className={styles.input}
          {...register("userEmail")}
        />
        {errors.userEmail && (
          <p className={styles.errorMessage}>{errors.userEmail.message}</p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="birthDate" className={styles.label}>
          Birth Date
        </label>
        <input
          id="birthDate"
          className={styles.input}
          type="date"
          {...register("birthDate", { valueAsDate: true })}
        />
        {errors.birthDate && (
          <p className={styles.errorMessage}>{errors.birthDate.message}</p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          id="password"
          type="password"
          className={styles.input}
          {...register("password")}
        />
        {errors.password && (
          <p className={styles.errorMessage}>{errors.password.message}</p>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="passwordConfirmation" className={styles.label}>
          ConfirmPassword
        </label>
        <input
          id="passwordConfirmation"
          type="password"
          className={styles.input}
          {...register("passwordConfirmation")}
        />
        {errors.passwordConfirmation && (
          <p className={styles.errorMessage}>
            {errors.passwordConfirmation.message}
          </p>
        )}
      </div>
      <button className={styles.button} type="submit">
        Sign Up
      </button>
    </form>
  );
}
