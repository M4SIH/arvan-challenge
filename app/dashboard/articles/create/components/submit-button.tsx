import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  isLoading: boolean;
  loadingText?: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
}

const SubmitButton = memo(function SubmitButton({
  isLoading,
  loadingText = "Submitting...",
  children,
  disabled = false,
  className,
  variant = "default",
  size = "default",
}: SubmitButtonProps) {
  const isDisabled = isLoading || disabled;

  return (
    <Button
      type="submit"
      disabled={isDisabled}
      variant={variant}
      size={size}
      className={className}
      aria-describedby={isLoading ? "submit-status" : undefined}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin h-4 w-4" />
          <span id="submit-status">{loadingText}</span>
        </>
      ) : (
        children
      )}
    </Button>
  );
});

export { SubmitButton };
