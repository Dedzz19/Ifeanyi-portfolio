import { useState, useEffect } from "react";
import { Mail, ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", target: "work" },
  { label: "About", target: "about" },
  { label: "Stats", target: "stats" },
  { label: "Contact", target: "contact" },
];

const STATS = [
  { value: "180+", label: "Campaigns", sub: "Globally" },
  { value: "12", label: "Years", sub: "Industry" },
  { value: "38", label: "Countries", sub: "Traveled" },
];

const CLIENTS = [
  "DIOR HOMME",
  "ARMANI",
  "SAINT LAURENT",
  "BURBERRY",
  "VOGUE",
  "GQ",
  "HERMÈS",
  "PRADA",
  "TOM FORD",
  "CALVIN KLEIN",
];

const SPECS = [
  { label: "Height", value: '5\'10" / 177.8 cm' },
  { label: "Chest", value: '41"' },
  { label: "Waist", value: '29"' },
  { label: "Inseam", value: '33" ' },
  { label: "Shoe", value: "10 US / 43 EU" },
  { label: "Eyes", value: "Brown" },
  { label: "Hair", value: "Brown" },
  { label: "Agency", value: "None" },
];

const PORTFOLIO = [
  {
    id: 1,
    url: "/images/Fight.jpeg",
    campaign: "Maison Laurent",
    type: "Runway — SS 2024",
    col: "1 / 2",
    row: "1 / 3",
    align: "center",
  },
  {
    id: 2,
    url: "/images/mogshot.jpeg",
    campaign: "Nordic Skin",
    type: "Campaign — AW 2023",
    col: "2 / 4",
    row: "1 / 2",
    align: "center",
  },
  {
    id: 3,
    url: "/images/Teniss.jpeg",
    campaign: "Vogue Italia",
    type: "Editorial — March 2024",
    col: "2 / 3",
    row: "2 / 3",
    align: "top",
  },
  {
    id: 4,
    url: "/images/oldies.jpeg",
    campaign: "Armani Privé",
    type: "Campaign — FW 2023",
    col: "3 / 4",
    row: "2 / 3",
    align: "top",
  },
  {
    id: 5,
    url: "/images/prison.jpeg",
    campaign: "GQ Magazine",
    type: "Cover — July 2024",
    col: "1 / 3",
    row: "3 / 4",
    align: "top",
  },
  {
    id: 6,
    url: "/images/Bag.jpeg",
    campaign: "Dior Homme",
    type: "Fragrance — 2024",
    col: "3 / 4",
    row: "3 / 4",
    align: "top",
  },
];

