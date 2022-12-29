import { LogoRocket } from '../LogoRocket';

export const Footer = () => {
  return (
    <footer className="flex items-center pt-8 mt-20 border-t-2 border-gray-600">
      <LogoRocket />

      <div className="flex flex-1 ml-6 justify-between">
        <p>Rocketseat - Todos os direitos reservados</p>
        <span>Políticas de privacidade</span>
      </div>
    </footer>
  );
};
