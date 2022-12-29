import { isPast } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { availableDateFormatted } from '../../utils/utils';
import { LessonProps } from './types';

export const Lesson = ({ title, slug, availableAt, type }: LessonProps) => {
  const isLessonAvailable = isPast(availableAt);

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted(availableAt)}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="uppercase text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {type === 'live' ? 'Ao Vivo' : 'Aula Prática'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </Link>
  );
};
