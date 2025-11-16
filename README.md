# React JWT Authentication

## Tech Stack

- React 19
- React Router DOM
- Axios (HTTP client with interceptors)
- TanStack React Query
- React Hook Form
- Tailwind CSS v4
- DaisyUI

## Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Usage

### Test Credentials

The app uses [DummyJSON API](https://dummyjson.com) for testing.

**Login with:**

- Username: `emilys`
- Password: `emilyspass`

More test users: https://dummyjson.com/users

## Project Structure

```
src/
├── api/auth.js              # API endpoints
├── components/
│   └── ProtectedRoute.jsx   # Route guard
├── context/
│   └── AuthContext.jsx      # Global auth state
├── hooks/
│   ├── useLogin.js          # Login mutation
│   └── useLogout.js         # Logout mutation
├── lib/
│   └── axios.js             # Axios config with interceptors
├── Pages/
│   ├── Home.jsx             # Protected dashboard
│   └── Login.jsx            # Login page
├── App.jsx                  # Route configuration
└── main.jsx                 # App entry point
```

## Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=https://dummyjson.com
```

## Public Hosting

https://ia-04-ten.vercel.app

## License

MIT
