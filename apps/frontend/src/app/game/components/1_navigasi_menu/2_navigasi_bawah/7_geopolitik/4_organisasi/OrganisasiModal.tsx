'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Landmark } from 'lucide-react';

export default function OrganisasiModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Organisasi Internasional" 
      protocol="Supranational Relations"
      icon={Landmark}
      colorClass="text-zinc-500"
      borderColorClass="border-zinc-500/30"
    />
  );
}
