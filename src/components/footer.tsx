import Image from 'next/image';
import { HeaderFooterCommon } from './header-footer-common';

export const Footer = () => {
  return (
    <footer className="bg-blue-950 flex flex-col p-4 sm:px-center-screen w-full text-xs min-h-52">
      <HeaderFooterCommon />
      <div className="flex felx-row justify-center items-end gap-2 mt-16 w-full text-white">
        <span>Built with</span>
        <a href="https://nextjs.org" target="_blank" referrerPolicy="no-referrer" title="NextJS">
          <Image
            src="/nextjs-logo.svg"
            height={18}
            width={90}
            alt="NextJS logo"
            className="mb-[3px]"
          />
        </a>
        <span>and</span>
        <a href="https://neon.tech" target="_blank" referrerPolicy="no-referrer" title="Neon">
          <Image
            src="/neon-logo.svg"
            height={19}
            width={66}
            alt="Neon Tech logo"
            className="mb-[3px]"
          />
        </a>
      </div>
      <div className="flex flex-row justify-center">
        <Image
          src="/android-chrome-512x512.png"
          className="mt-4 rounded-full"
          width={64}
          height={64}
          alt="JustACodeMonkey logo"
        />
      </div>
      <p className="text-center text-white mt-4">&copy; 2024</p>
    </footer>
  );
};
