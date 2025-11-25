import illustration from './illustration-article.svg'
import avatar from './image-avatar.webp'

export default function BlogPreview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[hsl(47,88%,63%)]">
      <article className="flex max-w-[340px] flex-col items-center rounded-2xl border bg-white p-5 text-left font-figtree shadow-lg">
        <div role="img" className="mb-5 overflow-hidden rounded-2xl">
          <img src={illustration} alt="An illustration" />
        </div>
        <section className="text-left">
          <p className="mb-3 inline-block rounded-md bg-[hsl(47,88%,63%)] px-3 py-1 text-sm font-bold">Learning</p>
          <p className="mb-3 text-xs">Published 21 Dec 2023</p>
          <h1 className="mb-3 text-xl font-extrabold">HTML & CSS foundations</h1>
          <p className="mb-3 text-sm leading-6 text-[hsl(0,0%,42%)]">
            These languages are the backbone of every website, defining structure, content and presentation
          </p>
          <div className="flex items-center">
            <img src={avatar} alt="Avatar of the blog creator" className="mr-3 h-9" />
            <p className="text-sm font-extrabold">Greg Hooper</p>
          </div>
        </section>
      </article>
    </main>
  )
}
