import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Crumb } from '@/lib/schema';

// Nach shadcn/ui Breadcrumb (21st.dev)
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const all = [{ name: 'Startseite', path: '/' }, ...crumbs];
  return (
    <nav aria-label="Brotkrumen-Navigation">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm font-bold text-ink/75">
        {all.map((crumb, index) => {
          const isLast = index === all.length - 1;
          return (
            <li key={crumb.path} className="inline-flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-ink">{crumb.name}</span>
              ) : (
                <>
                  <Link href={crumb.path} className="underline-offset-4 hover:text-brand-strong hover:underline">
                    {crumb.name}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
