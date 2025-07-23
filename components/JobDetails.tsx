"use client"

import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Clock } from "lucide-react"
import type { Job } from "@/types/job"

interface JobDetailsProps {
  job: Job
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Opportunities
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Job Header */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4 mb-6">
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
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                <div className="flex items-center text-gray-600">
                  <span className="font-medium text-lg">{job.company.name}</span>
                  <span className="mx-2">•</span>
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
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

          {/* Description */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal Candidate */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ideal Candidate We Want</h2>
            <ul className="space-y-2">
              {job.idealCandidate.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-800 mr-2">•</span>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* When & Where */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When & Where</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">{job.location}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Work Type</h3>
                <p className="text-gray-700">{job.workType}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* About */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Posted On:</p>
                  <p className="text-gray-600">{job.postedDate}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Deadline:</p>
                  <p className="text-gray-600">{job.deadline}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Location:</p>
                  <p className="text-gray-600">{job.location}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Start Date:</p>
                  <p className="text-gray-600">{job.startDate}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">End Date:</p>
                  <p className="text-gray-600">{job.endDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {job.categories.map((category, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Required Skills */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.requiredSkills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}
