"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterSidebarProps {
  categories: string[];
  manufacturers: string[];
  onFilterChange: (filters: any) => void;
  className?: string;
}

export function FilterSidebar({
  categories,
  manufacturers,
  onFilterChange,
  className,
}: FilterSidebarProps) {
  return (
    <>
      {/* Mobile Filter Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex md:hidden gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:w-[340px]">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <FilterContent
            categories={categories}
            manufacturers={manufacturers}
            onFilterChange={onFilterChange}
          />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className={`hidden md:block w-[240px] lg:w-[280px] ${className}`}>
        <div className="sticky top-20">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4" />
            <h2 className="font-semibold">Filters</h2>
          </div>
          <FilterContent
            categories={categories}
            manufacturers={manufacturers}
            onFilterChange={onFilterChange}
          />
        </div>
      </div>
    </>
  );
}

function FilterContent({
  categories,
  manufacturers,
  onFilterChange,
}: FilterSidebarProps) {
  return (
    <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
      <div className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search components..."
            type="search"
          />
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <Label>Price Range</Label>
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm">$0</span>
            <span className="text-sm">$100</span>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <Label>Categories</Label>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <label
                  htmlFor={category}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturers */}
        <div className="space-y-2">
          <Label>Manufacturers</Label>
          <div className="space-y-2">
            {manufacturers.map((manufacturer) => (
              <div key={manufacturer} className="flex items-center space-x-2">
                <Checkbox id={manufacturer} />
                <label
                  htmlFor={manufacturer}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {manufacturer}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* In Stock Only */}
        <div className="flex items-center space-x-2">
          <Checkbox id="in-stock" />
          <label
            htmlFor="in-stock"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            In Stock Only
          </label>
        </div>
      </div>
    </ScrollArea>
  );
}
