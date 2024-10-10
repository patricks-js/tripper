import { useTripStore } from "@/hooks/use-trip-store";
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
  name: z.string(),
  email: z.string().email(),
});

type FormData = z.infer<typeof formSchema>;

export function ConfirmTripForm() {
  const { invitees, destination, dateRange } = useTripStore();

  const organizerConfirmTripForm = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(data: FormData) {
    const payload = {
      destination,
      dateRange,
      invitees,
      ...data,
    };

    console.log(payload);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1">
          Confirmar viagem
          <Icons.arrowRight className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar criação da viagem</DialogTitle>
          <DialogDescription>
            Para concluir a criação da viagem para{" "}
            <strong>Florianópolis, Brasil</strong>
            nas datas de <strong>16 a 27 de Agosto de 2024</strong> preencha
            seus dados abaixo:
          </DialogDescription>
        </DialogHeader>
        <Form {...organizerConfirmTripForm}>
          <form
            onSubmit={organizerConfirmTripForm.handleSubmit(onSubmit)}
            className="space-y-2"
          >
            <FormField
              control={organizerConfirmTripForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="shadow-shape bg-card px-4 py-1.5 rounded-md">
                    <div className="h-10 flex items-center">
                      <Icons.user className="size-4 text-muted-foreground" />
                      <Input
                        {...field}
                        placeholder="Nome"
                        className="w-full focus-visible:ring-0 border-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={organizerConfirmTripForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="shadow-shape bg-card px-4 py-1.5 rounded-md">
                    <div className="h-10 flex items-center">
                      <Icons.mail className="size-4 text-muted-foreground" />
                      <Input
                        {...field}
                        placeholder="Email"
                        className="w-full focus-visible:ring-0 border-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full">
              Confirmar viagem
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
