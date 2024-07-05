import React from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import LinkButton from '@/components/ui/LinkButton';
import TextArea from '@/components/ui/TextArea';
import type { Contact } from '@prisma/client';

type Props = {
  contactId: string;
};

export default function ContactForm({ contactId }: Props) {
  const contact: Contact = {
    avatar: '',
    createdAt: new Date(),
    email: '',
    favorite: true,
    first: 'John',
    id: contactId,
    last: 'Doe',
    notes: 'This is a note.',
    twitter: 'johndoe',
    updatedAt: new Date(),
  };

  return (
    <form className="@container flex max-w-[40rem] flex-col gap-4">
      <div className="grip-rows-5 @sm:grid-cols-[1fr_4fr] @sm:gap-4 grid grid-cols-1 gap-2">
        <span className="flex">Name</span>
        <div className="flex gap-4">
          <Input
            defaultValue={contact.first || undefined}
            aria-label="First name"
            name="first"
            type="text"
            placeholder="First"
          />
          <Input
            aria-label="Last name"
            defaultValue={contact.last || undefined}
            name="last"
            placeholder="Last"
            type="text"
          />
        </div>
        <label htmlFor="github">Twitter</label>
        <Input defaultValue={contact.twitter || undefined} name="twitter" placeholder="@jack" type="text" />
        <label htmlFor="avatar">Avatar URL</label>
        <Input
          defaultValue={contact.avatar || undefined}
          name="avatar"
          placeholder="https://sessionize.com/image/example.jpg"
          type="text"
        />
        <label htmlFor="notes">Notes</label>
        <TextArea className="grow" defaultValue={contact.notes || undefined} name="notes" rows={6} />
      </div>
      <div className="flex gap-2 self-end">
        <LinkButton theme="secondary" href={`/contacts/${contact.id}`}>
          Cancel
        </LinkButton>
        <Button theme="primary" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
