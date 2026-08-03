"use client"
import React, { useState } from "react";
import { X, FileText, XCircle } from "lucide-react";

interface KeamananResolusiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, desc: string, proposer: string) => void;
  isUserSecurityCouncilMember: boolean;
  permanentMembers: { iso: string; name: string }[];
  nonPermanentMembers: { iso: string; name: string }[];
}

export default function KeamananResolusiModal({
  isOpen,
  onClose,
  onSubmit,
  isUserSecurityCouncilMember,
  permanentMembers,
  nonPermanentMembers,
}: KeamananResolusiModalProps) {
  // State internal untuk form
  const [newResolusiTitle, setNewResolusiTitle] = useState("");
  const [newResolusiDesc, setNewResolusiDesc] = useState("");
  const [newResolusiProposer, setNewResolusiProposer] = useState("");

  // Reset form saat modal ditutup
  const handleClose = () => {
    setNewResolusiTitle("");
    setNewResolusiDesc("");
    setNewResolusiProposer("");
    onClose();
  };

  const handleSubmit = () => {
    if (!isUserSecurityCouncilMember) return;
    if (!newResolusiTitle || !newResolusiDesc || !newResolusiProposer) {
      alert("Harap isi semua kolom!");
      return;
    }
    onSubmit(newResolusiTitle, newResolusiDesc, newResolusiProposer);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm pointer-events-none">
      {/* 🔥 UKURAN DIPERBESAR: max-w-6xl h-[84vh] flex flex-col */}
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative pointer-events-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />

        {/* 🔥 HEADER (shrink-0) */}
        <div className="flex items-center justify-between px-8 py-6 border-b-2 border-[#C4B49C]/30 bg-[#FAF6EE] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#5c3c10] uppercase tracking-tight">Dewan Keamanan PBB</h3>
              <p className="text-xs text-[#8b7e66] font-bold mt-0.5">
                {isUserSecurityCouncilMember 
                  ? "Usulkan resolusi baru untuk diajukan ke Dewan Keamanan." 
                  : "Akses terbatas untuk negara anggota Dewan Keamanan."}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-black/5 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* 🔥 BODY (flex-1 overflow-y-auto, elemen di tengah) */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 flex flex-col items-center justify-center">
          
          {!isUserSecurityCouncilMember ? (
            // --- TAMPILAN UNTUK BUKAN ANGGOTA ---
            <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-6">
              <div className="p-4 bg-rose-600/10 rounded-full border border-rose-600/20">
                <XCircle className="h-16 w-16 text-rose-600" />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#5c3c10] uppercase tracking-tight">Akses Ditolak</h4>
                <p className="text-sm text-[#8b7e66] font-bold mt-2 max-w-md mx-auto">
                  Hanya Dewan Keamanan yang dapat membuat resolusi.
                </p>
              </div>
              <p className="text-sm text-[#8b7e66] font-medium leading-relaxed max-w-xl">
                Negara Anda saat ini <span className="font-bold text-rose-700">bukanlah anggota Dewan Keamanan PBB</span>. 
                Untuk mengusulkan resolusi, negara Anda harus terpilih sebagai anggota tidak tetap atau memiliki kursi tetap.
              </p>
            </div>

          ) : (
            // --- TAMPILAN UNTUK ANGGOTA ---
            <div className="max-w-3xl w-full space-y-6">
              <div>
                <label className="block text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-2">Judul Resolusi</label>
                <input
                  type="text"
                  value={newResolusiTitle}
                  onChange={(e) => setNewResolusiTitle(e.target.value)}
                  placeholder="Contoh: Resolusi Perdamaian Kawasan ..."
                  className="w-full px-4 py-3 bg-white border-2 border-[#C4B49C]/50 rounded-xl text-sm font-bold text-[#5c3c10] placeholder:text-[#8b7e66]/60 focus:outline-none focus:border-[#5c3c10] transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-2">Deskripsi / Isi Resolusi</label>
                <textarea
                  value={newResolusiDesc}
                  onChange={(e) => setNewResolusiDesc(e.target.value)}
                  placeholder="Jelaskan poin-poin penting resolusi..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-[#C4B49C]/50 rounded-xl text-sm font-bold text-[#5c3c10] placeholder:text-[#8b7e66]/60 focus:outline-none focus:border-[#5c3c10] transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-2">Negara Pengusul (Delegasi)</label>
                <select
                  value={newResolusiProposer}
                  onChange={(e) => setNewResolusiProposer(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-[#C4B49C]/50 rounded-xl text-sm font-bold text-[#5c3c10] placeholder:text-[#8b7e66]/60 focus:outline-none focus:border-[#5c3c10] transition-all"
                >
                  <option value="">Pilih negara pengusul...</option>
                  {[...permanentMembers, ...nonPermanentMembers].map((m) => (
                    <option key={m.iso} value={m.name}>{m.name}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 🔥 FOOTER (shrink-0) */}
        <div className="flex items-center justify-end gap-4 px-8 py-6 border-t-2 border-[#C4B49C]/30 bg-[#FAF6EE] relative z-10 shrink-0">
          <button
            onClick={handleClose}
            className="px-8 py-3 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 transition-all font-black text-xs uppercase tracking-wider cursor-pointer"
          >
            {isUserSecurityCouncilMember ? "Batal" : "Tutup"}
          </button>
          
          {isUserSecurityCouncilMember && (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-xl bg-[#5c3c10] text-[#FAF6EE] shadow-md shadow-[#5c3c10]/30 font-black text-xs uppercase tracking-wider hover:bg-[#3d2911] active:scale-95 transition-all cursor-pointer"
            >
              Ajukan Resolusi
            </button>
          )}
        </div>
      </div>
    </div>
  );
}