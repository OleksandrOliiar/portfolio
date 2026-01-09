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
} from "@/ui";
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
    <div className="rounded-2xl border border-border/50 bg-card/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
      {/* Decorative gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

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
                  <Input
                    {...field}
                    className="border-border/50 bg-background/50 backdrop-blur-sm transition-all focus:border-primary/50 focus:bg-background"
                    placeholder="Your name"
                  />
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
                  <Input
                    {...field}
                    className="border-border/50 bg-background/50 backdrop-blur-sm transition-all focus:border-primary/50 focus:bg-background"
                    placeholder="your.email@example.com"
                  />
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
                  <Textarea
                    {...field}
                    rows={5}
                    className="border-border/50 bg-background/50 backdrop-blur-sm transition-all focus:border-primary/50 focus:bg-background"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
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
                  <LuSend className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
    </div>
  );
}
