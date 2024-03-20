import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.rinkguard',
  appName: 'rinkguard',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
