"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "@/lib/auth-actions";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginState {
  error?: string;
}

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: LoginState | null, formData: FormData) => {
      const result = await loginAction(formData);
      return result;
    },
    null
  );

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full"
          placeholder="Enter your email"
          disabled={isPending}
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full"
          placeholder="Enter your password"
          disabled={isPending}
        />
      </div>

      <div className="pt-4">
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
}
