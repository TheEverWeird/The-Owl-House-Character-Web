module.exports = {
  packagerConfig: {
    asar: true,
    icon: './img/app-icons/icon',
    name: 'The Owl House Character Web',
    osxSign: {},
    ignore: [
      /^\/\.git($|\/)/,
      /^\/\.github($|\/)/,
      /^\/out($|\/)/
    ]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'The_Owl_House_Character_Web',
        setupIcon: './img/app-icons/icon.ico'
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        name: 'The Owl House Character Web',
        icon: './img/app-icons/icon.icns',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['win32'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};