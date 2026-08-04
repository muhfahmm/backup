import { useState } from 'react';

// Kita gunakan custom hook agar state tetap terjaga di komponen React
export const useIcbmLogic = () => {
  // State ini yang akan menentukan apakah Program Nuklir sudah aktif
  const [isNuclearProgramActive, setIsNuclearProgramActive] = useState(false);

  // Fungsi untuk mengaktifkan Program Nuklir
  const activateNuclearProgram = () => {
    if (isNuclearProgramActive) return false; // Sudah aktif, tidak perlu double click
    
    // Anda bisa menambahkan logika pengurangan uang/sumber daya di sini
    setIsNuclearProgramActive(true);
    return true; // Mengembalikan true jika berhasil diaktifkan
  };

  // Fungsi helper untuk mendapatkan status visual
  const getProgramStatus = () => {
    return {
      isActive: isNuclearProgramActive,
      message: isNuclearProgramActive ? "PROGRAM NUKLIR TELAH AKTIF" : "PROGRAM NUKLIR BELUM AKTIF",
      color: isNuclearProgramActive ? "text-emerald-700 border-emerald-600/30 bg-emerald-500/5" : "text-rose-700 border-rose-600/30 bg-rose-500/5"
    };
  };

  return {
    isNuclearProgramActive,
    activateNuclearProgram,
    getProgramStatus,
  };
};