# Menu Configuration and Data
# This file is used to manage menu items for the Presiden Simulator

MENU_ITEMS = [
    {"id": "start", "label": "Mulai Simulasi", "action": "/map"},
    {"id": "continue", "label": "Lanjutkan", "action": "/map"},
    {"id": "settings", "label": "Pengaturan", "action": "#"},
    {"id": "exit", "label": "Keluar", "action": "exit"}
]

def get_menu_json():
    import json
    return json.dumps(MENU_ITEMS)

if __name__ == "__main__":
    print(get_menu_json())
