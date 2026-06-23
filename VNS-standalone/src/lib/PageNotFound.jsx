import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-obsidian">
      <div className="text-center">
        <h1 className="text-7xl font-light text-white/20">404</h1>
        <h2 className="text-2xl font-medium text-white mt-4">Page Not Found</h2>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-8 inline-flex items-center px-6 py-3 text-sm font-mono text-black bg-white hover:bg-accent transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
