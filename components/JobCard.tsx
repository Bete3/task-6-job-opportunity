"use client"

import Link from "next/link"
import { MapPin, Calendar, Clock } from "lucide-react"
import type { Job } from "@/types/job"

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/job/${job.id}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center overflow-hidden">
              {job.company.logo ? (
                <img
                  src={job.company.logo || "/placeholder.svg"}
                  alt={`${job.company.name} logo`}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <span className="text-white font-bold text-xl">{job.company.name.charAt(0)}</span>
              )}
            </div>
          </div>

          {/* Job Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="font-medium">{job.company.name}</span>
                  <span className="mx-2">•</span>
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Posted: {job.postedDate}</span>
                </div>
                <div className="flex items-center mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Deadline: {job.deadline}</span>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">{job.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tag === "In person"
                      ? "bg-green-100 text-green-700"
                      : tag === "Education"
                        ? "bg-orange-100 text-orange-700"
                        : tag === "IT"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
