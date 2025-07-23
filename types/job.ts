export interface Job {
  id: string
  title: string
  company: {
    name: string
    logo: string
  }
  location: string
  description: string
  responsibilities: string[]
  idealCandidate: string[]
  workType: string
  postedDate: string
  deadline: string
  startDate: string
  endDate: string
  categories: string[]
  requiredSkills: string[]
  tags: string[]
}
