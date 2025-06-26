'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Loader2, Leaf, FlaskConical, Info } from 'lucide-react';
import type { FertilizerDosageAdvisorOutput } from '@/ai/flows/fertilizer-dosage-advisor';
import { getFertilizerAdvice } from './actions';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  cropType: z.string().min(2, {
    message: 'Crop type must be at least 2 characters.',
  }),
  soilConditions: z.string().min(10, {
    message: 'Soil conditions must be at least 10 characters.',
  }),
});

export default function AiAssistantPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<FertilizerDosageAdvisorOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cropType: '',
      soilConditions: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    const response = await getFertilizerAdvice(values);
    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error || 'An unexpected error occurred.',
      });
    }
    setIsLoading(false);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Bot className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-5xl md:text-6xl font-headline">AI Fertilizer Advisor</h1>
          <p className="text-lg mt-4">
            Get personalized worm compost recommendations for your crops.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Tell us about your needs</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="cropType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Crop Type</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Tomatoes, Corn, Roses" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="soilConditions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Soil Conditions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Sandy, pH 6.5, low in nitrogen"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Getting Advice...
                    </>
                  ) : (
                    'Get Advice'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {result && (
          <div className="mt-12">
            <h2 className="text-3xl font-headline text-center mb-8">Your Recommendation</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center space-x-4">
                  <Leaf className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline">Recommended Fertilizer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold">{result.fertilizerType}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-x-4">
                  <FlaskConical className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline">Dosage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{result.dosage}</p>
                </CardContent>
              </Card>
              {result.additionalRecommendations && (
                <Card>
                  <CardHeader className="flex flex-row items-center space-x-4">
                    <Info className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline">Additional Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">{result.additionalRecommendations}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
