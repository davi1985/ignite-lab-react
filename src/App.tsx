import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

export const App = () => {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <ul data-testid="list">
      {data?.lessons.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
