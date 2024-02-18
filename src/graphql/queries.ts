/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        username
        about
        online
        messages {
          nextToken
          __typename
        }
        chatrooms {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getChatroom = /* GraphQL */ `query GetChatroom($id: ID!) {
  getChatroom(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChatroomQueryVariables,
  APITypes.GetChatroomQuery
>;
export const listChatrooms = /* GraphQL */ `query ListChatrooms(
  $filter: ModelChatroomFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatroomsQueryVariables,
  APITypes.ListChatroomsQuery
>;
export const getUserCR = /* GraphQL */ `query GetUserCR($id: ID!) {
  getUserCR(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserCRQueryVariables, APITypes.GetUserCRQuery>;
export const listUserCRS = /* GraphQL */ `query ListUserCRS(
  $filter: ModelUserCRFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserCRS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      chatroomId
      user {
        id
        username
        about
        online
        messages {
          nextToken
          __typename
        }
        chatrooms {
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
          nextToken
          __typename
        }
        messages {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserCRSQueryVariables,
  APITypes.ListUserCRSQuery
>;
export const messagesByUserIdAndContent = /* GraphQL */ `query MessagesByUserIdAndContent(
  $userId: ID!
  $content: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByUserIdAndContent(
    userId: $userId
    content: $content
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      user {
        id
        username
        about
        online
        messages {
          nextToken
          __typename
        }
        chatrooms {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByUserIdAndContentQueryVariables,
  APITypes.MessagesByUserIdAndContentQuery
>;
export const messagesByChatroomIdAndCreatedAt = /* GraphQL */ `query MessagesByChatroomIdAndCreatedAt(
  $chatroomId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByChatroomIdAndCreatedAt(
    chatroomId: $chatroomId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      user {
        id
        username
        about
        online
        messages {
          nextToken
          __typename
        }
        chatrooms {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByChatroomIdAndCreatedAtQueryVariables,
  APITypes.MessagesByChatroomIdAndCreatedAtQuery
>;
export const usersByUsername = /* GraphQL */ `query UsersByUsername(
  $username: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByUsername(
    username: $username
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByUsernameQueryVariables,
  APITypes.UsersByUsernameQuery
>;
export const userCRSByUserId = /* GraphQL */ `query UserCRSByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserCRFilterInput
  $limit: Int
  $nextToken: String
) {
  userCRSByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      chatroomId
      user {
        id
        username
        about
        online
        messages {
          nextToken
          __typename
        }
        chatrooms {
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
          nextToken
          __typename
        }
        messages {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserCRSByUserIdQueryVariables,
  APITypes.UserCRSByUserIdQuery
>;
export const userCRSByChatroomId = /* GraphQL */ `query UserCRSByChatroomId(
  $chatroomId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserCRFilterInput
  $limit: Int
  $nextToken: String
) {
  userCRSByChatroomId(
    chatroomId: $chatroomId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      chatroomId
      user {
        id
        username
        about
        online
        messages {
          nextToken
          __typename
        }
        chatrooms {
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
          nextToken
          __typename
        }
        messages {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserCRSByChatroomIdQueryVariables,
  APITypes.UserCRSByChatroomIdQuery
>;
