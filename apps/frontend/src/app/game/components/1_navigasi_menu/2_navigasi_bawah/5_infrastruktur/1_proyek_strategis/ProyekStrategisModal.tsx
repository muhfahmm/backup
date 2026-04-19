'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Hammer } from 'lucide-react';

export default function ProyekStrategisModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Proyek Strategis" 
      protocol="Bureau of Infrastructure"
      icon={Hammer}
      colorClass="text-zinc-400"
      borderColorClass="border-zinc-400/30"
    />
  );
}
