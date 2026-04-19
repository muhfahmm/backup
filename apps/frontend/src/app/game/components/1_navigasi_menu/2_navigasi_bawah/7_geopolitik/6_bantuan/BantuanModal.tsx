'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { HandHelping } from 'lucide-react';

export default function BantuanModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Bantuan Luar Negeri" 
      protocol="Foreign Aid Protocol"
      icon={HandHelping}
      colorClass="text-emerald-400"
      borderColorClass="border-emerald-400/30"
    />
  );
}
