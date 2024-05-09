import { Progress } from "@/components/ui/progress";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
    percentage: number;
    hearts: number;
    hasActiveSubscription: boolean;
}

export const Header = ({
    percentage,
    hearts,
    hasActiveSubscription
}: Props) => {
    return (
        <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
            <X
                onClick={() => { }}
                className="text-slate-500 hover:opacity-75 transition cursor-pointer"
            />
            <Progress
                value={percentage}
            />
            <div className="text-rose-500 flex item-center font-bold">
                <Image
                    src="/heart.svg"
                    height={28}
                    width={28}
                    alt="Heart icon"
                    className="mr-2"
                />
                {hasActiveSubscription ? <InfinityIcon className="h-6 w-6 stroke-[3]" /> : hearts}
            </div>
        </header>
    )
}