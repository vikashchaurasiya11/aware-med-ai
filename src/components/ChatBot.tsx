import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI health assistant. I can help you with general health information, symptoms guidance, and wellness tips. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("fever") || lowerMessage.includes("temperature")) {
      return "Fever can be a sign that your body is fighting an infection. For adults, a fever is generally considered 100.4°F (38°C) or higher. Stay hydrated, rest, and consider over-the-counter fever reducers. If fever persists over 3 days or reaches 103°F (39.4°C), please consult a healthcare provider.";
    } else if (lowerMessage.includes("headache")) {
      return "Headaches can have various causes including tension, dehydration, or stress. Try drinking water, resting in a quiet, dark room, and applying a cold or warm compress. If headaches are severe, frequent, or accompanied by other symptoms like vision changes, please seek medical attention.";
    } else if (lowerMessage.includes("cough")) {
      return "Coughs can be dry or productive and may indicate various conditions. Stay hydrated, use a humidifier, and avoid irritants. A persistent cough lasting more than 3 weeks, coughing up blood, or difficulty breathing requires medical evaluation.";
    } else if (lowerMessage.includes("cold") || lowerMessage.includes("flu")) {
      return "Common cold and flu symptoms include congestion, cough, and fatigue. Rest, stay hydrated, and wash hands frequently. Flu symptoms are typically more severe. Contact a healthcare provider if symptoms worsen or you have difficulty breathing.";
    } else {
      return "Thank you for your question. For specific medical concerns, I recommend consulting with a healthcare professional who can provide personalized advice based on your medical history and current condition. Is there any general health information I can help you with?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: simulateResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are common cold symptoms?",
    "How to reduce fever naturally?",
    "When should I see a doctor for a headache?",
    "What are signs of dehydration?"
  ];

  return (
    <section id="chatbot" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Health Assistant
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get instant answers to your health questions with our AI-powered assistant. 
            Remember, this is for informational purposes only and doesn't replace professional medical advice.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                Health Chat Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      {!message.isUser && (
                        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <Bot className="h-4 w-4" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          message.isUser
                            ? "bg-chat-user text-chat-user-foreground"
                            : "bg-chat-bot text-chat-bot-foreground border"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      {message.isUser && (
                        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-chat-bot text-chat-bot-foreground border rounded-lg px-4 py-2">
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm">Typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue(question)}
                      className="text-xs"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about symptoms, treatments, or general health..."
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!inputValue.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;