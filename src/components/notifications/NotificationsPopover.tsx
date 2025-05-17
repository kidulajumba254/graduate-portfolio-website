
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Bell, BellRing, Check, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  sender?: {
    name: string;
    avatar?: string;
  };
};

export const NotificationsPopover = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Interview Request",
      message: "Tech Solutions Inc. would like to schedule an interview",
      time: "2 hours ago",
      read: false,
      sender: {
        name: "Tech Solutions",
        avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    },
    {
      id: "2",
      title: "Application Update",
      message: "Your application for Senior Developer has been reviewed",
      time: "1 day ago",
      read: false,
      sender: {
        name: "Global Tech"
      }
    },
    {
      id: "3",
      title: "Profile Viewed",
      message: "A recruiter from InnovateTech viewed your profile",
      time: "3 days ago",
      read: true,
      sender: {
        name: "InnovateTech"
      }
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    toast({
      title: "Notifications marked as read",
      description: "All notifications have been marked as read"
    });
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {unreadCount > 0 ? (
            <BellRing className="h-5 w-5" />
          ) : (
            <Bell className="h-5 w-5" />
          )}
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs" variant="destructive">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h4 className="font-semibold">Notifications</h4>
          {unreadCount > 0 && (
            <Button size="sm" variant="ghost" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        
        {notifications.length > 0 ? (
          <ScrollArea className="h-[300px]">
            <div className="divide-y">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-theme-50' : ''}`}
                >
                  <div className="flex gap-3">
                    <Avatar className="h-9 w-9">
                      {notification.sender?.avatar ? (
                        <AvatarImage src={notification.sender.avatar} />
                      ) : (
                        <AvatarFallback>
                          {notification.sender?.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-medium">{notification.title}</p>
                        <div className="flex gap-1">
                          {!notification.read && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6" 
                              onClick={() => markAsRead(notification.id)}
                            >
                              <Check className="h-4 w-4" />
                              <span className="sr-only">Mark as read</span>
                            </Button>
                          )}
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6" 
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="p-4 text-center text-gray-500">
            <p>No notifications to display</p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
