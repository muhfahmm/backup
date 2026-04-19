'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Globe } from 'lucide-react';

export default function PengaruhGlobalModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Pengaruh Global" 
      protocol="Geopolitical Strategy"
      icon={Globe}
      colorClass="text-cyan-500"
      borderColorClass="border-cyan-500/30"
    />
  );
}
