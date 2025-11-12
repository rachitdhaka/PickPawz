# Edit Page Documentation

## Overview
The Edit Page is a comprehensive profile editing form built with React Hook Form and Zod validation. It follows the official React Hook Form documentation patterns and best practices.

## Features

### ✅ Form Fields Implemented
1. **Personal Information**
   - **Profession**: Text input (2-50 characters)
   - **About Me**: Textarea (10-250 characters) with character counter

2. **Contact Information**
   - **Email**: Email input with validation
   - **Phone**: Tel input with regex validation (10-15 digits, supports +, -, spaces, parentheses)
   - **City**: Text input (2-50 characters)
   - **State**: Dropdown select with all Indian states and union territories

3. **Adoption Details**
   - **Reason for Adoption**: Textarea (20-150 characters) with character counter
   - **House and Family**: Textarea (20-150 characters) with character counter

### 🎯 Key Features
- ✅ Client-side validation using Zod schema
- ✅ Real-time character counters for text areas
- ✅ Accessible form controls with proper ARIA attributes
- ✅ Error messages displayed inline
- ✅ Validation on blur (can be changed to onChange/onSubmit)
- ✅ Reset form functionality
- ✅ Responsive design with mobile-first approach
- ✅ Dark mode support through theme provider
- ✅ Organized sections with bordered containers
- ✅ Form state management with React Hook Form

## Technologies Used
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod resolver for React Hook Form
- **Radix UI**: Accessible UI primitives (Select)
- **Tailwind CSS**: Styling and responsive design
- **Motion**: Animation effects (via Input component)

## File Structure
```
src/
├── pages/
│   └── EditPage.tsx              # Main edit page component
├── components/
│   └── ui/
│       ├── field.tsx             # Field components for forms
│       ├── input.tsx             # Input component
│       ├── textarea.tsx          # Textarea component
│       ├── select.tsx            # Select dropdown component
│       ├── button.tsx            # Button component
│       └── label.tsx             # Label component
```

## Validation Rules

### Profession
- Minimum: 2 characters
- Maximum: 50 characters
- Required field

### About Me
- Minimum: 10 characters
- Maximum: 250 characters
- Required field

### Email
- Must be a valid email format
- Required field

### Phone
- Minimum: 10 digits
- Maximum: 15 digits
- Pattern: Numbers, +, -, spaces, and parentheses only
- Required field

### City
- Minimum: 2 characters
- Maximum: 50 characters
- Required field

### State
- Must select from dropdown
- Required field

### Reason for Adoption
- Minimum: 20 characters
- Maximum: 150 characters
- Required field

### House and Family
- Minimum: 20 characters
- Maximum: 150 characters
- Required field

## Usage

### Accessing the Page
Navigate to `/edit` in your application to access the edit page.

### Form Submission
When the form is submitted:
1. All fields are validated against the Zod schema
2. If validation passes, the `onSubmit` function is called
3. Currently logs data to console and shows success alert
4. **TODO**: Implement API call to save data to backend

### Reset Form
Click the "Reset Form" button to clear all fields and reset to default values.

## Customization

### Changing Validation Mode
In `EditPage.tsx`, modify the `useForm` hook:

```tsx
const form = useForm({
  // ... other config
  mode: "onChange", // Options: "onChange" | "onBlur" | "onSubmit" | "onTouched" | "all"
})
```

### Adding More States or Countries
Modify the `indianStates` array in `EditPage.tsx`:

```tsx
const indianStates = [
  { value: "state-id", label: "State Name" },
  // Add more states...
]
```

### Customizing Character Limits
Update the Zod schema in `EditPage.tsx`:

```tsx
const formSchema = z.object({
  aboutMe: z
    .string()
    .min(10, "About me must be at least 10 characters.")
    .max(500, "About me must be at most 500 characters."), // Changed to 500
})
```

## Component Structure

### Field Component
The `Field` component provides a consistent structure for form fields:
- `<Field>`: Wrapper component with orientation support
- `<FieldLabel>`: Accessible label
- `<FieldDescription>`: Helper text
- `<FieldError>`: Error message display

### Controller Pattern
Each field uses React Hook Form's `Controller` component:

```tsx
<Controller
  name="fieldName"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Label</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
```

## Accessibility Features
- ✅ Proper ARIA attributes (`aria-invalid`)
- ✅ Associated labels with `htmlFor` and `id`
- ✅ Descriptive error messages
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Focus management

## Responsive Design
- Mobile-first approach
- Two-column layout for City/State on larger screens
- Flexible button layout (stacked on mobile, row on desktop)
- Proper spacing and padding for all screen sizes

## Future Enhancements
- [ ] Implement backend API integration
- [ ] Add loading states during submission
- [ ] Add success/error toast notifications
- [ ] Implement image upload for profile picture
- [ ] Add autosave functionality
- [ ] Implement field-level validation debouncing
- [ ] Add confirmation dialog before reset
- [ ] Implement multi-step form for better UX
- [ ] Add progress indicator

## Dependencies Installed
```bash
npm install react-hook-form @hookform/resolvers zod
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Known Issues
- None at the moment

## Support
For issues or questions, please refer to:
- [React Hook Form Documentation](https://react-hook-form.com)
- [Zod Documentation](https://zod.dev)
- [Radix UI Documentation](https://www.radix-ui.com)

---

**Last Updated**: November 12, 2025
**Version**: 1.0.0
