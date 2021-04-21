export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type TopTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type ChatsParamList = {
  ChatsScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
 
}

export type Message = {
  id: String;
  content: String;
  createdAt: String;
 
}

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
}