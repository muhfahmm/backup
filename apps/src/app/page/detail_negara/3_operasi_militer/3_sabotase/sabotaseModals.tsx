"use client";
import React from "react";

interface SabotaseModalProps {
	isOpen: boolean;
	countryName?: string | null;
	onClose: () => void;
	onConfirm: () => void;
}

export default function SabotaseModal({ isOpen, countryName, onClose, onConfirm }: SabotaseModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<div className="w-[420px] bg-white rounded-2xl p-6 shadow-lg border border-[#E5DCCF]">
				<h3 className="text-lg font-black text-[#3d2911] mb-3">Konfirmasi Sabotase</h3>
				<p className="text-sm text-[#5c3c10] mb-6">Lakukan tindakan sabotase terhadap <strong>{countryName}</strong>? Ini adalah operasi rahasia yang berbahaya.</p>

				<div className="flex gap-3 justify-end">
					<button onClick={onClose} className="flex-1 bg-white/70 border border-[#C4B49C]/30 rounded py-2.5 text-center text-[#5c3c10] font-black text-[12px] tracking-widest uppercase">Batal</button>
					<button onClick={() => { onConfirm(); onClose(); }} className="flex-1 bg-red-600 hover:bg-red-700 border border-red-700 rounded py-2.5 text-white font-black text-[12px] tracking-widest uppercase">Lakukan</button>
				</div>
			</div>
		</div>
	);
}

