export default function EditProfileSkeleton() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto max-w-xl px-4 py-12 sm:px-6 animate-pulse">
        {/* Title */}
        <div className="mb-10 h-8 w-40 rounded bg-zinc-800" />

        {/* Avatar Section */}
        <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="h-16 w-16 rounded-full bg-zinc-800" />

            {/* Username + Full name */}
            <div className="space-y-2">
              <div className="h-4 w-24 rounded bg-zinc-800" />
              <div className="h-3 w-32 rounded bg-zinc-800" />
            </div>
          </div>

          {/* Change photo button */}
          <div className="h-10 w-28 rounded-lg bg-zinc-800" />
        </div>

        <div className="my-8 border-t border-zinc-900" />

        {/* Full Name */}
        <div className="space-y-2 mb-6">
          <div className="h-3 w-20 rounded bg-zinc-800" />
          <div className="h-14 w-full rounded-xl bg-zinc-900" />
        </div>

        {/* Username */}
        <div className="space-y-2 mb-6">
          <div className="h-3 w-20 rounded bg-zinc-800" />
          <div className="h-14 w-full rounded-xl bg-zinc-900" />
        </div>

        {/* Bio */}
        <div className="space-y-2 mb-8">
          <div className="h-3 w-16 rounded bg-zinc-800" />
          <div className="h-32 w-full rounded-xl bg-zinc-900" />
        </div>

        {/* Save button */}
        <div className="flex justify-end">
          <div className="h-12 w-full sm:w-40 rounded-xl bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}
