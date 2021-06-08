import React, { useEffect, useState, HTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';

export type PopoverProps = {
  /**
   * Show / Hide
   */
  show?: boolean;
  /**
   * Target element.
   */
  target?: HTMLElement;
  /**
   * Close function
   */
  placement?: 'left' | 'top' | 'right' | 'bottom';
};

export const Popover: React.FC<PopoverProps> = ({
  show = false,
  target = undefined,
  placement = 'bottom',
  children
}) => {
  if (target) {
    console.log(target.offsetTop);
    console.log(target.offsetHeight);

    return <div style={{ display: show ? 'inherit' : 'none' }}>{children}</div>;
  } else {
    return <></>;
  }
};

export default Popover;
