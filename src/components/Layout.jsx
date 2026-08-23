import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const phases = [
    { id: 1, path: '/fase1', label: 'Fase 1' },
    { id: 2, path: '/fase2', label: 'Fase 2' },
    { id: 3, path: '/fase3', label: 'Fase 3' },
    { id: 4, path: '/fase4', label: 'Fase 4' },
    { id: 5, path: '/fase5', label: 'Fase 5' },
    { id: 6, path: '/fase6', label: 'Fase 6' },
    { id: 'anexos', path: '/anexos', label: 'Anexos' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-corporate-gray text-corporate-darkgray font-sans">
      {/* Header Corporativo */}
      <header className="bg-corporate-navy text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-yellow-500" />
              <div>
                <h1 className="font-bold text-xl leading-none tracking-wider">VANGUARD</h1>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase">IT Audit Group</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-1">
              {phases.map((phase) => (
                <NavLink
                  key={phase.id}
                  to={phase.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-corporate-blue text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`
                  }
                >
                  {phase.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <ScrollToTopButton />

      {/* Footer Corporativo */}
      <footer className="bg-corporate-navy text-gray-400 py-6 text-sm text-center border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Vanguard IT Audit Group S.R.L. - Trabajo de Integración Grupal (TIG)</p>
          <p className="mt-1">Auditoría en Sistemas de Información | UTN-FRT</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
