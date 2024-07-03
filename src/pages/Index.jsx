import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip } from "@/components/ui/tooltip";
import { Paperclip, MoreVertical, Send } from "lucide-react"; // Corrected import

const Index = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-1/3 border-r">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Avatar>
              <img src="/placeholder.svg" alt="App Logo" width="40" height="40" />
            </Avatar>
            <span className="font-semibold text-lg">ChatApp</span>
          </div>
          <Avatar>
            <img src="/placeholder.svg" alt="User Profile" width="40" height="40" />
          </Avatar>
        </div>
        <div className="p-4">
          <Input placeholder="Search..." />
        </div>
        <ScrollArea className="flex-1 p-4">
          <Card className="mb-4">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <img src="/placeholder.svg" alt="Contact" width="40" height="40" />
                </Avatar>
                <div>
                  <CardTitle>Contact Name</CardTitle>
                  <p className="text-sm text-muted-foreground">Last message snippet...</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-muted-foreground">12:00 PM</span>
                <Badge variant="outline">3</Badge>
              </div>
            </CardHeader>
          </Card>
          {/* Repeat the Card component for more contacts */}
        </ScrollArea>
        <Button variant="outline" className="fixed bottom-4 right-4 rounded-full">
          +
        </Button>
      </div>

      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Avatar>
              <img src="/placeholder.svg" alt="Contact" width="40" height="40" />
            </Avatar>
            <div>
              <CardTitle>Contact Name</CardTitle>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>
          <Tooltip>
            <Button variant="outline" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
            <Tooltip.Content>Options</Tooltip.Content>
          </Tooltip>
        </div>
        <ScrollArea className="flex-1 p-4">
          <div className="flex flex-col gap-4">
            <div className="self-start bg-muted p-2 rounded-lg">
              <p>Received message...</p>
              <span className="text-xs text-muted-foreground">12:00 PM</span>
            </div>
            <div className="self-end bg-primary text-primary-foreground p-2 rounded-lg">
              <p>Sent message...</p>
              <span className="text-xs text-primary-foreground">12:01 PM</span>
            </div>
            {/* Repeat for more messages */}
          </div>
        </ScrollArea>
        <div className="flex items-center p-4 border-t">
          <Button variant="outline" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input className="flex-1 mx-4" placeholder="Type a message..." />
          <Button variant="outline" size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;