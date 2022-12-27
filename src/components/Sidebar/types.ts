type Lesson = {
  id: string;
  title: string;
  slug: string;
  availableAt: string;
  type: 'class' | 'live';
};

export interface GetLessonQueryResponse {
  lessons: Lesson[];
}
