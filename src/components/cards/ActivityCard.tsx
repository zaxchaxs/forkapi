
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { LuMoveRight, LuCalendar, LuArrowRight } from 'react-icons/lu'

interface ActivityCardProps {
    title: string;
    date: string;
    image: StaticImageData | string;
    description: string;
    category?: string;
}

const ActivityCard = ({ title, date, image, description, category }: ActivityCardProps) => {
    return (
        <div className="group flex flex-col overflow-hidden rounded-xl border border-default-200 dark:border-default-700 bg-white dark:bg-default-100 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 rounded-md bg-primary/90 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm">
                    {category}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-default-500 dark:text-default-400">
                    <LuCalendar className="h-3.5 w-3.5" />
                    <span>{date}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-default-950 dark:text-white line-clamp-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm text-default-600 dark:text-default-400">
                    {description}
                </p>
                <div className="mt-auto pt-6">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
                    >
                        Baca Selengkapnya <LuArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;
