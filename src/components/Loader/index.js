import React from 'react';
import { RingSpinner } from 'react-spinners-kit';

export default function Loader() {
  return (
  <div className="d-flex justify-content-center align-items-center mt-5">
    <RingSpinner size={400} color="#1FA5A3"/>
  </div>
  );
}
