export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

// Base Strapi type for any entry
export type StrapiBaseItem = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
};

// ========================
// Media (Image) type
// ========================
export interface Media extends StrapiBaseItem {
  alternativeText: string | null;
  url: string;
  name: string;
}

// ========================
// Banner
// ========================
export interface BannerItem {
  id: number;
  value: string;
  image: Media;
  type: string;
}

// ========================
// Header
// ========================
export interface NavLink {
  id: number;
  href: string;
  text: string;
  isExternal: boolean;
}

export interface HeaderButton {
  id: number;
  text: string;
  isExternal: boolean;
  href: string | null;
}

export interface Header {
  id: number;
  MainLogo: {
    id: number;
    href: string;
    isExternal: boolean;
    image: Media;
  };
  NavLink: NavLink[];
  Button: HeaderButton;
}

// ========================
// Footer
// ========================
export interface FooterLink {
  id: number;
  href: string;
  text: string;
  isExternal: boolean;
}

export interface FooterColumn {
  id: number;
  title: string;
  links: FooterLink[];
}

export interface FooterProp {
  id: number;
  Copyright: string;
  MainLogo: {
    id: number;
    href: string;
    isExternal: boolean;
    image: Media;
  };
  Column1: FooterColumn;
  Column2: FooterColumn;
}

export interface FormSection {
  id: number;
  title: string;
  Description: string;
}

// ========================
// Contacts, Social Links, Hero Section
// ========================
export interface Contact extends StrapiBaseItem {
  type: "phone" | "email" | "location";
  value: string;
  image?: Media; // in case you attach icons later
}

export interface SocialLink extends StrapiBaseItem {
  href: string;
  icon?: Media;
}

export interface HeroSection extends StrapiBaseItem {
  title: string;
  subtitle: string;
  description: string | null;
  slug: string;
  image?: Media;
  Button?: HeaderButton;
}

// ========================
// Global Single Type
// ========================
export interface GlobalApi extends StrapiBaseItem {
  title: string;
  Banner: BannerItem[];
  Header: Header;
  Footer: FooterProp;
  FormSection: FormSection;
  CommonData: {
    contacts: Contact[];
    socialLinks: SocialLink[];
    HeroSection: HeroSection[];
  };
}

// ========================
// API Response Wrapper
// ========================
export interface GlobalResponse {
  data: GlobalApi;
  meta: Record<string, string>;
}

// Root API Response
export interface LandingPageResponse {
  data: LandingPageData;
  meta: Record<string, unknown>;
}

// Landing Page Data
export interface LandingPageData {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: Block[];
  testimonials: Testimonial[];
}

// ----------------------
// Blocks (Dynamic Zone)
// ----------------------

export type Block =
  | AboutComponent
  | WhyChooseComponent
  | ServicesComponent
  | PortfolioComponent
  | TestimonialBlock
  | ClientComponent
  | OurVisionBlock
  | OurStepsBlock
  | OurMissionBlock
  | TestimonialBlock
  | FaqBlock
  | HireCardBlock
  | PortfolioComponent
  | TestimonialBlock
  | BetterSectionBlock
  | IndustoryComponentBlock;

// About Section
export interface AboutComponent {
  __component: "landing-page.about-component";
  id: number;
  heading: HeadingWithButton;
  image: Media;
  statistics: Statistic[];
}

export interface Statistic {
  id: number;
  data: string;
  value: string;
}

// Why Choose Section
export interface WhyChooseComponent {
  __component: "landing-page.why-choose-component";
  id: number;
  heading: Heading;
  cards: Card[];
}

// Services Section
export interface ServicesComponent {
  __component: "landing-page.services";
  id: number;
  heading: Heading;
  image: Media;
  cards: Card[];
  HireCard: HireCardProp;
}

export interface HireCardProp {
  id: number;
  title: string;
  description: string;
  Button: Button;
}

// Portfolio Section
export interface PortfolioComponent {
  __component: "landing-page.portfolio";
  id: number;
  heading: Heading;
  images: Media[];
  Button: Button;
}

// Testimonial Block (Heading only, testimonials are in root)
export interface TestimonialBlock {
  __component: "landing-page.testimonial";
  id: number;
  heading: Heading;
}

// Client Logos
export interface ClientComponent {
  __component: "landing-page.client-component";
  id: number;
  heading: Heading;
  images: Media[];
}

// ----------------------
// Shared Types
// ----------------------

export interface Heading {
  id: number;
  title: string;
  subtitle: string;
  description: string | null;
  Button: Button | null;
}

export interface HeadingWithButton extends Heading {
  description: string;
  Button: Button;
}

