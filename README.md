# IronLog

A workout tracker for lifts and runs that installs on your phone like a normal app and works offline.

## Publish on GitHub Pages

1. Open your `ironlog` repository on github.com.
2. Delete the old `index.html` (and `ironlog.html` if it's there).
3. Click **Add file → Upload files** and drag in **everything in this folder**, keeping the `fonts`, `icons` and `vendor` folders.
4. Click **Commit changes**. The site updates in a minute or two at `https://<your-username>.github.io/ironlog/`.

## Install on your phone

- **iPhone (Safari):** open the site, tap **Share**, choose **Add to Home Screen**, then **Add**.
- **Android (Chrome):** open the site, tap **Install** when prompted, or use the ⋮ menu → **Install app**.

## Your data

Workouts are stored on the device, not on a server.

- On **iPhone**, the home-screen app keeps its own data, separate from Safari. Before installing, open the site in Safari, go to the settings sheet (top-right icon) → **Backup**, then open the installed app and use **Import** to bring that backup in.
- On **Android**, the installed app shares data with Chrome, so nothing needs moving.

Export a backup now and then from the settings sheet. If the phone is lost or the app is deleted, the data goes with it.

## Updates

Upload new files the same way. The next time you open the app, a banner offers **Update**. Tap it to switch to the new version.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page |
| `app.js` | The app code |
| `manifest.webmanifest` | App name, icons and colours for installing |
| `sw.js` | Service worker that makes the app work offline and handles updates |
| `icons/` | Home-screen and browser icons |
| `vendor/` | React and Recharts, bundled so nothing loads from the internet |
| `fonts/` | Bebas Neue, Inter and JetBrains Mono, bundled locally |
