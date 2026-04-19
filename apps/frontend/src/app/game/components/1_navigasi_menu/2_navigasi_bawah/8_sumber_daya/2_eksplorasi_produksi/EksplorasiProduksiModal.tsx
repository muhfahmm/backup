'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Pickaxe } from 'lucide-react';

export default function EksplorasiProduksiModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Eksplorasi & Produksi" 
      protocol="Resources Extraction"
      icon={Pickaxe}
      colorClass="text-orange-400"
      borderColorClass="border-orange-400/30"
    />
  );
}
