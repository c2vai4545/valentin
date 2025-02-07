'use client';

import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function Home() {
  const router = useRouter();

  const handleNo = async () => {
    const result = await Swal.fire({
      title: '¿Estás segura?',
      text: '¿De verdad no quieres vivir esta aventura conmigo?',
      html: '<div style="font-size: 48px; margin-bottom: 10px;">💔</div><div>¿De verdad no quieres vivir esta aventura conmigo?</div>',
      showCancelButton: true,
      confirmButtonText: 'No, no te amo',
      cancelButtonText: 'Está bien, vamos',
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#ec4899',
      background: '#fce7f3',
      color: '#374151',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showDenyButton: false,
      showCloseButton: false,
      customClass: {
        popup: 'rounded-lg shadow-lg',
        title: 'text-2xl font-bold text-red-600',
        htmlContainer: 'text-gray-700',
        confirmButton: 'rounded-full font-semibold',
        cancelButton: 'rounded-full font-semibold'
      }
    });

    if (result.isDismissed || result.dismiss === Swal.DismissReason.cancel) {
      router.push('/inicio');
    } else if (result.isConfirmed) {
      handleNo(); // Only show the alert again if they explicitly click "No"
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-pink-100">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-8">¿Lista para una Aventura?</h2>
        <p className="text-xl text-gray-700 mb-4">
          Estás a punto de comenzar un viaje lleno de amor y recuerdos especiales.
        </p>
        <p className="text-xl text-gray-700 mb-8">
          ¿Te atreves a vivir esta experiencia conmigo?
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push('/inicio')}
            className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-semibold text-lg"
          >
            ¡Sí, quiero!
          </button>
          <button
            onClick={handleNo}
            className="px-8 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors font-semibold text-lg"
          >
            No estoy segura
          </button>
        </div>
      </div>
    </div>
  );
}
