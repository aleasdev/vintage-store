#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

[ -d node_modules ] || pnpm install

SESSION="vintage-store"
tmux has-session -t "$SESSION" 2>/dev/null && exec tmux attach -t "$SESSION"

tmux new-session -d -s "$SESSION" -n dev -x "$(tput cols)" -y "$(tput lines)"
tmux set-option -g mouse on

tmux send-keys -t "$SESSION" "pnpm dev" C-m
tmux split-window -h -l 30%

tmux attach -t "$SESSION"
