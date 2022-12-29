import { DiscordLogo, Lightning } from 'phosphor-react';
import { Link } from '../Link';

export const Links = () => (
  <div className="flex flex-col gap-4">
    <Link
      type="primary"
      href="#"
      icon={<DiscordLogo size={24} />}
      label={'Comunidade do Discord'}
    />

    <Link
      type="secondary"
      href="#"
      icon={<Lightning size={24} />}
      label={'Acessar o desafio'}
    />
  </div>
);
