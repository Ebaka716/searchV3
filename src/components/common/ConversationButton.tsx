import React from "react";
import { Button } from "../ui/button";

const ConversationButton = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, children, ...props }, ref) => (
    <Button
      ref={ref}
      variant="secondary"
      className={`bg-teal-600 text-white font-medium rounded-lg rounded-bl-none px-4 py-2 text-sm text-left hover:bg-teal-700 transition inline-flex items-center justify-start ${className ?? ''}`}
      {...props}
    >
      {children}
    </Button>
  )
);
ConversationButton.displayName = "ConversationButton";

export default ConversationButton; 