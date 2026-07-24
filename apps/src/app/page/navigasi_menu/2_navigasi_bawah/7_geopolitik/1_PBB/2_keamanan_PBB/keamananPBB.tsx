"use client"
import React, { useState } from "react";
import { Shield, CheckCircle, XCircle, AlertCircle, FileText, Plus, X } from "lucide-react";

export default function KeamananPBB() {
  const [votingState, setVotingState] = useState<"idle" | "voted" | "result">("idle");
  const [voteResult, setVoteResult] = useState<{ passed: boolean; message: string; voteCount: number; veto: string | null } | null>(null);
  
  // State untuk Modal Buat Resolusi Baru
  const [isResolusiModalOpen, setIsResolusiModalOpen] = useState(false);
  const [newResolusiTitle, setNewResolusiTitle] = useState("");
  const [newResolusiDesc, setNewResolusiDesc] = useState("");
  const [newResolusiProposer, setNewResolusiProposer] = useState("");

  // Daftar 5 Anggota Tetap Dewan Keamanan (Memiliki Hak Veto)
  const permanentMembers = [
    { iso: 'us', name: 'Amerika Serikat' },
    { iso: 'gb', name: 'Inggris' },
    { iso: 'fr', name: 'Perancis' },
    { iso: 'ru', name: 'Rusia' },
    { iso: 'cn', name: 'China' },
  ];

  // Daftar 10 Anggota Tidak Tetap (Masa Jabatan 2 Tahun)
  const nonPermanentMembers = [
    { iso: 'br', name: 'Brazil' },
    { iso: 'jp', name: 'Jepang' },
    { iso: 'in', name: 'India' },
    { iso: 'de', name: 'Jerman' },
    { iso: 'za', name: 'Afrika Selatan' },
    { iso: 'eg', name: 'Mesir' },
    { iso: 'mx', name: 'Meksiko' },
    { iso: 'id', name: 'Indonesia' }, // User Country
    { iso: 'pl', name: 'Polandia' },
    { iso: 'au', name: 'Australia' },
  ];

  // Simulasi: Cek apakah user adalah anggota Dewan Keamanan (termasuk tidak tetap)
  // Di sini kita asumsikan user adalah Indonesia (anggota tidak tetap)
  const isUserSecurityCouncilMember = true; // Ubah ke false untuk menguji akses ditolak

  // Fungsi Helper Render Bendera (Anti-Broken Image)
  const renderFlag = (iso: string, altName: string) => {
    if (!iso || iso.length !== 2) return <span className="text-xl">🌐</span>;
    return (
      <div className="w-8 h-5 rounded-sm overflow-hidden border border-[#5c3c10]/20 flex-shrink-0 shadow-sm bg-[#e4dac3] relative flex items-center justify-center mx-auto mb-1">
        <img
          src={`https://flagcdn.com/w80/${iso.toLowerCase()}.png`}
          alt={altName}
          className="w-full h-full object-cover absolute inset-0"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <span className="text-sm opacity-50 select-none">🌐</span>
      </div>
    );
  };

  // Simulasi Pemungutan Suara
  const handleVote = (userVote: "setuju" | "menolak" | "abstain") => {
    setVotingState("voted");

    let yesVotes = 0;
    let vetoCountry: string | null = null;

    // Simulasi voting P5 (randomized tapi sedikit manipulatif untuk keseruan)
    const p5Votes = permanentMembers.map((m) => {
      if (m.name === 'Amerika Serikat' && userVote === 'setuju') return 'setuju';
      if (m.name === 'Rusia' && userVote === 'menolak') return 'menolak'; // Drama Rusia jika user menolak
      
      const rand = Math.random();
      if (rand < 0.4) return 'setuju';
      if (rand < 0.7) return 'abstain';
      return 'menolak'; // P5 menggunakan veto
    });

    // Cek apakah ada Veto dari P5
    p5Votes.forEach((vote, index) => {
      if (vote === 'menolak') {
        vetoCountry = permanentMembers[index].name;
      }
    });

    // Simulasi voting 10 anggota tidak tetap
    const np5Votes = nonPermanentMembers.map(() => {
      const rand = Math.random();
      if (rand < 0.55) return 'setuju';
      if (rand < 0.85) return 'abstain';
      return 'menolak';
    });

    // Gabungkan dan hitung suara Setuju
    const allVotes = [...p5Votes, ...np5Votes];
    yesVotes = allVotes.filter((v) => v === 'setuju').length;

    // Tentukan Hasil Akhir
    let resultMessage = "";
    let passed = false;

    if (vetoCountry) {
      passed = false;
      resultMessage = `❌ Resolusi DIVETO oleh ${vetoCountry}! Suara yang disetujui hanya ${yesVotes} dari 15.`;
    } else if (yesVotes >= 9) {
      passed = true;
      resultMessage = `✅ Resolusi DISAHKAN! Dewan Keamanan menyetujui dengan ${yesVotes} suara.`;
    } else {
      passed = false;
      resultMessage = `❌ Resolusi GAGAL! Hanya mendapat ${yesVotes} suara (Minimal 9 suara dibutuhkan).`;
    }

    setVoteResult({
      passed,
      message: resultMessage,
      voteCount: yesVotes,
      veto: vetoCountry,
    });
  };

  const resetVote = () => {
    setVotingState("idle");
    setVoteResult(null);
  };

  // Logika untuk membuat resolusi baru
  const handleCreateResolusi = () => {
    if (!newResolusiTitle || !newResolusiDesc || !newResolusiProposer) {
      alert("Harap isi semua kolom!");
      return;
    }
    // Logika simulasi: tambahkan resolusi baru ke daftar (bisa diintegrasikan dengan state parent nanti)
    alert(`Resolusi baru berhasil dibuat!\nJudul: ${newResolusiTitle}\nPengusul: ${newResolusiProposer}\nDeskripsi: ${newResolusiDesc}`);
    
    // Reset form dan tutup modal
    setNewResolusiTitle("");
    setNewResolusiDesc("");
    setNewResolusiProposer("");
    setIsResolusiModalOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Bagian 1: Keanggotaan Dewan Keamanan (2 KOLOM KIRI-KANAN) */}
      <div className="bg-white/70 border border-[#C4B49C]/30 p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-[#C4B49C]/20 mb-4">
          <Shield className="h-5 w-5 text-[#5c3c10]" />
          <h4 className="text-sm font-black text-[#5c3c10] uppercase">Keanggotaan Dewan Keamanan PBB</h4>
          <div className="ml-auto flex gap-2">
            <span className="text-[10px] font-bold bg-amber-600/10 text-amber-700 px-2 py-1 rounded-lg border border-amber-600/20">5 Tetap</span>
            <span className="text-[10px] font-bold bg-blue-600/10 text-blue-700 px-2 py-1 rounded-lg border border-blue-600/20">10 Tidak Tetap</span>
          </div>
        </div>

        {/* Layout 2 Kolom Kiri & Kanan */}
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* KOLOM KIRI: Anggota Tetap */}
          <div className="flex-1 bg-[#FAF6EE]/80 border border-[#C4B49C]/20 rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center border-b border-[#C4B49C]/20 pb-2 mb-3">
              <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider">Anggota Tetap</span>
              <span className="text-[8px] font-black text-rose-600 bg-rose-600/10 px-2 py-0.5 rounded border border-rose-600/20">Hak Veto</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {permanentMembers.map((m) => (
                <div 
                  key={m.iso} 
                  className="bg-gradient-to-br from-[#fbf8ef] to-[#f2ebd7] border-2 border-[#c7ab79] p-3 rounded-lg flex flex-col items-center text-center relative shadow-sm"
                >
                  <div className="absolute -top-2 -right-2 bg-amber-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded-lg uppercase tracking-wider shadow-sm">Veto</div>
                  {renderFlag(m.iso, m.name)}
                  <span className="text-[10px] font-black text-[#5c3c10] mt-1 leading-tight">{m.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* KOLOM KANAN: Anggota Tidak Tetap */}
          <div className="flex-1 bg-[#FAF6EE]/80 border border-[#C4B49C]/20 rounded-xl p-4 shadow-sm">
            <div className="border-b border-[#C4B49C]/20 pb-2 mb-3">
              <span className="text-[10px] font-black text-blue-700 uppercase tracking-wider">Anggota Tidak Tetap</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {nonPermanentMembers.map((m) => (
                <div 
                  key={m.iso} 
                  className="bg-white border border-[#C4B49C]/30 p-3 rounded-lg flex flex-col items-center text-center shadow-sm hover:bg-[#e4dac3]/20 transition-colors"
                >
                  {renderFlag(m.iso, m.name)}
                  <span className="text-[10px] font-bold text-[#5c3c10] mt-1 leading-tight">{m.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bagian 2: Resolusi & Pemungutan Suara */}
      <div className="bg-white/70 border border-[#C4B49C]/30 p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-3 pb-4 border-b border-[#C4B49C]/20 mb-4">
          <FileText className="h-5 w-5 text-[#5c3c10]" />
          <h4 className="text-sm font-black text-[#5c3c10] uppercase">Resolusi yang Dibahas</h4>
        </div>

        {/* Konten Resolusi Dummy */}
        <div className="bg-[#FAF6EE]/50 border border-[#C4B49C]/20 p-4 rounded-xl mb-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-[#8b7e66] uppercase tracking-wide">Diusulkan oleh: Perancis & Inggris</p>
              <h5 className="text-sm font-black text-[#5c3c10] mt-1">Resolusi 2728: Gencatan Senjata di Kawasan Konflik</h5>
              <p className="text-xs text-[#8b7e66] mt-2 leading-relaxed">
                Menuntut penghentian segera permusuhan, pembebasan sandera, dan akses bantuan kemanusiaan tanpa hambatan ke zona perang.
              </p>
            </div>
          </div>
        </div>

        {/* UI Voting */}
        {votingState === "idle" ? (
          <div className="mt-2">
            <p className="text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-3">Tentukan sikap delegasi negara Anda:</p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleVote("setuju")}
                className="flex-1 min-w-[120px] py-3 rounded-xl bg-emerald-600 text-white border border-emerald-700 shadow-md text-[10px] font-black uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <CheckCircle className="h-4 w-4 inline-block mr-2 -mt-0.5" />
                Setuju
              </button>
              <button
                onClick={() => handleVote("abstain")}
                className="flex-1 min-w-[120px] py-3 rounded-xl bg-amber-500 text-white border border-amber-600 shadow-md text-[10px] font-black uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <AlertCircle className="h-4 w-4 inline-block mr-2 -mt-0.5" />
                Abstain
              </button>
              <button
                onClick={() => handleVote("menolak")}
                className="flex-1 min-w-[120px] py-3 rounded-xl bg-rose-600 text-white border border-rose-700 shadow-md text-[10px] font-black uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <XCircle className="h-4 w-4 inline-block mr-2 -mt-0.5" />
                Menolak
              </button>
            </div>
            <p className="text-[9px] text-[#8b7e66] font-bold mt-3 text-center">* Perlu 9 suara setuju dan tanpa Veto untuk meloloskan resolusi.</p>
          </div>
        ) : (
          <div className="mt-2">
            {/* Hasil Voting */}
            <div className={`p-5 rounded-xl border-2 shadow-md flex flex-col items-center text-center ${
              voteResult?.passed ? 'border-emerald-600 bg-emerald-50/80' : 'border-rose-600 bg-rose-50/80'
            }`}>
              {voteResult?.passed ? (
                <CheckCircle className="h-10 w-10 text-emerald-600 mb-2" />
              ) : (
                <XCircle className="h-10 w-10 text-rose-600 mb-2" />
              )}
              <p className={`text-sm font-black uppercase tracking-wider ${voteResult?.passed ? 'text-emerald-700' : 'text-rose-700'}`}>
                {voteResult?.message}
              </p>
              <div className="flex gap-6 mt-3 text-xs font-bold text-[#5c3c10]">
                <span>Setuju: {voteResult?.voteCount}</span>
                <span>Veto: {voteResult?.veto ? voteResult.veto : "Tidak ada"}</span>
              </div>
              
              <button
                onClick={resetVote}
                className="mt-4 px-6 py-2 rounded-lg border-2 border-[#C4B49C] bg-white text-[#5c3c10] text-[10px] font-black uppercase tracking-wider hover:bg-[#f2ecd8] transition-all cursor-pointer"
              >
                Kembali & Voting Ulang
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bagian 3: Tombol Buat Resolusi Baru */}
      <div className="bg-white/70 border border-[#C4B49C]/30 p-4 rounded-xl shadow-sm flex justify-between items-center">
        <span className="text-xs font-bold text-[#5c3c10]">Ingin mengusulkan resolusi baru?</span>
        <button
          onClick={() => setIsResolusiModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5c3c10] text-[#FAF6EE] text-[10px] font-black uppercase tracking-wider hover:bg-[#3d2911] transition-all cursor-pointer shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Buat Resolusi Baru
        </button>
      </div>

      {/* MODAL: Buat Resolusi Baru / Cek Akses */}
      {isResolusiModalOpen && (
        <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center p-8 pointer-events-auto backdrop-blur-sm rounded-2xl">
          <div className="bg-[#FAF6EE] border-4 border-[#C4B49C] rounded-2xl max-w-lg w-full p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
            
            <button
              onClick={() => setIsResolusiModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-black/5 text-[#8b7e66] hover:text-[#5c3c10] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* CEK AKSES: Jika BUKAN anggota Dewan Keamanan */}
            {!isUserSecurityCouncilMember ? (
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-rose-600/10 rounded-xl border border-rose-600/20">
                    <XCircle className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-tight">Akses Ditolak</h3>
                    <p className="text-xs text-[#8b7e66] font-bold">Hanya Dewan Keamanan yang dapat membuat resolusi.</p>
                  </div>
                </div>
                <p className="text-sm text-[#8b7e66] font-medium leading-relaxed mb-6">
                  Negara Anda saat ini <span className="font-bold text-rose-700">bukanlah anggota Dewan Keamanan PBB</span>. 
                  Untuk mengusulkan resolusi, negara Anda harus terpilih sebagai anggota tidak tetap atau memiliki kursi tetap.
                </p>
                <button
                  onClick={() => setIsResolusiModalOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#5c3c10] text-[#FAF6EE] text-xs font-black uppercase tracking-widest hover:bg-[#3d2911] transition-all cursor-pointer"
                >
                  Mengerti
                </button>
              </div>
            ) : (
              // CEK AKSES: Jika ANGGOTA Dewan Keamanan -> Tampilkan Form
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#5c3c10] uppercase tracking-tight">Usulkan Resolusi Baru</h3>
                    <p className="text-xs text-[#8b7e66] font-bold">Isi detail resolusi untuk diajukan ke Dewan Keamanan.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-1">Judul Resolusi</label>
                    <input
                      type="text"
                      value={newResolusiTitle}
                      onChange={(e) => setNewResolusiTitle(e.target.value)}
                      placeholder="Contoh: Resolusi Perdamaian Kawasan ..."
                      className="w-full px-4 py-2.5 bg-white border-2 border-[#C4B49C]/50 rounded-xl text-sm font-bold text-[#5c3c10] placeholder:text-[#8b7e66]/60 focus:outline-none focus:border-[#5c3c10] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-1">Deskripsi / Isi Resolusi</label>
                    <textarea
                      value={newResolusiDesc}
                      onChange={(e) => setNewResolusiDesc(e.target.value)}
                      placeholder="Jelaskan poin-poin penting resolusi..."
                      rows={3}
                      className="w-full px-4 py-2.5 bg-white border-2 border-[#C4B49C]/50 rounded-xl text-sm font-bold text-[#5c3c10] placeholder:text-[#8b7e66]/60 focus:outline-none focus:border-[#5c3c10] transition-all resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#5c3c10] uppercase tracking-wider mb-1">Negara Pengusul (Delegasi)</label>
                    <select
                      value={newResolusiProposer}
                      onChange={(e) => setNewResolusiProposer(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border-2 border-[#C4B49C]/50 rounded-xl text-sm font-bold text-[#5c3c10] placeholder:text-[#8b7e66]/60 focus:outline-none focus:border-[#5c3c10] transition-all"
                    >
                      <option value="">Pilih negara pengusul...</option>
                      {[...permanentMembers, ...nonPermanentMembers].map((m) => (
                        <option key={m.iso} value={m.name}>{m.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setIsResolusiModalOpen(false)}
                    className="flex-1 py-3 rounded-xl border-2 border-[#C4B49C] text-[#5c3c10] text-xs font-black uppercase tracking-widest hover:bg-[#e4dac3]/50 transition-all cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleCreateResolusi}
                    className="flex-1 py-3 rounded-xl bg-[#5c3c10] text-[#FAF6EE] text-xs font-black uppercase tracking-widest hover:bg-[#3d2911] transition-all cursor-pointer"
                  >
                    Ajukan Resolusi
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}