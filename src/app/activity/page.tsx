
import PageHeader from '@/components/PageHeader';
import ActivityCard from '@/components/cards/ActivityCard';
import SectionBadge from '@/components/ui/SectionBadge';
import { activities } from '@/data/activity';

const ActivityPage = () => {
    return (
        <main className='dark:bg-default-300'>
            <PageHeader
                title="Kegiatan"
                breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Kegiatan' }]}
            />

            <section className="py-10 sm:py-16 lg:py-20">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <SectionBadge>Agenda & Berita</SectionBadge>
                        <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold text-default-950 mt-4">
                            Kegiatan Terbaru FORKAPI
                        </h2>
                        <p className="text-default-600 mt-4 text-center">
                            Ikuti terus perkembangan kegiatan dan program yang kami jalankan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity) => (
                            <ActivityCard
                                key={activity.id}
                                title={activity.title}
                                image={activity.image}
                                description={activity.description}
                                category={activity.category}
                                date={activity.date}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ActivityPage;
