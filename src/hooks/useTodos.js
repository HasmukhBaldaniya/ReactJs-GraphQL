import { useQuery, useLazyQuery, gql } from "@apollo/client";

const GET_TODOS = gql`
  query {
    todos(where: {id: {_gt: 73509}}) {
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
  const { error, data, loading, refetch } = useQuery(GET_TODOS);
  return {
    error,
    data,
    loading,
    refetch,
  };
};

