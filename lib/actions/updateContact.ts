'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function updateContact(contactId: string, formData: FormData) {
  await slow();

  const contact = Object.fromEntries(formData);

  await prisma.contact.update({
    data: contact,
    where: {
      id: contactId,
    },
  });

  revalidatePath('/');
  redirect(`/contacts/${contactId}`);
}
