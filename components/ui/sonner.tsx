"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-center"
      richColors
      visibleToasts={1}
      toastOptions={{
        style: {
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "12px 16px",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          fontSize: "14px",
          lineHeight: "1.4",
        },
        classNames: {
          toast: "!bg-white !border-gray-200 !shadow-lg !rounded-lg",
          title: "!text-gray-900 !font-medium !text-sm",
          description: "!text-gray-600 !text-sm",
          success: "!bg-green-50/50",
          error: "!bg-red-50/50",
          warning: "!bg-orange-50/50",
          info: "!bg-blue-50/50",
        },
      }}
      style={
        {
          "--normal-bg": "white",
          "--normal-text": "#111827",
          "--normal-border": "#e5e7eb",
          "--success-bg": "#f0fdf4",
          "--success-text": "#15803d",
          "--success-border": "#10b981",
          "--error-bg": "#fef2f2",
          "--error-text": "#dc2626",
          "--error-border": "#ef4444",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
