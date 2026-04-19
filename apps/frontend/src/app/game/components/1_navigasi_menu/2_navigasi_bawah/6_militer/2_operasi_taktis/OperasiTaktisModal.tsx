'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Swords } from 'lucide-react';

export default function OperasiTaktisModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Operasi Taktis" 
      protocol="Military Command"
      icon={Swords}
      colorClass="text-red-600"
      borderColorClass="border-red-600/30"
    />
  );
}
