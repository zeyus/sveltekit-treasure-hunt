# Geo-location Treasure Hunt App

This is a step-by-step treasure hunt designed for one of my kids' playgroups. It works on mobile devides and uses the GPS to tell the player how far away they are from the next target. When they get close enough (set to 10m), they can click a button to reveal the next clue (right now, this can be bypassed by refreshing the page manually, this is intentional because I didn't want something to go wrong with the GPS and the kids to be stuck).

for a live demo see: [http://zeyus.com/sveltekit-treasure-hunt/](http://zeyus.com/sveltekit-treasure-hunt/)

## Features

- [x] GPS location tracking
- [x] Distance to next target
- [x] Clue reveal button
- [x] Clue reveal on distance threshold
- [x] Step by step questions, answers and clues (obviously can be adapted to be relevant to the location)
- [x] Mobile friendly
- [x] Works completely serverless, and is deployable on github pages
- [x] Prevents little sneaks from just changing the URL to the next question (they don't yet know how to mess with browser storage).
- [x] Can to back to previous clues
- [ ] Final real-life prize optional

## Structure

Question and answer templates are in [`src/components/`](src/components/). The main step-by-step is in [`src/routes/hunt/[step=integer]/+page.svelte`](src/routes/hunt/[step=integer]/+page.svelte).

You can configure the questions, answers, locations and image paths in the [`src/lib/quiz.json`](src/lib/quiz.json) file. Images are stored in the [`static/`](static/) folder. Subdirectory / base path configuration is in the [`svelte.config.js`](svelte.config.js) file.

_Note:_ If you deploy a static version like the preview version above, you will need to configure the `prerender` `entries` with the number of questions you have, e.g. for 7 questions you would set it like so:

```javascript
const config = {
  // ...
  prerender: {
			entries: [
				'*',
				'/hunt/1',
				'/hunt/2',
				'/hunt/3',
				'/hunt/4',
				'/hunt/5',
				'/hunt/6',
				'/hunt/7',
			]
		}
}
```

This ensures that each of those paths exists .


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
