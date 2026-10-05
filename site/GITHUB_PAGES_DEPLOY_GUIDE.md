# 🚀 How to Host Your B.Com Study Portal on GitHub Pages (Free)

Your website is built with **Vite + React + Tailwind CSS** with relative path resolution (`base: './'`). It requires zero monthly fees and zero backend servers.

---

## 💻 1. Test Locally on Your Computer

To view and use the website right now on your machine:
```powershell
# Open terminal inside the site folder:
cd c:\Users\akib\Desktop\bcom\site

# Start the blazing-fast local preview server:
npm run preview
# OR for live development mode:
npm run dev
```
Open your browser at `http://localhost:4173` (preview) or `http://localhost:5173` (dev).

---

## 🌐 2. Publish to GitHub Pages in 3 Steps

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Enter any repository name (e.g. `bcom-study-hub` or `bcom`).
3. Keep it **Public** and click **Create repository**.

### Step 2: Push Your Code
Run these commands in PowerShell inside `c:\Users\akib\Desktop\bcom`:
```powershell
cd c:\Users\akib\Desktop\bcom

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit of B.Com study portal and BOM solved papers"

# Link to your new GitHub repository
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Turn on GitHub Pages in Repository Settings
1. Go to your GitHub repository $\rightarrow$ Click **Settings** (top right tab).
2. On the left sidebar, click **Pages**.
3. Under **Build and deployment** $\rightarrow$ **Source**, choose **GitHub Actions**.
4. The `.github/workflows/deploy.yml` workflow will automatically build the site and provide you with a live URL:
   `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/`

---

## 📱 Mobile-Ready & Offline
Once published, you and your college friends can bookmark the site on iPhones, Android phones, tablets, or laptops for seamless 24/7 dark-mode revision before examinations!
