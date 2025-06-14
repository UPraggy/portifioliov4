import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'portifoliov4',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null, // se não quiser usar PWA
      copy: [
        { src: 'static' }, // garante que a pasta será copiada,
        { src: 'global/fonts.css'}
      ],
      baseUrl: '',//'/portifoliov4/',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
