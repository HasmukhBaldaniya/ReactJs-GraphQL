import { useQuery, gql } from "@apollo/client";


const GET_TODOS = gql`
  query TodosFilter($title: String!, $name: String!, $limit: Int!, $offset: Int!){
    todos(where: {id: {_gt: 73540}, title: {_like: $title}}) {
      title
      id
    }
    users(limit: $limit, offset: $offset, where: {name: {_like: $name}}) {
    name
    id
  }
  }
`;

export const useTodos = ({title = "", name = "", limit = 10, offset = 10}) => {
  const { error, data, loading, refetch } = useQuery(GET_TODOS, {
    variables: {title: `%${title}%`, name: `%${name}%`, limit, offset},
  });
  return {
    error,
    data,
    loading,
    refetch,
  };
};
