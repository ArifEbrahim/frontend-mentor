import illustration from './illustration-article.svg'
import avatar from './image-avatar.webp'

export default function BlogPreview(){
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[hsl(47,88%,63%)]">
      <article className="flex max-w-[300px] flex-col items-center rounded-2xl bg-white p-4 text-center shadow-lg border border-black">
        <div role="img" className="mb-2 overflow-hidden rounded-2xl">
          <img src={illustration} alt='An illustration'/>
          <p>Learning</p>
          <p>Published 21 Dec 2023</p>
          <h1>HTML & CSS foundations</h1>
          <p>These languages are the backbone of every website, defining structure, content and presentation</p>
          <div>
            <img src={avatar} alt='Avatar of the blog creator'/>
            <p>Greg Hooper</p>
          </div>
        </div>
      </article>
    </main>
  )
}