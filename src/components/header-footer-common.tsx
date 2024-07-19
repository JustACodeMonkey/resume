import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon, MobileIcon } from '@radix-ui/react-icons';

export const HeaderFooterCommon = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col gap-2 w-full">
        <div className="text-5xl">
          <span className="text-white">Greg </span>
          <span className="text-lime-300">Yantz</span>
        </div>
        <span className="text-white text-sm">Senior Developer / Director of Software Development</span>
      </div>
      <div className="absolute top-0 right-0 grid grid-cols-2 gap-3">
        <a href="tel:+19059013075"><MobileIcon className="text-white w-5 h-5" /></a>
        <a href="mailto:greg.yantz@gmail.com"><EnvelopeOpenIcon className="text-white w-5 h-5" /></a>
        <a href="https://www.linkedin.com/in/greg-yantz/"><LinkedInLogoIcon className="text-white w-5 h-5" /></a>
        <a href="https://github.com/JustACodeMonkey"><GitHubLogoIcon className="text-white w-5 h-5" /></a>
      </div>
    </div>
  );
};
