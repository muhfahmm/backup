'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Eye } from 'lucide-react';

export default function IntelijenModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Intelijen Pusat" 
      protocol="National Intelligence"
      icon={Eye}
      colorClass="text-zinc-500"
      borderColorClass="border-zinc-500/30"
    />
  );
}
