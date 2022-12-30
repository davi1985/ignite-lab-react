import { isPast } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';
import { availableDateFormatted } from '../../utils';
import { LessonProps } from './types';
import classNames from 'classnames';

export const Lesson = ({ title, slug, availableAt, type }: LessonProps) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(availableAt);

  const isActiveLesson = slug === routeSlug;
  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted(availableAt)}
      </span>

      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
          { 'bg-green-500': isActiveLesson }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                'text-sm text-blue-500 font-medium flex items-center gap-2',
                {
                  'text-white': isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'uppercase text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold',
              {
                'border-white': isActiveLesson,
              }
            )}
          >
            {type === 'live' ? 'Ao Vivo' : 'Aula Prática'}
          </span>
        </header>

        <strong
          className={classNames('text-gray-200 mt-5 block', {
            'text-white': isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
