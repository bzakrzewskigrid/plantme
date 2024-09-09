import { ReactNode } from 'react';

interface INavListItem {
  hasSeparator?: boolean;
  children: ReactNode;
}

export const NavListItem = ({ children, hasSeparator = true }: INavListItem) => {
  return (
    <li className={`relative ${hasSeparator && "before:content-['|'] before:-left-4 before:absolute"}`}>{children}</li>
  );
};
