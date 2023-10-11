import Image from "next/image";
import PaginationIcon from "./icons/pagination";
import Link from "next/link";

export default function GetStarted() {
    return (
        <div className="flex flex-col bg-[#FEFDFF] justify-center items-center gap-[105px]">
            <div className="w-full h-[355px] shrink-0 bg-[#3f3849] rounded-b-[40px] flex items-center justify-center transform -skew-y-6 -translate-y-8">
                <Image
                    alt="wetindeysup"
                    src='/wetindeymobile.png'
                    width={450}
                    height={262}
                />
            </div>
            <div className="max-w-[282px] shrink-0">
                <h1 className="text-[#3F3849] text-center text-[39px] font-bold">Wetin<span className="text-[#884ED0]">Dey</span>Sup</h1>
                <p className="text-[#3F3849] text-center font-medium text-xl">All yoour events in one place, connect and socialise</p>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <PaginationIcon />
                </div>
                <Link href='/auth' className="py-[23px] px-[103px] text-[#3f3849] text-2xl font-bold mt-14 rounded-full bg-[#FFC6BC]">
                    Get Started
                </Link>
            </div>
        </div>
    )
}