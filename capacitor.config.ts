import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	plugins: {
		CapacitorHttp: {
			enabled: true,
		},
	},
	appId: 'io.ionic.starter',
	appName: 'SOS Toscana',
	webDir: 'www',
	server: {
		androidScheme: 'https'
	}
};

export default config;
