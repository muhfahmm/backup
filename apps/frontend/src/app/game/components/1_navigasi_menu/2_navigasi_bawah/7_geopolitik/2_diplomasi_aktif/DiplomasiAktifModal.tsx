'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Handshake } from 'lucide-react';

export default function DiplomasiAktifModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Diplomasi Aktif" 
      protocol="International Relations"
      icon={Handshake}
      colorClass="text-blue-400"
      borderColorClass="border-blue-400/30"
    />
  );
}
