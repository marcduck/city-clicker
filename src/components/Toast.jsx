import React, { useRef, useEffect } from 'react'
import { bounceInAndOut } from '../utils/animations'

function Toast({setShowToast, showToast, toastMessage}) {

    const toastRef = useRef(null)

    bounceInAndOut(showToast, toastRef)
      
    
  return (
    <div ref={toastRef} id="toast-success" style={{visibility: 'hidden'}} className="flex items-center w-full max-w-xs p-4 mb-4 text-slate-500 bg-white rounded-lg shadow dark:text-slate-400 dark:bg-slate-800 fixed bottom-0 left-5 invisible" role="alert">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm">{toastMessage}</div>
        <button 
            type="button" 
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-slate-400 hover:text-slate-900 rounded-lg focus:ring-2 focus:ring-slate-300 p-1.5 hover:bg-slate-100 inline-flex h-8 w-8 dark:text-slate-500 dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700" 
            // data-dismiss-target="#toast-success" 
            onClick={() => setShowToast(false)}
            aria-label="Close">
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>
  )
}

export default Toast