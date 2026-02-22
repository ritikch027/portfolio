import { useEffect, useState } from "react";

export function useScrollSpy(ids, options) {
  const [activeId, setActiveId] = useState(ids?.[0] ?? null);

  useEffect(() => {
    if (!ids?.length) return;
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (!visible.length) return;
      visible.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
      const id = visible[0]?.target?.id;
      if (id) setActiveId(id);
    }, options);

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids, options]);

  return activeId;
}

