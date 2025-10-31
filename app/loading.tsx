import LoadingSpinner from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-muted-foreground">در حال بارگذاری...</p>
      </div>
    </div>
  )
}
