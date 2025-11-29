import illustration from './illustration-article.svg'
import avatar from './image-avatar.webp'

export default function BlogPreview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[hsl(47,88%,63%)]">
      <article className="max-w-[350px] rounded-2xl border bg-white p-6 font-figtree shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <img src={illustration} className="mb-4 h-52 rounded-2xl object-cover" alt="Abstract shapes" />
        <span className="mb-4 inline-block rounded-md bg-[hsl(47,88%,63%)] px-3 py-1 text-sm font-bold">Learning</span>
        <time dateTime="2023-12-21" className="mb-4 block text-xs">
          Published 21 Dec 2023
        </time>
        <h1 className="mb-4 text-xl font-extrabold hover:text-[hsl(47,88%,63%)]">HTML & CSS foundations</h1>
        <p className="mb-4 text-sm leading-5 text-[hsl(0,0%,42%)]">
          These languages are the backbone of every website, defining structure, content and presentation
        </p>
        <div className="flex items-center gap-3">
          <img src={avatar} alt="Avatar of the blog creator" className="h-8 w-8" />
          <p className="text-sm font-extrabold">Greg Hooper</p>
        </div>
      </article>
    </main>
  )
}
