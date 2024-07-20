import { HeaderFooterCommon } from './header-footer-common';

export const Header = () => {
  return (
    <header className="bg-blue-500 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 p-4 sm:px-center-screen w-full sticky top-0 z-10">
      <HeaderFooterCommon />
    </header>
  );
};
