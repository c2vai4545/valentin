'use client';

import { FaHome, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { validateCode } from '../utils/codes';
import Swal from 'sweetalert2';

export default function Navbar() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validatedCode = validateCode(code);

    if (validatedCode) {
      setShowModal(false);
      setCode('');
      router.push(validatedCode.route);
    } else {
      Swal.fire({
        title: '¡Alto ahí!',
        text: '¿Quieres hacer trampa?? Acaso crees que te dejaré seguir sin que encuentres tu próxima pista??',
        icon: 'error',
        confirmButtonText: 'Lo siento 😔',
        background: '#fce7f3',
        confirmButtonColor: '#ec4899',
        color: '#374151',
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-12 bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="h-full max-w-screen-xl mx-auto px-4 flex items-center justify-center gap-4">
          <button
            onClick={() => router.push('/')}
            className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
          >
            <FaHome className="text-pink-600 text-xl" />
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
          >
            <FaArrowRight className="text-pink-600 text-xl" />
          </button>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ingresa el código</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                placeholder="Código secreto..."
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Continuar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 