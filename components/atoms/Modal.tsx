import React, { useEffect, useState, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import styled, { css, keyframes } from 'styled-components';

type MModalProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Show / Hide
   */
  show?: boolean;
  /**
   * Title.
   */
  title?: string;
  /**
   * Close function
   */
  onClose: () => void;
};
export type ModalProps = React.DetailedHTMLProps<MModalProps, HTMLDivElement>;

type ModalShowProps = {
  show: boolean;
};

const StyledModalBackground = styled.div<ModalShowProps>`
  display: ${(prop) => (prop.show ? 'inherit' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.8;
  z-index: 2048;
`;
const modalFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const StyledModal = styled.div<ModalShowProps>`
  display: ${(prop) => (prop.show ? 'inherit' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  max-width: 800px;
  max-height: 95vh;
  padding: 40px 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: auto;
  animation: ${modalFade} 0.8s;
  z-index: 4096;
  :before {
    content: '';
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
const StyledModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const StyledModalTitle = styled.div`
  position: absolute;
  top: -1.2rem;
  left: 0;
  font-size: ${({ theme }) => theme.fontSizes.f18};
`;
const StyledModalClose = styled.button.attrs({
  type: 'button'
})`
  position: absolute;
  /* display: flex;
  align-items: center; */
  top: -1.2rem;
  right: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  & > span {
    transition: 0.2s;
  }
`;
type StyledModalBodyProps = {
  hasTitle: boolean;
};
const StyledModalBody = styled.div<StyledModalBodyProps>`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  /* ${(prop) =>
    prop.hasTitle
      ? css`
          padding-top: 50px;
        `
      : undefined}; */
`;

export const Modal = forwardRef((props: ModalProps, ref: React.Ref<HTMLDivElement>) => {
  const show = props.show || false;
  const title = props.title || '';
  const onClose = props.onClose;

  const [container, setContainer] = useState<any>(undefined);

  useEffect(() => {
    const _ctn = document.createElement('div');
    document.body.appendChild(_ctn);
    setContainer(_ctn);
    return () => {
      document.body.removeChild(_ctn);
    };
  }, []);

  useEffect(() => {
    if (show) {
      const body = document.body;
      body.style.height = '100vh';
      body.style.overflowY = 'hidden';
    } else {
      const body = document.body;
      body.style.position = '';
      body.style.top = '';
      body.style.height = '';
      body.style.overflowY = '';
    }
  }, [show]);

  if (container) {
    return ReactDOM.createPortal(
      <>
        <StyledModalBackground show={show} onClick={() => onClose()}></StyledModalBackground>
        <StyledModal show={show} {...props} ref={ref}>
          <StyledModalContent>
            {title !== '' && <StyledModalTitle>{title}</StyledModalTitle>}
            <StyledModalClose onClick={() => onClose()}>
              <span>
                <img src="/img/close.svg" alt="닫기버튼" />
              </span>
            </StyledModalClose>
            <StyledModalBody hasTitle={title !== ''}>{props.children}</StyledModalBody>
          </StyledModalContent>
        </StyledModal>
      </>,
      container
    );
  } else {
    return <></>;
  }
});

export default Modal;
