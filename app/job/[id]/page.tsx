import JobDetails from "@/components/JobDetails"
import { jobsData } from "@/data/jobs"

interface JobPageProps {
  params: Promise<{ id: string }>
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params
  const job = jobsData.find((job) => job.id === id)

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-600">Job not found</h1>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <JobDetails job={job} />
    </main>
  )
}
