'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { deleteContact } from '@/lib/actions/deleteContact';

type Props = {
  contactId: string;
};

export default function DeleteContactButton({ contactId }: Props) {
  const deleteContactById = deleteContact.bind(null, contactId);

  return (
    <form action={deleteContactById}>
      <Button type="submit" theme="destroy">
        Delete
      </Button>
    </form>
  );
}
