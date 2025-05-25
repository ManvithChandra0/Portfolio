import React from 'react';
import CertificationBox from './CertificationBox';
import Cert1 from '../images/Cert1.png';
import Cert2 from '../images/Cert2.png';
import Cert3 from '../images/Cert3.png';
import Cert4 from '../images/Cert4.png';


const Certifications = () => {
  return (
    <div>
      <h1 className='certificationHeading'>My <b>Certifications</b></h1>
      <div className='certification'>
        <CertificationBox 
          certificationPhoto={Cert1} 
          certificationName="AWS Certified Cloud Practitioner" 
          certificationLink="https://cp.certmetrics.com/amazon/en/public/verify/credential/KVW2ZJ61W1V1QVCN"
        />
        <CertificationBox 
          certificationPhoto={Cert2} 
          certificationName=" EX183 : Red Hat Certified Enterprise Application Developer" 
          certificationLink="https://rhtapps.redhat.com/verify?certId=230-170-102"
        />
        {/* 
        <CertificationBox 
          certificationPhoto={Cert3} 
          certificationName="Microsoft Certified: Azure AI Fundamentals" 
          certificationLink="https://www.credly.com/badges/86662bf8-b091-4755-8c94-a2a4613efd3d"
        /> 
        <CertificationBox 
          certificationPhoto={Cert4} 
          certificationName="Microsoft Certified: Azure Fundamentals" 
          certificationLink="https://www.credly.com/earner/earned/badge/355b4d46-bb45-4b3b-be78-262a3ce6465e"
        /> 
        */}
      </div>
    </div>
  );
}

export default Certifications;
