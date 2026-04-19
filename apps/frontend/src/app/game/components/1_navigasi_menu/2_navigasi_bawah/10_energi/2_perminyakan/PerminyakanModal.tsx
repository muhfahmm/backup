'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Droplet } from 'lucide-react';

export default function PerminyakanModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Sektor Perminyakan" 
      protocol="Petrochemical Control"
      icon={Droplet}
      colorClass="text-zinc-300"
      borderColorClass="border-zinc-300/30"
    />
  );
}
