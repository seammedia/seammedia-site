import { MessageSquare, PhoneMissed, Send } from "lucide-react";

// The missed-call text-back example used on /smart-website and /website-offer. Made-up business only.
const flow = [
  { icon: PhoneMissed, colour: "bg-red-500", title: "Missed call", time: "10:14 am", body: "0412 *** 318 called while you were up a ladder." },
  { icon: Send, colour: "bg-blue-500", title: "Text sent to the caller", time: "10:14 am", body: "\"Sorry I missed you, I'm on a job. What do you need a hand with? I'll call you back shortly. Dan, Banksia Bay Plumbing\"" },
  { icon: MessageSquare, colour: "bg-green-500", title: "New enquiry on your phone", time: "10:16 am", body: "\"Hot water system's leaking, I'm in Mornington. Can you come today?\"" },
];

export default function MissedCallPhone() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border-[10px] border-[#2a2f3a] bg-gradient-to-br from-[#1e3a8a] via-[#4c1d95] to-[#0f766e] p-4 shadow-2xl">
      <p className="pt-3 text-center text-6xl font-light tracking-tight">10:16</p>
      <p className="mb-5 mt-1 text-center text-sm font-semibold text-white/80">Tuesday</p>
      <div className="space-y-2.5">
        {flow.map(({ icon: Icon, colour, title, time, body }) => (
          <div key={title} className="flex gap-3 rounded-2xl bg-white/90 p-3.5 text-black">
            <div className={`flex h-9 w-9 flex-none items-center justify-center rounded-lg ${colour}`}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex justify-between gap-2 text-sm font-bold">
                {title}
                <span className="whitespace-nowrap font-medium text-gray-500">{time}</span>
              </div>
              <p className="mt-0.5 text-sm leading-snug text-gray-700">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
