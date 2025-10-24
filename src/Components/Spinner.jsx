import React from 'react';

const Spinner = () => {
    return (
    <div className="flex justify-center items-center h-100">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
    </div>
  )
}

export default Spinner;
