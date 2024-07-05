import ClientComponent from '@/components/intro/ClientComponent';
import ServerComponent from '@/components/intro/ServerComponent';

export default function RootPage() {
  return (
    <div className="flex flex-col gap-4">
      Hands-on React Server Components, Server Actions, and Forms in the Next.js App Router
      <ClientComponent content={<ServerComponent />}>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
