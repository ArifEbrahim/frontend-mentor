import qrCode from './image-qr-code.png'

export default function QRCode() {
  return (
    <div className="bg-[#D5E1EF] min-h-full min-w-full fixed flex flex-col items-center justify-center">
      <div className='bg-white'>
        <div>
          <div>
            <img src={qrCode} alt="QR code" />
          </div>
        </div>
        <div>Improve your front-end skills by building projects</div>
        <div>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
      </div>
    </div>
  )
}
