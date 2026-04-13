import TextLogo from "./textLogo"

export default function Header() {
    return (
        <div className="bg-slate-700 flex flex-row items-center p-2 w-full justify-center-safe sticky top-0">
            <div className="basis-64"><TextLogo /></div>
            <div className="basis-64">анонсы и тп</div>
            <div className="128">пролистывающийся список рекордов</div>
        </div>
    )
}