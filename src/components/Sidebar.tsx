import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface getLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

export function Sidebar() {
  const { data } = useQuery<getLessonsQueryResponse>(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-4 border-b border-gray-500 block">
        Cronagrama de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lessons) => {
          return (
            <Lesson
              key={lessons.id}
              title={lessons.title}
              slug={lessons.slug}
              availableAt={new Date(lessons.availableAt)}
              type={lessons.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
