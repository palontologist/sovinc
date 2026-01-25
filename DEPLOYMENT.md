# Deployment Guide

## Deploying to Vercel

This project is configured to deploy to Vercel. Follow these steps to ensure successful deployment:

### Prerequisites

1. Make sure you have access to the Vercel project
2. Ensure your git commits are authored with an account that has access to the Vercel project

### Git Author Configuration

If you encounter the error:
```
Deployment request did not have a git author with contributing access to the project on Vercel
```

This means your git commits are not authored by an account that has access to the Vercel project. To fix this:

1. Check the repository owner or contributors with Vercel access:
   ```bash
   git log --format="%an <%ae>" | sort -u
   ```

2. Configure git with a GitHub account that has Vercel access to this project:
   ```bash
   git config user.name "your-github-username"
   git config user.email "your-github-email@example.com"
   ```
   
   **Important**: Use the email associated with your GitHub account that has access to the Vercel project. You can find your GitHub email in your GitHub settings or use the format: `YOUR_GITHUB_ID+username@users.noreply.github.com`

3. Verify your configuration:
   ```bash
   git config --list | grep user
   ```

4. Make your changes and commit them. The new commits will use the configured author.

### Deployment Steps

1. Push your changes to the repository:
   ```bash
   git push origin your-branch-name
   ```

2. Vercel will automatically detect the push and start a deployment

3. Monitor the deployment status in your Vercel dashboard

### Automatic Deployments

- **Production**: Commits to the `main` branch automatically deploy to production
- **Preview**: Commits to other branches create preview deployments

### Manual Deployment

If automatic deployment doesn't work, you can deploy manually using the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Troubleshooting

- **Build Errors**: Check the build logs in Vercel dashboard
- **Environment Variables**: Make sure all required environment variables are set in Vercel project settings
- **Author Access**: Ensure commits are authored by a user with Vercel project access
