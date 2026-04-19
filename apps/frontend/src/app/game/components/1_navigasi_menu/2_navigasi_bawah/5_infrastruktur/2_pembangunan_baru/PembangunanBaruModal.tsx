'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Home } from 'lucide-react';

export default function PembangunanBaruModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Pembangunan Baru" 
      protocol="Urban Development"
      icon={Home}
      colorClass="text-emerald-400"
      borderColorClass="border-emerald-400/30"
    />
  );
}
