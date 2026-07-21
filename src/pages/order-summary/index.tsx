import hero from './assets/illustration-hero.svg'
import musicIcon from './assets/icon-music.svg'
import background from './assets/pattern-background.svg'

export default function OrderSummary() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center bg-[hsl(225,100%,94%)]">
      <img src={background} alt="" aria-hidden="true" className="absolute inset-x-0 top-0 w-full" />
      <article className="relative z-10 max-w-[350px] rounded-2xl bg-white shadow-xl">
        <img src={hero} className="rounded-t-2xl" alt="A person with headphones dancing to music" />
        <div className="m-10 flex flex-col items-center">
          <h1 className="mb-4 text-xl font-bold">Order Summary</h1>
          <p className="mb-4 text-center text-xs leading-5 text-[hsl(224,23%,55%)]">
            You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!
          </p>
          <div className="mb-6 flex w-full items-center justify-between rounded-lg bg-[hsl(225,100%,98%)] p-4">
            <div className="flex items-center gap-4">
              <img src={musicIcon} alt="A musical note" className="w-9" />
              <div>
                <h2 className="text-xs font-bold">Annual Plan</h2>
                <p className="text-xs text-[hsl(224,23%,55%)]">£59.99/year</p>
              </div>
            </div>
            <a href="/change" className="cursor-pointer text-xs text-[hsl(245,75%,52%)] underline">
              Change
            </a>
          </div>
          <button className="mb-4 w-full cursor-pointer rounded-lg bg-[hsl(245,75%,52%)] py-3 text-xs font-bold text-white shadow-[0_12px_24px_hsl(245_75%_52%/0.3)]">
            Proceed to Payment
          </button>
          <button className="cursor-pointer text-xs font-bold text-[hsl(224,23%,55%)]">Cancel Order</button>
        </div>
      </article>
    </main>
  )
}
