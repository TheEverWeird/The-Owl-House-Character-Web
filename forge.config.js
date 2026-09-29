module.exports = {
  packagerConfig: {
    asar: true,
    icon: './img/app-icons/icon',
    name: 'The Owl House Character Web',
    executableName: 'toh-web',
    ignore: (file) => {
      if (file === '/package.json') return false;
      if (
        /^\/\.git($|\/)/.test(file) ||
        /^\/\.github($|\/)/.test(file) ||
        /^\/out($|\/)/.test(file)
      ) {
        return true;
      }
      return false;
    }
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
      // FIXED: Separated platforms into individual array elements
      name: '@electron-forge/maker-zip',
      platforms: ['win32', 'linux'], 
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    // {
    //   name: '@electron-forge/maker-flatpak',
    //   config: {
    //    options: {
    //      id: 'com.github.theeverweird.the-owl-house-character-web',
    //      branch: 'stable',
    //      // FIXED: Using highly compatible LTS baselines recognized by electron-forge
    //      base: 'org.electronjs.Electron2.BaseApp',
    //      baseVersion: '23.08',
    //      runtime: 'org.freedesktop.Platform',
    //      runtimeVersion: '23.08',
    //      sdk: 'org.freedesktop.Sdk',
    //      finishArgs: [
    //        '--socket=wayland',
    //        '--socket=fallback-x11',
    //        '--share=ipc',
    //        '--share=network',
    //        '--socket=pulseaudio',
    //        '--device=dri'
    //      ]
    //    }
    //   }
    // }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};