import { createContext, useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import {
  getChatroom,
  getUser,
  listUserCRS,
  listUsers,
  messagesByChatroomIdAndCreatedAt,
} from '../graphql/queries';
import {
  onCreateChatroom,
  onCreateMessage,
  onUpdateChatroom,
} from '../graphql/subscriptions';
import { createMessage } from '../graphql/mutations';

export const UserModifyContext = createContext();
export const UserValContext = createContext();

export function UserProvider({ children }) {
  const client = generateClient();

  const uid = localStorage.getItem('uid');
  const [user, setUser] = useState(null);
  const [chatrooms, setChatrooms] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [chatIndex, setChatIndex] = useState(0);

  const handleSubmit = async (input) => {
    if (input.trim()) {
      await client.graphql({
        query: createMessage,
        variables: {
          input: {
            chatroomId: chatrooms.at(chatIndex).chatroomId,
            content: input,
            userId: user.id,
            messageUserId: user.id,
          },
        },
      });
    }
  };

  useEffect(() => {
    const getCurrUser = async () => {
      const res = await client.graphql({
        query: getUser,
        variables: {
          id: uid,
        },
      });
      const user = res.data.getUser;
      setUser(user);
    };

    const findUsers = async () => {
      const res = await client.graphql({ query: listUsers });
      const foundUsers = res.data.listUsers.items;

      setAllUsers(foundUsers.filter((fUser) => fUser.id !== uid));
    };

    getCurrUser();
    findUsers();
  }, []);

  useEffect(() => {
    const chatCreateSub = client
      .graphql({ query: onCreateChatroom })
      .subscribe({
        next: ({ data }) => {
          const res = data.onCreateChatroom;
          setTimeout(async () => {
            try {
              const tChat = await client.graphql({
                query: getChatroom,
                variables: {
                  id: res.id,
                },
              });

              let found =
                tChat.data.getChatroom.users.items.filter(
                  (tUser) => tUser.userId === uid
                ).length > 0
                  ? true
                  : false;

              if (found) {
                const userCRData = await client.graphql({
                  query: listUserCRS,
                  variables: {
                    filter: {
                      chatroomId: { eq: res.id },
                      and: [{ userId: { ne: uid } }],
                    },
                  },
                });

                const data = userCRData.data.listUserCRS.items.at(0);
                data.chatroom.messages = [];

                setChatrooms((curr) => {
                  const memT = JSON.parse(JSON.stringify(curr));

                  memT.push(data);

                  return memT;
                });
              }
            } catch (err) {
              console.log(err);
            }
          }, 500);
        },
        error: (err) => console.log(err),
      });

    const chatUpdateSub = client
      .graphql({ query: onUpdateChatroom })
      .subscribe({
        next: ({ data }) => {
          const res = data.onUpdateChatroom;
          setChatrooms((curr) => {
            curr.at(chatIndex).chatroom.meetingId = res.meetingId;
            return curr;
          });
        },
      });

    const messageCreateSub = client
      .graphql({ query: onCreateMessage })
      .subscribe({
        next: ({ data }) => {
          const res = data.onCreateMessage;
          if (chatrooms.at(chatIndex).chatroomId === res.chatroomId) {
            setChatrooms((curr) => {
              const memT = JSON.parse(JSON.stringify(curr));

              memT.at(chatIndex).chatroom.messages.push(res);

              return memT;
            });
          }
        },
        error: (err) => console.log(err),
      });

    return () => {
      chatCreateSub.unsubscribe();
      chatUpdateSub.unsubscribe();
      messageCreateSub.unsubscribe();
    };
  }, [chatIndex, chatrooms]);

  useEffect(() => {
    const chatAlter = async () => {
      if (!user) return;
      const cuItems = user.chatrooms?.items ? user.chatrooms.items : [];

      const chatrooms = [];

      for (const coll of cuItems) {
        const res = await client.graphql({
          query: listUserCRS,
          variables: {
            filter: {
              chatroomId: { eq: coll.chatroomId },
              and: [{ userId: { ne: user.id } }],
            },
          },
        });

        const room = res.data.listUserCRS.items.at(0);

        const cUser = await client.graphql({
          query: messagesByChatroomIdAndCreatedAt,
          variables: {
            chatroomId: room.chatroomId,
            sortDirection: 'ASC',
          },
        });

        room.chatroom.messages =
          cUser.data.messagesByChatroomIdAndCreatedAt.items;
        chatrooms.push(room);
      }

      setChatrooms(chatrooms);
    };

    chatAlter();
  }, [user]);

  return (
    <UserModifyContext.Provider
      value={{
        setChatIndex: setChatIndex,
        handleSubmit: handleSubmit,
      }}
    >
      <UserValContext.Provider
        value={{
          user: user,
          chatrooms: chatrooms,
          allUsers: allUsers,
          chatIndex: chatIndex,
        }}
      >
        {allUsers && user && children}
      </UserValContext.Provider>
    </UserModifyContext.Provider>
  );
}
