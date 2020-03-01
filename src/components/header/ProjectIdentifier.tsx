import React from 'react';
import Link from 'next/link';
import { Logo } from '../logo';

export const ProjectIdentifier: React.FC = () => {
  return (
    <Link href="/">
      <a
        style={{
          alignItems: 'center',
          color: '#000',
          display: 'flex',
          textDecoration: 'none',
        }}
      >
        <div style={{ display: 'flex', marginRight: 4 }}>
          <Logo height={32} width={32} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 600 }}>Color lab</div>
      </a>
    </Link>
  );
};
