'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { ShieldAlert } from 'lucide-react';

export default function IntervensiKeamananModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Intervensi Keamanan" 
      protocol="Tactical Deployment"
      icon={ShieldAlert}
      colorClass="text-orange-500"
      borderColorClass="border-orange-500/30"
    />
  );
}
