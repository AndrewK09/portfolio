import { SocialIcon } from 'react-social-icons';

const SocialIconWrap = ({ url }: { url: string }) => {
  return <SocialIcon url={url} fgColor="white" bgColor="transparent" />;
};

export default SocialIconWrap;
