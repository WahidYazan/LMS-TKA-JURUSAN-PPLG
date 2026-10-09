# Setup Google OAuth untuk Login

## Langkah-langkah Setup

### 1. Buat Project di Google Cloud Console

1. Buka [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru atau pilih project yang sudah ada
3. Masuk ke **APIs & Services** > **Credentials**

### 2. Buat OAuth 2.0 Credentials

1. Klik **+ Create Credentials** > **OAuth client ID**
2. Pilih application type: **Web application**
3. Beri nama aplikasi (misal: "TKA PPLG")
4. Tambahkan authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `http://localhost:3000` (untuk development)
   - Tambahkan production URL jika sudah deploy (misal: `https://yourdomain.com/api/auth/callback/google`)
5. Klik **Create**

### 3. Copy Credentials

Setelah dibuat, Anda akan mendapatkan:
- **Client ID** - Copy ini
- **Client Secret** - Copy ini

### 4. Setup Environment Variables

1. Buat file `.env.local` di root project (sudah ada `.env.local.example` sebagai template)
2. Isi dengan credentials yang sudah dicopy:

```env
GOOGLE_CLIENT_ID=your_actual_client_id_here
GOOGLE_CLIENT_SECRET=your_actual_client_secret_here
NEXTAUTH_SECRET=generate_random_string_here
NEXTAUTH_URL=http://localhost:3000
```

### 5. Generate NEXTAUTH_SECRET

Untuk generate random string untuk NEXTAUTH_SECRET, jalankan:

```bash
# Linux/Mac
openssl rand -base64 32

# Windows PowerShell
[System.Web.Security.Membership]::GeneratePassword(32, 4)

# Atau gunakan online generator seperti https://generate-secret.vercel.app/32
```

### 6. Restart Development Server

Setelah setup environment variables, restart server:

```bash
npm run dev
```

### 7. Test Login

1. Buka `http://localhost:3000/landing`
2. Klik "Mulai Belajar" atau "Login"
3. Klik "Masuk dengan Google"
4. Pilih akun Google Anda
5. Anda akan di-redirect ke dashboard setelah login berhasil

## Troubleshooting

### Error: "Invalid Client"
- Pastikan Client ID dan Client Secret sudah benar
- Cek apakah redirect URI sudah sesuai

### Error: "Redirect URI Mismatch"
- Pastikan redirect URI di Google Console sama dengan yang ada di kode
- Format harus persis sama (termasuk trailing slash)

### Error: "Access Blocked"
- Pastikan OAuth consent screen sudah di-setup
- Untuk development, bisa gunakan "Testing" mode

## Production Deployment

Untuk deployment (Vercel, Netlify, dll):

1. Tambahkan environment variables di platform deployment:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (gunakan production URL)

2. Update authorized redirect URIs di Google Console dengan production URL

3. Deploy aplikasi
