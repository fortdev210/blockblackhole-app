import React from "react";
import Button from "components/atoms/button";
import Input from "components/atoms/input";

export default function Register() {
  return (
    <section className="h-screen">
      <div className="h-full p-10">
        <div className="m-auto w-96">
          <p className="text-2xl">Sign up for hydrosat</p>
          <div className="mb-3">
            <Input id="username" type="text" placeholder="Input username" />
          </div>
          <div className="mb-3">
            <Input
              id="password"
              type="password"
              placeholder="Input your password"
            />
          </div>
          <div className="mt-3 flex justify-between align-center">
            <Button>Register</Button>
            <p>
              Have account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
