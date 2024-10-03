"use client";

import { useTripStore } from "@/hooks/use-trip-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { FieldWrapper } from "./field-wrapper";
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

export function SelectInviteesModal() {
  const { inviteesEmails, setInviteesEmails } = useTripStore();

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
      <FieldWrapper>
        <DialogTrigger className="flex-1">
          <div className="flex items-center gap-2 text-sm">
            <Icons.addUser className="size-4 text-muted-foreground" />
            {inviteesEmails.length > 0 ? (
              <p>{inviteesEmails.length} convidados</p>
            ) : (
              <p className="text-muted-foreground">Quem vai estar na viagem?</p>
            )}
          </div>
        </DialogTrigger>
        <ConfirmTripModal>
          <Button size="sm" className="gap-2">
            Confirmar viagem <Icons.arrowRight className="size-4" />
          </Button>
        </ConfirmTripModal>
      </FieldWrapper>
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
            <FieldWrapper>
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
              <Button type="submit" size="sm" className="gap-2">
                Convidar <Icons.plus className="size-4" />
              </Button>
            </FieldWrapper>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
