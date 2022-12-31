import { DefaultUi, LoadingScreen, Player, Youtube } from '@vime/react';
import { Footer } from '../Footer';
import { Links } from '../Links';
import { ResourcesDownload } from '../ResourcesDownload';
import { VideoProps } from './types';

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from '../../graphql/generated';

export const Video = ({ lessonSlug }: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 justify-center items-center">
        <p className="text-center">Aguarde...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg- flex justify-center">
        <div className="h-full w-full mx-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <LoadingScreen />
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 mx-w-[1100] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>

            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                />

                <div className="leading-relaxed">
                  <span className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </span>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <Links />
        </div>

        <ResourcesDownload />

        <Footer />
      </div>
    </div>
  );
};
