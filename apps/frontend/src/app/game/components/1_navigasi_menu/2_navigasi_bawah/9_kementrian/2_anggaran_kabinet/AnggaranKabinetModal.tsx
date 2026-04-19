'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Wallet } from 'lucide-react';

export default function AnggaranKabinetModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Anggaran Kabinet" 
      protocol="Budgetary & Finance"
      icon={Wallet}
      colorClass="text-emerald-400"
      borderColorClass="border-emerald-400/30"
    />
  );
}
