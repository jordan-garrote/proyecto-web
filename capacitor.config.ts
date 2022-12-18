import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'PadelFixtureUser',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    'GoogleAuth': {
      'scopes': ['profile', 'email'],
      'serverCliendId': '1006375555592-7m7u91rjfivks60j80oo4jg0o89hng33.apps.googleusercontent.com',
      'forceCodeForRefreshToken': true
    }
  }
};

export default config;
