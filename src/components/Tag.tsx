import Link from 'next/link';
import { slug } from 'github-slugger';

type TagProps = {
  text: string;
};

export const Tag = (props: TagProps) => {
  const { text } = props;

  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  );
};
