
import React, { useState } from "react";
import { Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<{type: 'user' | 'assistant', content: string}[]>([
    {type: 'assistant', content: "Hello! I'm your AI career assistant. I can help with resume advice, interview preparation, and career guidance. How can I help you today?"}
  ]);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to conversation
    setConversation([...conversation, {type: 'user', content: message}]);
    
    // Simulate AI response
    setTimeout(() => {
      let response = "I'm sorry, I don't have enough information to answer that specific question yet. Could you provide more details about what you're looking for?";
      
      // Simple response patterns
      if (message.toLowerCase().includes("resume")) {
        response = "Your resume looks great! To make it even better, consider quantifying your achievements and tailoring it for each position you apply to.";
      } else if (message.toLowerCase().includes("interview")) {
        response = "For interviews, prepare using the STAR method (Situation, Task, Action, Result) for behavioral questions, and research the company thoroughly beforehand.";
      } else if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
        response = "Hello! It's nice to meet you. I'm your AI career assistant. How can I help with your career journey today?";
      }
      
      setConversation(prev => [...prev, {type: 'assistant', content: response}]);
    }, 1000);
    
    // Clear input
    setMessage("");
    
    // Show toast notification
    toast({
      title: "Message sent",
      description: "Your message has been received",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Assistant Button */}
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`rounded-full h-14 w-14 shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-theme-600 hover:bg-theme-700'} transition-transform hover:scale-110`}
      >
        <Bot className="h-6 w-6" />
      </Button>
      
      {/* Assistant Panel */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 md:w-96 shadow-2xl animate-fade-in">
          <CardContent className="p-3">
            <div className="flex items-center space-x-3 border-b pb-3">
              <Avatar className="h-10 w-10 border-2 border-theme-600">
                <AvatarImage src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="AI Assistant" />
                <AvatarFallback className="bg-theme-100">AI</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-sm">Career AI Assistant</h3>
                <p className="text-xs text-gray-500">Recent BIT Graduate</p>
              </div>
            </div>
            
            <div className="h-60 overflow-y-auto py-2 space-y-2">
              {conversation.map((msg, index) => (
                <div 
                  key={index} 
                  className={`${msg.type === 'user' ? 'ml-auto bg-theme-600 text-white' : 'mr-auto bg-gray-100 text-gray-800'} 
                    max-w-[80%] rounded-lg p-2 text-sm animate-fade-in`}
                >
                  {msg.content}
                </div>
              ))}
            </div>
            
            <div className="flex gap-2 mt-3">
              <Input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="text-sm"
              />
              <Button 
                size="sm" 
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AIAssistant;
