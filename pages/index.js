import Link from 'next/link';

function HomePage() {
  return (
    <div>
      This is my awesome movie app Please signup
      <Link href='/signup'>here</Link>
    </div>
  );
}

export default HomePage;
