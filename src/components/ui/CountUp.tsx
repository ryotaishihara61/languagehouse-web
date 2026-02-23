'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: string;   // "415,774" や "288" など
  duration?: number; // アニメーション時間 (ms)
}

function parse(val: string): number {
  return parseInt(val.replace(/,/g, ''), 10);
}

function format(n: number, withComma: boolean): string {
  return withComma ? n.toLocaleString('ja-JP') : String(n);
}

export default function CountUp({ value, duration = 2000 }: CountUpProps) {
  const withComma = value.includes(',');
  const target = parse(value);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();

          function tick(now: number) {
            const elapsed = now - t0;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCurrent(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCurrent(target);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{format(current, withComma)}</span>;
}
