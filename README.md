# Big Medicine 2002 - Campaign Site

A modern React, TypeScript, and Vite-based remake of the "Big Medicine 2002" campaign website.

## Features
- Fully responsive campaign navigation.
- Clean typography and tailored styles.
- Fast performance powered by Vite.

---

## Local Development

To run the project locally on your machine:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   The site will be available locally at [http://localhost:8087/](http://localhost:8087/).

3. **Build for Production:**
   ```bash
   npm run build
   ```

---

## Deployment to GitHub Pages

This project is configured to be hosted on GitHub Pages at `https://nikunjdz.github.io/bigmed2000/`.

### Automatic Deployment via GitHub Actions (Recommended)

1. Go to your repository settings on GitHub: **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Create a new file in your project at `.github/workflows/deploy.yml` with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Set up Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Setup Pages
           uses: actions/configure-pages@v4

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```
4. Commit and push this file to your `main` branch. GitHub Actions will automatically build and publish the site!
