'use client';

import { NavLinkType } from '@/lib/data';
import React, { useState, createContext } from 'react';

interface ActiveSectionContextProps {
  children: React.ReactNode;
}

type ActiveSectionContextType = {
  activeSection: NavLinkType;
  setActiveSection: React.Dispatch<React.SetStateAction<NavLinkType>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProps) => {
  const [activeSection, setActiveSection] = useState<NavLinkType>(
    NavLinkType.ABOUT
  );

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
