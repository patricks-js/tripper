"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof formSchema>;

type Props = {
  children: ReactNode;
};

export function SelectInvitees(props: Props) {
  const [inviteesEmails, setInviteesEmails] = useState<string[]>([
    "patrick@email.com",
    "joao@email.com",
  ]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setInviteesEmails([...inviteesEmails, values.email]);
    form.reset();
  }

  function handleRemoveInviteeEmail(email: string) {
    setInviteesEmails(inviteesEmails.filter((e) => e !== email));
  }

  return (
    <Dialog>
      <DialogTrigger>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Selecionar convidados</DialogTitle>
          <DialogDescription>
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-wrap gap-2">
          {inviteesEmails.length > 0 &&
            inviteesEmails.map((email) => (
              <div
                key={email}
                className="flex items-center gap-2 rounded-md border border-input bg-secondary px-3 py-1 text-sm shadow-sm"
              >
                <p>{email}</p>
                <button
                  type="button"
                  onClick={() => handleRemoveInviteeEmail(email)}
                >
                  <Icons.cross className="size-4 text-muted-foreground" />
                </button>
              </div>
            ))}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="h-12 flex items-center px-4 shadow-shape rounded-md bg-secondary gap-2 w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Icons.at className="size-5 text-muted-foreground" />
                        <Input
                          className="px-0 focus-visible:ring-0 border-none shadow-none w-full"
                          placeholder="Digite o e-mail do convidado"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="gap-2">
                Convidar <Icons.plus className="size-4" />
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
