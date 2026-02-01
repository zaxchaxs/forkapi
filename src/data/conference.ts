// <div className="flex flex-wrap items-center justify-between gap-5">
//   <div>
//     <div className="mx-auto max-w-2xl flex flex-col gap-4">
//       <SectionBadge className="w-fit">
//         Galeri FORKAPI
//       </SectionBadge>
//       <h2 className="mb-4 text-4xl font-medium text-default-950">
//         Galeri kegiatan FORKAPI
//       </h2>
//       <p className="text-base">
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam facere earum voluptatem aperiam consectetur aspernatur rerum repellendus dolore sequi ad repudiandae quos tempora velit laborum neque, facilis, optio, blanditiis corrupti?
//       </p>

// Placeholder images - replace with actual assets later
import conferenceImg1 from "@/assets/images/placeholderPotrait.png";
import conferenceImg2 from "@/assets/images/placeholderPotrait.png";

export const upcomingConferences = [
  {
    id: 1,
    title: "Konferensi Nasional Komunikasi Pembangunan 2024",
    date: "24-25 Oktober 2024",
    location: "Jakarta, Indonesia",
    image: conferenceImg1,
    description:
      "Membangun Sinergi untuk Indonesia Emas 2045 melalui Komunikasi yang Efektif.",
    price: 1000000,
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Konferensi Nasional Komunikasi Pembangunan 2024",
    date: "24-25 Oktober 2024",
    location: "Jakarta, Indonesia",
    image: conferenceImg1,
    description:
      "Membangun Sinergi untuk Indonesia Emas 2045 melalui Komunikasi yang Efektif.",
    price: 1000000,
    status: "Upcoming",
  },
];

export const pastConferences = [
  {
    id: 101,
    title: "Forum Diskusi Pembangunan Desa",
    date: "12 Januari 2024",
    location: "Bandung, Jawa Barat",
    image: conferenceImg2,
    description:
      "Diskusi panel mengenai tantangan dan peluang pembangunan desa di era digital.",
    price: 0,
    status: "Past",
  },
  {
    id: 102,
    title: "Forum Diskusi Pembangunan Desa",
    date: "12 Januari 2024",
    location: "Bandung, Jawa Barat",
    image: conferenceImg2,
    description:
      "Diskusi panel mengenai tantangan dan peluang pembangunan desa di era digital.",
    price: 0,
    status: "Past",
  },
  {
    id: 103,
    title: "Forum Diskusi Pembangunan Desa",
    date: "12 Januari 2024",
    location: "Bandung, Jawa Barat",
    image: conferenceImg2,
    description:
      "Diskusi panel mengenai tantangan dan peluang pembangunan desa di era digital.",
    price: 0,
    status: "Past",
  },
  // Add more past conferences
];
