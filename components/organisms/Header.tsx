import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import styled, { css, keyframes } from 'styled-components';
import { BsGear, BsJustify, BsX } from 'react-icons/bs';

import Button from '../atoms/Button';
import MainMenu from './MainMenu';
// import ModnnConfig from '../../lib/setting.json';

export type HeaderProps = {
  /**
   * Menu (for Breadcrumbs).
   */
  paramMenu?: string;
};

const StyledHeader = styled.header`
  ${({ theme }) => {
    return css`
      display: block;
    `;
  }}
`;
const StyledNav = styled.nav`
  ${({ theme }) => {
    return css`
      position: fixed !important;
      display: flex;
      flex-direction: row !important;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      /* background: 0 0 !important; */
      background-color: ${theme.colors.white};
      border-bottom: 2px solid ${theme.colors.grayE};
      transition: 0.3s;
      top: 0;
      width: 100%;
      min-height: 60px;
      margin: 0;
      padding: 0 30px;
      z-index: 32;
      /* box-shadow: 1px 1px 5px 1px rgb(0 0 0 / 10%); */
    `;
  }}
`;
const StyledLogo = styled.a`
  ${({ theme }) => {
    return css`
      position: absolute;
      top: 10px;
      left: 30px;
      width: 90px;
      height: 22px;
      /* background-image: url('/img/logo-black.svg');
      background-repeat: no-repeat;
      background-size: contain; */
      font-style: italic;
      font-weight: 600;
      font-size: ${theme.fontSizes.f24};
      text-decoration: none;

      ${theme.media.mobile`${`
        left: auto;
      `}`}
      ${theme.media.tablet`${`
        left: auto;
      `}`}
    `;
  }}
`;
const StyledMenus = styled.div`
  ${({ theme }) => {
    return css`
      margin: auto !important;
      display: block;
      overflow: visible !important;
    `;
  }}
`;
const StyledBackground = styled.div`
  ${({ theme }) => {
    return css`
      height: ${theme.layoutSize.headerHeight};
      background-color: ${theme.colors.black};
    `;
  }}
`;
const StyledUser = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      color: ${theme.colors.black};
      cursor: pointer;
      & > button {
        margin-right: 5px;
        & > svg {
          vertical-align: middle;
        }
      }
    `;
  }}
`;

const StyledNavSmall = styled.nav`
  ${({ theme }) => {
    return css`
      position: fixed !important;
      display: flex;
      flex-direction: row !important;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      /* background: 0 0 !important; */
      background-color: ${theme.colors.white};
      border-bottom: 1px solid ${theme.colors.grayE};
      transition: 0.3s;
      top: 0;
      width: 100%;
      min-height: 60px;
      margin: 0;
      padding: 0 ${theme.layoutSize.mobilePadding};
      z-index: 32;
    `;
  }}
`;
const StyledMenuSmall = styled.div`
  ${({ theme }) => {
    return css`
      position: fixed;
      left: ${theme.layoutSize.mobilePadding};
      display: block;
      overflow: visible !important;
    `;
  }}
`;
const StyledMenuButtonSmall = styled.button`
  ${({ theme }) => {
    return css`
      height: 30px;
      width: 30px;
      padding: 5px;
      font-size: ${theme.fontSizes.f24};
      user-select: none;
      cursor: pointer;
    `;
  }}
`;
const StyledMenuModalCloseSmall = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      color: ${theme.colors.grayA};
      font-weight: 400;
      height: 40px;
      width: 100%;
      padding: 4px ${theme.layoutSize.mobilePadding};
      user-select: none;
      cursor: pointer;
    `;
  }}
`;
const keyframesMenuShow = keyframes`
  0% { left: -100vw }
  100% { left: 0 }
`;
type StyledMenuModalSmallProps = {
  show: boolean;
};
const StyledMenuModalSmall = styled.div<StyledMenuModalSmallProps>`
  ${({ theme, show }) => {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      display: ${show ? 'block' : 'none'};
      width: calc(100vw - 10px);
      height: 100vh;
      background-color: ${theme.colors.white};
      box-shadow: 4px 0px 10px 0px ${theme.colors.gray8};
      animation: ${keyframesMenuShow} 0.2s ease;
    `;
  }}
`;

export const Header: React.FC<HeaderProps> = ({ paramMenu = undefined }) => {
  const { isAuthenticated, user, loginWithPopup, logout, getAccessTokenSilently, getIdTokenClaims } = useAuth0();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    console.log(getAccessTokenSilently());
    console.log(getIdTokenClaims());
  }, [isAuthenticated]);

  return (
    <StyledHeader>
      <StyledNavSmall className={'col-md-0 col-lg-0 col-xl-0'}>
        <StyledLogo>Enzo</StyledLogo>
        <StyledMenuSmall>
          <StyledMenuButtonSmall type={'button'} onClick={() => setShowMenu(true)}>
            <BsJustify />
          </StyledMenuButtonSmall>
        </StyledMenuSmall>
        <StyledMenuModalSmall show={showMenu}>
          <StyledMenuModalCloseSmall onClick={() => setShowMenu(false)}>
            <BsX /> 닫기
          </StyledMenuModalCloseSmall>
          <hr />
          <MainMenu paramMenu={paramMenu} />
          <hr />
          <StyledUser style={{ paddingLeft: '15px' }}>
            {isAuthenticated ? (
              <Button size={'small'} onClick={() => logout()}>
                {user.name}
              </Button>
            ) : (
              <Button size={'small'} onClick={() => loginWithPopup()}>
                <BsGear /> Login
              </Button>
            )}
          </StyledUser>
        </StyledMenuModalSmall>
      </StyledNavSmall>
      <StyledNav className={'col-sm-0'}>
        <StyledLogo>Enzo</StyledLogo>
        <StyledMenus>
          <MainMenu paramMenu={paramMenu} />
        </StyledMenus>
        <StyledUser>
          {isAuthenticated ? (
            <Button size={'small'} onClick={() => logout()}>
              {user.name}
            </Button>
          ) : (
            <Button size={'small'} onClick={() => loginWithPopup()}>
              <BsGear /> Login
            </Button>
          )}
        </StyledUser>
      </StyledNav>
      <StyledBackground />
    </StyledHeader>
  );
};

export default Header;
