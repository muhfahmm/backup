import subprocess
import os
import time

def run_git(args):
    result = subprocess.run(["git"] + args, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error running git {' '.join(args)}: {result.stderr}")
    else:
        print(result.stdout)
    return result.returncode

def main():
    groups = [
        # JSON Data (5)
        {"path": "json/database_hubungan_antar_negara", "msg": "feat: Add JSON source for bilateral relations"},
        {"path": "json/database_kedutaan_besar", "msg": "feat: Add JSON source for diplomatic missions"},
        {"path": "json/database_kendaraan_bermotor", "msg": "feat: Add JSON source for vehicle data"},
        {"path": "json/database_mitra_perdagangan", "msg": "feat: Add JSON source for trade partners"},
        {"path": "json/database_organisasi_internasional", "msg": "feat: Add JSON source for international organizations"},
        
        # Geopolitik SQL (6)
        {"path": "postgre/db_hubungan_geopolitik/afrika", "msg": "db: Add realistic geopolitical relations for Africa"},
        {"path": "postgre/db_hubungan_geopolitik/asia", "msg": "db: Add realistic geopolitical relations for Asia"},
        {"path": "postgre/db_hubungan_geopolitik/eropa", "msg": "db: Add realistic geopolitical relations for Europe"},
        {"path": "postgre/db_hubungan_geopolitik/amerika_utara", "msg": "db: Add realistic geopolitical relations for North America"},
        {"path": "postgre/db_hubungan_geopolitik/amerika_selatan", "msg": "db: Add realistic geopolitical relations for South America"},
        {"path": "postgre/db_hubungan_geopolitik/oceania", "msg": "db: Add realistic geopolitical relations for Oceania"},
        
        # Kedubes SQL (6)
        {"path": "postgre/db_kedubes/afrika", "msg": "db: Add realistic embassy data for Africa"},
        {"path": "postgre/db_kedubes/asia", "msg": "db: Add realistic embassy data for Asia"},
        {"path": "postgre/db_kedubes/eropa", "msg": "db: Add realistic embassy data for Europe"},
        {"path": "postgre/db_kedubes/amerika_utara", "msg": "db: Add realistic embassy data for North America"},
        {"path": "postgre/db_kedubes/amerika_selatan", "msg": "db: Add realistic embassy data for South America"},
        {"path": "postgre/db_kedubes/oceania", "msg": "db: Add realistic embassy data for Oceania"},
        
        # Others (3)
        {"path": "postgre/db_kendaraan", "msg": "db: Add vehicle database SQL files"},
        {"path": "postgre/db_mitra_dagang", "msg": "db: Add trade partner database SQL files"},
        {"path": ".", "msg": "chore: Final cleanup and sync of all database generators and documentation"}
    ]

    for i, group in enumerate(groups):
        print(f"--- Processing Push {i+1}/20: {group['msg']} ---")
        run_git(["add", group["path"]])
        # Only commit if there are changes staged
        staged = subprocess.run(["git", "diff", "--cached", "--quiet"]).returncode
        if staged != 0:
            run_git(["commit", "-m", group["msg"]])
            run_git(["push", "origin", "main"]) # Assuming main branch
            print(f"Push {i+1} completed.")
            time.sleep(2) # Small delay to avoid triggering too many alerts
        else:
            print(f"No changes in {group['path']}, skipping commit.")

if __name__ == "__main__":
    main()
