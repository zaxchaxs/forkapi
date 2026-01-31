
import PageHeader from '@/components/PageHeader';
import TeamMemberCard from '@/components/cards/TeamCard';
import SectionBadge from '@/components/ui/SectionBadge';
import { vision, mission, teamMembers } from '@/data/about';
import Image from 'next/image';
import { LuCheck, LuTarget, LuUsers } from 'react-icons/lu';

// Placeholder image for about section
import aboutImage from '@/assets/images/landing/charity/img-10.jpg';

const AboutPage = () => {
    return (
        <main className='dark:bg-default-300'>
            <PageHeader
                title="Tentang Kami"
                breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Tentang Kami' }]}
            />

            {/* Vision & Mission Section */}
            <section className="py-10 sm:py-16 lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={aboutImage}
                                    alt="About Forkapi"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-default-100 p-6 rounded-xl shadow-xl max-w-xs hidden lg:block">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <LuTarget className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-default-950">Visi Kami</h3>
                                </div>
                                <p className="text-sm text-default-600 dark:text-default-700">
                                    {vision}
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-center'>
                                <SectionBadge>Profil Organisasi</SectionBadge>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-default-950 mt-4 mb-6 lg:text-left text-center">
                                Membangun Komunikasi untuk Pembangunan Berkelanjutan
                            </h2>
                            <p className="text-default-600 mb-8 text-lg dark:text-default-700">
                                FORKAPI (Forum Komunikasi Pembangunan Indonesia) adalah wadah bagi para akademisi, praktisi, dan pemerhati komunikasi pembangunan untuk bersinergi.
                            </p>

                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-default-950 flex items-center gap-2">
                                    <LuTarget className="text-primary h-5 w-5" /> Misi Kami
                                </h3>
                                <ul className="space-y-4">
                                    {mission.map((item, index) => (
                                        <li key={index} className="flex gap-3">
                                            <div className="mt-1 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full p-1 flex-shrink-0 h-fit">
                                                <LuCheck className="h-4 w-4" />
                                            </div>
                                            <span className="text-default-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-10 sm:py-16 lg:py-20">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <SectionBadge>Tim Kami</SectionBadge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-default-950 mt-4">
                            Struktur Organisasi
                        </h2>
                        <p className="text-default-600 mt-4">
                            Dedikasi kami untuk memajukan komunikasi pembangunan di Indonesia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                                bio={member.bio}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
