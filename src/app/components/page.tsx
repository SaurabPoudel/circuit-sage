"use client";

import { ComponentCard } from "@/components/components-browser/component-card";
import { FilterSidebar } from "@/components/components-browser/filter-sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircuitComponent } from "@/types/components";

// Mock data for demonstration
const mockComponents: CircuitComponent[] = [
  {
    id: "1",
    name: "ATmega328P",
    manufacturer: "Microchip",
    description: "8-bit AVR microcontroller with 32KB flash memory",
    categories: ["Microcontrollers", "AVR"],
    package: "DIP-28",
    stock: 150,
    specifications: {
      flash: "32KB",
      ram: "2KB",
      eeprom: "1KB",
      speed: "20MHz",
    },
  },
  {
    id: "2",
    name: "LM317T",
    manufacturer: "Texas Instruments",
    description: "Adjustable voltage regulator",
    categories: ["Power Management", "Voltage Regulators"],
    package: "TO-220",
    stock: 75,
    specifications: {
      inputVoltage: "40V",
      outputVoltage: "1.25V to 37V",
      current: "1.5A",
    },
  },
  {
    id: "3",
    name: "ESP32-WROOM-32",
    manufacturer: "Espressif",
    description: "Powerful, generic Wi-Fi+BT+BLE MCU module",
    categories: ["Microcontrollers", "WiFi", "Bluetooth"],
    package: "SMD",
    stock: 200,
    specifications: {
      flash: "4MB",
      ram: "520KB",
      wifi: "802.11 b/g/n",
      bluetooth: "v4.2",
    },
  },
  {
    id: "4",
    name: "MPU6050",
    manufacturer: "InvenSense",
    description: "6-axis motion tracking device",
    categories: ["Sensors", "Accelerometer", "Gyroscope"],
    package: "QFN-24",
    stock: 120,
    specifications: {
      voltage: "3.3V",
      interface: "I2C",
      axes: 6,
      resolution: "16-bit",
    },
  },
  {
    id: "5",
    name: "WS2812B",
    manufacturer: "WorldSemi",
    description: "Intelligent control LED integrated light source",
    categories: ["LEDs", "RGB", "Addressable"],
    package: "5050",
    stock: 500,
    specifications: {
      voltage: "5V",
      current: "20mA",
      colors: "16.7M",
      protocol: "Single-wire",
    },
  },
  {
    id: "6",
    name: "BME280",
    manufacturer: "Bosch",
    description: "Environmental sensor for temperature, humidity, and pressure",
    categories: ["Sensors", "Environmental"],
    package: "LGA-8",
    stock: 85,
    specifications: {
      voltage: "3.3V",
      interface: "I2C/SPI",
      accuracy: "±1%",
      range: "-40°C to +85°C",
    },
  },
];

const categories = [
  "Microcontrollers",
  "AVR",
  "Power Management",
  "Voltage Regulators",
  "Sensors",
  "LEDs",
  "WiFi",
  "Bluetooth",
  "RGB",
  "Environmental",
];

const manufacturers = [
  "Microchip",
  "Texas Instruments",
  "Espressif",
  "InvenSense",
  "WorldSemi",
  "Bosch",
];

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Electronic Components
          </h1>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Mobile Filter Button */}
            <FilterSidebar
              categories={categories}
              manufacturers={manufacturers}
              onFilterChange={() => {}}
            />
            <Select defaultValue="newest">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="stock-high">Most Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Desktop Filter Sidebar */}
          <FilterSidebar
            className="hidden md:block flex-none"
            categories={categories}
            manufacturers={manufacturers}
            onFilterChange={() => {}}
          />

          {/* Components Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockComponents.map((component) => (
                <ComponentCard key={component.id} component={component} />
              ))}
            </div>

            {mockComponents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No components found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
