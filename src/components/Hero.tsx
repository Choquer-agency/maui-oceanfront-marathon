"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useCallback } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
  backgroundVideo?: {
    videoId: string;
    startSeconds: number;
    endSeconds: number;
  };
}

/* YouTube IFrame API types */
interface YTPlayer {
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  destroy: () => void;
}

interface YTPlayerOptions {
  videoId: string;
  playerVars: Record<string, number | string>;
  events: {
    onReady: (e: { target: YTPlayer }) => void;
    onStateChange: (e: { data: number }) => void;
  };
}

declare global {
  interface Window {
    YT: {
      Player: new (el: string | HTMLElement, opts: YTPlayerOptions) => YTPlayer;
      PlayerState: { ENDED: number; PAUSED: number };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

function YouTubeBackground({
  videoId,
  startSeconds,
  endSeconds,
}: {
  videoId: string;
  startSeconds: number;
  endSeconds: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const initPlayer = useCallback(() => {
    if (!containerRef.current || playerRef.current) return;

    const el = document.createElement("div");
    el.id = "hero-yt-player";
    containerRef.current.appendChild(el);

    playerRef.current = new window.YT.Player(el, {
      videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        start: startSeconds,
        end: endSeconds,
        loop: 0,
        disablekb: 1,
        fs: 0,
      },
      events: {
        onReady: (e) => {
          e.target.seekTo(startSeconds, true);
          // Poll to loop the segment
          intervalRef.current = setInterval(() => {
            const iframe = containerRef.current?.querySelector("iframe");
            if (!iframe) return;
            // YouTube doesn't expose getCurrentTime via postMessage easily,
            // so we rely on onStateChange ENDED to loop
          }, 500);
        },
        onStateChange: (e) => {
          // When video ends (reaches endSeconds), loop back to startSeconds
          if (e.data === window.YT.PlayerState.ENDED) {
            playerRef.current?.seekTo(startSeconds, true);
          }
        },
      },
    });
  }, [videoId, startSeconds, endSeconds]);

  useEffect(() => {
    // Load YouTube IFrame API if not already loaded
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [initPlayer]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden [&_iframe]:absolute [&_iframe]:top-1/2 [&_iframe]:left-1/2 [&_iframe]:-translate-x-1/2 [&_iframe]:-translate-y-1/2 [&_iframe]:w-[400%] [&_iframe]:h-[400%] [&_iframe]:min-w-[177vh] [&_iframe]:min-h-[100vh]"
    />
  );
}

export function Hero({
  title,
  subtitle,
  eyebrow,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
  backgroundVideo,
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center lg:items-end overflow-hidden"
      {...(backgroundVideo ? { "data-hero-dark": "" } : {})}
    >
      {/* Background video */}
      {backgroundVideo ? (
        <>
          <YouTubeBackground
            videoId={backgroundVideo.videoId}
            startSeconds={backgroundVideo.startSeconds}
            endSeconds={backgroundVideo.endSeconds}
          />
          {/* Fallback color while video loads */}
          <div className="absolute inset-0 bg-ink/40" />
        </>
      ) : backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand/30 via-sage/20 to-sand" />
      )}

      {/* Gradient overlay — adjusted for video readability */}
      {backgroundVideo ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-peach/10" />
        </>
      )}

      {/* Content — positioned at bottom */}
      <div className="relative z-10 w-full py-20 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`text-[16px] font-bold uppercase tracking-[0.3em] mb-4 ${
                backgroundVideo ? "text-brand-light" : "text-brand"
              }`}
            >
              {eyebrow}
            </motion.p>
          )}

          {/* Big bold condensed title */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className={`font-display text-[clamp(3.5rem,10vw,9rem)] font-bold uppercase leading-[0.9] tracking-tight ${
              backgroundVideo ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className={`mt-6 max-w-lg text-base sm:text-lg leading-relaxed ${
                backgroundVideo ? "text-white/80" : "text-ink-light/80"
              }`}
            >
              {subtitle}
            </motion.p>
          )}

          {(ctaText || secondaryCtaText) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {ctaText && ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-dark transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className={`inline-flex items-center rounded-full border-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all ${
                    backgroundVideo
                      ? "border-white/40 text-white hover:border-white"
                      : "border-ink/30 text-ink hover:border-ink"
                  }`}
                >
                  {secondaryCtaText}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
