
import PageHeader from '@/components/PageHeader';
import GalleryGrid from '@/components/GalleryGrid';
import { galleryItems } from '@/data/gallery';

const GalleryPage = () => {
    return (
        <main>
            <PageHeader
                title="Galeri"
                breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Galeri' }]}
            />

            <section className="py-10 sm:py-16 lg:py-24">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold text-default-950">
                            Dokumentasi Kegiatan
                        </h2>
                        <p className="text-default-600 mt-4 text-center">
                            Momen-momen berharga dari berbagai kegiatan dan konferensi kami.
                        </p>
                    </div>

                    <GalleryGrid items={galleryItems} />
                </div>
            </section>
        </main>
    );
};

export default GalleryPage;
