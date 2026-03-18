import Navbar from "@/components/Navbar";
import ConsultationBooking from "@/components/ConsultationBooking";
import Footer from "@/components/Footer";

const ConsultationPage = () => {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <div className="pt-24">
        <ConsultationBooking />
      </div>
      <Footer />
    </>
  );
};

export default ConsultationPage;
