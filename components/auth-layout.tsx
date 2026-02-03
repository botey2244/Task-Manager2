import Image from "next/image"

export default function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#cfe0f2]">
      {/* Top bar */}
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-6 py-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2f59a7] text-white font-bold">
          TM
        </div>
        <div className="text-xl font-semibold text-[#17335f]">Task Manager</div>
      </div>

      {/* Main */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 pb-10 md:grid-cols-2 md:items-center">
        {/* Left side */}
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-black">
            {title}
          </h1>
          <p className="text-lg text-[#2a3b52]">{subtitle}</p>

          <div className="relative mt-8 h-[320px] w-full">
            <Image
              src="/auth-illustration.png"
              alt="Auth illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full">{children}</div>
      </div>

      {/* Footer */}
      <div className="mx-auto w-full max-w-6xl px-6 pb-6">
        <div className="flex items-center justify-center gap-2 text-sm text-[#2a3b52] opacity-80">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/60">
            TM
          </span>
          <span>
            This page is protected to ensure you&apos;re not a bot.{" "}
            <span className="text-red-500">Learn more</span>
          </span>
        </div>
      </div>
    </div>
  )
}
