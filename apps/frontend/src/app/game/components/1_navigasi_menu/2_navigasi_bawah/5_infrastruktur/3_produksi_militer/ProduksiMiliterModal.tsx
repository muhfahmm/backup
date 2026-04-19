'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Swords } from 'lucide-react';

export default function ProduksiMiliterModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Produksi Militer" 
      protocol="Defense Industry"
      icon={Swords}
      colorClass="text-red-500"
      borderColorClass="border-red-500/30"
    />
  );
}
