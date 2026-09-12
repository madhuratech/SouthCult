import {
    SiSpotify,
    SiApplemusic,
    SiYoutube,
    SiYoutubemusic,
} from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { Play } from "lucide-react";

const partners = [
    { name: "YouTube", icon: SiYoutube, hover: "group-hover:text-red-500" },
    { name: "YT Music", icon: SiYoutubemusic, hover: "group-hover:text-red-400" },
    { name: "Spotify", icon: SiSpotify, hover: "group-hover:text-green-500" },
    { name: "Apple Music", icon: SiApplemusic, hover: "group-hover:text-gray-300" },
    { name: "Gaana", custom: true, hover: "group-hover:text-pink-500" },
    { name: "Amazon Music", icon: FaAmazon, hover: "group-hover:text-sky-400" },
    { name: "MX Player", mx: true, hover: "group-hover:text-blue-500" },
];

export default function StreamingPartners() {
    return (
        <section className="relative z-20 w-full overflow-hidden bg-[#050505] py-24 px-6 text-white">
            {/* Floating Background Logos */}
            {/* Floating Background Logos */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden [filter:blur(6px)]">
                {/* Row 1 */}
                <SiSpotify size={90} className="absolute text-[#1DB954] opacity-[0.12] float1" style={{ top: "6%", left: "4%" }} />
                <SiYoutube size={100} className="absolute text-[#FF0000] opacity-[0.12] float2" style={{ top: "10%", left: "28%" }} />
                <SiYoutubemusic size={80} className="absolute text-[#FF0033] opacity-[0.12] float3" style={{ top: "8%", right: "8%" }} />

                {/* Row 2 */}
                <FaAmazon size={95} className="absolute text-[#00A8E1] opacity-[0.12] float4" style={{ top: "28%", left: "10%" }} />
                <SiApplemusic size={85} className="absolute text-[#FA243C] opacity-[0.12] float5" style={{ top: "24%", left: "42%" }} />
                <div className="absolute text-[#E72C87] font-bold opacity-[0.12] float6" style={{ top: "26%", right: "12%", fontSize: "72px" }}>G</div>

                {/* Row 3 */}
                <Play size={90} className="absolute text-[#2563EB] opacity-[0.12] float7" style={{ top: "48%", left: "5%" }} />
                <SiSpotify size={75} className="absolute text-[#1DB954] opacity-[0.12] float2" style={{ top: "50%", left: "32%" }} />
                <SiYoutube size={95} className="absolute text-[#FF0000] opacity-[0.12] float3" style={{ top: "46%", right: "18%" }} />

                {/* Row 4 */}
                <SiYoutubemusic size={90} className="absolute text-[#FF0033] opacity-[0.12] float5" style={{ bottom: "18%", left: "12%" }} />
                <FaAmazon size={80} className="absolute text-[#00A8E1] opacity-[0.12] float1" style={{ bottom: "12%", left: "40%" }} />
                <SiApplemusic size={100} className="absolute text-[#FA243C] opacity-[0.12] float4" style={{ bottom: "15%", right: "6%" }} />

                {/* Extra */}
                <div className="absolute text-[#E72C87] font-bold opacity-[0.12] float7" style={{ bottom: "40%", left: "68%", fontSize: "60px" }}>G</div>
                <Play size={70} className="absolute text-[#2563EB] opacity-[0.12] float6" style={{ top: "68%", right: "32%" }} />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 mb-4 ">
                        Worldwide Distribution
                    </p>

                    <h2 className="text-4xl md:text-6xl font-light tracking-tight font-clash">
                        Streaming Partners
                    </h2>

                    <p className="mt-5 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Every SouthCult release is available across the leading music and
                        video streaming platforms worldwide.
                    </p>
                </div>

                {/* Partner Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-5">
                    {partners.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.name}
                                className="group h-40 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md flex flex-col items-center justify-center gap-5 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1"
                            >
                                <div
                                    className={`transition-colors duration-300 text-white ${item.hover}`}
                                >
                                    {item.custom ? (
                                        <span className="text-[2.4rem] font-bold tracking-[0.18em]">
                                            G
                                        </span>
                                    ) : item.mx ? (
                                        <div className="w-16 h-16 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center">
                                            <Play className="w-8 h-8 fill-current" />
                                        </div>
                                    ) : (
                                        <Icon className="text-[2.75rem]" />
                                    )}
                                </div>

                                <p className="text-center text-[11px] md:text-xs font-medium tracking-wide text-zinc-300 group-hover:text-white leading-tight px-2">
                                    {item.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Floating Animation */}
            <style>{`
        .float1 { animation: drift1 18s ease-in-out infinite; }
        .float2 { animation: drift2 22s ease-in-out infinite; }
        .float3 { animation: drift3 20s ease-in-out infinite; }
        .float4 { animation: drift4 24s ease-in-out infinite; }
        .float5 { animation: drift5 19s ease-in-out infinite; }
        .float6 { animation: drift6 26s ease-in-out infinite; }
        .float7 { animation: drift7 21s ease-in-out infinite; }

        @keyframes drift1 {
          0%,100% { transform: translate(0,0) rotate(0deg); }
          50% { transform: translate(30px,-25px) rotate(8deg); }
        }

        @keyframes drift2 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-35px,20px); }
        }

        @keyframes drift3 {
          0%,100% { transform: translate(0,0) rotate(0deg); }
          50% { transform: translate(25px,30px) rotate(-10deg); }
        }

        @keyframes drift4 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-28px,-22px); }
        }

        @keyframes drift5 {
          0%,100% { transform: translate(0,0) rotate(0deg); }
          50% { transform: translate(20px,-30px) rotate(12deg); }
        }

        @keyframes drift6 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-22px,26px); }
        }

        @keyframes drift7 {
          0%,100% { transform: translate(0,0) rotate(0deg); }
          50% { transform: translate(32px,-18px) rotate(-8deg); }
        }
      `}</style>
        </section>
    );
}