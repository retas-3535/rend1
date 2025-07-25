// server/index.ts
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes.js'; // routes.ts içindeki export default

const app = express();
const PORT = process.env.PORT || 3000;

// ES Module ortamında __dirname elde et
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JSON ve form verilerini parse et
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API rotaları
app.use('/api', routes);

// Statik dosyaları sun (Vite build sonrası)
app.use(express.static(path.join(__dirname, '../dist/client')));

// Tek sayfa uygulaması (SPA) için fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/client/index.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`🚀 Server çalışıyor: http://localhost:${PORT}`);
});
