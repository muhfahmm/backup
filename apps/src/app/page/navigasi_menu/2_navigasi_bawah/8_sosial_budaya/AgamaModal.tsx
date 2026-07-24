"use client"
import React, { useState } from "react";
import { X, Star } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryDetail: any;
  setCountryDetail?: (detail: any | ((prev: any) => any)) => void;
}

const RELIGION_OPTIONS = [
  'Islam',
  'Katolik',
  'Protestan',
  'Kristen Ortodoks',
  'Hindu',
  'Buddha',
  'Yahudi',
  'Shinto',
  'Ateisme',
];

const RELIGION_CHANGE_COST = 50000;

export default function AgamaModal({ isOpen, onClose, countryDetail, setCountryDetail }: ModalProps) {
  const [selectedReligion, setSelectedReligion] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false); // PERBAIKAN: State untuk modal error
  const [feedback, setFeedback] = useState<{ type: "success"; message: string } | null>(null);

  if (!isOpen) return null;
  const religion = countryDetail?.religion || "Mayoritas Muslim";
  const anggaran = Number(countryDetail?.anggaran) || 0;

  const handleSelectReligion = (religionName: string) => {
    setSelectedReligion(religionName);
    setShowConfirm(true);
  };

  const handleConfirmChange = () => {
    if (!selectedReligion) return;

    // PERBAIKAN: Jika uang kurang, buka modal error, bukan setFeedback
    if (anggaran < RELIGION_CHANGE_COST) {
      setShowErrorModal(true);
      return;
    }

    setCountryDetail?.((prev: any) => ({
      ...(prev || {}),
      religion: selectedReligion,
      anggaran: (Number(prev?.anggaran) || 0) - RELIGION_CHANGE_COST,
      message: `Agama negara diubah ke ${selectedReligion}. Biaya perubahan ${RELIGION_CHANGE_COST.toLocaleString('id-ID')} EM.`
    }));

    setFeedback({
      type: "success",
      message: `Agama berhasil diubah menjadi ${selectedReligion}. Biaya ${RELIGION_CHANGE_COST.toLocaleString('id-ID')} EM telah dipotong.`
    });
    setShowConfirm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent pointer-events-none">
      <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl w-full max-w-6xl h-[84vh] overflow-hidden shadow-2xl flex flex-col relative font-sans pointer-events-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
        <div className="px-8 py-6 border-b-2 border-[#C4B49C]/30 flex items-center justify-between bg-[#FAF6EE] relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5c3c10]/10 rounded-xl border border-[#5c3c10]/20">
                <Star className="h-6 w-6 text-[#5c3c10] animate-spin" style={{ animationDuration: '12s' }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#5c3c10] tracking-tight leading-none uppercase">Agama & Kebebasan Berkeyakinan</h2>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-xl border-2 border-[#C4B49C] bg-transparent text-[#8b7e66] hover:text-[#5c3c10] hover:bg-black/5 active:bg-black/10 transition-all cursor-pointer font-black text-xs uppercase flex items-center gap-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto p-8 bg-[#FAF6EE]/40 relative z-10 no-scrollbar">
          <p className="text-xs text-[#8b7e66] font-semibold leading-relaxed mb-6">
            Tinjau kerukunan umat beragama dan kebebasan sipil dalam beribadah untuk menjamin toleransi bermasyarakat.
          </p>

          <div className="bg-[#e4dac3]/20 border border-[#C4B49C]/30 p-4 rounded-xl space-y-2">
            <div className="flex justify-between text-xs font-bold text-[#5c3c10]">
              <span>Agama Mayoritas Sipil:</span>
              <span>{religion}</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-[#5c3c10]">
              <span>Anggaran tersedia:</span>
              <span className="text-[#2e261a] font-bold">{anggaran.toLocaleString('id-ID')} EM</span>
            </div>
          </div>

          {/* Pilihan Agama (grid 3x3) */}
          <div className="mt-6">
            <h3 className="text-sm font-bold text-[#5c3c10] mb-3">Pilih Agama Mayoritas (ubah untuk negara terpilih)</h3>
            <div className="grid grid-cols-3 gap-4">
              {RELIGION_OPTIONS.map((r) => {
                const isActive = String(countryDetail?.religion || '').toLowerCase() === String(r).toLowerCase();
                const isSelected = String(selectedReligion || '').toLowerCase() === String(r).toLowerCase();

                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => handleSelectReligion(r)}
                    className={`p-4 rounded-2xl border transition text-left flex flex-col justify-between h-24 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-b from-[#ffe07d] via-[#fcae1e] to-[#c77a00] text-[#5c3c10] font-black border-[#5c3c10]/30 shadow-md'
                        : isSelected
                        ? 'bg-[#f2e4b8] text-[#5c3c10] border-[#c7ab79]'
                        : 'bg-white text-[#5c3c10] border-[#C4B49C]/30 hover:bg-[#e4dac3]/40'
                    }`}
                  >
                    <div className="text-sm font-semibold">{r}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em]">
                      {isActive ? 'Aktif' : isSelected ? 'Dipilih' : 'Klik untuk pilih'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showConfirm && selectedReligion && (
            <div className="mt-6 bg-white/90 border border-[#C4B49C]/40 rounded-2xl p-5 shadow-lg">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm font-bold text-[#5c3c10]">
                  <span>Konfirmasi Perubahan Agama</span>
                  <span className="text-[#5c3c10]">Biaya: {RELIGION_CHANGE_COST.toLocaleString('id-ID')} EM</span>
                </div>
                <p className="text-xs text-[#8b7e66] leading-relaxed">
                  Anda akan mengubah agama mayoritas negara menjadi <span className="font-semibold text-[#5c3c10]">{selectedReligion}</span>.
                  Perubahan akan mengurangi anggaran dan memerlukan konfirmasi.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={handleConfirmChange}
                    className="flex-1 py-3 rounded-xl bg-[#3b7d7d] text-[#FAF6EE] text-xs font-black uppercase tracking-widest hover:bg-[#2e6363] transition-all cursor-pointer"
                  >
                    Konfirmasi Ubah
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 py-3 rounded-xl border-2 border-[#C4B49C] text-[#5c3c10] text-xs font-black uppercase tracking-widest hover:bg-[#e4dac3]/50 transition-all cursor-pointer"
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          )}

          {feedback && (
            <div className={`mt-6 p-4 rounded-xl border ${feedback.type === 'success' ? 'border-emerald-300 bg-emerald-50 text-emerald-900' : 'border-rose-300 bg-rose-50 text-rose-900'}`}>
              {feedback.message}
            </div>
          )}

          {/* PERBAIKAN: Modal Pop-up untuk Peringatan Anggaran Kurang */}
          {showErrorModal && (
            <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center p-8 pointer-events-auto backdrop-blur-sm rounded-2xl">
              <div className="bg-[#FAF6EE] border-4 border-rose-600 rounded-2xl max-w-md w-full p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
                <button
                  onClick={() => setShowErrorModal(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-black/5 text-[#8b7e66] hover:text-[#5c3c10] transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-rose-600/10 rounded-xl border border-rose-600/20">
                    <X className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-tight">Anggaran Tidak Cukup</h3>
                  </div>
                </div>
                <p className="text-sm text-[#8b7e66] font-medium leading-relaxed mb-6">
                  Anda tidak memiliki cukup dana untuk mengganti agama. 
                  Biaya yang diperlukan adalah <span className="font-bold text-[#5c3c10]">{RELIGION_CHANGE_COST.toLocaleString('id-ID')} EM</span>, 
                  sedangkan kas negara Anda saat ini hanya <span className="font-bold text-rose-700">{anggaran.toLocaleString('id-ID')} EM</span>.
                </p>
                <button
                  onClick={() => setShowErrorModal(false)}
                  className="w-full py-3 rounded-xl bg-[#5c3c10] text-[#FAF6EE] text-xs font-black uppercase tracking-widest hover:bg-[#3d2911] transition-all cursor-pointer"
                >
                  Mengerti
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}