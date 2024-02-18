/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMeeting = /* GraphQL */ `mutation CreateMeeting($region: String) {
  createMeeting(region: $region) {
    statusCode
    body
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMeetingMutationVariables,
  APITypes.CreateMeetingMutation
>;
export const addAttendee = /* GraphQL */ `mutation AddAttendee($meetingId: String, $userId: String) {
  addAttendee(meetingId: $meetingId, userId: $userId) {
    statusCode
    body
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddAttendeeMutationVariables,
  APITypes.AddAttendeeMutation
>;
export const endMeeting = /* GraphQL */ `mutation EndMeeting($meetingId: String) {
  endMeeting(meetingId: $meetingId) {
    statusCode
    body
    __typename
  }
}
` as GeneratedMutation<
  APITypes.EndMeetingMutationVariables,
  APITypes.EndMeetingMutation
>;
export const getMeeting = /* GraphQL */ `mutation GetMeeting($meetingId: String) {
  getMeeting(meetingId: $meetingId) {
    statusCode
    body
    __typename
  }
}
` as GeneratedMutation<
  APITypes.GetMeetingMutationVariables,
  APITypes.GetMeetingMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    user {
      id
      username
      about
      online
      messages {
        items {
          id
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
          __typename
        }
        nextToken
        __typename
      }
      chatrooms {
        items {
          id
          userId
          chatroomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    chatroomId
    content
    createdAt
    updatedAt
    messageUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    user {
      id
      username
      about
      online
      messages {
        items {
          id
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
          __typename
        }
        nextToken
        __typename
      }
      chatrooms {
        items {
          id
          userId
          chatroomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    chatroomId
    content
    createdAt
    updatedAt
    messageUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    user {
      id
      username
      about
      online
      messages {
        items {
          id
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
          __typename
        }
        nextToken
        __typename
      }
      chatrooms {
        items {
          id
          userId
          chatroomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userId
    chatroomId
    content
    createdAt
    updatedAt
    messageUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    about
    online
    messages {
      items {
        id
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        userId
        chatroomId
        content
        createdAt
        updatedAt
        messageUserId
        __typename
      }
      nextToken
      __typename
    }
    chatrooms {
      items {
        id
        userId
        chatroomId
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        chatroom {
          id
          name
          meetingId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    about
    online
    messages {
      items {
        id
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        userId
        chatroomId
        content
        createdAt
        updatedAt
        messageUserId
        __typename
      }
      nextToken
      __typename
    }
    chatrooms {
      items {
        id
        userId
        chatroomId
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        chatroom {
          id
          name
          meetingId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    about
    online
    messages {
      items {
        id
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        userId
        chatroomId
        content
        createdAt
        updatedAt
        messageUserId
        __typename
      }
      nextToken
      __typename
    }
    chatrooms {
      items {
        id
        userId
        chatroomId
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        chatroom {
          id
          name
          meetingId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createChatroom = /* GraphQL */ `mutation CreateChatroom(
  $input: CreateChatroomInput!
  $condition: ModelChatroomConditionInput
) {
  createChatroom(input: $input, condition: $condition) {
    id
    name
    meetingId
    users {
      items {
        id
        userId
        chatroomId
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        chatroom {
          id
          name
          meetingId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    messages {
      items {
        id
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        userId
        chatroomId
        content
        createdAt
        updatedAt
        messageUserId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatroomMutationVariables,
  APITypes.CreateChatroomMutation
>;
export const updateChatroom = /* GraphQL */ `mutation UpdateChatroom(
  $input: UpdateChatroomInput!
  $condition: ModelChatroomConditionInput
) {
  updateChatroom(input: $input, condition: $condition) {
    id
    name
    meetingId
    users {
      items {
        id
        userId
        chatroomId
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        chatroom {
          id
          name
          meetingId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    messages {
      items {
        id
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        userId
        chatroomId
        content
        createdAt
        updatedAt
        messageUserId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatroomMutationVariables,
  APITypes.UpdateChatroomMutation
>;
export const deleteChatroom = /* GraphQL */ `mutation DeleteChatroom(
  $input: DeleteChatroomInput!
  $condition: ModelChatroomConditionInput
) {
  deleteChatroom(input: $input, condition: $condition) {
    id
    name
    meetingId
    users {
      items {
        id
        userId
        chatroomId
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        chatroom {
          id
          name
          meetingId
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    messages {
      items {
        id
        user {
          id
          username
          about
          online
          createdAt
          updatedAt
          __typename
        }
        userId
        chatroomId
        content
        createdAt
        updatedAt
        messageUserId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatroomMutationVariables,
  APITypes.DeleteChatroomMutation
>;
export const createUserCR = /* GraphQL */ `mutation CreateUserCR(
  $input: CreateUserCRInput!
  $condition: ModelUserCRConditionInput
) {
  createUserCR(input: $input, condition: $condition) {
    id
    userId
    chatroomId
    user {
      id
      username
      about
      online
      messages {
        items {
          id
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
          __typename
        }
        nextToken
        __typename
      }
      chatrooms {
        items {
          id
          userId
          chatroomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    chatroom {
      id
      name
      meetingId
      users {
        items {
          id
          userId
          chatroomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserCRMutationVariables,
  APITypes.CreateUserCRMutation
>;
export const updateUserCR = /* GraphQL */ `mutation UpdateUserCR(
  $input: UpdateUserCRInput!
  $condition: ModelUserCRConditionInput
) {
  updateUserCR(input: $input, condition: $condition) {
    id
    userId
    chatroomId
    user {
      id
      username
      about
      online
      messages {
        items {
          id
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
          __typename
        }
        nextToken
        __typename
      }
      chatrooms {
        items {
          id
          userId
          chatroomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    chatroom {
      id
      name
      meetingId
      users {
        items {
          id
          userId
          chatroomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserCRMutationVariables,
  APITypes.UpdateUserCRMutation
>;
export const deleteUserCR = /* GraphQL */ `mutation DeleteUserCR(
  $input: DeleteUserCRInput!
  $condition: ModelUserCRConditionInput
) {
  deleteUserCR(input: $input, condition: $condition) {
    id
    userId
    chatroomId
    user {
      id
      username
      about
      online
      messages {
        items {
          id
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
          __typename
        }
        nextToken
        __typename
      }
      chatrooms {
        items {
          id
          userId
          chatroomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    chatroom {
      id
      name
      meetingId
      users {
        items {
          id
          userId
          chatroomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          userId
          chatroomId
          content
          createdAt
          updatedAt
          messageUserId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserCRMutationVariables,
  APITypes.DeleteUserCRMutation
>;
