"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SendEmailFields, createEmailSchema } from "./validations";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/common/ui";
import { cn } from "@/common/utils";
import { LuLoader, LuSend } from "react-icons/lu";
import { sendEmail } from "./actions";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactsForm() {
  const form = useForm<SendEmailFields>({
    resolver: zodResolver(
      createEmailSchema({
        nameRequired: "Name is required",
        nameMin: "Name must be at least 2 characters",
        emailRequired: "Email is required",
        emailValid: "Email must be valid",
        messageRequired: "Message is required",
        messageMin: "Message must be at least 2 characters",
      }),
    ),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit = async (fields: SendEmailFields) => {
    const result = await sendEmail(fields);

    if (result.success) {
      toast.success("Sent message successfully");
      form.reset();
      return;
    }

    toast.error("Failed to send message");
  };

  const { isSubmitting } = form.formState;

  return (
    <div className="rounded-2xl border border-border/70 bg-card/70 p-4 shadow-xl backdrop-blur-md sm:p-6">
      {/* Decorative gradient */}
      <div className="from-primary/8 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-transparent" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative z-10 flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Name{" "}
                  <span className={cn(error && "text-destructive")}>*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Email{" "}
                  <span className={cn(error && "text-destructive")}>*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Message{" "}
                  <span className={cn(error && "text-destructive")}>*</span>
                </FormLabel>
                <FormControl>
                  <Textarea {...field} rows={5} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button
              className="group w-full gap-2 text-base shadow-lg shadow-primary/25 sm:w-auto"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <LuLoader className="h-5 w-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <LuSend className="h-5 w-5 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
