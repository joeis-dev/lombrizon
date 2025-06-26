// fertilizer-dosage-advisor.ts
'use server';

/**
 * @fileOverview An AI assistant to suggest the appropriate dosage and type of worm compost fertilizer for different crops.
 *
 * - fertilizerDosageAdvisor - A function that suggests fertilizer dosage based on crop type and soil conditions.
 * - FertilizerDosageAdvisorInput - The input type for the fertilizerDosageAdvisor function.
 * - FertilizerDosageAdvisorOutput - The return type for the fertilizerDosageAdvisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FertilizerDosageAdvisorInputSchema = z.object({
  cropType: z
    .string()
    .describe('The type of crop for which fertilizer is needed (e.g., tomatoes, corn, roses).'),
  soilConditions: z
    .string()
    .describe(
      'A description of the soil conditions, including texture, pH level, and any known nutrient deficiencies or excesses (e.g., sandy, pH 6.5, low in nitrogen).'
    ),
});
export type FertilizerDosageAdvisorInput = z.infer<
  typeof FertilizerDosageAdvisorInputSchema
>;

const FertilizerDosageAdvisorOutputSchema = z.object({
  fertilizerType: z
    .string()
    .describe(
      'The recommended type of worm compost fertilizer (e.g., regular, enriched, specialized).'
    ),
  dosage: z
    .string()
    .describe(
      'The recommended dosage of fertilizer, including the amount and frequency of application (e.g., 1 cup per plant every 2 weeks).'
    ),
  additionalRecommendations: z
    .string()
    .optional()
    .describe(
      'Any additional recommendations or considerations for fertilizer application (e.g., avoid over-fertilization, monitor plant health).'
    ),
});
export type FertilizerDosageAdvisorOutput = z.infer<
  typeof FertilizerDosageAdvisorOutputSchema
>;

export async function fertilizerDosageAdvisor(
  input: FertilizerDosageAdvisorInput
): Promise<FertilizerDosageAdvisorOutput> {
  return fertilizerDosageAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'fertilizerDosageAdvisorPrompt',
  input: {schema: FertilizerDosageAdvisorInputSchema},
  output: {schema: FertilizerDosageAdvisorOutputSchema},
  prompt: `You are an expert in worm compost fertilizer application.

  Based on the crop type and soil conditions provided, suggest the appropriate type and dosage of worm compost fertilizer for optimal growth.

  Crop Type: {{{cropType}}}
  Soil Conditions: {{{soilConditions}}}

  Consider different types of worm compost fertilizer, such as regular, enriched, and specialized blends, and recommend a specific dosage (amount and frequency) tailored to the crop and soil.

  Provide any additional recommendations or considerations for fertilizer application, such as avoiding over-fertilization or monitoring plant health.

  Ensure your recommendations are safe, effective, and practical for the user to implement.
`,
});

const fertilizerDosageAdvisorFlow = ai.defineFlow(
  {
    name: 'fertilizerDosageAdvisorFlow',
    inputSchema: FertilizerDosageAdvisorInputSchema,
    outputSchema: FertilizerDosageAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
