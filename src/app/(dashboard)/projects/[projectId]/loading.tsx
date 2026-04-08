export default function LoadingProjectDetail() {
  return (
    <div className="space-y-5" aria-busy="true" aria-live="polite">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="h-7 w-52 animate-pulse rounded bg-slate-200 sm:h-8 sm:w-72" />
          <div className="hidden h-px flex-1 bg-slate-300 sm:block" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200" />
        </div>

        <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-4">
          <div className="w-full space-y-2 lg:w-auto lg:min-w-[170px]">
            <div className="h-8 w-full animate-pulse rounded-full bg-slate-200" />
            <div className="h-8 w-full animate-pulse rounded-full bg-slate-200" />
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-36 animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-40 animate-pulse rounded bg-slate-200" />
            </div>

            <div className="space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-3 w-[92%] animate-pulse rounded bg-slate-200" />
              <div className="h-3 w-[80%] animate-pulse rounded bg-slate-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="h-6 w-40 animate-pulse rounded bg-slate-200" />
          <div className="h-9 w-28 animate-pulse rounded-md bg-slate-200" />
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="h-11 animate-pulse border-b border-slate-200 bg-slate-100" />

          <div className="space-y-3 p-4">
            <div className="h-14 animate-pulse rounded bg-slate-100" />
            <div className="h-14 animate-pulse rounded bg-slate-100" />
            <div className="h-14 animate-pulse rounded bg-slate-100" />
            <div className="h-14 animate-pulse rounded bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