const TICKER_TEXT =
  "Runway · Editorial · Campaign · Print · Commercial · Haute Couture · Fragrance · ";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/96 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-8 md:px-14 py-5">
          <button
            onClick={() => scrollTo("hero")}
            className="font-heading text-xs tracking-[0.35em] uppercase text-foreground font-bold hover:text-accent transition-colors duration-300"
          >
            Ifeanyi Ekwomadu
          </button>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.target)}
                className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="text-[10px] tracking-[0.25em] uppercase border border-foreground/25 hover:border-foreground px-6 py-2.5 transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Book Now
            </button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-8 py-8 flex flex-col gap-6">
            {[...NAV_LINKS, { label: "Book Now", target: "contact" }].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.target)}
                className="text-left text-[11px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden bg-neutral-900">
        <img
          src="/images/Back.jpeg"
          alt="Ifeanyi Ekwomadu — editorial hero portrait"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

        <div className="relative h-full flex flex-col justify-end px-8 md:px-14 pb-16 md:pb-24">
          <p
            className="font-mono text-[10px] tracking-[0.45em] uppercase text-accent mb-5"
            style={{ animation: "fadeInUp 0.8s ease both 0.2s" }}
          >
            Male Model —  Nigeria
          </p>

          <h1
            className="font-heading text-[clamp(4.5rem,14vw,11rem)] leading-[0.88] font-black uppercase text-foreground mb-8"
            style={{ animation: "fadeInUp 0.9s ease both 0.4s" }}
          >
            Ifeanyi<br />Ekwomadu
          </h1>

          <p
            className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-10"
            style={{ animation: "fadeInUp 0.9s ease both 0.6s" }}
          >
            High-fashion editorial and runway model represented by Elite Model Management .
          </p>

          <div
            className="flex items-center gap-6"
            style={{ animation: "fadeInUp 0.9s ease both 0.75s" }}
          >
            <button
              onClick={() => scrollTo("work")}
              className="flex items-center gap-2.5 text-[10px] tracking-[0.3em] uppercase border border-foreground/30 hover:border-foreground px-8 py-4 transition-all duration-300 hover:bg-foreground hover:text-background group"
            >
              View Portfolio
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-8 flex flex-col items-center gap-3 opacity-40">
          <div className="w-px h-14 bg-foreground/60 animate-pulse" />
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-border py-3.5 overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "ticker 28s linear infinite" }}
        >
          {Array(8).fill(TICKER_TEXT).map((text, i) => (
            <span key={i} className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mr-0">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <section id="work" className="px-8 md:px-14 py-20">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase leading-none">Selected Work</h2>
          <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground">2019 — 2024</span>
        </div>

        {/* Desktop grid */}
        <div
          className="hidden md:grid gap-2"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "340px 340px 340px",
          }}
        >
          {PORTFOLIO.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden bg-card cursor-pointer group"
              style={{ gridColumn: item.col, gridRow: item.row }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => { scrollTo("contact") }}
            >
              <img
                src={item.url}
                alt={item.campaign}
                style={{ objectPosition: item.align === "top" ? "center top" : "center" }}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/55 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="font-heading text-lg font-bold uppercase leading-tight">{item.campaign}</p>
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground mt-1.5">{item.type}</p>
              </div>
              <div
                className={`absolute top-4 right-4 transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <ArrowUpRight size={14} className="text-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="relative overflow-hidden bg-card aspect-3/4 group">
              <img
                src={item.url}
                alt={item.campaign}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/55 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-heading text-sm font-bold uppercase leading-tight">{item.campaign}</p>
                <p className="font-mono text-[8px] tracking-widest uppercase text-muted-foreground mt-1">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border grid md:grid-cols-2">
        <div className="relative h-[65vh] md:h-auto min-h-125 bg-card overflow-hidden">
          <img
            src="/images/white.jpeg"
            alt="Ifeanyi Ekwomadu — studio portrait"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
        </div>

        <div className="px-8 md:px-14 py-16 md:py-28 flex flex-col justify-center bg-card">
          <p className="font-mono text-[9px] tracking-[0.45em] uppercase text-accent mb-8">About</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black uppercase leading-[0.92] mb-8">
            The Eye<br />Behind<br />The Frame
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
            Born in Lyon, France, Adrien began modeling at 19 after being scouted at Paris Fashion Week. Over twelve years he has built a reputation for effortless intensity — equally at home in razor-sharp couture or raw, skin-first editorial work.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-14 max-w-sm">
            Represented globally by Elite Model Management, he has walked for the world&apos;s most sought-after houses and appeared across the covers of GQ, Vogue Homme, and Esquire.
          </p>

          <div className="border-t border-border pt-8">
            <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
              Measurements &amp; Vitals
            </p>
            <div className="grid grid-cols-2 gap-x-10">
              {SPECS.map((spec) => (
                <div key={spec.label} className="flex items-baseline justify-between border-b border-border/60 py-2.5">
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground">{spec.label}</span>
                  <span className="font-mono text-[11px] text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="border-t border-border px-8 md:px-14 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`py-14 md:py-8 ${i === 0 ? "" : "md:pl-16"} ${i === STATS.length - 1 ? "" : "md:pr-16"}`}>
              <p className="font-heading text-[clamp(4.5rem,9vw,7.5rem)] font-black leading-none text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-base font-medium text-foreground mb-1">{stat.label}</p>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-t border-border px-8 md:px-14 py-16">
        <p className="font-mono text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-10">Clients &amp; Press</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-border">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center py-8 px-4 border-b border-r border-border hover:bg-secondary transition-colors duration-200 group cursor-default"
            >
              <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-t border-border px-8 md:px-24 py-28">
        <blockquote className="max-w-3xl mx-auto">
          <div className="w-8 h-px bg-accent mb-10" />
          <p className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold italic leading-snug text-foreground mb-10">
            &ldquo;Ifeanyi brings an unusual stillness to the frame — a rare quality that photographers chase and rarely find. He doesn&apos;t perform; he inhabits.&rdquo;
          </p>
          <footer className="flex items-center gap-4">
            <div className="w-5 h-px bg-border" />
            <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground">
              Olivier Rousteing — Creative Director, Balmain
            </span>
          </footer>
        </blockquote>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border grid md:grid-cols-2">
        <div className="px-8 md:px-14 py-16 md:py-28 bg-card border-r border-border">
          <p className="font-mono text-[9px] tracking-[0.45em] uppercase text-accent mb-6">Contact</p>
          <h2 className="font-heading text-[clamp(3.5rem,8vw,6rem)] font-black uppercase leading-[0.88] mb-10">
            Let&apos;s<br />Work
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-12 max-w-xs">
            Available for editorial, runway, campaign, and commercial projects worldwide. Represented exclusively by Elite Model Management.
          </p>

          <div className="space-y-6 mb-12">
            <div>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-1.5">Bookings</p>
              <a href="mailto:bookings@elitemodels.com" className="text-sm hover:text-accent transition-colors duration-200">
                bookings@elitemodels.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-1.5">Direct</p>
              <a href="mailto:contact@adrienbeaumont.com" className="text-sm hover:text-accent transition-colors duration-200">
                contact@adrienbeaumont.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 border-t border-border pt-8">
            <a
              href="https://www.instagram.com/ifeanyi_ekwomadu/"
              target="_blank"
              className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
            >
              {/* <Instagram size={13} /> */}
              <span>Instagram</span>
              <ArrowUpRight size={9} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Mail size={13} />
              <span>Newsletter</span>
              <ArrowUpRight size={9} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div className="px-8 md:px-14 py-16 md:py-28">
          <form
            className="flex flex-col gap-7"
            onSubmit={(e) => {
              e.preventDefault();
              setFormData({ name: "", email: "", project: "", message: "" });
            }}
          >
            {[
              { key: "name", label: "Name", type: "text", placeholder: "Your full name" },
              { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              { key: "project", label: "Project Type", type: "text", placeholder: "Editorial, Campaign, Runway..." },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground block mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                  className="w-full bg-transparent border-b border-border focus:border-foreground/60 outline-none py-3 text-sm placeholder:text-muted-foreground/30 transition-colors duration-200"
                />
              </div>
            ))}

            <div>
              <label className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground block mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                className="w-full bg-transparent border-b border-border focus:border-foreground/60 outline-none py-3 text-sm placeholder:text-muted-foreground/30 transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 self-start flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase border border-foreground/25 hover:border-foreground px-10 py-4 transition-all duration-300 hover:bg-foreground hover:text-background group"
            >
              Send Message
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-8 md:px-14 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="font-heading text-[11px] tracking-[0.35em] uppercase font-bold">Ifeanyi Ekwomadu</span>
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
          © 2026 — All Rights Reserved
        </span>
        <div className="flex items-center gap-8">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground">Elite Model Management</span>
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground">Paris · New York · Milan</span>
        </div>
      </footer>
    </div>
  );
}
