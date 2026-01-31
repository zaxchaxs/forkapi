export interface MenuItem {
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/about-us" },
  { label: "Konferensi", href: "/conference" },
  { label: "Kegiatan", href: "/activity" },
  { label: "Galeri", href: "/gallery" },
];
