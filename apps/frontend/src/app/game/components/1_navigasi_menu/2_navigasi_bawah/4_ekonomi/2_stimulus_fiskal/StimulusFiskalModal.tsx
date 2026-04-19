'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Zap } from 'lucide-react';

export default function StimulusFiskalModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Stimulus Fiskal" 
      protocol="Macroeconomic Recovery"
      icon={Zap}
      colorClass="text-yellow-400"
      borderColorClass="border-yellow-400/30"
    />
  );
}
