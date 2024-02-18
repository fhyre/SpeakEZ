/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateChatroom = /* GraphQL */ `subscription OnCreateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
  onCreateChatroom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatroomSubscriptionVariables,
  APITypes.OnCreateChatroomSubscription
>;
export const onUpdateChatroom = /* GraphQL */ `subscription OnUpdateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
  onUpdateChatroom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatroomSubscriptionVariables,
  APITypes.OnUpdateChatroomSubscription
>;
export const onDeleteChatroom = /* GraphQL */ `subscription OnDeleteChatroom($filter: ModelSubscriptionChatroomFilterInput) {
  onDeleteChatroom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatroomSubscriptionVariables,
  APITypes.OnDeleteChatroomSubscription
>;
export const onCreateUserCR = /* GraphQL */ `subscription OnCreateUserCR($filter: ModelSubscriptionUserCRFilterInput) {
  onCreateUserCR(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserCRSubscriptionVariables,
  APITypes.OnCreateUserCRSubscription
>;
export const onUpdateUserCR = /* GraphQL */ `subscription OnUpdateUserCR($filter: ModelSubscriptionUserCRFilterInput) {
  onUpdateUserCR(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserCRSubscriptionVariables,
  APITypes.OnUpdateUserCRSubscription
>;
export const onDeleteUserCR = /* GraphQL */ `subscription OnDeleteUserCR($filter: ModelSubscriptionUserCRFilterInput) {
  onDeleteUserCR(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserCRSubscriptionVariables,
  APITypes.OnDeleteUserCRSubscription
>;
