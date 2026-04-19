'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Star } from 'lucide-react';

export default function AgamaModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Agama & Kepercayaan" 
      protocol="Bureau of Religion"
      icon={Star}
      colorClass="text-yellow-500"
      borderColorClass="border-yellow-500/30"
    />
  );
}
