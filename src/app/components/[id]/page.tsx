"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Download, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { CircuitComponent } from "@/types/components";

// Mock data for demonstration
const mockComponent: CircuitComponent = {
  id: "1",
  name: "ATmega328P",
  manufacturer: "Microchip",
  description:
    "The ATmega328P is a high-performance Microchip 8-bit AVR RISC-based microcontroller. It features 32KB ISP flash memory with read-while-write capabilities, 1KB EEPROM, 2KB SRAM, 23 general purpose I/O lines, 32 general purpose working registers, and more.",
  categories: ["Microcontrollers", "AVR"],
  package: "DIP-28",
  stock: 150,
  specifications: {
    flash: "32KB",
    ram: "2KB",
    eeprom: "1KB",
    speed: "20MHz",
    operatingVoltage: "1.8-5.5V",
    temperature: "-40°C to 85°C",
    pins: 28,
    architecture: "8-bit AVR",
  },
  price: 2.99,
  alternatives: ["ATmega168", "ATmega328", "ATmega32U4"],
};

export default function ComponentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <div className="space-y-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          size="sm"
          className="gap-2"
          asChild
        >
          <Link href="/components">
            <ArrowLeft className="h-4 w-4" />
            Back to Components
          </Link>
        </Button>

        {/* Component Header */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{mockComponent.name}</h1>
            <p className="text-muted-foreground">{mockComponent.manufacturer}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download Datasheet
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{mockComponent.description}</p>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Parameter</TableHead>
                      <TableHead>Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(mockComponent.specifications).map(
                      ([key, value]) => (
                        <TableRow key={key}>
                          <TableCell className="font-medium">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </TableCell>
                          <TableCell>{value}</TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Package</p>
                  <p className="font-medium">{mockComponent.package}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Stock</p>
                  <p className="font-medium">{mockComponent.stock} units</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-medium">${mockComponent.price}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Categories</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {mockComponent.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Components */}
            <Card>
              <CardHeader>
                <CardTitle>Alternative Components</CardTitle>
                <CardDescription>Similar components you might consider</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mockComponent.alternatives?.map((alt) => (
                    <li key={alt}>
                      <Button variant="link" className="h-auto p-0">
                        {alt}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
