type NotificationMessage = {
  type: NotificationType.FEED;
  data: {
    title: string;
    value: string;
    link: string;
    createdAt: string;
  };
};
type ChatMessage = {
  type: NotificationType.MESSAGE;
  data: {
    value: string;
    createdAt: string;
  };
};

export type Message = NotificationMessage | ChatMessage;

enum NotificationType {
  FEED = "feed",
  MESSAGE = "message",
}
