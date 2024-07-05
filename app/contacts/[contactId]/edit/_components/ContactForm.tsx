'use client';

import React, { useActionState } from 'react';
import Input from '@/components/ui/Input';
import LinkButton from '@/components/ui/LinkButton';
import SubmitButton from '@/components/ui/SubmitButton';
import TextArea from '@/components/ui/TextArea';
import { updateContact } from '@/lib/actions/updateContact';
import type { ContactSchemaErrorType } from '@/validations/contactSchema';
import type { Contact } from '@prisma/client';

type Props = {
  contact: Contact;
};

export default function ContactForm({ contact }: Props) {
  const updateContactById = updateContact.bind(null, contact.id);

  const [state, updateContactAction] = useActionState(updateContactById, {
    data: {
      avatar: contact.avatar || '',
      first: contact.first || '',
      last: contact.last || '',
      notes: contact.notes || '',
      twitter: contact.twitter || '',
    },
    errors: {} as ContactSchemaErrorType,
  });

  return (
    <form action={updateContactAction} className="flex max-w-[40rem] flex-col gap-4 @container">
      <div className="grip-rows-5 grid grid-cols-1 gap-2 @sm:grid-cols-[1fr_4fr] @sm:gap-4">
        <span className="flex">Name</span>
        <div className="flex gap-4">
          <Input
            defaultValue={state.data?.first || undefined}
            aria-label="First name"
            name="first"
            type="text"
            placeholder="First"
          />
          <Input
            aria-label="Last name"
            defaultValue={state.data?.last || undefined}
            name="last"
            placeholder="Last"
            type="text"
          />
        </div>
        <label htmlFor="github">Twitter</label>
        <Input
          error={state.errors.fieldErrors?.twitter}
          defaultValue={state.data?.twitter || undefined}
          name="twitter"
          placeholder="@jack"
          type="text"
        />
        <label htmlFor="avatar">Avatar URL</label>
        <Input
          error={state.errors.fieldErrors?.avatar}
          defaultValue={state.data?.avatar || undefined}
          name="avatar"
          placeholder="https://sessionize.com/image/example.jpg"
          type="text"
        />
        <label htmlFor="notes">Notes</label>
        <TextArea className="grow" defaultValue={state.data?.notes || undefined} name="notes" rows={6} />
      </div>
      <div className="flex gap-2 self-end">
        <LinkButton theme="secondary" href={`/contacts/${contact.id}`}>
          Cancel
        </LinkButton>
        <SubmitButton theme="primary" type="submit">
          Save
        </SubmitButton>
      </div>
    </form>
  );
}
