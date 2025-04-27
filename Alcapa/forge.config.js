module.exports = {
    packagerConfig: {
      asar: true,
    },
    rebuildConfig: {},
    makers: [
      {
        name: '@electron-forge/maker-squirrel',
        config: {
          name: 'Alcapa', // App name
          authors: 'Zahid', // Your name
          description: 'A shared journal app', // Short description of your app
          icon: './path/to/icon.ico', // Optional: Path to your icon (if you have one)
        },
      },
      {
        name: '@electron-forge/maker-deb',
        config: {
          maintainer: 'Zahid',
          description: 'A shared journal app',
        },
      },
    ],
  };
  