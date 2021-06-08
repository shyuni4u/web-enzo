import React, { useState } from 'react';
import Router from 'next/router';
import MenuItem from '../../components/atoms/MenuItem';

export const menuList: string[] = ['Intro', 'Big 5'];

export type MainMenuProps = {
  /**
   * Menu (for Breadcrumbs).
   */
  paramMenu?: string;
};

export const MainMenu: React.FC<MainMenuProps> = ({ paramMenu = '' }) => {
  const [menu, setMenu] = useState<string>(paramMenu);

  return (
    <>
      {menuList.map((el, elIdx) => (
        <MenuItem
          key={elIdx}
          active={menu === el}
          onClick={() => {
            setMenu(el);
            if (el === 'Intro') {
              Router.push({ pathname: '../intro' });
            }
            if (el === 'Big 5') {
              Router.push({ pathname: '../big5' });
            }
          }}
        >
          {el}
        </MenuItem>
      ))}
    </>
  );
};

export default MainMenu;
