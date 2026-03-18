import Navbar from "@/components/Navbar";
import WebinarSection from "@/components/WebinarSection";
import Footer from "@/components/Footer";

const WebinarPage = () => {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <div className="pt-20">
        <WebinarSection />
      </div>
      <Footer />
    </>
  );
};

export default WebinarPage;
