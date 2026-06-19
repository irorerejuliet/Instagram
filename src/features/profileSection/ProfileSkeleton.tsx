export default function ProfileSkeleton() {
  return (
    <div className="w-full max-w-[935px] mx-auto hidden sm:block lg:pt-20 pb-12 px-4 animate-pulse">
      {/* Profile info section */}
      <div className="flex items-center justify-center gap-x-20 mb-12">
        {/* Avatar */}
        <div className="w-[150px] h-[150px] rounded-full bg-zinc-800 shrink-0" />

        <div className="flex flex-col flex-1 max-w-md">
          {/* Username + buttons */}
          <div className="flex items-center gap-x-4 mb-6">
            <div className="h-6 w-32 rounded bg-zinc-800" />

            <div className="h-9 w-28 rounded-lg bg-zinc-800" />

            <div className="h-9 w-28 rounded-lg bg-zinc-800" />

            <div className="h-6 w-6 rounded bg-zinc-800" />
          </div>

          {/* Stats */}
          <div className="flex gap-x-8 mb-6">
            <div className="h-5 w-20 rounded bg-zinc-800" />
            <div className="h-5 w-24 rounded bg-zinc-800" />
            <div className="h-5 w-24 rounded bg-zinc-800" />
          </div>

          {/* Full name */}
          <div className="h-5 w-40 rounded bg-zinc-800 mb-3" />

          {/* Bio */}
          <div className="space-y-2 mb-4">
            <div className="h-4 w-56 rounded bg-zinc-800" />
            <div className="h-4 w-44 rounded bg-zinc-800" />
            <div className="h-4 w-36 rounded bg-zinc-800" />
          </div>

          {/* Email */}
          <div className="h-4 w-52 rounded bg-zinc-800" />
        </div>
      </div>

      {/* Highlights */}
      <div className="border-b border-zinc-800 pb-6 mb-12">
        <div className="flex gap-x-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center shrink-0">
              <div className="w-24 h-24 rounded-full bg-zinc-800" />
              <div className="h-3 w-16 rounded bg-zinc-800 mt-3" />
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-zinc-800 pt-4 mb-8">
        <div className="flex justify-center gap-x-12">
          <div className="h-4 w-16 rounded bg-zinc-800" />
          <div className="h-4 w-16 rounded bg-zinc-800" />
          <div className="h-4 w-16 rounded bg-zinc-800" />
        </div>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square bg-zinc-800" />
        ))}
      </div>
    </div>
  );
}
