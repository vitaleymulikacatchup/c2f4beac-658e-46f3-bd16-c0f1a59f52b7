"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Award, Coffee, Facebook, Instagram, Leaf, Twitter } from "lucide-react";

export default function BrewHavenPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="mediumLarge"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="BrewHaven"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Order Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Discover Premium Specialty Coffee"
          description="Experience the art and science of carefully sourced, expertly roasted coffee. From our café to your cup, every brew tells a story of craftsmanship and passion."
          tag="Specialty Coffee Crafted for You"
          tagAnimation="slide-up"
          background={{ variant: "rotated-rays-static-grid" }}
          imageSrc="http://img.b2bpic.net/free-photo/top-view-brown-coffee-seeds-with-macarons_140725-27789.jpg"
          imageAlt="Coffee shop setup with espresso machine and barista"
          buttons={[
            { text: "Explore Our Blends", href: "products" },
            { text: "Visit Us Today", href: "contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Story"
          title="Roasting Excellence Since 2015"
          description="BrewHaven began with a simple mission: to bring the world's finest specialty coffees to your local community. We partner directly with sustainable farms across Ethiopia, Colombia, and Peru, ensuring fair trade practices and exceptional quality. Every bean is roasted fresh in small batches to bring out unique flavor profiles and aromas."
          metrics={[
            { value: "50+", title: "Coffee Origins" },
            { value: "12,000+", title: "Cups Served Daily" }
          ]}
          imageSrc="http://img.b2bpic.net/premium-photo/coffee-with-coffee-beans_1254813-28447.jpg?id=234230137"
          imageAlt="Coffee roasting process"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Products"
          description="Handpicked selections from our premium collection, expertly roasted to perfection"
          tag="Shop Our Favorites"
          tagAnimation="slide-up"
          products={[
            {
              id: "1",              name: "Sunrise Espresso Blend",              price: "$18.99",              variant: "Medium Roast  250g",              imageSrc: "http://img.b2bpic.net/free-photo/two-unfocused-black-take-away-paper-cups-with-closed-caps-isolated-wooden-brick-table_346278-575.jpg",              imageAlt: "Sunrise Espresso Blend coffee package"
            },
            {
              id: "2",              name: "Pour Over Starter Kit",              price: "$42.99",              variant: "Complete Set  Ceramic",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-coffee-beans-cup-with-kettle-spoon_23-2148808571.jpg",              imageAlt: "Pour over coffee brewing kit"
            },
            {
              id: "3",              name: "Cold Brew Concentrate",              price: "$14.99",              variant: "Ready to Serve  32oz",              imageSrc: "http://img.b2bpic.net/free-photo/man-with-apron-pouring-coffee-jar_23-2148366616.jpg",              imageAlt: "Cold brew coffee concentrate bottle"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          buttons={[{ text: "Browse All Products", href: "#" }]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Why Choose BrewHaven"
          description="Our commitment to quality excellence and community values"
          tag="By The Numbers"
          tagAnimation="slide-up"
          metrics={[
            { id: "1", icon: Coffee, title: "Sourcing", value: "100% Fair Trade" },
            { id: "2", icon: Leaf, title: "Sustainability", value: "Carbon Neutral" },
            { id: "3", icon: Award, title: "Recognition", value: "15+ Awards" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          buttons={[]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Join Our Coffee Community"
          description="Subscribe to our newsletter for exclusive blends, brewing tips, and special events. Let's brew something great together."
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="BrewHaven"
          copyrightText="© 2025 BrewHaven Coffee | All rights reserved"
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}