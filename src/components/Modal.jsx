import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal, isModalOpen  }) => {

  useEffect(() => {
    const close = (e) => {
      if(e.key === 'Escape'){
        closeModal()
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
  },[])

  return (
    <>
      {isModalOpen && (
        <div 
          onClick={closeModal} 
          className={`fixed top-0 left-0 w-full h-full
            bg-black bg-opacity-50 flex items-center justify-center
          `}>
          <div 
            onClick={e => e.stopPropagation()} 
            className={` m-4
              relative bg-slate-100 border border-slate-400 
              p-4 `}
          >
            {modalContent}
            <button className='absolute top-1 right-2' onClick={closeModal}>✖</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;