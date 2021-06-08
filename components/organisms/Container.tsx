import React from 'react';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: calc(100vh - ${theme.layoutSize.headerHeight});
      margin: 0 auto;
    `;
  }}
`;
const StyledBody = styled.div`
  ${({ theme }) => {
    return css`
      flex-grow: 1;
    `;
  }}
`;
const StyledFlexNowrap = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      min-height: calc(100vh - ${theme.layoutSize.headerHeight} - ${theme.layoutSize.footerHeight});
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap !important;

      ${theme.media.mobile`
        flex-wrap: wrap !important;
      `}
    `;
  }}
`;
const StyledAside = styled.aside`
  ${({ theme }) => {
    return css`
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: ${theme.colors.white};
      border-right: 2px solid ${theme.colors.grayE};
    `;
  }}
`;
const StyledAsideSticky = styled.div`
  ${({ theme }) => {
    return css`
      position: sticky;
      top: ${theme.layoutSize.headerHeight};
    `;
  }}
`;
const StyledMain = styled.main`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-wrap: wrap !important;
    `;
  }}
`;
const StyledFooter = styled.footer`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.f12};
      color: ${theme.colors.grayA};
      background-color: ${theme.colors.white};
      height: ${theme.layoutSize.footerHeight} !important;
      border-top: 1px solid ${theme.colors.grayE};
      text-align: center;
      line-height: ${theme.layoutSize.footerHeight} !important;
    `;
  }}
`;

export const Container: React.FC & { Aside: React.FC<ClassnameProp>; Main: React.FC<ClassnameProp> } = ({
  children
}) => {
  return (
    <StyledContainer>
      <StyledBody>
        <StyledFlexNowrap>{children}</StyledFlexNowrap>
      </StyledBody>
      <StyledFooter>© MOREH : Corp All Rights Reserved.</StyledFooter>
    </StyledContainer>
  );
};
type ClassnameProp = {
  /**
   * For layout design.
   */
  className?: string;
};
const Aside: React.FC<ClassnameProp> = ({
  className = 'col-sm-12 col-md-3 col-lg-2 col-xl-2 d-print-none',
  children
}) => {
  return (
    <StyledAside className={className}>
      <StyledAsideSticky>{children}</StyledAsideSticky>
    </StyledAside>
  );
};
const Main: React.FC<ClassnameProp> = ({ className = 'col-sm-12 col-md-9 col-lg-10 col-xl-10', children }) => {
  return <StyledMain className={className}>{children}</StyledMain>;
};

Container.Aside = Aside;
Container.Main = Main;

export default Container;
