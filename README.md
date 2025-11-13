# RNR Build - Construction Company Website

A fullstack web application for a construction company with customer quote/contact system.

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Hook Form + Yup
- Axios

### Backend (To be implemented)
- Node.js
- Express
- MongoDB
- Mongoose

## Project Structure

```
RNR/
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── layouts/      # Layout components
│   │   ├── api/          # API configuration
│   │   ├── types/        # TypeScript types
│   │   └── utils/        # Utility functions
│   └── public/
│       └── images/       # Image assets
└── backend/          # Node.js backend (to be implemented)
```

## Getting Started

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Build for Production

```bash
cd frontend
npm run build
```

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Service showcase
- ✅ Project gallery
- ✅ Contact form with validation
- ✅ Customer testimonials
- ⏳ Backend API (in progress)
- ⏳ Admin dashboard (planned)

## Deployment

Frontend can be deployed to Vercel:
1. Connect GitHub repository
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/dist`
4. Add environment variables if needed

## License

Private project

