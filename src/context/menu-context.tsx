'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type MenuContextType = {
  showMenu: boolean;
  revealMenu: () => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [showMenu, setShowMenu] = useState(false);

  const revealMenu = () => {
    setShowMenu(true);
  };

  return (
    <MenuContext.Provider value={{ showMenu, revealMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
