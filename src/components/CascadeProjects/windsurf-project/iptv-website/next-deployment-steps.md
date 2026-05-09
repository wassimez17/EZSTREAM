# Next Steps After Git Installation

## Git Installation Confirmation

Since you've installed Git, let's verify and proceed with deployment.

## Step 1: Verify Git Installation

Open PowerShell or Command Prompt and run:
```bash
git --version
```

If you see a version number, Git is installed successfully!

## Step 2: Initialize Git Repository

```bash
cd "c:\Users\HP\Documents\GitHub\EZTV\src\components\CascadeProjects\windsurf-project\iptv-website"
git init
git add .
git commit -m "Initial commit - EZSTREAM IPTV Website"
```

## Step 3: Connect to GitHub Repository

```bash
git remote add origin https://github.com/wassimez17/EZSTREAM.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Automatic (Recommended)
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository: `wassimez17/EZSTREAM`
4. Vercel will automatically detect and deploy

### Option B: Manual
1. Run: `npm run build`
2. Upload `dist/` folder to Vercel
3. Set root directory to `dist/`

## Step 5: Verify Deployment

1. Check GitHub repository shows all files
2. Check Vercel deployment status
3. Test website at your domain (ezstream.live)
4. Verify no raw JavaScript code is displayed

## Common Issues & Solutions

### Issue: "git not recognized"
**Solution**: Restart computer after Git installation

### Issue: "Permission denied"
**Solution**: Run PowerShell as Administrator

### Issue: "SSL certificate problems"
**Solution**: Configure Git SSL settings or use GitHub Desktop

### Issue: Files not showing on GitHub
**Solution**: 
1. Check you're in correct directory
2. Verify remote URL is correct
3. Check internet connection

## Files That Should Be on GitHub

After successful push:
```
EZSTREAM/
├── .gitignore          # Excludes node_modules, dist
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── README.md           # Project documentation
├── src/               # Source code
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── translations.js
├── public/             # Static assets
└── dist/              # Built files (excluded by .gitignore)
```

## Success Indicators

✅ Git commands execute without errors
✅ Files appear on GitHub repository
✅ Vercel deployment completes successfully
✅ Website loads properly at ezstream.live
✅ No raw JavaScript code displayed

## Troubleshooting Commands

If issues persist, try these commands:
```bash
# Check Git status
git status

# Check remote configuration
git remote -v

# Check branch
git branch

# Force push (if needed)
git push -f origin main
```

## Important Notes

- Use the correct repository URL: `wassimez17/EZSTREAM`
- The `dist/` folder should NOT be committed (it's in .gitignore)
- Vercel will build from source code, not from dist/
- Make sure to use `main` branch (not `master`)

## Quick Deployment Checklist

- [ ] Git installed and verified
- [ ] Repository initialized
- [ ] Files committed to Git
- [ ] Remote connected to GitHub
- [ ] Pushed to GitHub
- [ ] Vercel connected to GitHub
- [ ] Deployment successful
- [ ] Website loads at ezstream.live

Once all steps are completed, your EZSTREAM website will be live and working properly! 🚀
