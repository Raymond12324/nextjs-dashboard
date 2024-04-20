import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Breadcrumbs breadcrumbs={[]} />
      {children}
    </div>
  );
}
