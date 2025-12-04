# GitHub Pages Setup Guide

This guide will walk you through setting up your portfolio on GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Step-by-Step Setup

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `manoj-portfolio`)
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 2: Update Base Path (Important!)

**If your repository name is NOT `portfolio`**, you need to update the base path:

1. Open `.github/workflows/deploy.yml`
2. Find the lines with `BASE_PATH` and `ASSET_PREFIX`
3. Replace `/portfolio` with `/[your-repository-name]`

For example, if your repo is `my-portfolio`, change:
```yaml
BASE_PATH: /portfolio
ASSET_PREFIX: /portfolio
```
to:
```yaml
BASE_PATH: /my-portfolio
ASSET_PREFIX: /my-portfolio
```

4. Also update `next.config.js`:
```javascript
basePath: process.env.NODE_ENV === 'production' ? (process.env.BASE_PATH || '/my-portfolio') : '',
assetPrefix: process.env.NODE_ENV === 'production' ? (process.env.ASSET_PREFIX || '/my-portfolio') : '',
```

**Special Case**: If your repository is named `[username].github.io`, set basePath to empty string `''` in both files.

### Step 3: Initialize Git and Push to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. The page will automatically refresh

### Step 5: Trigger the Deployment

The GitHub Actions workflow will automatically run when you push to the `main` branch. If it doesn't start automatically:

1. Go to the **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow
3. Click on it and click "Run workflow" if needed

### Step 6: Wait for Deployment

1. Go to the **Actions** tab
2. Click on the running workflow
3. Wait for it to complete (usually takes 2-5 minutes)
4. Once complete, you'll see a green checkmark

### Step 7: Access Your Portfolio

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example:
- If repo is `portfolio`: `https://yourusername.github.io/portfolio/`
- If repo is `[username].github.io`: `https://yourusername.github.io/`

## Updating Your Portfolio

Whenever you make changes:

1. Make your changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. GitHub Actions will automatically rebuild and redeploy your site
4. Wait 2-5 minutes for the deployment to complete

## Troubleshooting

### Site shows 404 or blank page

1. **Check base path**: Make sure `BASE_PATH` matches your repository name
2. **Check Actions**: Go to Actions tab and see if the workflow failed
3. **Check Pages settings**: Ensure "GitHub Actions" is selected as the source

### Assets not loading (CSS/JS broken)

- This usually means the `basePath` is incorrect
- Double-check that `BASE_PATH` and `ASSET_PREFIX` match your repository name
- Make sure you've updated both `.github/workflows/deploy.yml` and `next.config.js`

### Workflow fails

1. Check the Actions tab for error messages
2. Common issues:
   - Node version mismatch (should be 18+)
   - Missing dependencies
   - Build errors

### Using a Custom Domain

If you want to use a custom domain:

1. Update `next.config.js` to set `basePath: ''` and `assetPrefix: ''`
2. Update `.github/workflows/deploy.yml` to set `BASE_PATH: ''` and `ASSET_PREFIX: ''`
3. Add a `CNAME` file in the `public` folder with your domain name
4. Configure DNS settings in your domain provider
5. Add the custom domain in GitHub Pages settings

## Quick Reference

- **Repository URL**: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`
- **Portfolio URL**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- **Actions**: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions`
- **Pages Settings**: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/settings/pages`

## Need Help?

- Check GitHub Actions logs in the Actions tab
- Verify all configuration files are correct
- Make sure your repository is public
- Ensure GitHub Actions is enabled in repository settings

