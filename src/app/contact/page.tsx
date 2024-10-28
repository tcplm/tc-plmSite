import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="We’d love to hear from you! Whether you have inquiries about our services, need support, or want to explore how Zenprist Solutions can assist with your Teamcenter PLM needs, feel free to reach out. Our team is here to help."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
