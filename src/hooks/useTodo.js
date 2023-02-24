import { useQuery, gql } from "@apollo/client";

const GET_TODO = gql`
  query GetTodo($id: Int!) {
    todos_by_pk(id: $id) {
      id
      title
      is_public
      created_at
      user {
        id
        name
      }
    }
  }
`;

export const ADD_TODO = gql`
  mutation InsertTodo($title: String!) {
    insert_todos(objects: [{ title: $title }]) {
      returning {
        title
        id
      }
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: Int!, $title: String!) {
    update_todos(where: { id: { _eq: $id } }, _set: { title: $title }) {
      affected_rows
      returning {
        id
        title
        is_completed
      }
    }
  }
`;


export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
        title
      }
    }
  }
`;


export const useTodo = (id) => {
  const { error, data, loading } = useQuery(GET_TODO, {
    variables: { id },
  });
  return {
    error,
    data,
    loading,
  };
};
