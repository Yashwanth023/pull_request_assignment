# Pull Request Management System

A modern, responsive web application for managing pull requests and code reviews efficiently.

## Features

### Pull Request Management
- Create and manage pull requests with detailed descriptions
- Track PR status (open, in review, closed)
- Branch management integration
- Real-time updates on PR changes

### Review System
- Intuitive comment threading
- In-line code review capabilities
- Support for both parallel and sequential approval flows
- Reviewer assignment and tracking

### User Interface
- Clean, modern dashboard layout
- Pull request cards with status indicators
- Detailed PR view with comment threads
- Approval workflow visualization

### Core Functionality
- Real-time updates for collaborative review
- Comprehensive error handling and validation
- Status tracking and notifications
- Search and filter capabilities

## Technology Stack

- **Frontend**: React with TypeScript
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Charts**: Recharts (for PR analytics)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

## Project Structure

```
src/
  ├── components/         # Reusable UI components
  ├── pages/             # Page components
  ├── lib/               # Utilities and helpers
  └── types/             # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
