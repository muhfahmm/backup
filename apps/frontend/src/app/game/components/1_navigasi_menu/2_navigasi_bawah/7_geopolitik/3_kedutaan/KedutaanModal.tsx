'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Landmark } from 'lucide-react';

export default function KedutaanModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Kedutaan & Konsulat" 
      protocol="Foreign Representation"
      icon={Landmark}
      colorClass="text-zinc-400"
      borderColorClass="border-zinc-400/30"
    />
  );
}
