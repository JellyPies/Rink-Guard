import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.rinkguard',
  appName: 'rinkguard',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
