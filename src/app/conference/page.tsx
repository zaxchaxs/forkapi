
import PageHeader from '@/components/PageHeader';
import ConferenceCard from '@/components/cards/ConferenceCard';
import SectionBadge from '@/components/ui/SectionBadge';
import { upcomingConferences, pastConferences } from '@/data/conference';

const ConferencePage = () => {
    return (
        <main className='dark:bg-default-300'>
            <PageHeader
                title="Konferensi"
                breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Konferensi' }]}
            />

            {/* Upcoming Conferences */}
            <section className="py-10 sm:py-16 lg:py-20">
                <div className="container">
                    <div className="mb-10">
                        <div className='flex justify-center'>
                            <SectionBadge>Akan Datang</SectionBadge>
                        </div>
                        <h2 className="text-2xl text-center sm:text-3xl font-bold text-default-950 mt-4">Konferensi Terbaru</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingConferences.map((conf) => (
                            <ConferenceCard
                                key={conf.id}
                                title={conf.title}
                                date={conf.date}
                                location={conf.location}
                                image={conf.image}
                                description={conf.description}
                                price={conf.price}
                                status={conf.status}
                            />
                        ))}
                    </div>
                    {upcomingConferences.length === 0 && (
                        <div className="text-center py-10 bg-default-50 rounded-lg">
                            <p className="text-default-500 text-center">Belum ada konferensi yang akan datang.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Past Conferences */}
            <section className="py-10 sm:py-16 lg:py-20">
                <div className="container">
                    <div className="mb-10">
                        <h2 className="text-2xl text-center sm:text-3xl font-bold text-default-950">Arsip Konferensi</h2>
                        <p className="text-default-600 mt-2 text-center">Daftar konferensi yang telah terselenggara sebelumnya.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pastConferences.map((conf) => (
                            <ConferenceCard
                                key={conf.id}
                                title={conf.title}
                                date={conf.date}
                                location={conf.location}
                                image={conf.image}
                                description={conf.description}
                                price={conf.price}
                                status={conf.status}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ConferencePage;
