# GitLook
 
A minimal GitHub profile explorer built while learning how to handle REST APIs with React and Axios. Search any GitHub username and get a clean breakdown of their profile stats and public repositories.
 
**Live Demo → [gitlook-ace.vercel.app](https://gitlook-ace.vercel.app/)**
 
---
 
## What It Does
 
- Fetches user profile and repository data from the GitHub public API concurrently
- Aggregates total star count across all public repos on the fly
- Renders repos in a clean grid with language, stars, description, and last-updated timestamp
- Handles loading, error (including 404s), and empty states cleanly
- Single-page — no routing, just conditional state rendering
---
 
## Stack
 
- **React 19** + **Vite**
- **Tailwind CSS v4**
- **Axios** for API requests
- **React Icons**
---
 
## Hit a 403 Error?
 
GitHub's unauthenticated API allows **60 requests/hour per IP**. If you're testing heavily or on shared Wi-Fi, you'll hit that ceiling fast and get a `403 Forbidden` response.
 
Your code isn't broken — it's just a rate limit.
 
**Fix:** Switch to a mobile hotspot (fresh IP = reset counter), or generate a [Personal Access Token](https://github.com/settings/tokens) and pass it as an `Authorization` header in your Axios requests. Authenticated requests get 5,000/hour.
 
---
 
## License
 
MIT
