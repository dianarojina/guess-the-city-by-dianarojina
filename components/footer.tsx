import TextLogo from "./textLogo";

export default function Footer() {
    return (
        <div className="dark:bg-slate-700 bg-slate-200 flex flex-row items-center p-2 w-full justify-center-safe">
          <div className="basis-64"><TextLogo /></div>
          <div className="basis-64">Менюшка по страницам</div>
          <div className="128">© 2026 dianarojina</div>
      </div>
    )
}