'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { contactSchema } from '@/validations/contactSchema';

export async function updateContact(contactId: string, formData: FormData) {
  await slow();

  const contact = Object.fromEntries(formData);
  const result = contactSchema.safeParse(contact);

  if (!result.success) {
    return {
      errors: result.error.formErrors,
    };
  }

  await prisma.contact.update({
    data: contact,
    where: {
      id: contactId,
    },
  });

  revalidatePath('/');
  redirect(`/contacts/${contactId}`);
}
