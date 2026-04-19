'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { ArrowRightLeft } from 'lucide-react';

export default function PerdaganganModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Perdagangan" 
      protocol="Global Trade Route"
      icon={ArrowRightLeft}
      colorClass="text-emerald-400"
      borderColorClass="border-emerald-400/30"
    />
  );
}
