import React from 'react';

interface ChildProps {
  myRef: React.RefObject<HTMLDivElement>;
}

const Company: React.FC<ChildProps> = ({ myRef }) => {
  return (
    <div ref={myRef} className="active_company ">
      <div className="active_card_container">
        <p>History</p>
        <p>Our Team</p>
        <p>Blog</p>
      </div>
    </div>
  );
};

export default Company;
