import * as React from "react"
import { cn } from "@/lib/utils"

// Field Context
type FieldContextValue = {
  invalid?: boolean
}

const FieldContext = React.createContext<FieldContextValue>({})

// Field Root Component
interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal" | "responsive"
  "data-invalid"?: boolean
}

function Field({
  className,
  orientation = "vertical",
  "data-invalid": invalid,
  ...props
}: FieldProps) {
  return (
    <FieldContext.Provider value={{ invalid }}>
      <div
        data-slot="field"
        data-orientation={orientation}
        data-invalid={invalid}
        className={cn(
          "flex gap-2",
          orientation === "vertical" && "flex-col",
          orientation === "horizontal" && "flex-row items-start",
          orientation === "responsive" && "flex-col sm:flex-row sm:items-start",
          className
        )}
        {...props}
      />
    </FieldContext.Provider>
  )
}

// FieldLabel Component
interface FieldLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

function FieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <label
      data-slot="field-label"
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

// FieldDescription Component
interface FieldDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

function FieldDescription({ className, ...props }: FieldDescriptionProps) {
  return (
    <p
      data-slot="field-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

// FieldError Component
interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  errors?: Array<{ message?: string } | undefined>
}

function FieldError({ className, errors, children, ...props }: FieldErrorProps) {
  const errorMessage = errors?.[0]?.message || children

  if (!errorMessage) return null

  return (
    <p
      data-slot="field-error"
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {errorMessage}
    </p>
  )
}

// FieldContent Component
interface FieldContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function FieldContent({ className, ...props }: FieldContentProps) {
  return (
    <div
      data-slot="field-content"
      className={cn("flex flex-1 flex-col gap-2", className)}
      {...props}
    />
  )
}

// FieldSet Component
interface FieldSetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

function FieldSet({ className, ...props }: FieldSetProps) {
  return (
    <fieldset
      data-slot="fieldset"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

// FieldLegend Component
interface FieldLegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  variant?: "default" | "label"
}

function FieldLegend({
  className,
  variant = "default",
  ...props
}: FieldLegendProps) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        variant === "label" && "text-sm font-medium leading-none",
        variant === "default" && "text-base font-semibold",
        className
      )}
      {...props}
    />
  )
}

// FieldGroup Component
interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

function FieldGroup({ className, ...props }: FieldGroupProps) {
  return (
    <div
      data-slot="field-group"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
  FieldSet,
  FieldLegend,
  FieldGroup,
}
