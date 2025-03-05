import React, { HTMLAttributes, useCallback } from 'react';
import block from 'bem-cn';
import ReactDOM from 'react-dom';

import './Modal.scss';

interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClose?: () => void;
}

const b = block('modal');

const Modal = ({ onClose, children, ...restProps }: IModalProps) => {
  const stop = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const content = (
    <div className={b()} onMouseDown={handleClose}>
      <div
        {...restProps}
        className={b('content-container')}
        onMouseDown={stop}
        onMouseUp={stop}
        onClick={stop}
      >
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-root') as HTMLElement);
};

export default Modal;
