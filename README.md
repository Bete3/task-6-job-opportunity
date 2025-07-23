# Job Listing Application 🚀

A modern, responsive job listing application built with Next.js, TypeScript, and Tailwind CSS. This application allows users to browse job opportunities, view detailed job descriptions, and explore various positions across different companies.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Job Cards**: Interactive job cards with company logos and key information
- **Detailed Job Pages**: Comprehensive job descriptions with all necessary details
- **Dynamic Routing**: Navigate between job listings and individual job pages
- **Company Branding**: Custom company logos with fallback system
- **Sorting Options**: Sort jobs by relevance, date, and other criteria
- **TypeScript**: Full type safety throughout the application



### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
end-nextjs/
├── app/                    # Next.js App Router
│   ├── job/
│   │   └── [id]/
│   │       └── page.tsx   # Individual job page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── JobCard.tsx       # Job card component
│   ├── JobDetails.tsx    # Job details page component
│   └── JobListingDashboard.tsx # Main dashboard
├── data/                 # Static data
│   └── jobs.ts          # Job listings data
├── types/               # TypeScript type definitions
│   └── job.ts          # Job interface
├── public/             # Static assets
│   └── logos/         # Company logos
└── ...config files
```

## 🎨 Components Overview

### JobListingDashboard
The main dashboard component that displays all job opportunities with sorting functionality.

### JobCard
Individual job card component showing:
- Company logo
- Job title and company name
- Location and posting details
- Job description preview
- Category tags

### JobDetails
Detailed job page component featuring:
- Complete job description
- Responsibilities and requirements
- Company information
- Application details
- Skills and categories

## 🎯 Key Features Explained

### Dynamic Routing
- `/` - Main job listings page
- `/job/[id]` - Individual job details page


## 📸 Screenshots

### Job Listings Dashboard
<img width="742" height="473" alt="image" src="https://github.com/user-attachments/assets/b23ce5fe-03ab-4a6b-8213-aa4f74a76bbd" />


### Job Details Page
<img width="791" height="470" alt="image" src="https://github.com/user-attachments/assets/d13cb469-6750-4733-a1a0-f0b7f2705edb" />




