
import Image, { StaticImageData } from "next/image";

interface TeamMemberCardProps {
    name: string;
    role: string;
    image: StaticImageData | string;
    bio?: string;
}

const TeamMemberCard = ({ name, role, image, bio }: TeamMemberCardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-default-100 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl border border-default-200 dark:border-default-700">
            <div className="relative h-80 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-full transition-all duration-500 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                    {/* Social icons can go here if needed */}
                </div>
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-default-950 dark:text-white">{name}</h3>
                <p className="mt-1 text-sm font-medium text-primary uppercase tracking-wider">{role}</p>
                {bio && <p className="mt-3 text-sm text-default-600 line-clamp-2">{bio}</p>}
            </div>
        </div>
    );
};

export default TeamMemberCard;
