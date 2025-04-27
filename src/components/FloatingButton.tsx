
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function FloatingButton() {
  return (
    <Button
      className="fixed bottom-8 right-8 z-50 bg-yayi-gold hover:bg-opacity-80 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center"
      onClick={() => window.open("https://line.me/R/ti/p/@123abcde", "_blank")}
    >
      <MessageSquare className="h-6 w-6" />
      <span className="sr-only">LINE下單</span>
    </Button>
  );
}
