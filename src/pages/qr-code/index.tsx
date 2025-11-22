import qrCode from './image-qr-code.png'

export default function QRCode() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[hsl(212,45%,89%)]">
      <article className="flex max-w-[300px] flex-col items-center rounded-2xl bg-white p-4 text-center shadow-lg">
        <div role="img" className="mb-2 overflow-hidden rounded-2xl">
          <img src={qrCode} alt="QR code linking to Frontend Mentor" />
        </div>
        <div className="p-4">
          <h1 className="mb-4 text-center font-display text-lg leading-tight font-bold text-[hsl(218,44%,22%)]">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-center font-display text-sm leading-tight font-normal text-[hsl(216,15%,48%)]">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </article>
    </main>
  )
}
