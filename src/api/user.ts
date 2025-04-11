// check file `vite.config.js` for details about `@`

import type { User } from '@/types/user'
import { client } from '@/utils/http'


export const getUser = async (userEmail: string): Promise<User> => {
  const response = await client.get(`/users?email=${userEmail}`)

  return response.data[0]
}

export const getUsers = async (): Promise<User[]> => {
  const response = await client.get(`/users`)

  return response.data
}

export const createUser = async (name: string, email: string): Promise<User> => {
  const response = await client.post('/users', {
    name,
    email,
  })

  return response.data
}

// export const updateTodo = async ({ id, title, completed }) => {
//   const response = await client.patch(`/todos/${id}`, {
//     title,
//     completed,
//   });

//   return response.data;
// };

// export const deleteTodo = async id => {
//   const response = await client.delete(`/todos/${id}`);

//   return response.data;
// };
