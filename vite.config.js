import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					if (/\.png$/.test(assetInfo.name)) {
						return 'assets/icons/[name][extname]'; // Avoid hash in filenames for icons
					}
					return 'assets/[name]-[hash][extname]'; // Keep hash for other files
				},
			},
		},
	},
});
