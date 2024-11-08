import Image from "next/image";
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <Link href={ ROUTES.home + '/55' }>
        <Image
          className="dark:invert cursor-pointer"
          src="/next.svg"
          alt="Next.js logo"
          width={ 180 }
          height={ 38 }
          priority
        />
      </Link>
    </main>
  )
}
