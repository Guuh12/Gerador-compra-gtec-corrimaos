"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';
import { CalendarIcon, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { generatePdf, type GeneratePdfInput } from "@/ai/flows/generate-pdf";

const formSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  street: z.string().min(1, { message: "A rua é obrigatória." }),
  zipCode: z.string().min(1, { message: "O CEP é obrigatório." }),
  phoneNumber: z.string().min(1, { message: "O número de telefone é obrigatório." }).max(12, { message: "O telefone não pode ter mais de 12 caracteres." }),
  item1Description: z
    .string()
    .min(1, { message: "A descrição do item é obrigatória." }),
  item1Value: z.string().refine((val) => !isNaN(parseFloat(val.replace(',', '.'))), {
    message: "O valor do item deve ser um número.",
  }),
  additionalNotes: z.string().optional(),
  date: z.date({
    required_error: "A data do pedido é obrigatória.",
  }),
});

export default function PurchaseOrderForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      street: "",
      zipCode: "",
      phoneNumber: "",
      item1Description: "",
      item1Value: "",
      additionalNotes: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const input: GeneratePdfInput = {
        ...values,
        date: format(values.date, "dd/MM/yyyy"),
        additionalNotes: values.additionalNotes || "",
        item1Value: parseFloat(values.item1Value.replace(',', '.')).toFixed(2)
      };

      const result = await generatePdf(input);

      if (result.pdfDataUri) {
        const link = document.createElement("a");
        link.href = result.pdfDataUri;
        link.download = `Pedido de Compra (${values.name}).pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        throw new Error("A geração do PDF falhou. Nenhum URI de dados retornado.");
      }
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Falha ao gerar PDF. Por favor, tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle>Detalhes da Ordem de Compra</CardTitle>
        <CardDescription>
          Todos os campos marcados com um asterisco (*) são obrigatórios.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome *</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do Cliente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de Telefone *</FormLabel>
                  <FormControl>
                    <Input placeholder="(11) 99999-9999" {...field} maxLength={12} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rua *</FormLabel>
                  <FormControl>
                    <Input placeholder="Rua Principal, 123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP *</FormLabel>
                  <FormControl>
                    <Input placeholder="12345-678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="item1Description"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Descrição do Item *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva o item que está sendo pedido"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="item1Value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor do Item *</FormLabel>
                  <FormControl>
                    <Input placeholder="100,00" {...field} type="text" inputMode="decimal" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col pt-2">
                  <FormLabel>Data *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP", { locale: ptBR })
                          ) : (
                            <span>Escolha uma data</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        locale={ptBR}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalNotes"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Observações Adicionais</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Instruções especiais para este pedido"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gerando...
                </>
              ) : (
                "Gerar PDF"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
