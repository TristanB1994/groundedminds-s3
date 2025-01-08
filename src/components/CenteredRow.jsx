import React from 'react';

const CenteredRow = ({ children }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
          {children}
      </div>
    );
}

export default CenteredRow;