# GitHub Deployment Steps

## Problem: Git not installed on Windows

The issue is that Git is not installed on your Windows system. You need to install Git first before deploying to GitHub.

## Step 1: Install Git

### Option A: Download from Git website (Recommended)
1. Go to https://git-scm.com/download/win
2. Download "Git for Windows Setup"
3. Run the installer
4. Restart your computer
5. Open Command Prompt or PowerShell

### Option B: Install via package manager
```bash
# Using Chocolatey (if installed)
choco install git

# Using Scoop (if installed)
scoop install git
```

## Step 2: Verify Git Installation

Open PowerShell and run:
```bash
git --version
```

If you see version number, Git is installed successfully.

## Step 3: Configure Git (First time only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 4: Initialize Repository

```bash
cd "c:\Users\HP\Documents\GitHub\EZTV\src\components\CascadeProjects\windsurf-project\iptv-website"
git init
git add .
git commit -m "Initial commit - EZSTREAM IPTV Website"
```

## Step 5: Connect to GitHub Repository

```bash
git remote add origin https://github.com/wassimez17/EZSTREAM.git
git branch -M main
git push -u origin main
```

## Step 6: Alternative - Use GitHub Desktop

If command line doesn't work:

1. Download GitHub Desktop from https://desktop.github.com
2. Install and sign in to your GitHub account
3. Click "File" → "Add Local Repository"
4. Select the folder: `C:\Users\HP\Documents\GitHub\EZTV\src\components\CascadeProjects\windsurf-project\iptv-website`
5. Commit changes with "Initial commit - EZSTREAM IPTV Website"
6. Click "Publish repository"
7. Choose "wassimez17/EZSTREAM" as repository name
8. Click "Publish"

## Step 7: Deploy to Vercel

After files are on GitHub:

### Option A: Automatic Deployment
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository: `wassimez17/EZSTREAM`
4. Vercel will automatically detect and deploy

### Option B: Manual Deployment
1. Run: `npm run build`
2. Upload `dist/` folder to Vercel
3. Set root directory to `dist/`

## Files to Upload

Your repository should contain:
```
EZSTREAM/
├── .gitignore          # Excludes node_modules, dist
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── README.md           # Project documentation
├── src/               # Source code
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── translations.js
├── public/             # Static assets
└── dist/              # Built files (can be excluded)
```

## Verification

After deployment:
1. Check GitHub repository shows all files
2. Check Vercel deployment works
3. Verify website loads at your domain
4. Check for any build errors

## Important Notes

- Make sure to install Git first
- Use the correct repository URL: `wassimez17/EZSTREAM`
- The `dist/` folder should NOT be committed (it's in .gitignore)
- Vercel will build from source code, not from dist/

## Troubleshooting

If Git commands don't work:
1. Restart your computer after installing Git
2. Use GitHub Desktop instead of command line
3. Check if Git is in PATH: `echo $PATH`
4. Try using Git Bash instead of PowerShell
