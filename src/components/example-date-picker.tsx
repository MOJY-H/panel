"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Calendar } from "./ui/persian-calendar"
import { Popover , PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  username: z
    .number()
    .min(5, "Date must be at least 5 characters.")
    .max(7, "Date must be at most 7 characters.")
})
export function FormRhfInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 2022,
    },
  })
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          {/* <code>{JSON.stringify(data, null, 2)}</code> */}
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }
  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle> Calendar Input </CardTitle>
        <CardDescription>
          Enter Your Calendar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-input-username">
                    Date
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-input-username"
                    aria-invalid={fieldState.invalid}
                    placeholder="d/mm/yyyy"
                    autoComplete="username"
                  />
                  <FieldDescription>
                    This is your public display Date. Must be number. Must only contain numbers.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-input">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}

