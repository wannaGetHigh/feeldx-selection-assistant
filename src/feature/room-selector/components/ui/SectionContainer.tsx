import type { PropsWithChildren, ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SectionContainerProps extends PropsWithChildren {
    title?: ReactNode
    actions?: ReactNode
}
const SectionContainer = ({ title, actions, children }: SectionContainerProps) => {
  return (
    <Card className="transition-shadow duration-200 hover:shadow-md">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-base">{title}</CardTitle>

        {actions}
      </CardHeader>
      
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

export default SectionContainer