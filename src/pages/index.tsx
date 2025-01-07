import { CustomLink } from "@/components/CustomLink"
import { Intro } from "@/components/Intro"
import { getAllMdxFiles, readMdxFile } from "@/config/mdxFileHelper"
import { Post } from "@/types/post"
import { InferGetStaticPropsType } from "next"
import { serialize } from "next-mdx-remote/serialize"

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { postPreviews } = props

  return (
    <section>
      <Intro title="Latest" subTitle="My latest thoughts or whatever I am thinking about" />
      <ul>
        {postPreviews.map((postPreview, i) => {
          const { slug, title, description, date } = postPreview
          return (
            <li key={i} className="mb-6">
              <article>
                <h2 className="font-semibold underline underline-offset-8">
                  <CustomLink href={`/${slug}`}>{title}</CustomLink>
                </h2>
                <p className="font-light text-sm mt-2 mb-2">{date}</p>
                <p className="font-medium">{description}...</p>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export async function getStaticProps() {
  const postPreviews: Post[] = []

  for (const fileName of getAllMdxFiles({ includeFileExtension: false })) {
    const file = readMdxFile({ fileName })
    const serializedPost = await serialize(file, { parseFrontmatter: true })

    postPreviews.push({
      ...serializedPost.frontmatter,
      slug: fileName,
    } as Post)
  }

  return {
    props: {
      postPreviews: postPreviews.sort(
        // sort by oldest to newest
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    },
  }
}
