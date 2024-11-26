import { cn } from "@/lib/utils";
import { BellElectricIcon } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex w-full gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg transition-colors",
        role === "assistant" ? "bg-muted/50" : "bg-background hover:bg-muted/30"
      )}
    >
      <Avatar className="h-6 w-6 sm:h-8 sm:w-8 shrink-0">
        {role === "assistant" ? (
          <>
            <AvatarImage src="/logo.png" alt="CircuitSage" />
            <AvatarFallback>
              <BellElectricIcon className="h-3 w-3 sm:h-4 sm:w-4" />
            </AvatarFallback>
          </>
        ) : (
          <>
            <AvatarFallback>U</AvatarFallback>
          </>
        )}
      </Avatar>
      <div className="flex-1 space-y-1 sm:space-y-2 overflow-hidden">
        <p className="text-xs sm:text-sm font-medium">
          {role === "assistant" ? "CircuitSage" : "You"}
        </p>
        <div className="prose prose-sm max-w-none break-words">
          <p className="text-sm sm:text-base leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}
