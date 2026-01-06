'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LeistungenPage() {
  const router = useRouter();

  useEffect(() => {
    // Weiterleitung zur Startseite
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Weiterleitung zur Startseite...</p>
      </div>
    </div>
  );
}

