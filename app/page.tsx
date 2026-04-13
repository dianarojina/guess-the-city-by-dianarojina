import Image from "next/image";
import TextLogo from "@/components/textLogo";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-mono dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center m-2 bg-white dark:bg-black sm:items-start">
        <div className="bg-gray-700 flex flex-row justify-between items-center py-2 px-3 w-full rounded-sm"> {/* first block - logo, player name, score */} 
        {/* logo */}
        <div className=""><TextLogo /></div>
        <div className=""> {/* player name, score */}
          <div className="">Hello, player!</div>
          <div className="">Score: 0</div>
        </div>
        </div>
        <div> {/* block with description */}
          description
        </div>
        <div> {/* block with map */}
          map block
        </div>
        <div> {/* navigation */}
          <div>quit game btn</div>
          <div>result</div>
          <div>next btn</div>
        </div>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}
