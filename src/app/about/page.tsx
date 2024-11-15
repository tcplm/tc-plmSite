import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Zenprist Solutions is a specialized service provider primarily focused on delivering advanced solutions in Teamcenter Product Lifecycle Management (PLM). With a commitment to optimizing product development processes, Zenprist Solutions helps organizations streamline their data management, enhance collaboration, and improve overall efficiency. Leveraging deep expertise in Teamcenter PLM, the company offers tailored implementations, custom integrations, and ongoing support to ensure clients can effectively manage complex product lifecycles from concept to end-of-life. Zenprist Solutions stands at the intersection of innovation and precision, helping businesses achieve operational excellence through seamless PLM strategies."
        />
    </>
  );
};

export default AboutPage;
