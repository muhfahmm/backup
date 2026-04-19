'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Tag } from 'lucide-react';

export default function HargaModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Kontrol Harga" 
      protocol="Price Stabilization"
      icon={Tag}
      colorClass="text-zinc-400"
      borderColorClass="border-zinc-400/30"
    />
  );
}
