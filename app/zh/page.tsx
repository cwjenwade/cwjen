import { redirect } from 'next/navigation';

export default function Page() {
  // Redirect legacy /zh URLs to the root site which uses client-side language state
  redirect('/');
}
