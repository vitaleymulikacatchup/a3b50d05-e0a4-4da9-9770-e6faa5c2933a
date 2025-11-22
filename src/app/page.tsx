"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="dotGrid"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="LuxeStay"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="LUXESTAY"
          description="Experience unparalleled luxury and comfort at our five-star hotel. Indulge in world-class amenities, exceptional service, and unforgettable memories."
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816365857-ltv15m92.jpg",
              imageAlt: "Luxury hotel exterior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816366613-qk6um9oz.jpg",
              imageAlt: "Elegant hotel lobby"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816367315-augg1802.jpg",
              imageAlt: "Luxury bedroom suite"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Welcome to LuxeStay"
          description={[
            "Since 1995, LuxeStay has been the premier destination for discerning travelers seeking the perfect blend of luxury, comfort, and personalized service. Our commitment to excellence is reflected in every detail of your stay.",
            "From our meticulously appointed rooms to our world-class dining experiences, we ensure that every moment at LuxeStay is extraordinary. Our dedicated team is committed to exceeding your expectations and creating memories that last a lifetime."
          ]}
          buttons={[
            { text: "Learn More", href: "amenities" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Our Room Collection"
          description="Choose from our carefully curated selection of luxurious rooms and suites, each designed with your comfort in mind."
          tag="Accommodations"
          textboxLayout="default"
          products={[
            {
              id: "1",
              name: "Deluxe Room",
              price: "$199/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816368942-m3yo39dn.jpg",
              imageAlt: "Deluxe room with king bed"
            },
            {
              id: "2",
              name: "Premium Suite",
              price: "$349/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816369716-busv07u8.jpg",
              imageAlt: "Premium suite with living area"
            },
            {
              id: "3",
              name: "Penthouse Suite",
              price: "$599/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816370396-bnl1yajf.jpg",
              imageAlt: "Penthouse suite luxury accommodation"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardEight
          title="World-Class Amenities"
          description="Discover our exceptional facilities and services designed to enhance your stay."
          tag="Premium Facilities"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Olympic Pool",
              description: "Relax by our stunning heated swimming pool with poolside bar service and breathtaking views.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816371317-d686dfmf.jpg",
              imageAlt: "Olympic swimming pool"
            },
            {
              id: 2,
              title: "Spa & Wellness",
              description: "Rejuvenate your body and mind at our full-service spa featuring massages, facials, and wellness treatments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816372010-icb232gt.jpg",
              imageAlt: "Luxury spa center"
            },
            {
              id: 3,
              title: "Fine Dining",
              description: "Savor exquisite cuisine prepared by our award-winning chefs in our elegant restaurant and lounge.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816372723-p559bxcs.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              id: 4,
              title: "Fitness Center",
              description: "Stay fit with our state-of-the-art gym equipped with modern equipment and personal training services.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816373430-cq5n0ti4.jpg",
              imageAlt: "Fitness center gym"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Guest Experiences"
          description="Hear from our satisfied guests about their unforgettable stays at LuxeStay."
          tag="Testimonials"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahmitchell",
              testimonial: "The most wonderful hotel experience I've ever had. Every detail was perfect, from the room to the service. I'll definitely return!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816374103-2tsk54v4.jpg",
              imageAlt: "Sarah Mitchell guest"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@jameschen",
              testimonial: "Outstanding luxury combined with genuine hospitality. The staff treated us like family. Highly recommended for special occasions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816375078-n6saabf9.jpg",
              imageAlt: "James Chen guest"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmarod",
              testimonial: "The spa was absolutely relaxing, and the dining was world-class. Worth every penny. We booked our next vacation already!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816375633-blem253k.jpg",
              imageAlt: "Emma Rodriguez guest"
            },
            {
              id: "4",
              name: "David Thompson",
              handle: "@davidthompson",
              testimonial: "Impeccable service and attention to detail. This is how luxury should feel. Can't wait to come back with my family.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816376171-4l3zdizb.jpg",
              imageAlt: "David Thompson guest"
            }
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about bookings, amenities, and our services."
          tag="Help & Support"
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "What is your cancellation policy?",
              content: "We offer flexible cancellation up to 48 hours before arrival for a full refund. Cancellations within 48 hours may incur charges. Please review your booking confirmation for specific terms."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for all guests. Please arrange your pickup time upon check-in or contact our concierge for assistance."
            },
            {
              id: "3",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets with a one-time fee of $50. Please inform us during booking so we can arrange a pet-friendly room for your stay."
            },
            {
              id: "4",
              title: "What dining options are available?",
              content: "Our hotel features three restaurants: fine dining at our main restaurant, casual dining at the café, and room service available 24/7. We also offer special dietary accommodations upon request."
            },
            {
              id: "5",
              title: "What is your check-in and check-out time?",
              content: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available subject to availability. Contact our front desk for assistance."
            },
            {
              id: "6",
              title: "Do you offer corporate packages?",
              content: "Yes, we offer customized corporate packages including group rates, meeting facilities, and event services. Contact our sales team for detailed information and quotes."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Perfect Stay"
          description="Ready to experience luxury? Contact us to make your reservation or if you have any questions about our services."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "checkIn",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkOut",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Your message or special requests...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763816376863-cw4lduiw.jpg"
          imageAlt="Hotel concierge"
          mediaPosition="right"
          buttonText="Request Booking"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "About Us", href: "about" },
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Guest Services",
              items: [
                { label: "Book a Room", href: "contact" },
                { label: "Group Bookings", href: "contact" },
                { label: "Loyalty Program", href: "#" },
                { label: "Special Offers", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Accessibility", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 LuxeStay Hotels. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}