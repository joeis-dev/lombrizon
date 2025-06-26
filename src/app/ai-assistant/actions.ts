'use server';

import {
  fertilizerDosageAdvisor,
  type FertilizerDosageAdvisorInput,
} from '@/ai/flows/fertilizer-dosage-advisor';

export async function getFertilizerAdvice(input: FertilizerDosageAdvisorInput) {
  try {
    const result = await fertilizerDosageAdvisor(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in getFertilizerAdvice:', error);
    return { success: false, error: 'Failed to get advice. Please try again.' };
  }
}
