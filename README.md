# Rohan Kumar Portfolio

Static portfolio for an AI/CV/NLP researcher-engineer profile.

## Free 1-Year+ Deployment

Use GitHub Pages. It is free for public repositories and does not require a paid server, backend, or expiring trial.

### Deploy

1. Push these files to `rohanrepo123/My-PortoFolio` on the `main` branch.
2. In GitHub, open `Settings > Pages`.
3. Set `Source` to `GitHub Actions`.
4. Open the `Actions` tab and run `Deploy Portfolio to GitHub Pages`, or push to `main`.

The site will publish at:

```text
https://rohanrepo123.github.io/My-PortoFolio/
```

If the workflow fails at `Configure Pages`, GitHub Pages has not been enabled yet. Open:

```text
https://github.com/rohanrepo123/My-PortoFolio/settings/pages
```

Then set `Build and deployment > Source` to `GitHub Actions` and rerun the latest workflow.

## GitHub Repo Tracker

The portfolio includes a client-side tracker that fetches public repository metadata from:

```text
https://api.github.com/users/rohanrepo123/repos
```

It refreshes while the page is open, stores the last seen repo push timestamps in `localStorage`, and highlights repositories updated since the visitor's previous snapshot.

## Local Preview

From this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```
