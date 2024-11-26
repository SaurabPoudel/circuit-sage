"use client";

import { useRef, useState } from "react";
import { ChatForm } from "./chat-form";
import { ChatMessage } from "./chat-message";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm CircuitSage, your AI assistant for electronics engineering. How can I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (data: { message: string }) => {
    // Add user message
    const userMessage: Message = {
      role: "user",
      content: data.message,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setIsLoading(true);
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: "This is a simulated response. Replace with actual AI integration.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);

      // Scroll to bottom
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
      }
    }, 1000);
  };

  return (
    <Card className="flex flex-col h-full max-w-4xl mx-auto">
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-[calc(100vh-16rem)] md:h-[calc(100vh-12rem)]">
          <div className="flex flex-col gap-2 p-4">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="border-t p-4 mt-auto">
        <ChatForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </Card>
  );
}
