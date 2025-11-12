// animation for counting up numbers
import { useState, useRef, useEffect } from "react";

function CountUp({ end, duration = 1400 }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef();

  useEffect(() => {
    let startTime = null;
    const step = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.round(progress * end);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration]);

  return <div className="stat-value">{value.toLocaleString()}</div>;
}

// stats section component
export default function Stats() {
  const stats = [
    { id: 1, label: "Animals Rescued", value: 12452, icon: "/assets/icon/rescue.png", alt: "Rescue icon" },
    { id: 2, label: "Adoptions", value: 8913, icon: "/assets/icon/adoption.png", alt: "Adoption icon" },
    { id: 3, label: "Foster Homes", value: 1204, icon: "/assets/icon/foster.png", alt: "Foster homes icon" },
    { id: 4, label: "Volunteers", value: 324, icon: "/assets/icon/volunteer.png", alt: "Volunteers icon" },
  ];

  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  // use intersection observer to start count up when in view
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // render stats section
  return (
    <section className="stats section" aria-labelledby="stats-heading" ref={ref}>
      <div className="container">
        <h2 id="stats-heading">Our Impact</h2>

        {stats.map((s) => (
          <div key={s.id} className="stat-card" role="group" aria-label={`${s.label}: ${s.value}`}>
            <img src={s.icon} alt={s.alt} className="stat-icon" />
            {started ? <CountUp end={s.value} duration={1400} /> : <div className="stat-value">0</div>}
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
