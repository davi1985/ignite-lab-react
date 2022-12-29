import { ReactNode } from 'react';

type LinkProps = {
  type: 'primary' | 'secondary';
  href: string;
  icon: ReactNode;
  label: string;
};

export const Link = ({ type, href, icon, label }: LinkProps) => {
  const stylesType = {
    primary:
      'p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors',
    secondary:
      'p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors',
  };

  return (
    <a href={href} className={stylesType[type]}>
      {icon}
      {label}
    </a>
  );
};
