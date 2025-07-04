import { ROUTES } from "@/constants/routes";

export const getMixPanelEventUrl = () => {
  const pathname = window.location.pathname;
  return Object.values(ROUTES).includes(pathname) ? pathname : ROUTES.NOT_FOUND;
};
