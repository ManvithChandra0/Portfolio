import React from 'react';

const CertificationBox = ({ certificationPhoto, certificationName, certificationLink }) => {
  return (
    <div className='certificationBox'>
      <img className='certificationPhoto' src={certificationPhoto} alt="Certification display" />
      <div>
        <br />
        <h3>{certificationName}</h3>
        <br />
        <a href={certificationLink} target='_blank' rel='noopener noreferrer'>
          <button className='certificationbtn'>View Certification</button>
        </a>
      </div>
    </div>
  );
}

export default CertificationBox;
