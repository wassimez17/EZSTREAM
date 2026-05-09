# Git Installation Guide for Windows

## Status: Git Not Found

Based on the system check, Git is not installed on your Windows system.

## Installation Methods

### Method 1: Download from Git Website (Recommended)

1. **Download Git for Windows**
   - Go to: https://git-scm.com/download/win
   - Click "Git for Windows Setup"
   - Download the installer (usually 64-bit)

2. **Install Git**
   - Run the downloaded installer
   - Follow the installation wizard
   - Use default settings (recommended)
   - Restart your computer when prompted

3. **Verify Installation**
   - Open Command Prompt or PowerShell
   - Run: `git --version`
   - You should see a version number

### Method 2: Using Package Manager

#### Option A: Chocolatey (if installed)
```bash
# First install Chocolatey if not present
# Then install Git
choco install git
```

#### Option B: Scoop (if installed)
```bash
scoop install git
```

### Method 3: Using GitHub Desktop (Easiest)

1. **Download GitHub Desktop**
   - Go to: https://desktop.github.com
   - Download and install GitHub Desktop

2. **Use GitHub Desktop**
   - Open GitHub Desktop
   - Sign in to your GitHub account
   - Click "File" → "Add Local Repository"
   - Select your project folder
   - Commit and push using the GUI

## After Installation

### Configure Git (First time only)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Verify Git is Working
```bash
# Check version
git --version

# Check if in PATH
where git
```

## Next Steps After Git Installation

1. **Open your project folder in terminal**
2. **Initialize Git repository**: `git init`
3. **Add files**: `git add .`
4. **Commit changes**: `git commit -m "Initial commit"`
5. **Connect to GitHub**: `git remote add origin https://github.com/wassimez17/EZSTREAM.git`
6. **Push to GitHub**: `git push -u origin main`

## Troubleshooting

### If Git commands don't work:
1. **Restart your computer** after installation
2. **Check PATH environment variable**
3. **Try PowerShell vs Command Prompt**
4. **Use GitHub Desktop as alternative**

### Common Issues:
- **"git not recognized"** → Git not installed or not in PATH
- **Permission denied** → Run as administrator
- **SSL errors** → Configure Git SSL settings

## Verification Commands

After installation, test these commands:
```bash
git --version          # Should show version
git config --list       # Should show configuration
where git             # Should show Git location
```

## Important Notes

- Git for Windows includes Git Bash (Unix-like environment)
- Git Bash is often easier to use than PowerShell
- GitHub Desktop provides GUI for Git operations
- Restart computer after installation for PATH updates

Once Git is installed, you can proceed with GitHub deployment following the steps in `github-deployment-steps.md`.
