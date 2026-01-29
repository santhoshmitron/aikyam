# Aikyam Deployment Guide

Complete guide for deploying Aikyam to production.

## Quick Start - Deploy to Vercel (Recommended)

### Step 1: Prerequisites
- GitHub account with the repository
- Vercel account (free tier available)

### Step 2: Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste your GitHub repository URL
5. Click "Import"

### Step 3: Configure Environment Variables

In Vercel dashboard, go to **Settings → Environment Variables** and add:

```
NEXT_PUBLIC_APP_NAME=Aikyam
NEXT_PUBLIC_APP_DOMAIN=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-analytics-id
NEXT_PUBLIC_CONTACT_EMAIL=hello@aikyam.in
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at your Vercel URL
4. Configure custom domain in **Settings → Domains**

## Deploy to Docker Container

### Prerequisites
- Docker and Docker Compose installed
- Server with Docker support (AWS EC2, DigitalOcean, etc.)

### Build and Run Locally

```bash
# Build the Docker image
docker build -t aikyam:latest .

# Run the container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_APP_DOMAIN=http://localhost:3000 \
  aikyam:latest

# Or use docker-compose
docker-compose up --build
```

### Deploy to Production Server

```bash
# Build image
docker build -t aikyam:latest .

# Tag for registry (e.g., Docker Hub)
docker tag aikyam:latest yourregistry/aikyam:latest

# Push to registry
docker push yourregistry/aikyam:latest

# On production server
docker run -d \
  --name aikyam \
  --restart always \
  -p 80:3000 \
  -e NEXT_PUBLIC_APP_DOMAIN=https://yourdomain.com \
  yourregistry/aikyam:latest
```

## Deploy to AWS EC2

### Prerequisites
- AWS account
- EC2 instance (t3.micro or larger)
- Ubuntu 22.04 LTS

### Setup Steps

1. **Connect to your instance:**
```bash
ssh -i your-key.pem ec2-user@your-instance-ip
```

2. **Install Node.js and npm:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Install PM2 (Process Manager):**
```bash
sudo npm install -g pm2
```

4. **Clone repository:**
```bash
git clone <your-repo-url>
cd aikyam
```

5. **Install dependencies:**
```bash
npm install
```

6. **Build the project:**
```bash
npm run build
```

7. **Start with PM2:**
```bash
pm2 start npm --name "aikyam" -- start
pm2 save
pm2 startup
```

8. **Setup Nginx reverse proxy:**
```bash
sudo apt-get install -y nginx

# Create Nginx config
sudo cat > /etc/nginx/sites-available/aikyam << EOF
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable site
sudo ln -s /etc/nginx/sites-available/aikyam /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

9. **Setup SSL with Let's Encrypt:**
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Deploy to DigitalOcean App Platform

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create Apps"
3. Select GitHub as source
4. Select your repository
5. Configure:
   - **Build Command:** `npm install && npm run build`
   - **Run Command:** `npm start`
   - **HTTP Port:** 3000
6. Add environment variables
7. Click "Deploy"

## Deploy to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select your repository
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Add environment variables
7. Click "Deploy site"

## Deploy to Self-Hosted Server

### Using systemd service

1. Clone repository and build
2. Create systemd service file:

```bash
sudo cat > /etc/systemd/system/aikyam.service << EOF
[Unit]
Description=Aikyam Next.js Application
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/aikyam
ExecStart=/usr/bin/npm start
Restart=on-failure
RestartSec=10
StandardOutput=inherit
StandardError=inherit
Environment="NODE_ENV=production"
Environment="NEXT_PUBLIC_APP_DOMAIN=https://yourdomain.com"

[Install]
WantedBy=multi-user.target
EOF
```

3. Enable and start service:
```bash
sudo systemctl daemon-reload
sudo systemctl enable aikyam
sudo systemctl start aikyam
sudo systemctl status aikyam
```

## Environment Variables for Production

```bash
# Required
NEXT_PUBLIC_APP_NAME=Aikyam
NEXT_PUBLIC_APP_DOMAIN=https://yourdomain.com

# Optional
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-id
NEXT_PUBLIC_CONTACT_EMAIL=hello@aikyam.in
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## SSL/TLS Certificate

### Using Let's Encrypt (Free)

```bash
# Certbot with automatic renewal
sudo certbot certonly --standalone -d yourdomain.com
```

### Configure in Nginx

```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
}
```

## DNS Configuration

Point your domain to your hosting provider:

- **Vercel:** Use nameservers from Vercel
- **AWS Route53:** Create CNAME/A records
- **DigitalOcean:** Create A record pointing to app IP
- **Traditional:** Create CNAME record pointing to app server

## Performance Optimization

### Image Optimization
- Images are automatically optimized by Next.js
- Serves WebP and AVIF formats

### Caching
- Static assets cached for 1 year
- HTML pages cached with revalidation

### Database/API
- Consider adding Redis for caching
- Implement rate limiting for APIs

## Monitoring and Logging

### PM2 Monitoring
```bash
pm2 logs aikyam
pm2 monit
```

### Nginx Logs
```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Application Monitoring (Optional)
- Sentry for error tracking
- New Relic for performance monitoring
- DataDog for comprehensive monitoring

## Backup Strategy

### Database Backups
```bash
# Daily backup schedule
0 2 * * * /backup/database.sh
```

### Code Backups
- Use GitHub as backup
- Enable auto-backups on server

## Security Checklist

- [ ] SSL/TLS certificate installed
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] Environment variables secured
- [ ] Firewall rules configured
- [ ] DDoS protection enabled
- [ ] Regular security updates
- [ ] Backup strategy in place

## Troubleshooting Deployment

### Build Failures

```bash
# Check build logs
npm run build

# Clear cache
rm -rf .next
npm run build
```

### Memory Issues

```bash
# Increase Node.js memory
export NODE_OPTIONS=--max-old-space-size=2048
npm run build
```

### Port Already in Use

```bash
# Find and kill process on port 3000
lsof -i :3000
kill -9 <PID>
```

## Post-Deployment

1. Test all pages and features
2. Verify SEO:
   - Check sitemap.xml
   - Check robots.txt
   - Verify meta tags
3. Test on mobile devices
4. Check Core Web Vitals
5. Monitor analytics
6. Setup uptime monitoring

## Rollback Plan

If deployment goes wrong:

```bash
# Revert to previous commit
git revert HEAD

# Rebuild and redeploy
npm run build
npm start
```

## Support

For deployment issues, contact: hello@aikyam.in

## Additional Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Nginx Configuration](https://nginx.org/en/docs/)
