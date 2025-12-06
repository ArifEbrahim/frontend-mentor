import productImageMobile from './assets/image-product-mobile.jpg'
import productImageDesktop from './assets/image-product-desktop.jpg'
import trolleyIcon from './assets/icon-cart.svg'

export default function ProductPreview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[hsl(30,38%,92%)]">
      <article className="grid max-w-[350px] grid-cols-1 overflow-hidden rounded-lg bg-white shadow-sm lg:max-w-[600px] lg:grid-cols-2">
        <img src={productImageMobile} alt="An expensive perfume" className="lg:hidden" />
        <img src={productImageDesktop} alt="An expensive perfume" className="hidden lg:block" />
        <div className="m-8 flex flex-col justify-evenly font-monserrat">
          <p className="mb-4 text-xs text-[hsl(228,12%,48%)]">P E R F U M E</p>
          <p className="font-fraunces text-3xl">Gabrielle Essence</p>
          <p className="mb-4 font-fraunces text-3xl">Eau De Parfum</p>
          <p className="mb-4 text-sm text-[hsl(228,12%,48%)]">
            A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of
            CHANEL.
          </p>
          <div className="mb-4 flex items-center gap-4">
            <p className="font-fraunces text-3xl text-[hsl(158,36%,37%)]">£149.99</p>
            <p className="text-sm text-[hsl(228,12%,48%)] line-through">£169.99</p>
          </div>
          <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-[hsl(158,36%,37%)] p-3 text-sm text-white hover:bg-[hsl(158,42%,18%)]">
            <img src={trolleyIcon} alt="Trolley icon" />
            Add to Cart
          </button>
        </div>
      </article>
    </main>
  )
}
