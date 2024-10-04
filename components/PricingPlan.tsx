import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingPlanProps {
  title: string;
  price: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price }) => {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-deep-blue mb-6">{price}</p>
        <ul className="text-left space-y-2 mb-6">
          <li>✓ Feature 1</li>
          <li>✓ Feature 2</li>
          <li>✓ Feature 3</li>
        </ul>
        <Button className="bg-bright-teal hover:bg-bright-teal/90 text-white">
          Choose Plan
        </Button>
      </CardContent>
    </Card>
  )
}

export default PricingPlan