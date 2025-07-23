"use client"

import { useState } from "react"
import JobCard from "./JobCard"
import { jobsData } from "@/data/jobs"
import { ChevronDown } from "lucide-react"

export default function JobListingDashboard() {
  const [sortBy, setSortBy] = useState("Most Relevant")

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Opportunities</h1>
          <p className="text-gray-600">Showing {jobsData.length} results</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Sorted by:</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Most Relevant</option>
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Salary High to Low</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="space-y-4">
        {jobsData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
