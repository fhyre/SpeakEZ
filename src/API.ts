/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Response = {
  __typename: "Response",
  statusCode: number,
  body?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  userId: string,
  chatroomId: string,
  content: string,
  createdAt?: string | null,
  messageUserId: string,
};

export type ModelMessageConditionInput = {
  userId?: ModelIDInput | null,
  chatroomId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  messageUserId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  user: User,
  userId: string,
  chatroomId: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  messageUserId: string,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  about?: string | null,
  online: boolean,
  messages?: ModelMessageConnection | null,
  chatrooms?: ModelUserCRConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelUserCRConnection = {
  __typename: "ModelUserCRConnection",
  items:  Array<UserCR | null >,
  nextToken?: string | null,
};

export type UserCR = {
  __typename: "UserCR",
  id: string,
  userId: string,
  chatroomId: string,
  user: User,
  chatroom: Chatroom,
  createdAt: string,
  updatedAt: string,
};

export type Chatroom = {
  __typename: "Chatroom",
  id: string,
  name?: string | null,
  meetingId?: string | null,
  users?: ModelUserCRConnection | null,
  messages?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMessageInput = {
  id: string,
  userId?: string | null,
  chatroomId?: string | null,
  content?: string | null,
  createdAt?: string | null,
  messageUserId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  about?: string | null,
  online: boolean,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  about?: ModelStringInput | null,
  online?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  about?: string | null,
  online?: boolean | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateChatroomInput = {
  id?: string | null,
  name?: string | null,
  meetingId?: string | null,
};

export type ModelChatroomConditionInput = {
  name?: ModelStringInput | null,
  meetingId?: ModelStringInput | null,
  and?: Array< ModelChatroomConditionInput | null > | null,
  or?: Array< ModelChatroomConditionInput | null > | null,
  not?: ModelChatroomConditionInput | null,
};

export type UpdateChatroomInput = {
  id: string,
  name?: string | null,
  meetingId?: string | null,
};

export type DeleteChatroomInput = {
  id: string,
};

export type CreateUserCRInput = {
  id?: string | null,
  userId: string,
  chatroomId: string,
};

export type ModelUserCRConditionInput = {
  userId?: ModelIDInput | null,
  chatroomId?: ModelIDInput | null,
  and?: Array< ModelUserCRConditionInput | null > | null,
  or?: Array< ModelUserCRConditionInput | null > | null,
  not?: ModelUserCRConditionInput | null,
};

export type UpdateUserCRInput = {
  id: string,
  userId?: string | null,
  chatroomId?: string | null,
};

export type DeleteUserCRInput = {
  id: string,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  chatroomId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  messageUserId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  about?: ModelStringInput | null,
  online?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelChatroomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  meetingId?: ModelStringInput | null,
  and?: Array< ModelChatroomFilterInput | null > | null,
  or?: Array< ModelChatroomFilterInput | null > | null,
  not?: ModelChatroomFilterInput | null,
};

export type ModelChatroomConnection = {
  __typename: "ModelChatroomConnection",
  items:  Array<Chatroom | null >,
  nextToken?: string | null,
};

export type ModelUserCRFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  chatroomId?: ModelIDInput | null,
  and?: Array< ModelUserCRFilterInput | null > | null,
  or?: Array< ModelUserCRFilterInput | null > | null,
  not?: ModelUserCRFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  chatroomId?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  about?: ModelSubscriptionStringInput | null,
  online?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionChatroomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  meetingId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatroomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatroomFilterInput | null > | null,
};

export type ModelSubscriptionUserCRFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  chatroomId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserCRFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserCRFilterInput | null > | null,
};

export type CreateMeetingMutationVariables = {
  region?: string | null,
};

export type CreateMeetingMutation = {
  createMeeting?:  {
    __typename: "Response",
    statusCode: number,
    body?: string | null,
  } | null,
};

export type AddAttendeeMutationVariables = {
  meetingId?: string | null,
  userId?: string | null,
};

export type AddAttendeeMutation = {
  addAttendee?:  {
    __typename: "Response",
    statusCode: number,
    body?: string | null,
  } | null,
};

export type EndMeetingMutationVariables = {
  meetingId?: string | null,
};

export type EndMeetingMutation = {
  endMeeting?:  {
    __typename: "Response",
    statusCode: number,
    body?: string | null,
  } | null,
};

export type GetMeetingMutationVariables = {
  meetingId?: string | null,
};

export type GetMeetingMutation = {
  getMeeting?:  {
    __typename: "Response",
    statusCode: number,
    body?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    chatroomId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    messageUserId: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    chatroomId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    messageUserId: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    chatroomId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    messageUserId: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    about?: string | null,
    online: boolean,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    about?: string | null,
    online: boolean,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    about?: string | null,
    online: boolean,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatroomMutationVariables = {
  input: CreateChatroomInput,
  condition?: ModelChatroomConditionInput | null,
};

export type CreateChatroomMutation = {
  createChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name?: string | null,
    meetingId?: string | null,
    users?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatroomMutationVariables = {
  input: UpdateChatroomInput,
  condition?: ModelChatroomConditionInput | null,
};

export type UpdateChatroomMutation = {
  updateChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name?: string | null,
    meetingId?: string | null,
    users?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatroomMutationVariables = {
  input: DeleteChatroomInput,
  condition?: ModelChatroomConditionInput | null,
};

export type DeleteChatroomMutation = {
  deleteChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name?: string | null,
    meetingId?: string | null,
    users?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserCRMutationVariables = {
  input: CreateUserCRInput,
  condition?: ModelUserCRConditionInput | null,
};

export type CreateUserCRMutation = {
  createUserCR?:  {
    __typename: "UserCR",
    id: string,
    userId: string,
    chatroomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      name?: string | null,
      meetingId?: string | null,
      users?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserCRMutationVariables = {
  input: UpdateUserCRInput,
  condition?: ModelUserCRConditionInput | null,
};

export type UpdateUserCRMutation = {
  updateUserCR?:  {
    __typename: "UserCR",
    id: string,
    userId: string,
    chatroomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      name?: string | null,
      meetingId?: string | null,
      users?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserCRMutationVariables = {
  input: DeleteUserCRInput,
  condition?: ModelUserCRConditionInput | null,
};

export type DeleteUserCRMutation = {
  deleteUserCR?:  {
    __typename: "UserCR",
    id: string,
    userId: string,
    chatroomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      name?: string | null,
      meetingId?: string | null,
      users?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    chatroomId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    messageUserId: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        about?: string | null,
        online: boolean,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
        chatrooms?:  {
          __typename: "ModelUserCRConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      chatroomId: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      messageUserId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    about?: string | null,
    online: boolean,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatroomQueryVariables = {
  id: string,
};

export type GetChatroomQuery = {
  getChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name?: string | null,
    meetingId?: string | null,
    users?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatroomsQueryVariables = {
  filter?: ModelChatroomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatroomsQuery = {
  listChatrooms?:  {
    __typename: "ModelChatroomConnection",
    items:  Array< {
      __typename: "Chatroom",
      id: string,
      name?: string | null,
      meetingId?: string | null,
      users?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserCRQueryVariables = {
  id: string,
};

export type GetUserCRQuery = {
  getUserCR?:  {
    __typename: "UserCR",
    id: string,
    userId: string,
    chatroomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      name?: string | null,
      meetingId?: string | null,
      users?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserCRSQueryVariables = {
  filter?: ModelUserCRFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserCRSQuery = {
  listUserCRS?:  {
    __typename: "ModelUserCRConnection",
    items:  Array< {
      __typename: "UserCR",
      id: string,
      userId: string,
      chatroomId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        about?: string | null,
        online: boolean,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
        chatrooms?:  {
          __typename: "ModelUserCRConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      chatroom:  {
        __typename: "Chatroom",
        id: string,
        name?: string | null,
        meetingId?: string | null,
        users?:  {
          __typename: "ModelUserCRConnection",
          nextToken?: string | null,
        } | null,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByUserIdAndContentQueryVariables = {
  userId: string,
  content?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByUserIdAndContentQuery = {
  messagesByUserIdAndContent?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        about?: string | null,
        online: boolean,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
        chatrooms?:  {
          __typename: "ModelUserCRConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      chatroomId: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      messageUserId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatroomIdAndCreatedAtQueryVariables = {
  chatroomId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatroomIdAndCreatedAtQuery = {
  messagesByChatroomIdAndCreatedAt?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        about?: string | null,
        online: boolean,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
        chatrooms?:  {
          __typename: "ModelUserCRConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      userId: string,
      chatroomId: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      messageUserId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByUsernameQueryVariables = {
  username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByUsernameQuery = {
  usersByUsername?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserCRSByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserCRFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserCRSByUserIdQuery = {
  userCRSByUserId?:  {
    __typename: "ModelUserCRConnection",
    items:  Array< {
      __typename: "UserCR",
      id: string,
      userId: string,
      chatroomId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        about?: string | null,
        online: boolean,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
        chatrooms?:  {
          __typename: "ModelUserCRConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      chatroom:  {
        __typename: "Chatroom",
        id: string,
        name?: string | null,
        meetingId?: string | null,
        users?:  {
          __typename: "ModelUserCRConnection",
          nextToken?: string | null,
        } | null,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserCRSByChatroomIdQueryVariables = {
  chatroomId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserCRFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserCRSByChatroomIdQuery = {
  userCRSByChatroomId?:  {
    __typename: "ModelUserCRConnection",
    items:  Array< {
      __typename: "UserCR",
      id: string,
      userId: string,
      chatroomId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        about?: string | null,
        online: boolean,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
        chatrooms?:  {
          __typename: "ModelUserCRConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      chatroom:  {
        __typename: "Chatroom",
        id: string,
        name?: string | null,
        meetingId?: string | null,
        users?:  {
          __typename: "ModelUserCRConnection",
          nextToken?: string | null,
        } | null,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    chatroomId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    messageUserId: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    chatroomId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    messageUserId: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    userId: string,
    chatroomId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    messageUserId: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    about?: string | null,
    online: boolean,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    about?: string | null,
    online: boolean,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    about?: string | null,
    online: boolean,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatrooms?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatroomSubscriptionVariables = {
  filter?: ModelSubscriptionChatroomFilterInput | null,
};

export type OnCreateChatroomSubscription = {
  onCreateChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name?: string | null,
    meetingId?: string | null,
    users?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatroomSubscriptionVariables = {
  filter?: ModelSubscriptionChatroomFilterInput | null,
};

export type OnUpdateChatroomSubscription = {
  onUpdateChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name?: string | null,
    meetingId?: string | null,
    users?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatroomSubscriptionVariables = {
  filter?: ModelSubscriptionChatroomFilterInput | null,
};

export type OnDeleteChatroomSubscription = {
  onDeleteChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name?: string | null,
    meetingId?: string | null,
    users?:  {
      __typename: "ModelUserCRConnection",
      items:  Array< {
        __typename: "UserCR",
        id: string,
        userId: string,
        chatroomId: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        chatroom:  {
          __typename: "Chatroom",
          id: string,
          name?: string | null,
          meetingId?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        user:  {
          __typename: "User",
          id: string,
          username: string,
          about?: string | null,
          online: boolean,
          createdAt: string,
          updatedAt: string,
        },
        userId: string,
        chatroomId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        messageUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserCRSubscriptionVariables = {
  filter?: ModelSubscriptionUserCRFilterInput | null,
};

export type OnCreateUserCRSubscription = {
  onCreateUserCR?:  {
    __typename: "UserCR",
    id: string,
    userId: string,
    chatroomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      name?: string | null,
      meetingId?: string | null,
      users?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserCRSubscriptionVariables = {
  filter?: ModelSubscriptionUserCRFilterInput | null,
};

export type OnUpdateUserCRSubscription = {
  onUpdateUserCR?:  {
    __typename: "UserCR",
    id: string,
    userId: string,
    chatroomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      name?: string | null,
      meetingId?: string | null,
      users?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserCRSubscriptionVariables = {
  filter?: ModelSubscriptionUserCRFilterInput | null,
};

export type OnDeleteUserCRSubscription = {
  onDeleteUserCR?:  {
    __typename: "UserCR",
    id: string,
    userId: string,
    chatroomId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      about?: string | null,
      online: boolean,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chatrooms?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatroom:  {
      __typename: "Chatroom",
      id: string,
      name?: string | null,
      meetingId?: string | null,
      users?:  {
        __typename: "ModelUserCRConnection",
        items:  Array< {
          __typename: "UserCR",
          id: string,
          userId: string,
          chatroomId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          userId: string,
          chatroomId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          messageUserId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
