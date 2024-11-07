import { PageTitle, ThemeBox } from "..";

export const HeaderToolbar = () => {
  return (
    <div className="w-[calc(100%-265px)] px-8 flex items-center justify-between dark:bg-dark_custom-light-black">
      <PageTitle />
      <ThemeBox />
    </div>
  );
};
