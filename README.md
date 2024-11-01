# Codeforces Explorer Chrome Extension

Extension is based on [react-content-script](https://github.com/yosevu/react-content-script) template.

This project uses [Vite](https://vitejs.dev/) and [crxjs](https://crxjs.dev/vite-plugin) to build the extension.

## Setup
https://www.youtube.com/watch?v=g1JUdPvTSEk&ab_channel=hitarth
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

# v1.1.0
- Added option to hide/unhide problem tags under [Codeforces > Settings >General](https://codeforces.com/settings/general)
![image](https://github.com/user-attachments/assets/ba8bd062-3a4e-49de-986f-5ea999f66b01)
- Hides the tags by default when the setting is turned on.
![image](https://github.com/user-attachments/assets/bf04bffc-8317-4905-a502-cc0b45b97010)
- Clicking on `Problem Tags` will hide/unhide the problem tags and clicking on `Show Rating` will show the rating of the current problem.
![image](https://github.com/user-attachments/assets/801f4371-90e6-4e52-a415-1c3b16f7bd45)

