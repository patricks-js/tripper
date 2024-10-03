import { useTripStore } from "@/hooks/use-trip-store";
import { formatDateRange } from "@/lib/format-date-range";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
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

type Props = {
  children: ReactNode;
  isOwner?: boolean;
};

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
});

type FormData = z.infer<typeof formSchema>;

export function ConfirmTripModal({ isOwner = false, ...props }: Props) {
  const { destination, date, inviteesEmails } = useTripStore();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({
      ...values,
      destination,
      date,
      inviteesEmails,
    });
  }

  return (
    <Dialog>
      <DialogTrigger>{props.children}</DialogTrigger>
      <DialogContent>
        {isOwner ? (
          <ModalHeaderOwner
            destination={destination}
            date={formatDateRange(date)}
          />
        ) : (
          <ModalHeaderGuest
            destination={destination}
            date={formatDateRange(date)}
          />
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="h-12 flex items-center px-4 shadow-shape rounded-md bg-secondary gap-2 w-full">
                      <Icons.user className="size-5 text-muted-foreground" />
                      <Input
                        className="px-0 border-none focus-visible:ring-0 shadow-none w-full"
                        placeholder="Seu nome completo"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="h-12 flex items-center px-4 shadow-shape rounded-md bg-secondary gap-2 w-full">
                      <Icons.mail className="size-5 text-muted-foreground" />
                      <Input
                        className="px-0 focus-visible:ring-0 border-none shadow-none w-full"
                        placeholder="Seu e-mail pessoal"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full">
              {isOwner
                ? "Confirmar criação da viagem"
                : "Confirmar minha presença"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

type ModalHeaderProps = {
  destination: string;
  date?: string;
};

export function ModalHeaderOwner({ destination, date }: ModalHeaderProps) {
  return (
    <DialogHeader>
      <DialogTitle>Confirmar viagem</DialogTitle>
      <DialogDescription>
        Para concluir a criação da viagem para{" "}
        <StrongText>{destination}</StrongText> nas datas de{" "}
        <StrongText>{date}</StrongText> preencha seus dados abaixo:
      </DialogDescription>
    </DialogHeader>
  );
}

export function ModalHeaderGuest({ destination, date }: ModalHeaderProps) {
  return (
    <DialogHeader>
      <DialogTitle>Confirmar participação</DialogTitle>
      <DialogDescription className="space-y-4">
        <p>
          Você foi convidado(a) para participar de uma viagem para{" "}
          <StrongText>{destination}</StrongText> nas datas de{" "}
          <StrongText>{date}</StrongText>.
        </p>
        <p>Para confirmar sua presença na viagem, preencha os dados abaixo:</p>
      </DialogDescription>
    </DialogHeader>
  );
}

export function StrongText({ children }: { children: ReactNode }) {
  return (
    <span className="text-sm text-foreground font-semibold">{children}</span>
  );
}
