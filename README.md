# AI Safety Incident Dashboard

A modern, responsive dashboard for tracking and managing AI safety incidents. Built with React and modern web technologies.

## Features

- 📊 View and manage AI safety incidents
- 🔍 Filter incidents by severity (Low, Medium, High)
- ⏱️ Sort incidents by date
- ➕ Report new incidents with form validation
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- ♿ Accessible components using Headless UI

## Tech Stack

- React 18 with JavaScript
- Vite for build tooling
- TailwindCSS for styling
- Headless UI for accessible components
- React Query for state management
- React Hook Form for form handling
- date-fns for date formatting

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Design Decisions

- Used Vite instead of Create React App for better performance and modern features
- Implemented TailwindCSS for utility-first styling approach
- Chose Headless UI for accessible components while maintaining design flexibility
- Used React Query for efficient state management and caching
- Implemented React Hook Form for performant form handling with validation

## Project Structure

```
src/
  ├── components/        # Reusable UI components
  ├── data/             # Mock data
  ├── hooks/            # Custom React hooks
  ├── utils/            # Helper functions
  └── App.jsx           # Main application component
```
