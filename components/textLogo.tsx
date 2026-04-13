import Link from 'next/link'

 export default function TextLogo() {
    return (
        <Link href="/">
            <div className="m-2"> {/* logo */}
                <p className="text-xl">Guess the City</p>
                <p className="text-xs -mt-1.25">by dianarojina</p>
            </div>
        </Link>
    )
 }