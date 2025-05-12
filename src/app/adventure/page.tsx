'use client';

import * as React from 'react';
import { format } from 'date-fns';
imo
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { DateRange } from 'react-day-picker';

export default function PlanPage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  const [formData, setFormData] = React.useState({
    budget: '',
    travelers: '',
    title: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      ...formData,
      startDate: date?.from,
      endDate: date?.to,
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-3xl border-blue-200 shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-600">Plan Your Adventure</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date Range Picker */}
            <div className="grid gap-2">
              <Label>Date Range</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, 'MMM dd, yyyy')} -{' '}
                          {format(date.to, 'MMM dd, yyyy')}
                        </>
                      ) : (
                        format(date.from, 'MMM dd, yyyy')
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Budget */}
            <div className="grid gap-2">
              <Label htmlFor="budget">Total Budget ($)</Label>
              <Input
                type="number"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                min={1}
              />
            </div>

            {/* Travelers */}
            <div className="grid gap-2">
              <Label htmlFor="travelers">Number of Travelers</Label>
              <Input
                type="number"
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                required
                min={1}
              />
            </div>

            {/* Title */}
            <div className="grid gap-2">
              <Label htmlFor="title">Trip Title (optional)</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Notes */}
            <div className="grid gap-2">
              <Label htmlFor="notes">Special Notes or Preferences</Label>
              <Textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="e.g. Vegan meals, prefer mountain hikes..."
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full bg-blue-500 hover:bg-blue-600">
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
