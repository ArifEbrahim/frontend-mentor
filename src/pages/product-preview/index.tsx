import productImage from './assets/image-product-mobile.jpg'
import trolleyIcon from './assets/icon-cart.svg'

export default function ProductPreview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[hsl(30,38%,92%)]">
      <article className="max-w-[350px] bg-white">
        <div role="img" className="overflow-hidden rounded-lg">
          <img src={productImage} alt="An expensive perfume" />
        </div>
        <div className="mx-8 my-6 font-monserrat">
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
          <button className='w-full bg-[hsl(158,36%,37%)] flex items-center justify-center gap-3 text-white p-3 rounded-lg text-sm'>
            <img src={trolleyIcon} alt="Trolley icon" />
            Add to Cart
          </button>
        </div>
      </article>
    </main>
  )
}
