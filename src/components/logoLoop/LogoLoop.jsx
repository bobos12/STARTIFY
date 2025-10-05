import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  memo
} from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiVercel,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiRedux,
  SiFramer,
  SiGraphql,
} from "react-icons/si";
import "./LogoLoop.css"; // ✅ keep your CSS for fade & animation

// =================== CONFIG ===================
const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const toCssLength = (value) =>
  typeof value === "number" ? `${value}px` : value ?? undefined;

// =================== HOOKS ===================
const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener("resize", handleResize);
      callback();
      return () => window.removeEventListener("resize", handleResize);
    }

    const observers = elements.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => observers.forEach((observer) => observer?.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) onLoad();
    };

    images.forEach((img) => {
      if (img.complete) handleImageLoad();
      else {
        img.addEventListener("load", handleImageLoad, { once: true });
        img.addEventListener("error", handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

        track.style.transform = `translate3d(${-nextOffset}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

// =================== COMPONENT ===================
const LogoLoop = memo(
  ({
    logos,
    speed = 120,
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = "Partner logos",
    className,
    style,
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState(2);
    const [isHovered, setIsHovered] = useState(false);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const dirMultiplier = direction === "left" ? 1 : -1;
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * dirMultiplier * speedMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + 2;
        setCopyCount(Math.max(2, copiesNeeded));
      }
    }, []);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

    const handleMouseEnter = useCallback(() => pauseOnHover && setIsHovered(true), [pauseOnHover]);
    const handleMouseLeave = useCallback(() => pauseOnHover && setIsHovered(false), [pauseOnHover]);

    const renderLogoItem = useCallback((item, key) => {
      const isNodeItem = "node" in item;
      const content = isNodeItem ? item.node : <img src={item.src} alt={item.alt ?? ""} />;
      return (
        <li className="logoloop__item" key={key} role="listitem">
          {item.href ? (
            <a href={item.href} target="_blank" rel="noreferrer">
              {content}
            </a>
          ) : (
            content
          )}
        </li>
      );
    }, []);

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, i) => (
          <ul key={i} ref={i === 0 ? seqRef : undefined} className="logoloop__list">
            {logos.map((item, j) => renderLogoItem(item, `${i}-${j}`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem]
    );

    const containerStyle = useMemo(
      () => ({
        width: toCssLength(width) ?? "100%",
        "--logoloop-gap": `${gap}px`,
        "--logoloop-logoHeight": `${logoHeight}px`,
        ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
        ...style,
      }),
      [width, gap, logoHeight, fadeOutColor, style]
    );

    const rootClass = [
      "logoloop",
      fadeOut && "logoloop--fade",
      scaleOnHover && "logoloop--scale-hover",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={containerRef}
        className={rootClass}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="logoloop__track" ref={trackRef}>
          {logoLists}
        </div>
      </div>
    );
  }
);

// =================== USAGE SECTION ===================
const techLogos = [
  // Frontend Core
  { node: <SiHtml5 size={40} color="#E34F26" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 size={40} color="#1572B6" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript size={40} color="#F7DF1E" />, title: "JavaScript", href: "https://javascript.info" },
  { node: <SiTypescript size={40} color="#3178C6" />, title: "TypeScript", href: "https://typescriptlang.org" },

  // Frameworks & UI
  { node: <SiReact size={40} color="#61DAFB" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs size={40} color="#FFFFFF" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss size={40} color="#38BDF8" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiBootstrap size={40} color="#7952B3" />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiRedux size={40} color="#764ABC" />, title: "Redux", href: "https://redux.js.org" },
  { node: <SiFramer size={40} color="#0055FF" />, title: "Framer Motion", href: "https://www.framer.com/motion/" },

  // Backend
  { node: <SiNodedotjs size={40} color="#339933" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress size={40} color="#FFFFFF" />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiGraphql size={40} color="#E10098" />, title: "GraphQL", href: "https://graphql.org" },

  // Database
  { node: <SiMongodb size={40} color="#47A248" />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiFirebase size={40} color="#FFCA28" />, title: "Firebase", href: "https://firebase.google.com" },

  // Tools & Deployment
  { node: <SiGit size={40} color="#F05032" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub size={40} color="#FFFFFF" />, title: "GitHub", href: "https://github.com" },
  { node: <SiPostman size={40} color="#FF6C37" />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiVercel size={40} color="#FFFFFF" />, title: "Vercel", href: "https://vercel.com" },

  // Design
  { node: <SiFigma size={40} color="#F24E1E" />, title: "Figma", href: "https://figma.com" },
];

// ✅ Exportable Section (ready to import into App)
export default function LogoSection() {
  return (
    <div
      style={{
        height: "150px",
        background: "#070707ff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        gap={50}
        fadeOut
        scaleOnHover
      />
    </div>
  );
}
