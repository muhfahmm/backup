import { Smile, Users2, Activity, Wallet, Wrench, Shield, ShieldAlert, Globe, Star, Landmark, ArrowRightLeft, FileText, CreditCard, BarChart3, TrendingUp, Hammer, Swords as MilitaryIcon, Bolt, Droplet, Radiation, Info, HandHelping, HeartHandshake, Tag, Eye, Home } from "lucide-react";

export const menuItems = [
  { id: "Kepuasan", icon: Smile, label: "Kepuasan" },
  { id: "Populasi", icon: Users2, label: "Populasi" },
  { id: "ProduksiKonsumsi", label: "Produksi & Konsumsi", icon: Activity },
  { id: "Ekonomi", icon: Wallet, label: "Ekonomi" },
  { id: "Pembangunan", icon: Wrench, label: "Pembangunan" },
  { id: "Pertahanan", icon: Shield, label: "Pertahanan" },
  { id: "Geopolitik", icon: Globe, label: "Geopolitik" },
  { id: "Sosial & Budaya", icon: Star, label: "Sosial & Budaya" },
  { id: "Kementerian", icon: Landmark, label: "Kementerian" },
];

export const subMenuItems: Record<string, any[]> = {
  "Kepuasan": [
    { id: "Dashboard:Kepuasan", label: "Statistik Kepuasan", icon: BarChart3 },
    { id: "Action:NaikkanKepuasan", label: "Naikkan Kepuasan", icon: TrendingUp },
    { id: "Menu:TempWisata", label: "Tempat Wisata", icon: Landmark },
  ],
  "Populasi": [
    { id: "Dashboard:Populasi:Overview", label: "Ringkasan Populasi", icon: Info },
    { id: "Dashboard:Populasi", label: "Statistik Populasi", icon: Users2 },
  ],
  "Ekonomi": [
    { id: "Menu:Perdagangan", label: "Perdagangan", icon: ArrowRightLeft },
    { id: "Menu:Pajak", label: "Manajemen Pajak", icon: FileText },
    { id: "Menu:Hutang", label: "Pinjaman & Hutang", icon: CreditCard },
    { id: "Menu:Budget", label: "Pemasukkan & Pengeluaran", icon: BarChart3 },
    { id: "Menu:PDB", label: "PDB Nasional & Dunia", icon: TrendingUp },
    { id: "Menu:Harga", label: "Harga Barang Pokok", icon: Tag },
  ],
  "Pembangunan": [
    { id: "Menu:Produksi", label: "Produksi", icon: Hammer },
    { id: "Menu:TempatUmum", label: "Tempat Umum", icon: Users2 },
    { id: "Menu:HunianPermukiman", label: "Hunian Permukiman", icon: Home },
  ],
  "ProduksiKonsumsi": [
    { id: "Menu:Kelistrikan", label: "Grid Nasional", icon: Bolt },
    { id: "Menu:Perminyakan", label: "Perminyakan", icon: Droplet },
    { id: "Menu:Uranium", label: "Uranium", icon: Radiation },
  ],
  "Pertahanan": [
    { id: "Komando Pertahanan", label: "Komando Pertahanan", icon: Shield },
    { id: "Menu:Intelijen", label: "Intelijen", icon: Eye },
    { id: "Menu:ArmadaMiliter", label: "Armada Militer", icon: MilitaryIcon },
    { id: "Menu:ArmadaPolisi", label: "Armada Polisi", icon: ShieldAlert },
    { id: "Menu:ManajemenPertahanan", label: "Manajemen Pertahanan", icon: Shield },
  ],
  "Geopolitik": [
    { id: "Menu:PBB", label: "PBB", icon: Globe },
    { id: "Menu:KedutaanBesar", label: "Kedutaan Besar", icon: Landmark },
    { id: "Menu:OrganisasiInternasional:organisasi_pbb", label: "Organisasi Internasional", icon: Landmark },
    { id: "Menu:TingkatHubungan", label: "Tingkat Hubungan", icon: HeartHandshake },
    { id: "Menu:Bantuan", label: "Bantuan", icon: HandHelping },
  ],
  "Sosial & Budaya": [
    { id: "Menu:Agama", label: "Agama & Kepercayaan", icon: Star },
    { id: "Menu:Ideologi", label: "Ideologi Negara", icon: Shield },
  ],
  "Kementerian": [
    { id: "Dashboard:Kementerian", label: "Kementerian", icon: Landmark },
  ],
};
