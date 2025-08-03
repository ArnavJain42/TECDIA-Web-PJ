import React, { useEffect, useRef, useCallback, useMemo } from "react";

const translation = {
  en: {
    name : "Shingo Koyama",
    contactText : "Contact Me",
    title:"President of Tecdia Inc.",
    handle:"president",
    status:"Leading Tecdia",
  },
  jp: {
    name: "小山 真悟",
    contactText: "お問い合わせ",
    title: "株式会社テクダイヤ 代表取締役社長",
    handle: "社長",
    status: "テクダイヤを牽引中"

  },
  cn: {
    name: "小山真悟",
    contactText: "联系我",
    title: "Tecdia公司总裁",
    handle: "总裁",
    status: "领导特克迪亚"

  }
}

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), rgba(255, 215, 0, 0.15) 4%, rgba(255, 165, 0, 0.12) 10%, rgba(255, 140, 0, 0.08) 30%, transparent 70%), radial-gradient(35% 52% at 55% 20%, rgba(0, 255, 255, 0.08) 0%, transparent 100%), conic-gradient(from 124deg at 50% 50%, rgba(0, 255, 255, 0.25) 0%, rgba(64, 224, 255, 0.15) 40%, rgba(64, 224, 255, 0.15) 60%, rgba(0, 255, 255, 0.25) 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
};

const clamp = (value, min = 0, max = 100) =>
  Math.min(Math.max(value, min), max);

const round = (value, precision = 3) =>
  parseFloat(value.toFixed(precision));

