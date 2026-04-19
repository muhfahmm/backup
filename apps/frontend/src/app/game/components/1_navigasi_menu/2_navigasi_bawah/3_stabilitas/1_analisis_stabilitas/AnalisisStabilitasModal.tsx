'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Activity } from 'lucide-react';

export default function AnalisisStabilitasModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Analisis Stabilitas" 
      protocol="Internal Security Audit"
      icon={Activity}
      colorClass="text-red-400"
      borderColorClass="border-red-400/30"
    />
  );
}
