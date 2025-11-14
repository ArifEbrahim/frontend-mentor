import qrCode from './image-qr-code.png'

export default function QRCode() {
  return (
    <div className="bg-[#D5E1EF] min-h-full min-w-full fixed flex flex-col items-center justify-center">
      <div className="bg-white flex flex-col items-center mx-7 h-[500px] text-center rounded-2xl p-4">
        <div className="overflow-hidden">
          <img src={qrCode} alt="QR code" />
        </div>
        <p>Improve your front-end skills by building projects</p>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}
