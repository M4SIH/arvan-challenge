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
  const baseClasses = `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500 transition-colors ${className}`;

  const borderClasses = error
    ? "border-red-300 focus:border-red-500"
    : "border-gray-300 focus:border-blue-500";

  const inputClasses = `${baseClasses} ${borderClasses}`;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900 mb-2"
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="required">
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
          className="mt-1 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});

export { FormField };
