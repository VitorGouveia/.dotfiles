#!/usr/bin/env bash

SLEEP_DURATION=${SLEEP_DURATION:=0.03}  # default to 1 second, use to speed up tests

progressbar() {
  local duration
  local columns
  local space_available
  local fit_to_screen  
  local space_reserved

  space_reserved=6   # reserved width for the percentage value
  duration=${1}
  columns=$(tput cols)
  space_available=$(( columns-space_reserved ))

  if (( duration < space_available )); then 
  	fit_to_screen=1; 
  else 
    fit_to_screen=$(( duration / space_available )); 
    fit_to_screen=$((fit_to_screen+1)); 
  fi

  GREEN=$'\e[0;32m'
  RED=$'\e[0;31m'
  NC=$'\e[0m'

  already_done() { for ((done=0; done<(elapsed / fit_to_screen) ; done=done+1 )); do printf "${RED}▇${NC}"; done }
  remaining() { for (( remain=(elapsed/fit_to_screen) ; remain<(duration/fit_to_screen) ; remain=remain+1 )); do printf " "; done }
  percentage() { printf "${RED}|${NC} ${RED}%s%%${NC}" $(( ((elapsed)*100)/(duration)*100/100 )); }
  clean_line() { printf "\r"; }

  for (( elapsed=1; elapsed<=duration; elapsed=elapsed+1 )); do
      already_done; remaining; percentage
      sleep "$SLEEP_DURATION"
      clean_line
  done
  echo "\n"
};