import Image from "next/image";
import TextLogo from "@/components/textLogo";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-mono dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between p-5 m-5 bg-white dark:bg-black sm:items-start">
        <div className="bg-gray-700 flex flex-row items-center p-2 w-full justify-center-safe"> {/* first block - logo, player name, score */} 
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
      <div className="bg-slate-700 flex flex-row items-center p-2 w-full justify-center-safe">
          <div className="basis-64"><TextLogo /></div>
          <div className="basis-64">Менюшка по страницам</div>
          <div className="128">© 2026 dianarojina</div>
      </div>
    </div>
  );
}
