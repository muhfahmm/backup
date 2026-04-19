'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { FileText } from 'lucide-react';

export default function LaporanEkonomiModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Laporan Ekonomi" 
      protocol="Financial Analysis"
      icon={FileText}
      colorClass="text-cyan-400"
      borderColorClass="border-cyan-400/30"
    />
  );
}
