import React, { useState } from 'react';
import Router from 'next/router';
import MenuItem from '../../components/atoms/MenuItem';

export const menuList: string[] = ['Home', 'Study', 'Github', 'Test', 'Etc'];

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
            if (el === 'Home') Router.push({ pathname: '../home' });
            else if (el === 'Study') Router.push({ pathname: '../study' });
            else if (el === 'Github') Router.push({ pathname: '../github' });
            else if (el === 'Test') Router.push({ pathname: '../test' });
            else if (el === 'Etc') Router.push({ pathname: '../etc' });
            else Router.push({ pathname: '../home' });
          }}
        >
          {el}
        </MenuItem>
      ))}
    </>
  );
};

export default MainMenu;
