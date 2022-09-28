import Link from 'next/link';

import { Button } from './button';

export const BackButton = () => (
  <Link href="/" passHref>
    <Button>Back</Button>
  </Link>
);
