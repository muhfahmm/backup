'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { ShieldAlert } from 'lucide-react';

export default function ArmadaPolisiModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Armada Polisi" 
      protocol="Internal Order"
      icon={ShieldAlert}
      colorClass="text-blue-500"
      borderColorClass="border-blue-500/30"
    />
  );
}
