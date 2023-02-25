import { useQuery, gql } from "@apollo/client";

const GET_TODOS = gql`
  query {
    todos(where: {id: {_gt: 72691}}) {
      title
      id
    }
    users {
    name
    id
  }
  }
`;

export const useTodos = () => {
  const { error, data, loading } = useQuery(GET_TODOS);
  return {
    error,
    data,
    loading,
  };
};
