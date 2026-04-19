'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Shield } from 'lucide-react';

export default function ManajemenPertahananModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Manajemen Pertahanan" 
      protocol="Defense Administration"
      icon={Shield}
      colorClass="text-zinc-400"
      borderColorClass="border-zinc-400/30"
    />
  );
}
