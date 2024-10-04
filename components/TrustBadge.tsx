import React from 'react'

interface TrustBadgeProps {
  companyNumber: number;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ companyNumber }) => {
  return (
    <img
      src={`/placeholder.svg?height=60&width=120`}
      alt={`Tech Company ${companyNumber}`}
      className="h-12 grayscale opacity-50 hover:opacity-100 transition-opacity"
    />
  )
}

export default TrustBadge