export interface Button {
  id: number;
  text: string;
  isExternal: boolean;
  href: string;
}

export interface Card {
  id: number;
  title: string;
  description: string;
  image: Media;
}

export interface Media {
  id: number;
  documentId: string;
  alternativeText: string | null;
  url: string;
  name: string;
}

// ----------------------
// Testimonials
// ----------------------

export interface Testimonial {
  id: number;
  documentId: string;
  rating: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  profile: Profile;
}

export interface Profile {
  id: number;
  documentId: string;
  name: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  image: Media | null;
}
// ========================
// Our Focus Page Response
// ========================

export interface OurFocusResponse {
  data: OurFocusData;
  meta: Record<string, unknown>;
}

export interface OurFocusData extends StrapiBaseItem {
  title: string;
  blocks: OurFocusBlock[];
  testimonials: Testimonial[];
  faqs: Faq[];
}

// ----------------------
// Blocks (Dynamic Zone)
// ----------------------
export type OurFocusBlock =
  | OurVisionBlock
  | OurStepsBlock
  | OurMissionBlock
  | TestimonialBlock
  | FaqBlock;

// Our Vision
export interface OurVisionBlock {
  __component: "our-focus.our-vision";
  id: number;
  heading: HeadingWithButton;
  image: Media;
}

// Our Steps
export interface OurStepsBlock {
  __component: "our-focus.our-steps";
  id: number;
  heading: Heading;
  cards: StepCard[];
}

export interface StepCard {
  id: number;
  title: string;
  description: string;
  image: Media | null;
}

// Our Mission
export interface OurMissionBlock {
  __component: "our-focus.our-mission";
  id: number;
  heading: Heading;
  image1: Media;
  image2: Media;
  HireCard: HireCardProp;
}

// FAQ Block (Heading only, FAQ items are in root)
export interface FaqBlock {
  __component: "our-focus.faq";
  id: number;
  heading: Heading;
  image: Media;
}

// ----------------------
// FAQs
// ----------------------
export interface Faq extends StrapiBaseItem {
  question: string;
  answer: string;
}

// ========================
// Clients Page Response
// ========================
export interface ClientsResponse {
  data: ClientsData;
  meta: Record<string, unknown>;
}

export interface ClientsData extends StrapiBaseItem {
  title: string;
  blocks: ClientsBlock[];
  testimonials: Testimonial[];
}

// ----------------------
// Blocks (Dynamic Zone)
// ----------------------
export type ClientsBlock =
  | ClientComponent
  | HireCardBlock
  | PortfolioComponent
  | TestimonialBlock;

// Hire Card Block
export interface HireCardBlock {
  __component: "common.hire-card";
  id: number;
  title: string;
  description: string;
  Button: Button | null;
}

// ========================
// Our Focus Page Response
// ========================

export interface WhyXizecResponse {
  data: WhyXizecData;
  meta: Record<string, unknown>;
}

// ----------------------
// Blocks (Dynamic Zone)
// ----------------------

export interface WhyXizecData extends StrapiBaseItem {
  title: string;
  blocks: WhyXizecBlock[];
  faqs: Faq[];
}

export type WhyXizecBlock =
  | OurVisionBlock
  | WhyChooseComponent
  | FaqBlock
  | BetterSectionBlock
  | IndustoryComponentBlock
  | ServicesComponent;

// Our Vision
export interface OurVisionBlock {
  __component: "our-focus.our-vision";
  id: number;
  heading: HeadingWithButton;
  image: Media;
}

// Why Choose (reuse LandingPage one)
export interface WhyChooseComponent {
  __component: "landing-page.why-choose-component";
  id: number;
  heading: Heading;
  cards: Card[];
}

// Better Section
export interface BetterSectionBlock {
  __component: "why-xizec.better-section";
  id: number;
  heading: Heading;
  image: Media;
  cards: BetterCard[];
  HireCard: HireCardProp;
}

export interface BetterCard {
  id: number;
  title: string;
  description: string;
  color: string | null;
  image: Media | null;
}

// Industry Component
export interface IndustoryComponentBlock {
  __component: "why-xizec.industory-component";
  id: number;
  heading: Heading;
  cards: IndustryCard[];
}

export interface IndustryCard {
  id: number;
  title: string;
  description: string | null;
  color: string | null;
  image: Media;
}

// Services Section (already defined in your code, just reused)
export interface ServicesComponent {
  __component: "landing-page.services";
  id: number;
  heading: Heading;
  image: Media;
  cards: Card[];
  HireCard: HireCardProp;
}

// ----------------------
// FAQ
// ----------------------
export interface Faq extends StrapiBaseItem {
  question: string;
  answer: string;
}
