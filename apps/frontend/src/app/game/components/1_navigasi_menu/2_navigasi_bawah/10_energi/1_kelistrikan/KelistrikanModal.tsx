'use client';

import React from 'react';
import UnderDevelopmentTemplate from '../../UnderDevelopmentTemplate';
import { Bolt } from 'lucide-react';

export default function KelistrikanModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <UnderDevelopmentTemplate 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Grid Nasional" 
      protocol="Power Management"
      icon={Bolt}
      colorClass="text-yellow-500"
      borderColorClass="border-yellow-500/30"
    />
  );
}
