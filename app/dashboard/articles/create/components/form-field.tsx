import { memo } from "react";
import { FormFieldProps } from "../types";

const FormField = memo(function FormField({
  id,
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  rows = 3,
  className = "",
  error,
}: FormFieldProps) {
  const baseClasses = `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground placeholder:text-muted-foreground transition-colors ${className}`;

  const borderClasses = error
    ? "border-destructive focus:border-destructive"
    : "border-input focus:border-ring";

  const inputClasses = `${baseClasses} ${borderClasses}`;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground mb-2"
      >
        {label}
        {required && (
          <span className="text-destructive ml-1" aria-label="required">
            *
          </span>
        )}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          className={`${inputClasses} resize-none`}
          placeholder={placeholder}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={id}
          name={name}
          type="text"
          required={required}
          className={inputClasses}
          placeholder={placeholder}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
        />
      )}

      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 text-sm text-destructive"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});

export { FormField };
