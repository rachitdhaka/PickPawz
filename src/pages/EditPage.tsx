import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

// Define the form schema with zod validation
const formSchema = z.object({
  profession: z
    .string()
    .min(2, "Profession must be at least 2 characters.")
    .max(50, "Profession must be at most 50 characters."),
  aboutMe: z
    .string()
    .min(10, "About me must be at least 10 characters.")
    .max(250, "About me must be at most 250 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits.")
    .max(15, "Phone number must be at most 15 digits.")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number."),
  city: z
    .string()
    .min(2, "City must be at least 2 characters.")
    .max(50, "City must be at most 50 characters."),
  state: z.string().min(1, "Please select a state."),
  reasonForAdoption: z
    .string()
    .min(20, "Reason must be at least 20 characters.")
    .max(150, "Reason must be at most 150 characters."),
  houseAndFamily: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(150, "Description must be at most 150 characters."),
})

// Indian states list
const indianStates = [
  { value: "andhra-pradesh", label: "Andhra Pradesh" },
  { value: "arunachal-pradesh", label: "Arunachal Pradesh" },
  { value: "assam", label: "Assam" },
  { value: "bihar", label: "Bihar" },
  { value: "chhattisgarh", label: "Chhattisgarh" },
  { value: "goa", label: "Goa" },
  { value: "gujarat", label: "Gujarat" },
  { value: "haryana", label: "Haryana" },
  { value: "himachal-pradesh", label: "Himachal Pradesh" },
  { value: "jharkhand", label: "Jharkhand" },
  { value: "karnataka", label: "Karnataka" },
  { value: "kerala", label: "Kerala" },
  { value: "madhya-pradesh", label: "Madhya Pradesh" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "manipur", label: "Manipur" },
  { value: "meghalaya", label: "Meghalaya" },
  { value: "mizoram", label: "Mizoram" },
  { value: "nagaland", label: "Nagaland" },
  { value: "odisha", label: "Odisha" },
  { value: "punjab", label: "Punjab" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "sikkim", label: "Sikkim" },
  { value: "tamil-nadu", label: "Tamil Nadu" },
  { value: "telangana", label: "Telangana" },
  { value: "tripura", label: "Tripura" },
  { value: "uttar-pradesh", label: "Uttar Pradesh" },
  { value: "uttarakhand", label: "Uttarakhand" },
  { value: "west-bengal", label: "West Bengal" },
  { value: "delhi", label: "Delhi" },
  { value: "puducherry", label: "Puducherry" },
]

const EditPage = () => {

  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profession: "",
      aboutMe: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      reasonForAdoption: "",
      houseAndFamily: "",
    },
    mode: "onBlur",
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form submitted:", data)

    // Get the authentication token from localStorage
    const token = localStorage.getItem("token")

    if (!token) {
      toast.error("You are not logged in. Please log in first.")
      navigate("/login")
      return
    }

    try{
      await axios.put('https://pickpawz-server.onrender.com/adopter/editProfile', data, {
        headers: {
          'Content-Type': 'application/json',
          'token': token,
        },
      })
      toast.success("Profile updated successfully!")
      navigate("/profile")
    }catch(error){
      console.error("Error updating profile:", error)
      toast.error("There was an error updating your profile. Please try again.")
      return
    }
  }

  return (
    <div className="mx-auto min-h-screen w-full max-w-4xl px-4 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-2xl sm:text-3xl font-bold">Edit Profile</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Update your information and preferences for pet adoption
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
        {/* Personal Information Section */}
        <div className="rounded-lg border p-4 sm:p-6">
          <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold">Personal Information</h2>
          <div className="space-y-4 sm:space-y-6">
            {/* Profession */}
            <Controller
              name="profession"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Profession</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g., Software Engineer"
                    autoComplete="organization-title"
                  />
                  <FieldDescription>
                    Enter your current profession or occupation
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* About Me */}
            <Controller
              name="aboutMe"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>About Me</FieldLabel>
                  <Textarea
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Tell us a bit about yourself..."
                    className="min-h-[100px]"
                    maxLength={250}
                  />
                  <FieldDescription>
                    {field.value?.length || 0}/250 characters - Share a brief
                    introduction about yourself
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="rounded-lg border p-4 sm:p-6">
          <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold">Contact Information</h2>
          <div className="space-y-4 sm:space-y-6">
            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="your.email@example.com"
                    autoComplete="email"
                  />
                  <FieldDescription>
                    We'll use this to contact you about adoptions
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Phone */}
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="tel"
                    aria-invalid={fieldState.invalid}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                  <FieldDescription>
                    Include country code for international numbers
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* City and State */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* City */}
              <Controller
                name="city"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>City</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g., Mumbai"
                      autoComplete="address-level2"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* State */}
              <Controller
                name="state"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>State</FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        className="w-full"
                      >
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianStates.map((state) => (
                          <SelectItem key={state.value} value={state.value}>
                            {state.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </div>
        </div>

        {/* Adoption Information Section */}
        <div className="rounded-lg border p-4 sm:p-6">
          <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold">Adoption Details</h2>
          <div className="space-y-4 sm:space-y-6">
            {/* Reason for Adoption */}
            <Controller
              name="reasonForAdoption"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Reason for Adoption
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Why do you want to adopt a pet?"
                    className="min-h-[120px]"
                    maxLength={150}
                  />
                  <FieldDescription>
                    {field.value?.length || 0}/150 characters - Tell us why you
                    want to give a pet a loving home
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* House and Family */}
            <Controller
              name="houseAndFamily"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    House and Family
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Describe your living situation and family members..."
                    className="min-h-[120px]"
                    maxLength={150}
                  />
                  <FieldDescription>
                    {field.value?.length || 0}/150 characters - Help us
                    understand your home environment
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="sm:w-auto"
          >
            Reset Form
          </Button>
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="sm:w-auto cursor-pointer"
          >
            {form.formState.isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditPage
