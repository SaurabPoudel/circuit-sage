import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircuitComponent } from "@/types/components";
import { Microchip, Download, Info } from "lucide-react";
import Link from "next/link";

interface ComponentCardProps {
  component: CircuitComponent;
}

export function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader className="flex-none">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold text-base sm:text-lg leading-none">
              {component.name}
            </h3>
            <p className="text-sm text-muted-foreground">{component.manufacturer}</p>
          </div>
          <Microchip className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            {component.categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
          <p className="text-sm line-clamp-2">{component.description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-muted-foreground">Package</p>
              <p className="font-medium">{component.package}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Stock</p>
              <p className="font-medium">{component.stock} units</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-none gap-2">
        <Button asChild size="sm" variant="outline" className="w-full">
          <Link href={`/components/${component.id}`}>
            <Info className="mr-2 h-4 w-4" />
            Details
          </Link>
        </Button>
        <Button size="sm" variant="outline" className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Datasheet
        </Button>
      </CardFooter>
    </Card>
  );
}
