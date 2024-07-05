'use client';

import React, { useTransition } from 'react';

import SubmitButton from '@/components/ui/SubmitButton';
import { deleteContact } from '@/lib/actions/deleteContact';

type Props = {
  contactId: string;
};

export default function DeleteContactButton({ contactId }: Props) {
  const deleteContactById = deleteContact.bind(null, contactId);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        const response = confirm('Are you sure you want to delete this contact?');
        if (!response) {
          return;
        }
        startTransition(async () => {
          await deleteContactById();
        });
      }}
      action={deleteContactById}
    >
      <SubmitButton loading={isPending} type="submit" theme="destroy">
        Delete
      </SubmitButton>
    </form>
  );
}
