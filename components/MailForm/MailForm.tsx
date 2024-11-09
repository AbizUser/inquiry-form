"use client"
import React from "react";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormField,
  FormDescription,
  FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/formSchema";
import { Textarea } from "../ui/textarea";
import { useMailForm } from "@/hooks/useMailForm";
import { ClipLoader } from "react-spinners";

export default function MailForm() {
 const {form, onSubmit} = useMailForm();

  return (
    <Form {...form}>
      <form
      onSubmit={form.handleSubmit(onSubmit)} 
        className="container flex-col gap-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="UserName" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>MailAddress</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Content" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="file"
          render={({ field: { value, onChange, ...fieldProps} }) => (
            <FormItem>
              <FormLabel>Attache File</FormLabel>
              <FormControl>
                <Input
                accept="image/*"//画像ファイルのみ添付対象とする記述
                type="file" 
                placeholder="Subject"
                onChange={(event) => { 
                  onChange(event.target.files); //ファイルの変更を認識
                }}
                {...fieldProps} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? <ClipLoader/>: "Submit"}
          {/*送信中に表示をLoadingにする。 */}
        </Button>
      </form>
    </Form>
  );
}
