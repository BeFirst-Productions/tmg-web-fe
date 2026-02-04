"use client";
import { useState, useEffect, useRef } from "react";
import {
  Instagram,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Container } from "../layout/Container";
import { motion, useAnimation, useInView } from "framer-motion";

/**
 * SocialMediaCards (Framer Motion in-view animations)
 * - Title, subtitle, control buttons, cards, captions and the "View on Instagram" button
 *   all animate when the section enters the viewport.
 * - preserves your existing logic (mock posts, smooth swap, auto-scroll)
 */

export default function SocialMediaCards() {
  // --- default mock posts (instant visible content) ---
  const defaultPosts = [
    {
      id: "1",
      mediaUrl: "/assets/images/social/insta_post1.jpg",
      caption: "Certified translators you can trust!",
      timestamp: "2025-01-01T00:00:00.000Z",
      postUrl:
        "https://www.instagram.com/p/DPnhR92Ac3q/?igsh=Z3R0d2V6dDM2ajF4",
    },
    {
      id: "2",
      mediaUrl: "/assets/images/social/insta_post2.jpg",
      caption:
        "Start your UAE business with IFZA — the fastest-growing free zone in Dubai!",
      timestamp: "2025-01-01T00:00:00.000Z",
      postUrl:
        "https://www.instagram.com/p/DPf32iigdge/?igsh=eWJ4MDNiZnRrdmc3",
    },
    {
      id: "3",
      mediaUrl: "/assets/images/social/insta_post3.jpg",
      caption:
        "Start your own Event Management Company in Dubai with expert guidance from TMG Global.",
      timestamp: "2025-01-01T00:00:00.000Z",
      postUrl:
        "https://www.instagram.com/p/DPdad30gdH2/?igsh=MTB0NDM0ZzJrZXlnZg==",
    },
    {
      id: "4",
      mediaUrl: "/assets/images/social/insta_post4.jpg",
      caption: "Simplify Your Legal Matters Online with TMG Global! ✨",
      timestamp: "2025-01-01T00:00:00.000Z",
      postUrl:
        "https://www.instagram.com/p/DPS7fckgUxF/?igsh=MTg5d2cwdWNpeGwzZg==",
    },
    {
      id: "5",
      mediaUrl: "/assets/images/social/insta_post5.jpg",
      caption: "Celebrating the legacy of peace, truth, and harmony. ✨",
      timestamp: "2025-01-01T00:00:00.000Z",
      postUrl:
        "https://www.instagram.com/p/DPS5ooFgbCb/?igsh=NXc3OGVqZmRuNHAy",
    },
    {
      id: "6",
      mediaUrl: "/assets/images/social/insta_post6.jpg",
      caption:
        "Empowering your business with AI-powered solutions for a future-ready tomorrow.",
      timestamp: "2025-01-01T00:00:00.000Z",
      postUrl:
        "https://www.instagram.com/p/DM9pmedtM9G/?igsh=YmxnbXVkNGowZ290",
    },
  ];

  // --- state & refs ---
  const [posts, setPosts] = useState([]); // raw posts array used for rendering (updated from API)
  const [visiblePosts, setVisiblePosts] = useState([
    ...defaultPosts,
    ...defaultPosts,
    ...defaultPosts,
  ]); // what user sees immediately
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false); // controls crossfade
  const scrollContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const isMountedRef = useRef(true);

  // Framer Motion controls & viewport ref
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px -10% 0px" });

  // --- auto-scroll (kept same as before) ---
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!autoScroll) return;

    const smoothScroll = () => {
      if (scrollContainerRef.current) {
        scrollPositionRef.current += 0.8;
        const container = scrollContainerRef.current;
        // width: card width (320) + gap (24) * number of visible items per set (6)
        const singleSetWidth = (320 + 24) * 6;

        if (scrollPositionRef.current >= singleSetWidth) {
          scrollPositionRef.current = 0;
        }

        container.scrollLeft = scrollPositionRef.current;
      }
      animationFrameRef.current = requestAnimationFrame(smoothScroll);
    };

    animationFrameRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [autoScroll]);

  // When section enters/leaves view, animate (every time)
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      // reset to hidden so it will animate again next time
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // --- manual scroll buttons (same) ---
  const scroll = (dir) => {
    if (scrollContainerRef.current) {
      const amt = dir === "left" ? -340 : 340;
      const newPos = scrollContainerRef.current.scrollLeft + amt;
      scrollPositionRef.current = newPos;
      scrollContainerRef.current.scrollBy({ left: amt, behavior: "smooth" });
    }
  };

  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ------------------------
  // Fetch API posts & smooth swap logic
  // ------------------------
  useEffect(() => {
    const controller = new AbortController();
    const API_BASE = process.env.NEXT_PUBLIC_INSTAGRAM_API;
    // If no API URL is configured, we rely on defaultPosts and do not fetch
    if (!API_BASE) return;

    const endpoint = `${API_BASE}/api/instagram?limit=6`;

    // helper: map API post shape -> local post shape used by component
    const mapApiToPost = (apiItem) => {
      return {
        id: apiItem.id,
        mediaUrl: apiItem.media_url || apiItem.thumbnail_url || "", // prefer media_url
        caption: apiItem.caption || "",
        timestamp: apiItem.timestamp || new Date().toISOString(),
        postUrl: apiItem.permalink || "#",
      };
    };

    // smooth swap function: fade current visible -> new content
    const smoothSwap = (newPosts) => {
      if (!isMountedRef.current) return;
      // set flag to run CSS transitions
      setIsUpdating(true);
      // after short fade-out, replace visiblePosts -> fade-in
      const FADE_OUT_MS = 220;
      const FADE_IN_MS = 300;
      setTimeout(() => {
        if (!isMountedRef.current) return;
        const expanded = [...newPosts, ...newPosts, ...newPosts];
        setVisiblePosts(expanded);
        setTimeout(() => {
          if (!isMountedRef.current) return;
          setIsUpdating(false);
        }, FADE_IN_MS);
      }, FADE_OUT_MS);
    };

    // fetch and process
    (async () => {
      try {
        const res = await fetch(endpoint, { signal: controller.signal, cache: "no-store" });
        if (!res.ok) {
          console.warn("Instagram API returned non-OK:", res.status);
          return;
        }
        const json = await res.json();
        const apiItems = Array.isArray(json.data) ? json.data : [];
        if (!apiItems.length) {
          return;
        }

        // ensure newest-first sort
        apiItems.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        // map and slice to `limit` (6)
        const top = apiItems.slice(0, 6).map(mapApiToPost);

        // set raw posts (optional) and swap visually
        setPosts(top);
        smoothSwap(top);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("Failed to fetch instagram posts:", err);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  // --- CSS helper classes for smooth crossfade (applied to container) ---
  const containerTransitionClass = isUpdating
    ? "opacity-30 transition-opacity duration-200"
    : "opacity-100 transition-opacity duration-300";

  // --- Framer motion variants ---
  const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, when: "beforeChildren" } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const controlsVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, when: "beforeChildren" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const captionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } },
  };

  const innerButtonVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="max-w-7xl mx-auto pt-16 pb-16 md:pb-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            {/* Header (animated) */}
            <motion.div
              className="opacity-0"
              variants={headerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.h2
                variants={headerVariants}
                className="text-5xl md:text-5xl font-bold bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-center bg-clip-text text-transparent mb-2"
              >
                Social Media
              </motion.h2>

              <motion.p variants={headerVariants} className="text-gray-600 text-lg flex items-center gap-2">
                <Instagram className="w-5 h-5 text-pink-600" />
                Follow our latest updates
              </motion.p>
            </motion.div>

            {/* Controls (animated) */}
            <motion.div variants={controlsVariants} initial="hidden" animate={controls} className="flex items-center gap-4">
              <div className="flex gap-2">
                <motion.button
                  onClick={() => scroll("left")}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 border border-gray-200"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </motion.button>

                <motion.button
                  onClick={() => scroll("right")}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 border border-gray-200"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="relative" ref={sectionRef}>
            <motion.div
              ref={scrollContainerRef}
              className={`flex gap-6 overflow-x-auto pb-4 scrollbar-hide ${containerTransitionClass}`}
              onMouseEnter={() => setAutoScroll(false)}
              onMouseLeave={() => setAutoScroll(true)}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {visiblePosts.map((post, idx) => (
                <motion.div
                  key={`${post.id}-${idx}`}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleCardClick(post.postUrl)}
                  variants={cardVariants}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={post.mediaUrl}
                        alt={post.caption}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundColor: "#f3f3f3" }}
                        loading="lazy"
                      />

                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg transform transition-all duration-300 group-hover:scale-110">
                          <Instagram className="w-5 h-5 text-pink-600" />
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <motion.div
                          className="transform transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                          variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                        >
                          <motion.p
                            className="text-white font-semibold text-lg mb-3 line-clamp-2 leading-snug drop-shadow-lg"
                            variants={captionVariants}
                          >
                            {post.caption}
                          </motion.p>

                          <motion.div variants={innerButtonVariants}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardClick(post.postUrl);
                              }}
                              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                            >
                              <span>View on Instagram</span>
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-pink-400 transition-all duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; }

        /* smooth crossfade when isUpdating toggles opacity */
        .opacity-30 { opacity: 0.3; }
        .opacity-100 { opacity: 1; }
      `}</style>
    </div>
  );
}
