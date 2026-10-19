import ProcessTimeline from '@/components/ui/process-timeline';
import { umbauProcess } from '@/content/process';

const Process = () => {
  return (
    <section aria-labelledby="ablauf-title" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-10 max-w-4xl">
          <p className="eyebrow">Ablauf</p>
          <h2 id="ablauf-title" className="section-title mt-4">In fünf Schritten zum sicheren Bad.</h2>
          <p className="body-copy mt-5">Ein fester Ansprechpartner von der ersten Beratung bis zur Abnahme.</p>
        </div>
        <ProcessTimeline steps={umbauProcess} />
      </div>
    </section>
  );
};

export default Process;
