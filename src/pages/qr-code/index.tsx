import qrCode from './image-qr-code.png'

export default function QRCode() {
  return (
    <div className="bg-[hsl(212,45%,89%)] min-h-full min-w-full fixed flex flex-col items-center justify-center">
      <div className="bg-white flex flex-col items-center mx-7 min-h-[470px] text-center rounded-2xl p-4 shadow-lg lg:max-w-[500px] lg:p-6">
        <div className="overflow-hidden h-[302] w-[302] rounded-2xl mb-6 lg:mb-8">
          <img src={qrCode} alt="QR code" />
        </div>
        <p className="font-display font-bold text-xl text-[hsl(218,44%,22%)] text-center mb-4 lg:text-4xl lg:mb-8 lg:mx-2">
          Improve your front-end skills by building projects
        </p>
        <p className="font-display font-normal text-sm text-[hsl(216,15%,48%)] text-center mb-4 lg:text-2xl lg:mb-8 lg:mx-4">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}
