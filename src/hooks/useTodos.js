import { useQuery, gql } from "@apollo/client";


const GET_TODOS = gql`
  query TodosFilter($title: String!){
    todos(where: {id: {_gt: 73540}, title: {_like: $title}}) {
      title
      id
    }
    users {
    name
    id
  }
  }
`;

export const useTodos = (title = "") => {
  const { error, data, loading, refetch } = useQuery(GET_TODOS, {
    variables: {title: `%${title}%`},
  });
  return {
    error,
    data,
    loading,
    refetch,
  };
};
