import { useTripStore } from "@/hooks/use-trip-store";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const formSchema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof formSchema>;

export function AddInviteesForm() {
  const { invitees, addInvitee, removeInvitee } = useTripStore();

  const form = useForm<FormData>({
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: FormData) {
    addInvitee(data.email);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-10 flex items-center gap-3 w-full cursor-pointer">
          <Icons.addUser className="size-4 text-muted-foreground" />
          {invitees.length > 0 ? (
            <p className="text-sm">{invitees.length} convidados</p>
          ) : (
            <p className="text-sm text-muted-foreground">
              Quem vai estar na viagem?
            </p>
          )}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Convidar amigos</DialogTitle>
          <DialogDescription>
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </DialogDescription>
        </DialogHeader>
        {invitees.length > 0 && (
          <>
            <div className="w-full flex flex-wrap gap-2">
              {invitees.map((invitee) => (
                <div
                  key={invitee}
                  className="flex items-center gap-2 rounded-md bg-secondary px-3 py-1 text-sm shadow-shape"
                >
                  <p>{invitee}</p>
                  <button type="button" onClick={() => removeInvitee(invitee)}>
                    <Icons.cross className="size-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
            <Separator />
          </>
        )}
        <DialogFooter>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-2"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="shadow-shape bg-card px-4 py-1.5 rounded-md">
                      <div className="h-10 flex items-center">
                        <Icons.at className="size-4 text-muted-foreground" />
                        <Input
                          {...field}
                          placeholder="Digite o e-mail do convidado"
                          className="h-10 focus-visible:ring-0 border-none"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full">
                Convidar
                <Icons.plus className="size-4" />
              </Button>
            </form>
          </Form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
