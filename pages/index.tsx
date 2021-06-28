import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/page1">
        <a>Page one</a>
      </Link>
      <Link href="/page2">
        <a>Page two</a>
      </Link>
    </div>
  );
}

