# Codeforces Explorer Chrome Extension

Extension is based on [react-content-script](https://github.com/yosevu/react-content-script) template.

This project uses [Vite](https://vitejs.dev/) and [crxjs](https://crxjs.dev/vite-plugin) to build the extension.

## Setup

### Clone repository
```sh
git clone https://github.com/hitarth-gg/codeforces-explorer-extension
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
1. Navigate to https://codeforces.com/profile/tourist to see the `CF-EXPLORER` button.
    ![image](https://github.com/hitarth-gg/codeforces-explorer-extension/assets/132205558/152064d6-0c6f-4a27-b9d6-6964ef89d991)
1. `CF-EXPLORER` button is also available at `/problemset/*` & `/contest/*` routes.
e.g.
    ```sh
    https://codeforces.com/problemset/problem/1480/C
    https://codeforces.com/contest/1977/problem/B
    ```
    ![image](https://github.com/hitarth-gg/codeforces-explorer-extension/assets/132205558/4aa7bdf3-5253-46ad-bd17-01cbd63750f1)



