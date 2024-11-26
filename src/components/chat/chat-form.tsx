import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const formSchema = z.object({
  message: z.string().min(1, "Please enter a message"),
});

type FormData = z.infer<typeof formSchema>;

interface ChatFormProps {
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
}

export function ChatForm({ onSubmit, isLoading }: ChatFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const handleSubmit = (data: FormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Textarea
                    placeholder="Ask about circuit design, components, or troubleshooting..."
                    className="min-h-[100px] resize-none pr-12"
                    {...field}
                  />
                  <Button
                    size="sm"
                    type="submit"
                    disabled={isLoading}
                    className="absolute bottom-2 right-2"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
