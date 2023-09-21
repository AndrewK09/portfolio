import { SocialIcon } from 'react-social-icons';

const SocialIconWrap = ({ url }: { url: string }) => {
  return (
    <SocialIcon
      url={url}
      fgColor="currentColor"
      bgColor="transparent"
      target="_blank"
      className="text-slate-400 hover:text-white"
    />
  );
};

export default SocialIconWrap;
