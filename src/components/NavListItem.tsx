import { ReactNode } from 'react';

interface INavListItem {
  children: ReactNode;
  hasSeparator?: boolean;
  className?: string;
}

export const NavListItem = ({ children, hasSeparator = true, className }: INavListItem) => {
  return (
    <li className={`relative ${hasSeparator && "before:content-['|'] before:-left-4 before:absolute"} ${className}`}>
      {children}
    </li>
  );
};
