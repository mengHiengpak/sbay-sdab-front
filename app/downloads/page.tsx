'use client';

import { useApp } from '@/context/AppContext';
import type { DownloadEntry } from '@/lib/types';

export default function DownloadsPage() {
  const { state } = useApp();
  const { activeDownloads } = state;
  const items = Object.values(activeDownloads) as DownloadEntry[];

  return (
    <div className="animate-fade-in">
      <h1 className="font-serif text-[2rem] italic text-text-primary leading-[1.2] mb-7">ទាញ់យក</h1>
      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-12 text-text-muted text-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 opacity-40">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <p className="text-[0.9rem]">គ្មានការទាញ់យកនៅឡើយទេ</p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={item.toastId || i} className="bg-bg-card border border-border rounded-2xl p-4">
              <p className="text-[0.9rem] text-text-primary font-medium truncate">{item.title}</p>
              <p className="text-[0.75rem] text-text-muted mt-1">{item.status || 'Downloading...'}</p>
              {item.progress !== undefined && (
                <div className="mt-2 h-1.5 bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-accent-violet rounded-full transition-all" style={{ width: `${item.progress}%` }} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
