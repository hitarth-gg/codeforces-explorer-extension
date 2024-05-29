# Codeforces Explorer Chrome Extension

Extension is based on [react-content-script](https://github.com/yosevu/react-content-script) template.

This project uses [Vite](https://vitejs.dev/) and [crxjs](https://crxjs.dev/vite-plugin) to build the extension.

## Setup

### Clone repository
```sh
git clone git@github.com:hitarth-gg/codeforces-explorer-extension.git
```

### Install dependencies

```sh
yarn
```

### Build extension

```
yarn build
```

### Load extension

1. Navigate to [chrome://extensions/](chrome://extensions/)
1. Turn on the "Developer mode" toggle switch in the top right of the window
1. Click the "Load unpacked" button in top left of the window
1. Go to the `codeforces-explorer-extension` directory and select the `dist` directory to load the extension
1. Navigate to https://codeforces.com/profile/hitvrth to see the `CF-EXPLORER` button.
[img]
1. `CF-EXPLORER` button is also available at `/problemset/*` & `/contest/*` routes.
e.g.
    ```sh
    https://codeforces.com/problemset/problem/1480/C
    https://codeforces.com/contest/1977/problem/B
    ```

