import qrCode from './image-qr-code.png'

export default function QRCode() {
  return (
    <div className="fixed flex min-h-full min-w-full flex-col items-center justify-center bg-[hsl(212,45%,89%)]">
      <div className="flex max-w-[300px] flex-col items-center rounded-2xl bg-white p-4 text-center shadow-lg">
        <div className="mb-2 h-[302] w-[302] overflow-hidden rounded-2xl">
          <img src={qrCode} alt="QR code" />
        </div>
        <div className="p-4">
          <p className="mb-4 text-center font-display text-lg leading-tight font-bold text-[hsl(218,44%,22%)]">
            Improve your front-end skills by building projects
          </p>
          <p className="text-center font-display text-sm leading-tight font-normal text-[hsl(216,15%,48%)]">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}
