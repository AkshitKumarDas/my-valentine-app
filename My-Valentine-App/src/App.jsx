import React, { useState, useEffect } from "react";
import {
  Heart,
  Lock,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Quote,
  Unlock,
  Camera,
  Stars,
  Zap,
  Clock,
} from "lucide-react";
import v7 from "./assets/v7.jpeg";
import v8 from "./assets/v8.jpeg";
import v3 from "./assets/v3.jpeg";
import v4 from "./assets/v4.jpeg";
import v10 from "./assets/v10.jpeg";
import v11 from "./assets/v11.jpeg";
import v12 from "./assets/v12.jpeg";
import v13 from "./assets/v13.jpeg";
import v1 from "./assets/v1.jpeg";
import v2 from "./assets/v2.jpeg";
// import v5 from "./assets/v5.jpeg";
// import v6 from "./assets/v6.jpeg";
import v9 from "./assets/v9.png";
import vid1 from "./assets/vid1.mp4";
import vid2 from "./assets/vid2.mp4";
import vid3 from "./assets/vid3.mp4";
const App = () => {
  // State Management
  const [step, setStep] = useState("login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [noButtonPos, setNoButtonPos] = useState({ top: "0px", left: "0px" });
  const [activeDay, setActiveDay] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Seeded pseudo-random generator for deterministic randomization
  const SEEDED_RANDOM = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const timelineData = [
    {
      date: "2026-02-07",
      title: "Rose Day",
      subtitle: "Where it all began",
      story: `
      I remember the first time I gave you a rose,
well, more like a flower.
I don’t remember the name of the flower, like most other things.
But what I do remember is the push and pull.
You might ask, “Push and pull?”
Well, I wanted to give you a flower, but would it have been too direct?
We weren’t in a relationship at that time.
It felt strange. I wanted to give you flowers, but my body wouldn’t move.
Now that we have moved past that,
I realise this Rose Day was never about giving you a rose.
The rose is the flower that bloomed when we met. Our journey started with a simple spark, much like a rosebud waiting to bloom. Every moment since then has been a petal added to our story.`,
      image: v7,
      color: "from-rose-100 to-rose-200",
    },
    {
      date: "2026-02-08",
      title: "Propose Day",
      subtitle: "The Turning Point",
      story: `The day we raised the question was one of fear, suspense, and love.
It was a weird way that we did it.
Most proposals happen before people mutually acknowledge the relationship.
Ours did the exact opposite.
In that moment, when we knew it was the same decision we had both taken,
we awkwardly looked at our friends beside us and said,
“We are making it official!”
As if we had talked for hours to decide that.
No.
It was just a moment of decisiveness, and it felt right.
Our friends looked flabbergasted, but they were happy.
And most of all, so were we.
The proposal came later.
It was not awkward.
It is still vivid to me.
I said to you, while holding your hand —
not bending my knees, but standing straight —
“To the HR, to Minakshi, to my love,
from your CEO — I love you.”
We hugged.
I kissed you on your forehead.
You kissed me on my cheeks.
It’s still on my mind.It wasn’t just a question, it was a realization. 
Today is about that moment I knew you were the one.`,
      image: v8,
      color: "from-pink-100 to-rose-200",
    },
    {
      date: "2026-02-09",
      title: "Chocolate Day",
      subtitle: "The Sweetness of Us",
      story: `Chocolate and us have a long way.
The first time when I felt — and when you felt — that something might be happening between us
was when I gave you that chocolate in Manu Bhai Canteen.
It was a Milkybar.
It’s my favourite.
And I thought, I don’t know your favourite, but at least let me give you my best.
I am not forgetting the great sacrifice made by
the Kumbhakarn Bishal and Fatichar Pratyush
by not accepting the chocolate.
While I did that, chocolates became our way of building this relationship,
slow but surely.
Sometimes Milkybar,
sometimes KitKat,
sometimes Dairy Milk,
other times Allwin, choco sticks, and what not?
The chocolates were just sugar.
The real sweetness came from what I wanted to convey to you,
and what you wanted to convey to me. 
From midnight snacks to shared desserts, you make life infinitely sweeter.`,
      image: v3,
      color: "from-amber-100 to-orange-200",
    },
    {
      date: "2026-02-10",
      title: "Teddy Day",
      subtitle: "Warmth & Comfort",
      story: `When I snuggle you, every touch feels like a pillow,
but with care, kindness, and acceptance.
Not something that holds me in place,
but something that lets me rest.
You are my teddy bear 🧸,
nothing more and nothing less.
Not someone I have to impress,
not someone I have to explain myself to.
This Teddy Day,
I want to hold my teddy bear,
forget the noise, forget the pace,
and go round and round,
just us,
safe in the small circle we make together.

You are my safe haven. Like a warm embrace on a cold night, your presence is the comfort I never knew I needed.`,
      image: v4,
      color: "from-stone-100 to-stone-200",
    },
    {
      date: "2026-02-11",
      title: "Promise Day",
      subtitle: "My Vows to You",
      story: `A lot of promises were made on the day shown in the picture.
It’s embarrassing, but I was indeed falling apart on 2nd Dec 2025.
My thoughts were loud, my head was heavy,
and I didn’t know what I was holding myself together for.
But when I walked with you that day through the SDI campus —
the pink sky of hope,
the subtle breeze,
the massage you gave to my head —
everything slowed down.
For the first time in recent years,
I wasn’t trying to fix myself.
I was just there.
Breathing.
Walking.
With you.
That’s when I promised something —
not out loud, not dramatically,
but quietly, where promises last longer.
In my future, I see you.
No.
I choose to see you.

I promise to choose you every day. I promise to listen, to grow with you, and to be your biggest cheerleader.`,
      image: v10,
      color: "from-blue-50 to-indigo-100",
    },
    {
      date: "2026-02-12",
      title: "Hug Day",
      subtitle: "Home is a Feeling",
      story: `Hugs are the only way for us to show love in public without raising an eyebrow.
You can pretend it’s friendly, and it’s not PDA as per the laws of society’s aunties.
I hug you.
You hug me.
Well, not hug like the Hindi word,
but the English, more classy word —
the one that means wrapping one’s arms around their loved one
and holding them tight.
And the next best step in this course of action
always seems to be a lip-to-lip contact
that might or might not involve tongue,
and is severely disapproved by society’s CCTVs
(50-year-old aunties who have no life).They say home is a place, but for me, home is whenever I’m wrapped in your arms.`,
      image: v11,
      color: "from-warmGray-100 to-orange-100",
    },
    {
      date: "2026-02-13",
      title: "Kiss Day",
      subtitle: "Magic in the Air",
      story: `Well, now that it’s the 13th of February,
it’s supposed to be a bad omen 😯.
But in the case of lovers, it’s the exact opposite.
On the 13th, you cross the first base.
You secure something sacred —
the most humane, the most primal way to realise another human.
A kiss.
I remember our first kiss.
At night.
That night, every SDI guard and every SDI student was deceived by us.
They were no match for our stealth skills.
We hid.
We ran.
We didn’t stay in one place.
But most of all, we kissed.
And that kiss felt like a final seal on everything —
not rushed, not accidental,
just… right.
Every kiss feels like the first time. It’s the electricity of our connection and the silent language of adoration.`,
      image: v12,
      color: "from-red-50 to-rose-100",
    },
    {
      date: "2026-02-14",
      title: "Valentine’s Day",
      subtitle: "Our Forever Begins",
      story: `Well, it’s Valentine’s Day,
exactly 2 months, 11 days, some hours, some minutes,
and maybe some seconds into our relationship.
It feels old though.
Like a 25-year-old couple.
And honestly, that’s how I like it.
I don’t really have anything more to say today.
Just re-watch our video.
And then…
there’s another surprise.`,
      video: vid1,
      color: "from-rose-200 to-pink-300",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim().toLowerCase() === "minakshi" && password === "06052005") {
      setStep("proposal");
    } else if (name.trim().toLowerCase() !== "minakshi") {
      setError("Sorry, this surprise is only for Minakshi! ❤️");
    } else {
      setError("Incorrect password! ✗");
    }
  };

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoButtonPos({ top: `${y}px`, left: `${x}px` });
  };

  const isUnlocked = (index) => {
    const targetDate = new Date(timelineData[index].date);
    targetDate.setHours(0, 0, 0, 0);
    return currentTime >= targetDate;
  };

  const getTimeRemaining = (targetDateStr) => {
    const diff = new Date(targetDateStr) - currentTime;
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    return `${days}d ${hours}h ${minutes}m`;
  };

  const triggerShatter = () => {
    setStep("final");
  };

  // --- RENDERING LOGIC ---

  if (step === "login") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#faf9f6] via-rose-50 to-pink-50 flex items-center justify-center px-6 overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating hearts */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-rose-400 opacity-80"
              style={{
                left: `${i * 12.5}%`,
                animation: `float 15s ease-in infinite`,
                animationDelay: `${i * 0.3}s`,
                fontSize: `${48 + i * 8}px`,
              }}
            >
              ♡
            </div>
          ))}
          {/* Glowing orbs */}
          <div
            className="absolute top-20 left-10 w-40 h-40 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ animation: "blob 7s infinite" }}
          />
          <div
            className="absolute top-40 right-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ animation: "blob 7s infinite 2s" }}
          />
          <div
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ animation: "blob 7s infinite 4s" }}
          />
        </div>

        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-rose-50 text-center space-y-8 animate-in fade-in zoom-in duration-700 relative z-10 backdrop-blur-sm bg-white/95">
          <div className="flex justify-center">
            <div className="p-4 bg-rose-50 rounded-full">
              <Lock className="text-rose-400" size={32} />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-serif font-medium text-slate-800">
              A Secret Garden
            </h1>
            <p className="text-slate-500 italic">
              Enter your name to unlock the 2026 Journey.
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Your beautiful name..."
              className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-200 text-center text-lg transition-all"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
            />
            <input
              type="password"
              placeholder="Enter password..."
              className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-200 text-center text-lg transition-all"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
            {error && (
              <p className="text-rose-500 text-sm animate-bounce">{error}</p>
            )}
            <button className="w-full py-4 bg-rose-500 text-white rounded-xl font-medium hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200">
              Unlock Memories
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (step === "proposal") {
    return (
      <div className="min-h-screen bg-rose-50 flex items-center justify-center overflow-hidden relative">
        <div className="text-center z-10 space-y-12 p-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Heart
            className="mx-auto text-rose-500 fill-rose-500 animate-pulse"
            size={80}
          />
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
            Hey Minakshi,
            <br />
            Will you be my Valentine?
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setStep("timeline")}
              className="px-12 py-4 bg-rose-500 text-white rounded-full text-xl font-bold hover:scale-110 hover:bg-rose-600 transition-all shadow-xl shadow-rose-200"
            >
              YES! ❤️
            </button>
            <button
              onMouseEnter={moveButton}
              onClick={moveButton}
              style={{
                position: noButtonPos.top === "0px" ? "static" : "fixed",
                top: noButtonPos.top,
                left: noButtonPos.left,
                transition: "all 0.2s ease",
              }}
              className="px-12 py-4 bg-white text-slate-400 rounded-full text-xl font-bold border border-slate-200"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  // if (step === "shatter") {
  //   return (
  //     <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden">
  //       <svg className="absolute inset-0 w-full h-full pointer-events-none z-50">
  //         <defs>
  //           <filter id="crack-glow">
  //             <feGaussianBlur stdDeviation="3" result="blur" />
  //             <feComposite in="SourceGraphic" in2="blur" operator="over" />
  //           </filter>
  //         </defs>
  //         {shatterData.paths.map((path, i) => (
  //           <path
  //             key={i}
  //             d={path.d}
  //             stroke="white"
  //             strokeWidth="2"
  //             fill="none"
  //             filter="url(#crack-glow)"
  //             className="animate-crack-draw"
  //             style={{ animationDelay: path.delay }}
  //           />
  //         ))}
  //       </svg>

  //       <div className="absolute inset-0 pointer-events-none z-[60]">
  //         {shatterData.shards.map((shard, i) => (
  //           <div
  //             key={i}
  //             className="absolute bg-white/20 backdrop-blur-md"
  //             style={{
  //               width: shard.width,
  //               height: shard.height,
  //               top: "50%",
  //               left: "50%",
  //               clipPath: shard.clipPath,
  //               "--tx": shard.tx,
  //               "--ty": shard.ty,
  //               "--tr": shard.tr,
  //               animation:
  //                 "shatter-piece-move 3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
  //                 animationDelay: shard.delay,
  //             }}
  //           />
  //         ))}
  //       </div>

  //       <div className="absolute inset-0 bg-white animate-impact-flash z-[70] pointer-events-none opacity-0" />

  //       <div className="text-center space-y-4 z-[55] animate-shake-intense">
  //         <h2 className="text-6xl font-serif italic text-white tracking-tighter">
  //           BREAKING THROUGH
  //         </h2>
  //         <p className="text-rose-400 text-xl font-medium tracking-[0.4em] uppercase">
  //           Revealing our world
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  if (step === "final") {
    return (
      <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 overflow-y-auto animate-final-reveal">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 pt-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-rose-600/20 blur-[100px] rounded-full pointer-events-none" />
            <Stars className="mx-auto text-amber-300 animate-pulse" size={40} />
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none">
              AkshiMin
            </h1>
            <p className="text-rose-400 italic text-2xl font-serif">
              Beyond the timeline, into the heart.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {[
              {
                url: vid3,
                span: "col-span-2 row-span-2",
                isVideo: true,
              },
              {
                url: v2,
                span: "col-span-2 row-span-1",
              },
              {
                url: v1,
                span: "col-span-1 row-span-1",
              },
              {
                url: vid2,
                span: "col-span-1 row-span-2",
                isVideo: true,
              },
              {
                url: v9,
                span: "col-span-2 row-span-1",
              },
              {
                url: v13,
                span: "col-span-1 row-span-1",
              },
            ].map((img, i) => (
              <div
                key={i}
                className={`${img.span} relative group overflow-hidden rounded-2xl border border-white/5`}
              >
                {img.isVideo ? (
                  <video
                    src={img.url}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <img
                    src={
                      img.url.startsWith("http")
                        ? `${img.url}?q=80&w=1000&auto=format&fit=crop`
                        : img.url
                    }
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                    alt="Memory"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-white/[0.03] backdrop-blur-2xl p-12 rounded-[3rem] border border-white/10 text-center space-y-8 relative shadow-2xl">
            <Heart
              className="mx-auto text-rose-500 fill-rose-500 animate-bounce"
              size={40}
            />
            <p className="text-2xl leading-relaxed font-serif italic text-slate-200">
              Tadpole, you aren't just a part of my story, you are starting to
              become the reason I write. While the world outside is cracking and
              changing, what we have built is unbreakable.
            </p>
            <p className="text-rose-400 font-bold tracking-[0.3em] uppercase text-xs">
              Unconditionally Yours, Mendhak
            </p>
          </div>

          <div className="pb-20 text-center">
            <button
              onClick={() => setStep("timeline")}
              className="text-white/40 hover:text-white transition-all text-sm uppercase tracking-widest"
            >
              ← Back to Timeline
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Main Timeline View ---
  const currentIsUnlocked = isUnlocked(activeDay);
  const countdown = getTimeRemaining(timelineData[activeDay].date);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans selection:bg-rose-100 overflow-x-hidden">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-rose-50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="text-rose-500 fill-rose-500" size={20} />
            <span className="font-serif italic text-xl tracking-wide">
              For FishEye🧿
            </span>
          </div>
          <div className="hidden md:flex space-x-1">
            {timelineData.map((_, idx) => {
              const unlocked = isUnlocked(idx);
              return (
                <button
                  key={idx}
                  onClick={() => setActiveDay(idx)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeDay === idx
                      ? "bg-rose-500 text-white scale-110 shadow-lg"
                      : unlocked
                        ? "bg-rose-100 text-rose-500 hover:bg-rose-200"
                        : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                  }`}
                >
                  {unlocked ? idx + 7 : <Lock size={12} />}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="relative group">
            <div
              className={`absolute -inset-4 bg-gradient-to-tr ${timelineData[activeDay].color} rounded-2xl blur-xl opacity-30`}
            ></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border-8 border-white bg-slate-50 flex items-center justify-center">
              {currentIsUnlocked ? (
                timelineData[activeDay].video ? (
                  <video
                    src={timelineData[activeDay].video}
                    controls
                    className="w-full h-full object-cover animate-in fade-in duration-1000"
                  />
                ) : (
                  <img
                    src={timelineData[activeDay].image}
                    className="w-full h-full object-cover animate-in fade-in duration-1000"
                  />
                )
              ) : (
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-rose-100 animate-pulse">
                    <Lock className="text-rose-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-slate-700">
                    A Secret Memory...
                  </h3>
                  <div className="flex items-center justify-center space-x-2 text-rose-500 font-medium bg-rose-50 px-4 py-2 rounded-full">
                    <Clock size={16} />
                    <span>Unlocks in: {countdown || "Soon"}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold tracking-widest uppercase">
                Day {activeDay + 1}
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-slate-900 tracking-tighter">
                {currentIsUnlocked
                  ? timelineData[activeDay].title
                  : "Locked Chapter"}
              </h1>
              <p className="text-xl text-rose-400 font-serif italic">
                Feb {activeDay + 7}, 2026
              </p>
            </div>

            {currentIsUnlocked ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Quote
                  className="absolute -top-4 -left-6 text-rose-100"
                  size={48}
                />
                <p className="text-lg leading-relaxed text-slate-600 italic relative z-10">
                  "{timelineData[activeDay].story}"
                </p>

                {activeDay === 7 && (
                  <div className="pt-8">
                    <button
                      onClick={triggerShatter}
                      className="px-8 py-4 bg-slate-900 text-white rounded-2xl flex items-center space-x-3 hover:bg-rose-600 transition-all shadow-xl group"
                    >
                      <Heart
                        className="fill-white group-hover:animate-ping"
                        size={20}
                      />
                      <span className="font-serif italic text-lg">
                        Enter our private world
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white/50 backdrop-blur p-6 rounded-2xl border border-dashed border-rose-200">
                <p className="text-slate-500">
                  This memory is reserved for{" "}
                  <span className="text-rose-500 font-bold">
                    {timelineData[activeDay].title}
                  </span>
                  . Patience, beautiful!
                </p>
              </div>
            )}

            <div className="pt-8 flex items-center space-x-6">
              <button
                onClick={() => activeDay > 0 && setActiveDay(activeDay - 1)}
                className={`p-4 rounded-full border border-slate-200 hover:bg-white ${activeDay === 0 ? "opacity-30" : ""}`}
                disabled={activeDay === 0}
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex-1 h-px bg-slate-200"></div>
              <button
                onClick={() =>
                  activeDay < timelineData.length - 1 &&
                  setActiveDay(activeDay + 1)
                }
                className={`p-4 rounded-full border border-slate-200 hover:bg-white ${activeDay === timelineData.length - 1 ? "opacity-30" : ""}`}
                disabled={activeDay === timelineData.length - 1}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-transition { 0% { opacity: 1; } 100% { opacity: 0; } }
        .animate-fade-transition { animation: fade-transition 0.8s ease-in-out forwards; }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-100vh) translateX(30px) rotate(180deg);
            opacity: 0.6;
          }
          90% {
            opacity: 0;
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `,
        }}
      />
    </div>
  );
};

export default App;
