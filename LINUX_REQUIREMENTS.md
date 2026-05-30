# Ubuntu/Linux Installation Requirements

## Install System Dependencies

### Ubuntu 22.04+ / Debian 12+

```bash
# Core libraries
sudo apt-get update
sudo apt-get install -y \
  libxss1 \
  libappindicator1 \
  libindicator7 \
  libnss3 \
  libgconf-2-4 \
  libnotify4 \
  libxrender1 \
  libxrandr2 \
  libxtst6 \
  libfontconfig1

# Audio control (PulseAudio/PipeWire)
sudo apt-get install -y \
  pulseaudio \
  pavucontrol \
  pulseaudio-utils

# Clipboard utilities
sudo apt-get install -y \
  xclip \
  xsel

# Window management & automation
sudo apt-get install -y \
  wmctrl \
  xdotool \
  x11-utils

# Terminal & shell
sudo apt-get install -y \
  bash \
  zsh

# Build tools (if compiling native modules)
sudo apt-get install -y \
  build-essential \
  python3 \
  git
```

## Verify Installation

```bash
# Check xclip
which xclip

# Check pactl
which pactl

# Check wmctrl
which wmctrl

# Check bash
which bash
```

## Node.js & npm

```bash
# Install Node.js 20+ (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node --version
npm --version
```

## Install IRIS AI

```bash
git clone https://github.com/dubessix/proton.git
cd proton
npm install
npm run build:linux
```

## Run IRIS

```bash
# From built AppImage
./out/IRIS\ AI-1.3.0.AppImage

# Or install .deb
sudo dpkg -i out/iris-ai-1.3.0.deb
iris-ai

# Or run from snap
snap install ./out/iris-ai-1.3.0.snap --dangerous
iris-ai
```

## Troubleshooting

### If xclip is not found:
```bash
sudo apt-get install xclip
```

### If pactl is not found:
```bash
sudo apt-get install pulseaudio-utils
```

### If audio control fails:
```bash
# Check if PulseAudio is running
pulseaudio --check

# Or use ALSA as fallback
sudo apt-get install alsa-utils
```
