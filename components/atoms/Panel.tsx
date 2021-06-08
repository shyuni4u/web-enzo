import React, { forwardRef } from 'react';
import styled from 'styled-components';

type MPanelProps = React.HTMLAttributes<HTMLDivElement>;
export type PanelProps = React.DetailedHTMLProps<MPanelProps, HTMLDivElement>;

const StyledPanel = styled.div`
  display: flex;
  flex: 1 1 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.grayC};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  width: calc(100% - 20px);
  height: 100%;
  padding: 30px;
  margin: 0px 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & h2.panel-title {
    font-size: ${({ theme }) => theme.fontSizes.f36};
    color: ${({ theme }) => theme.colors.black};
    line-height: 1.5;
    font-family: Semplicita Pro, Open Sans, Arial, Helvetica, sans-serif;
    font-weight: 700;
  }

  & h3.panel-sub-title {
    font-size: ${({ theme }) => theme.fontSizes.f24};
    line-height: 1.5;
    font-family: Open Sans, Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  & div.panel-content {
    font-size: ${({ theme }) => theme.fontSizes.f14};
    line-height: 1.5;
    font-family: Open Sans, Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.gray8};
    font-weight: 400;
    margin: 13px auto 10px;
    overflow: hidden;
  }
`;
const StyledPanelBox = styled.div`
  position: static;
  top: 0;
  bottom: 0;
  right: 10%;
  left: 10%;
`;
const StyledPanelContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  /* max-width: 1600px; */
  position: relative;
  top: 0;
  -webkit-transform: none;
  transform: none;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.content};
  z-index: 0;
`;

export const Panel = forwardRef((props: PanelProps, ref: React.Ref<HTMLDivElement>) => {
  return (
    <StyledPanel {...props} ref={ref}>
      <StyledPanelBox>
        <StyledPanelContent>{props.children}</StyledPanelContent>
      </StyledPanelBox>
    </StyledPanel>
  );
});

export default Panel;
