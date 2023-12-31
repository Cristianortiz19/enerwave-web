import { resolve } from "path";
import { defineConfig} from "vite";

const root = resolve(__dirname,'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build:{
        outDir,
        emptyOutDir:true,
        rollupOptions: {
            input:{
                main: resolve(root, 'index.html'),
                "home": resolve(root, 'home', 'index.html'),
                "library": resolve(root, 'library', 'index.html'),
                "manuals": resolve(root, 'manuals', 'index.html'),
                "guides": resolve(root, 'guides', 'index.html'),
                "policies": resolve(root, 'library', 'index.html'),
                "learning": resolve(root, 'learning', 'index.html'),
                "tasks": resolve(root, 'tasks', 'index.html'),
                "calendar": resolve(root, 'calendar', 'index.html'),
            }
        },
        target: 'esnext'
    }
})