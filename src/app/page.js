import Image from 'next/image'
import QrImage from 'images/image-qr-code.png'

export default function Home() {
  return (
    <div className="main">
      <div className="section">
        <div className="image-section">
          <Image
            src={QrImage}
            alt="QrCodeImage"
            width="auto"
            height="auto"
            className="image-styling"
          />
        </div>
        <div className="image-text">
          <h1 className="image-text-header">
            Improve your front-end skills by building projects
          </h1>
          <p className="image-text-paragraph">
            Scan the QR code to visit Frontend Mentor and take your skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}
