# cPanel Deployment Instructions

## Method 1: Manual Deployment (Recommended)

### Step 1: Build the Project Locally
1. Download this project as ZIP from Lovable
2. Extract the ZIP file on your computer
3. Open terminal/command prompt in the project folder
4. Run these commands:
   ```bash
   npm install
   npm run build
   ```

### Step 2: Upload to cPanel
1. Go to cPanel File Manager
2. Navigate to `public_html` folder
3. Delete any existing files in `public_html`
4. Upload ALL files from the `dist` folder (created after build) to `public_html`
5. Upload the `.htaccess` file to `public_html` root

### Step 3: Verify .htaccess File
Make sure this .htaccess file is in your public_html root:
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## Method 2: Using cPanel Git Deploy (if available)
1. Connect your repository to cPanel Git
2. The `.cpanel.yml` file will handle the build process automatically

## Common Issues:
- **Blank page**: Upload `dist` folder contents, not source code
- **404 on refresh**: Make sure `.htaccess` file is uploaded
- **Images not loading**: Check file paths are correct in `dist` folder

## File Structure in public_html should look like:
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [image files]
├── .htaccess
└── [other built files]
```