-- 1. Hapus duplikat, simpan hanya ID terkecil untuk setiap nama negara
DELETE FROM "1_nama_negara"
WHERE id NOT IN (
    SELECT MIN(id)
    FROM "1_nama_negara"
    GROUP BY nama_negara
);

-- 2. Tambahkan constraint UNIQUE agar tidak bisa dobel lagi di masa depan
ALTER TABLE "1_nama_negara" ADD CONSTRAINT unique_country_name UNIQUE (nama_negara);
