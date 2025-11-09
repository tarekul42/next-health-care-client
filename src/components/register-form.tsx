"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { registerPatient } from "@/services/auth/registerPatient";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerPatient, null);

  console.log("state", state);

  return (
    <>
      <div className={cn("flex flex-col gap-6")}>
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form action={formAction} className="p-6 md:p-8">
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="text-2xl font-bold">Create your account</h1>
                  <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to create your account
                  </p>
                </div>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                  <FieldDescription className="sr-only">
                    We&apos;ll use this to contact you. We will not share your
                    name with anyone else.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="name">Address</FieldLabel>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="123 Main St"
                    required
                  />
                  <FieldDescription className="sr-only">
                    We&apos;ll use this to contact you. We will not share your
                    name with anyone else.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                  <FieldDescription className="sr-only">
                    We&apos;ll use this to contact you. We will not share your
                    email with anyone else.
                  </FieldDescription>
                </Field>
                <Field>
                  <Field className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="confirm-password">
                        Confirm Password
                      </FieldLabel>
                      <Input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        required
                      />
                    </Field>
                  </Field>
                  <FieldDescription>
                    Must be at least 6 characters long.
                  </FieldDescription>
                </Field>
                <Field>
                  <Button type="submit" disabled={isPending}>
                    {isPending ? "Creating Account..." : "Create Account"}
                  </Button>
                </Field>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Sign in</Link>
                </FieldDescription>
              </FieldGroup>
            </form>
            <div className="bg-muted relative hidden md:block">
              <Image
                src="/placeholder.svg"
                alt="Image"
                width={800}
                height={800}
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </CardContent>
        </Card>
        <FieldDescription className="px-6 text-center">
          By clicking continue, you agree to our
          <Link href="#">Terms of Service</Link> and
          <Link href="#">Privacy Policy</Link>.
        </FieldDescription>
      </div>
    </>
  );
};

export default RegisterForm;
