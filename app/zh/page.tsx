import { notFound } from 'next/navigation';

export default function Page() {
  // Return a 404 for legacy /zh URLs to avoid redirect loops.
  notFound();
}
