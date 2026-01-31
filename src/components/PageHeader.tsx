
import Image from "next/image";
import Link from "next/link";
import { LuChevronRight, LuMoveRight } from "react-icons/lu";
import backgroundLine from '@/assets/images/other/bg-lines-2.png' // Adjust path if needed

interface PageHeaderProps {
    title: string;
    breadcrumb: { label: string; href?: string }[];
    backgroundImage?: string;
}

const PageHeader = ({ title, breadcrumb, backgroundImage }: PageHeaderProps) => {
    return (
        <section className="relative pt-40 pb-20 lg:pt-44 lg:pb-32 bg-default-100 dark:bg-default-50 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${backgroundLine.src})` }}></div>
            <div className="absolute inset-0 bg-black/50 dark:bg-default-200" />
            <div className="container relative z-10 text-center">
                <h1 className="text-3xl font-bold text-white md:text-5xl md:leading-tight">{title}</h1>
                <div className="mt-4 flex justify-center text-base font-medium text-white/80">
                    <ul className="flex flex-wrap items-center justify-center gap-2">
                        {breadcrumb.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {index > 0 && <LuChevronRight className="h-4 w-4" />}
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="hover:text-white transition-colors hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-white">{item.label}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
