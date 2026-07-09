TimeManager (simulation clock)
    ↓ (increment date setiap detik)
    ↓ onDateChangeCallback fired
    ↓
MapPage.useEffect (timeManager callback)
    ↓ setCurrentDate(new Date)
    ↓
MapPage render dengan currentDate baru
    ↓
ModalsManager menerima currentDate
    ↓
ProduksiModal menerima currentDate
    ↓
calculateProductionAmount useMemo recalculate (dependency: currentDate)
    ↓ production values updated
    ↓
useEffect untuk update last_update_date triggered
    ↓
countryDetail update dengan last_update_date_{resourceKey}
    ↓
Display "Last Update: Since {new date}" ✅
