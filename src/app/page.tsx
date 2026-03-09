"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
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
            { name: "Reviews", id: "testimonials" },
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
          imageSrc="http://img.b2bpic.net/free-photo/coffee-machine-bar_23-2147798032.jpg"
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

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Customers Love"
          description="Hear from the coffee enthusiasts who make BrewHaven their daily destination"
          tag="Customer Reviews"
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          buttons={[]}
          testimonials={[
            {
              id: "1",              name: "Sarah Martinez",              handle: "@sarah_loves_coffee",              testimonial: "The quality of beans and the expertise of the baristas is unmatched. Every visit feels like coming home to a welcoming community.",              imageSrc: "http://img.b2bpic.net/free-photo/multiracial-group-friends-having-coffee-together_1139-1029.jpg?_wi=1",              imageAlt: "Sarah Martinez"
            },
            {
              id: "2",              name: "James Chen",              handle: "@morning_brew_enthusiast",              testimonial: "I've tried specialty coffee shops across the city, but BrewHaven consistently delivers the best pour-over experience.",              imageSrc: "http://img.b2bpic.net/free-photo/person-drinking-coffee-spacious-cafeteria_23-2150424050.jpg?_wi=1",              imageAlt: "James Chen"
            },
            {
              id: "3",              name: "Emily Rodriguez",              handle: "@emily_coffee_wanderer",              testimonial: "Their commitment to fair trade and sustainability matters to me. I feel good about where my coffee comes from.",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-holding-cup-with-coffee-pub_23-2148448941.jpg",              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",              name: "Michael Thompson",              handle: "@thrifty_coffee_lover",              testimonial: "BrewHaven's subscription service is a game-changer. Fresh roasted beans delivered monthly, and the savings are incredible.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-woman-smiling_23-2148665396.jpg",              imageAlt: "Michael Thompson"
            },
            {
              id: "5",              name: "Jessica Lee",              handle: "@cafe_culture_addict",              testimonial: "The atmosphere here invites creativity and connection. I've started my best projects with a cup of their Ethiopian Yirgacheffe.",              imageSrc: "http://img.b2bpic.net/free-photo/multiracial-group-friends-having-coffee-together_1139-1029.jpg?_wi=2",              imageAlt: "Jessica Lee"
            },
            {
              id: "6",              name: "David Kim",              handle: "@coffee_connoisseur_dk",              testimonial: "Exceptional beans, exceptional service, and exceptional people. This is what specialty coffee should be.",              imageSrc: "http://img.b2bpic.net/free-photo/person-drinking-coffee-spacious-cafeteria_23-2150424050.jpg?_wi=2",              imageAlt: "David Kim"
            }
          ]}
          speed={40}
          topMarqueeDirection="left"
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