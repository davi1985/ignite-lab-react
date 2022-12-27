import { render, screen } from '@testing-library/react';
import { Lesson } from '.';

const mock = [
  {
    title: 'Aula 02',
    slug: 'aula-02',
    availableAt: '2022-06-27T20:15:00.000Z',
    type: 'live',
  },
  {
    title: 'Aula 03',
    slug: 'aula-03',
    availableAt: '2022-12-30T20:15:00.000Z',
    type: 'live',
  },
];

describe('Lesson component', () => {
  it('should render correctly', () => {
    const [data] = mock;

    render(
      <Lesson
        title={data.title}
        availableAt={new Date(data.availableAt)}
        slug={data.slug}
        type="class"
      />
    );

    const linkContainer = screen.getByRole('link');

    expect(linkContainer).toBeInTheDocument();
  });

  it('should show label "Em breve" if date is not available', () => {
    const [_, data] = mock;

    render(
      <Lesson
        title={data.title}
        availableAt={new Date(data.availableAt)}
        slug={data.slug}
        type="class"
      />
    );

    const notAvailableLesson = screen.getByText(/em breve/i);

    expect(notAvailableLesson).toBeInTheDocument();
  });
});
