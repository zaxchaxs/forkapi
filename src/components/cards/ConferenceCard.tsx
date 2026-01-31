
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { LuCalendar, LuMapPin, LuArrowRight, LuChevronRight } from "react-icons/lu";

interface ConferenceCardProps {
    title: string;
    date: string;
    location: string;
    image: StaticImageData | string;
    description: string;
    price: number;
    status: string;
}

const ConferenceCard = ({ title, date, location, image, price, status }: ConferenceCardProps) => {
    return (
        <div className="group flex flex-col overflow-hidden rounded-xl border border-default-200 dark:border-default-700 bg-white dark:bg-default-100 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-default-950 shadow-sm backdrop-blur-sm">
                    {status}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs font-medium text-default-500 dark:text-default-400">
                    <LuCalendar className="h-3.5 w-3.5" />
                    <span>{date}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-default-950 dark:text-white line-clamp-2" title={title}>
                    {title}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-sm text-default-600 dark:text-default-300">
                    <LuMapPin className="h-4 w-4 text-primary" />
                    <span className="line-clamp-1">{location}</span>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-default-200 dark:border-default-700 pt-4">
                    <div className="text-lg font-bold text-primary">
                        {price === 0 ? 'Free' : `Rp ${price.toLocaleString('id-ID')}`}
                    </div>
                    <Link
                        href="#"
                        className="flex items-center gap-1 text-sm font-semibold text-default-950 dark:text-white hover:text-primary transition-colors"
                    >
                        Detail <LuChevronRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ConferenceCard;
