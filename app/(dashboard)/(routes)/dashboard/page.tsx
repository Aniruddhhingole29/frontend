"use client";
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Music, Image, VideoIcon, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    iconNew: "💬",
    color: "text-violet-700",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music,
    iconNew: "🎵",
    color: "text-emerald-500",
    bgColor: "bg-green-700/10",
    href: "/music",
  },
  {
    label: "Image Generation",
    icon: Image,
    iconNew: "🖼️",
    color: "text-pink-700",
    bgColor: "bg-pink-900/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    iconNew: "🎥",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    iconNew: "</>",
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },

  {
    label: "Settings",
    icon: Code,
    iconNew: "⚙️",
    color: "text-yellow-700",
    bgColor: "bg-yellow-700/10",
    href: "/code",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center flex-col justify-center h-[calc(100vh-100px)] w-full gap-10">
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="text-4xl font-medium">Explore the power of Super AI</h1>
        <p className="text-sm text-zinc-600">Chat with the smartest AI - Experience the power of AI</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {tools.map((tool) => (
          <div
            key={tool.label}
            onClick={() => router.push(tool.href)}
            className={`w-52 h-52 rounded-lg flex items-center justify-center cursor-pointer ${tool.bgColor} transition duration-300 hover:bg-opacity-20 hover:shadow-lg`}
          >
            <div className="flex flex-col items-center gap-2">
              <span>{tool.iconNew}</span>
              <h1 className="text-lg">{tool.label}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
