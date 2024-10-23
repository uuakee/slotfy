import Link from 'next/link';

export default function Nav() {
  return (
    <div className="relative">
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1e1e2d97] p-4 rounded-t-3xl">
        <div className="mx-auto flex justify-between gap-4 text-[12px]">
          <Link 
            href="/auth?tab=login"  // Link para a aba de login
            className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 text-white py-3 px-6 rounded-2xl text-center"
          >
            Entrar
          </Link>

          <Link 
            href="/auth?tab=register"  // Link para a aba de registro
            className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-2xl text-center"
          >
            Registro
          </Link>
        </div>
      </nav>
    </div>
  );
}
