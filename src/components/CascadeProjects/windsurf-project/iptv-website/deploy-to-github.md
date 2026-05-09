# GitHub Deployment Instructions

## Issue: Files not showing up in GitHub

The problem is that Git is not installed on your system. You need to install Git first.

## Step 1: Install Git

### Option A: Download from Git website
1. Go to https://git-scm.com/download/win
2. Download and run the installer
3. Restart your computer

### Option B: Install via package manager
```bash
# Using Chocolatey
choco install git

# Using Scoop
scoop install git
```

## Step 2: Initialize Git Repository

After installing Git, open terminal in project folder and run:

```bash
cd "c:\Users\HP\Documents\GitHub\EZTV\src\components\CascadeProjects\windsurf-project\iptv-website"
git init
git add .
git commit -m "Initial commit - EZSTREAM IPTV Website"
```

## Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Connect Vercel to GitHub
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect and deploy

### Option B: Manual Deployment
1. Run: `npm run build`
2. Upload `dist/` folder to Vercel
3. Set root directory to `dist/`

## Files That Should Be in GitHub

After proper setup, your repository should contain:
```
iptv-website/
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

After deployment, check:
1. GitHub repository shows all files
2. Vercel deploys successfully
3. Website loads at your domain
4. No raw JavaScript code displayed

## Troubleshooting

If files still don't show up:
1. Check if Git is installed: `git --version`
2. Verify you're in correct directory
3. Check GitHub permissions
4. Verify Vercel configuration

## Important Notes

- Use `dist/` folder for Vercel deployment
- Source code stays in `src/` folder
- `.gitignore` prevents unnecessary files from being committed
- `vercel.json` handles routing for static hosting
