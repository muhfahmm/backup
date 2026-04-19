'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Gem } from 'lucide-react';

export default function CadanganNasionalModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Cadangan Nasional" 
      protocol="Resources Management"
      icon={Gem}
      colorClass="text-emerald-500"
      borderColorClass="border-emerald-500/30"
    />
  );
}
