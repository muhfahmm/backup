'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Radiation } from 'lucide-react';

export default function UraniumModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Sektor Uranium" 
      protocol="Nuclear Control"
      icon={Radiation}
      colorClass="text-lime-400"
      borderColorClass="border-lime-400/30"
    />
  );
}
