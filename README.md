# Navigation API polyfill

![Tests](https://github.com/frehner/appHistory/workflows/Tests/badge.svg)

⚠️ Not for production. Use at your own risk; there will be breaking changes because the spec is not yet finalized ⚠️

A work-in-progress polyfill for the [Navigation API proposal](https://github.com/WICG/navigation-api).

## Usage

This polyfill must run in a browser-like environment (e.g. an env that has `window.location` and `window.history`).

To setup the polyfill so that it will automatically listen for anchor tag clicks, do the following:

```js
await import('@ar2r13/navigation')

// navigation is now on the window
window.navigation.navigate()
```

Alternatively, you can create your own instance of Navigation:

```js
import { Navigation } from '@ar2r13/navigation'
const navigation = new Navigation()

// use your own instance of appHistory, without any events from things like anchor tags
navigation.navigate();
```
