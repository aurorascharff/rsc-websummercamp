import 'server-only';

import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function getContacts() {
  await slow();

  return prisma.contact.findMany({ orderBy: [{ first: 'asc' }, { last: 'asc' }] });
}
