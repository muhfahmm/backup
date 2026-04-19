'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Shield } from 'lucide-react';

export default function KekuatanPatroliModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Kekuatan Patroli" 
      protocol="Defense & Security"
      icon={Shield}
      colorClass="text-indigo-400"
      borderColorClass="border-indigo-400/30"
    />
  );
}
