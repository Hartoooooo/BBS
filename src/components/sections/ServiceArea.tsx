import { MapPin } from 'lucide-react';
import { berlinDistricts, brandenburgTowns, site } from '@/content/site';

const ServiceArea = () => {
  return (
    <section aria-labelledby="einsatzgebiet-title" className="py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Einsatzgebiet</p>
          <h2 id="einsatzgebiet-title" className="section-title mt-4">Ganz Berlin & Brandenburg.</h2>
          <p className="body-copy mt-5">
            Unser Betrieb sitzt in {site.city}, direkt an der östlichen Berliner Stadtgrenze. Von hier aus bauen wir barrierefreie
            Bäder in allen Berliner Bezirken und im Brandenburger Umland – mit kurzen Wegen und festen Terminen.
          </p>
          <p className="mt-6 flex items-start gap-3 font-bold text-ink">
            <MapPin className="mt-0.5 h-5 w-5 flex-none text-brand" aria-hidden="true" />
            {site.street}, {site.postalCode} {site.city}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="surface rounded-3xl p-6">
            <h3 className="text-xl font-black text-ink">Berlin – alle Bezirke</h3>
            <ul className="mt-4 grid gap-1.5 text-ink/85">
              {berlinDistricts.map((district) => (
                <li key={district}>{district}</li>
              ))}
            </ul>
          </div>
          <div className="surface rounded-3xl p-6">
            <h3 className="text-xl font-black text-ink">Brandenburg</h3>
            <ul className="mt-4 grid gap-1.5 text-ink/85">
              {brandenburgTowns.map((town) => (
                <li key={town}>{town}</li>
              ))}
              <li>und weitere Orte im Umland</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
