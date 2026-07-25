"use client";
import React from "react";

interface DukungKemerdekaanModalProps {
	isOpen: boolean;
	countryName?: string | null;
	onClose: () => void;
	onConfirm: () => void;
}

export default function DukungKemerdekaanModal({ isOpen, countryName, onClose, onConfirm }: DukungKemerdekaanModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<div className="w-[420px] bg-white rounded-2xl p-6 shadow-lg border border-[#E5DCCF]">
				<h3 className="text-lg font-black text-[#3d2911] mb-3">Konfirmasi Dukung Kemerdekaan</h3>
				<p className="text-sm text-[#5c3c10] mb-6">Dukung gerakan kemerdekaan di <strong>{countryName}</strong>? Tindakan ini dapat memicu ketegangan diplomatik.</p>

				<div className="flex gap-3 justify-end">
					<button onClick={onClose} className="flex-1 bg-white/70 border border-[#C4B49C]/30 rounded py-2.5 text-center text-[#5c3c10] font-black text-[12px] tracking-widest uppercase">Batal</button>
					<button onClick={() => { onConfirm(); onClose(); }} className="flex-1 bg-amber-600 hover:bg-amber-700 border border-amber-700 rounded py-2.5 text-white font-black text-[12px] tracking-widest uppercase">Dukung</button>
				</div>
			</div>
		</div>
	);
}

