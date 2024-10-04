import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title }) => {
  return (
    <Card className="text-center">
      <CardHeader>
        <Icon className="w-12 h-12 mx-auto text-bright-teal" />
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </CardContent>
    </Card>
  )
}

export default FeatureCard