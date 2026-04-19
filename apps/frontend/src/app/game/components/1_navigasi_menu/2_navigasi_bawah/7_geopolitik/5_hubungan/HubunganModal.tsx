'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { HeartHandshake } from 'lucide-react';

export default function HubunganModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Tingkat Hubungan" 
      protocol="Diplomatic Affinity"
      icon={HeartHandshake}
      colorClass="text-red-400"
      borderColorClass="border-red-400/30"
    />
  );
}