const adjust = (value, fromMin, fromMax, toMin, toMax) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCardComponent = ({
  avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  behindGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  name = "Shingo Koyama",
  showUserInfo = true,
  onContactClick,
  language
}) => {
  const t = translation[language]
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;

    const updateCardTransform = (offsetX, offsetY, card, wrap) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const intensity = Math.hypot(centerX, centerY) / 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(intensity, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
        "--shine-intensity": `${clamp(intensity * 0.8, 0.3, 1)}`,
        "--glare-angle": `${round(Math.atan2(centerY, centerX) * (180 / Math.PI) + 90)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (duration, startX, startY, card, wrap) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", pointerEnterHandler);
      card.removeEventListener("pointermove", pointerMoveHandler);
      card.removeEventListener("pointerleave", pointerLeaveHandler);
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
  ]);

  const cardStyle = useMemo(
    () => ({
      "--behind-gradient": showBehindGradient
        ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT)
        : "none",
      perspective: "1000px",
      transformStyle: "preserve-3d",
    }),
    [showBehindGradient, behindGradient]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
      <div
        ref={wrapRef}
        className={`relative w-96 h-[520px] cursor-pointer ${className}`}
        style={cardStyle}
      >
        <style jsx>{`
          .card-3d {
            transform-origin: center center;
            transform-style: preserve-3d;
            transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          }
          
          .active .card-3d {
            transform: rotateY(var(--rotate-y)) rotateX(var(--rotate-x));
          }
          
          /* Enhanced animated border glow */
          .card-border::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            background: linear-gradient(45deg, 
              rgba(0, 255, 255, 0.8) 0%,
              rgba(64, 224, 255, 0.6) 20%,
              rgba(255, 215, 0, 0.5) 40%,
              rgba(255, 140, 0, 0.6) 60%,
              rgba(255, 165, 0, 0.7) 80%,
              rgba(0, 255, 255, 0.8) 100%
            );
            background-size: 400% 400%;
            border-radius: 1.625rem;
            z-index: -1;
            opacity: 0.4;
            filter: blur(1.5px);
            animation: shimmer 3s ease-in-out infinite;
          }
          
          .active .card-border::before {
            opacity: 0.9;
            filter: blur(2px);
            animation: shimmer 1.5s ease-in-out infinite;
          }
          
          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          /* Ultra shiny background gradient effect */
          .card-bg::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--behind-gradient);
            border-radius: 1.5rem;
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
          }
          
          .active .card-bg::after {
            opacity: 1;
          }
          
          /* Primary shine effect - follows cursor */
          .card-shine {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at var(--pointer-x) var(--pointer-y), 
                rgba(255, 255, 255, calc(0.15 * var(--shine-intensity))) 0%, 
                rgba(255, 255, 255, calc(0.08 * var(--shine-intensity))) 20%, 
                rgba(255, 255, 255, calc(0.03 * var(--shine-intensity))) 40%, 
                transparent 70%
              );
            border-radius: 1.5rem;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }
          
          .active .card-shine {
            opacity: 1;
          }
          
          /* Holographic reflection effect */
          .card-holographic {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              conic-gradient(from var(--glare-angle) at var(--pointer-x) var(--pointer-y),
                transparent 0deg,
                rgba(0, 255, 255, 0.1) 30deg,
                rgba(255, 0, 255, 0.08) 60deg,
                rgba(255, 215, 0, 0.1) 90deg,
                rgba(0, 255, 0, 0.06) 120deg,
                rgba(255, 0, 0, 0.08) 150deg,
                transparent 180deg
              ),
              linear-gradient(
                calc(var(--glare-angle) + 45deg), 
                transparent 30%, 
                rgba(255, 255, 255, 0.05) 50%, 
                transparent 70%
              );
            border-radius: 1.5rem;
            opacity: 0;
            transition: opacity 0.3s ease, background 0.2s ease;
            pointer-events: none;
            mix-blend-mode: screen;
          }
          
          .active .card-holographic {
            opacity: 1;
          }
          
          /* Moving light reflection */
          .card-glare {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              linear-gradient(
                var(--glare-angle), 
                transparent 20%, 
                rgba(255, 255, 255, calc(0.08 * var(--shine-intensity))) 48%,
                rgba(255, 255, 255, calc(0.12 * var(--shine-intensity))) 52%,
                transparent 80%
              );
            border-radius: 1.5rem;
            opacity: 0;
            transition: opacity 0.3s ease, background 0.2s ease;
            pointer-events: none;
          }
          
          .active .card-glare {
            opacity: 1;
          }

          /* Enhanced noise/grain texture */
          .card-texture {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.008) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.008) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.008) 0%, transparent 50%),
              radial-gradient(circle at 60% 30%, rgba(0, 255, 255, 0.003) 0%, transparent 40%),
              radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.003) 0%, transparent 40%);
            border-radius: 1.5rem;
            opacity: 0.9;
            mix-blend-mode: overlay;
            pointer-events: none;
          }

          /* Prismatic edge effect */
          .card-prism {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(ellipse at var(--pointer-x) 0%, 
                rgba(255, 0, 150, 0.03) 0%, 
                transparent 40%
              ),
              radial-gradient(ellipse at 100% var(--pointer-y), 
                rgba(0, 255, 150, 0.03) 0%, 
                transparent 40%
              ),
              radial-gradient(ellipse at var(--pointer-x) 100%, 
                rgba(150, 0, 255, 0.03) 0%, 
                transparent 40%
              ),
              radial-gradient(ellipse at 0% var(--pointer-y), 
                rgba(255, 150, 0, 0.03) 0%, 
                transparent 40%
              );
            border-radius: 1.5rem;
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
            mix-blend-mode: screen;
          }
          
          .active .card-prism {
            opacity: 1;
          }

          /* Sparkle effect */
          .card-sparkle {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image:
              radial-gradient(1px 1px at calc(var(--pointer-x) + 20px) calc(var(--pointer-y) - 30px), white, transparent),
              radial-gradient(1px 1px at calc(var(--pointer-x) - 40px) calc(var(--pointer-y) + 10px), white, transparent),
              radial-gradient(1px 1px at calc(var(--pointer-x) + 10px) calc(var(--pointer-y) + 40px), white, transparent),
              radial-gradient(1px 1px at calc(var(--pointer-x) - 20px) calc(var(--pointer-y) - 10px), white, transparent);
            border-radius: 1.5rem;
            opacity: 0;
            transition: opacity 0.2s ease;
            pointer-events: none;
            animation: twinkle 2s ease-in-out infinite alternate;
          }
          
          .active .card-sparkle {
            opacity: calc(0.6 * var(--shine-intensity));
          }

          @keyframes twinkle {
            0% { opacity: 0; }
            100% { opacity: calc(0.8 * var(--shine-intensity, 1)); }
          }
        `}</style>
        
        <section
          ref={cardRef}
          className="card-3d card-bg card-border p-10 w-full h-full rounded-3xl relative bg-gradient-to-br from-slate-800/95 to-slate-700/95 border border-slate-600/30 overflow-hidden backdrop-blur-sm"
        >
          <div className="card-texture"></div>
          <div className="card-shine"></div>
          <div className="card-holographic"></div>
          <div className="card-glare"></div>
          <div className="card-prism"></div>
          <div className="card-sparkle"></div>
          
          <div className="relative w-full h-full p-8 flex flex-col justify-evenly items-center z-10">
            {/* Main Content */}
            <div className="flex flex-col items-center text-center">
              <img
                className="w-44 h-44 rounded-full object-cover mb-6 border-2 border-slate-500/40 shadow-2xl"
                src= {"./画像 (2).png"}
                alt={"Shingo"}
                loading="lazy"
                onError={(e) => {
                  const target = e.target;
                  target.style.display = "none";
                }}
              />
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                  {t.name}
                </h3>
                <p className="text-base text-slate-300 font-normal">
                  {t.title}
                </p>
              </div>
            </div>

            {/* User Info Section */}
            {showUserInfo && (
              <div className="w-[90%] bg-slate-800/70 backdrop-blur-md border border-slate-600/40 rounded-2xl p-[10px] flex justify-between items-center mt-6 shadow-lg" style={{paddingRight: "10px"}}>
                <div className="flex items-center gap-3" style={{padding: "5px"}}>
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-500/40 ">
                    <img
                      src={"./画像 (2).png"}
                      alt={`${name || "User"} mini avatar`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target;
                        target.style.opacity = "0.5";
                        target.src = avatarUrl;
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm font-semibold text-white">
                      @{t.handle}
                    </div>
                    <div className="text-xs text-green-400 font-medium">
                      {t.status}
                    </div>
                  </div>
                </div>
                
                <button
                  className="bg-gradient-to-r from-slate-700/80 to-slate-600/80 border border-slate-500/50 text-white px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 backdrop-blur-sm hover:from-slate-600/80 hover:to-slate-500/80 hover:border-slate-400/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/30 active:translate-y-0"
                  style={{ padding: "4px 8px" }}
                  onClick={handleContactClick}
                  type="button"
                  aria-label={`Contact ${name || "user"}`}
                >
                  {t.contactText}
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;