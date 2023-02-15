#!/bin/sh
# Color utilities
GREEN=$'\e[0;32m'
RED=$'\e[0;31m'
NC=$'\e[0m'

read -p "[${RED}JARBAS${NC}] É para pagar o IPVA das armadura? (${GREEN}Yes${NC} or ${RED}No${NC}) " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "\033[0;40m                   "
    dialog --clear --backtitle "IPVA Das Armadura" --title "Armaduras" --menu "Selectione uma armadura:" 15 40 4 \
    1 "Db johnson" \
    2 "21" \
    3 "Homi de aço"

    ~/ArchPost/linux-system-setup.sh
else
    echo "bruj"
fi
