#!/bin/sh
[ "$UID" -eq 0 ] || exec sudo bash "$0" "$@"

# Make This File A Executable
	# sudo chmod +x linux-system-setup.sh
	
# Run The File
	# sudo ./linux-system-setup.sh

# ============= UTILS =============

# Copy Progress bar source code to source
# The "." works just like the "source" would on bash
# https://github.com/edouard-lopez/progress-bar.sh
. /home/vitor/ArchPost/progress-bar.sh


# Color utilities
GREEN=$'\e[0;32m'
RED=$'\e[0;31m'
NC=$'\e[0m'

# ============= UTILS =============

# Progress Bar
echo "[${RED}JARBAS${NC}] Establishing connection with Github"
sleep 1.5

echo -ne "[${RED}JARBAS${NC}] Reading the Github repository\r"
sleep 0.5
echo -ne "[${RED}JARBAS${NC}] Reading the Github repository.\r"
sleep 0.5
echo -ne "[${RED}JARBAS${NC}] Reading the Github repository..\r"
sleep 0.5
echo "[${RED}JARBAS${NC}] Reading the Github repository..."
sleep 0.5
echo "[${RED}JARBAS${NC}] ${RED}Failed to connect. Trying again."
sleep 0.5
echo -ne "[${RED}JARBAS${NC}] Reading the Github repository\r\033[K"
sleep 0.5
echo -ne "[${RED}JARBAS${NC}] Reading the Github repository.\r"
sleep 0.5
echo -ne "[${RED}JARBAS${NC}] Reading the Github repository..\r"
sleep 0.5
echo  "[${RED}JARBAS${NC}] Reading the Github repository..."
sleep 0.7

echo "[${RED}JARBAS${NC}] Downloading Data from the Server"

echo -ne '                                     (0%)\r'
sleep 0.4
echo -ne '###                                  (3%)\r'
sleep 1
echo -ne '#######                             (14%)\r'
sleep 0.5
echo -ne '###########                         (27%)\r'
sleep 2
echo -ne '################                    (42%)\r'
sleep 1
echo -ne '#################                   (47%)\r'
sleep 0.5
echo -ne '######################              (51%)\r'
sleep 0.7
echo -ne '############################        (68%)\r'
sleep 0.3
echo -ne '#################################   (84%)\r'
sleep 0.6
echo -ne '###################################(100%)\r'

sleep 0.3

echo "[${GREEN}JARBAS${NC}] ${GREEN}Files Downloaded!${NC}"
echo "[${RED}JARBAS${NC}] Setting up the system"

progressbar 85

# ============= APPS =============

# Unzip
yes | sudo pacman -S unzip

# Yay
yes | sudo pacman -S yay

# PFetch
	# https://www.youtube.com/watch?v=zput0Ir8XPM
	# NeoFetch vs PFetch
yes | sudo pacman -S pfetch


# Lolcat
yes | sudo pacman -S lolcat

# Figlet
yes | sudo pacman -S figlet

# Checkup ZInit
zinit self-update

# Bashtop
yes | sudo pacman -S bashtop

# Gotop
yes | yay -S gotop-bin

# Git
yes | yay -S git
	# Configure git
	git config user.name "VitorGouveia"
	git config user.email "vitorneves.gouveia10@gmail.com"


# Github CLI
yes | sudo pacman -S github-cli
	# auth into the cli
	# yes | gh auth login

# WGET
yes | sudo pacman -S wget

# Node Version Manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Install node v16
nvm install --lts

# Update NPM
yes | npm i -g npm

# Install Yarn
yes | npm i -g yarn
	# use yarn berry
	yarn set version berry

# Install Vscode
yes | sudo pacman -S code

# Install Notion
# yay -S notion-app-enhanced

# Install Brave
yay -S brave-bin 

# Install Deja Dup
yay -S deja-dup

# Install Cool retro term
sudo pacman -S cool-retro-term

# ============= Checks =============
# wifi strength
iwconfig wlan0 | grep -i --color quality | lolcat

# ============= PRESENTATION =============
figlet [JARBAS] | lolcat

# Colors Text
fade
# spectrum_ls
neofetch
# neofetch | lolcat