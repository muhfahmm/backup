'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Landmark } from 'lucide-react';

export default function PemerintahanPusatModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Pemerintahan Pusat" 
      protocol="Executive Branch"
      icon={Landmark}
      colorClass="text-purple-400"
      borderColorClass="border-purple-400/30"
    />
  );
}
