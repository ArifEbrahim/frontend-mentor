import equilibrium from './assets/image-equilibrium.jpg'
import etherium from './assets/icon-ethereum.svg'
import clock from './assets/icon-clock.svg'
import avatar from './assets/image-avatar.png'

export default function NFTPreview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[hsl(217,54%,11%)]">
      <article className="max-w-[350px] rounded-xl bg-[hsl(216,50%,16%)] p-6">
        <div className="mb-2 overflow-hidden rounded-xl">
          <img src={equilibrium} alt="Equilibrium #3429 NFT artwork showing abstract geometric shapes" />
        </div>
        <h1 className="my-4 cursor-pointer font-outfit text-xl text-white hover:text-[hsl(178,100%,50%)]">
          Equilibrium #3429
        </h1>
        <p className="mb-4 font-outfit text-sm leading-relaxed font-light text-[hsl(215,51%,70%)]">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="mb-4 flex justify-between">
          <div className="flex items-center gap-2">
            <img src={etherium} alt="" aria-hidden className="h-4" />
            <p className="font-outfit text-sm text-[hsl(178,100%,50%)]">0.041 ETH</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={clock} alt="" aria-hidden className="h-4" />
            <p className="font-outfit text-sm font-light text-[hsl(215,51%,70%)]">3 days left</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 border-t border-[hsl(215,32%,27%)] pt-4">
          <img src={avatar} alt="Jules Wyvern, the creator" className="mr-2 h-8 rounded-full border-1 border-white" />
          <p className="text-sm font-light text-[hsl(215,51%,70%)]">Creation of</p>
          <p className="font-outfit text-sm font-light text-white">Jules Wyvern</p>
        </div>
      </article>
    </main>
  )
}
