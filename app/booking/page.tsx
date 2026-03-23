import BookingHero from "@/features/booking/components/Hero";
import BookingForm from "@/features/booking/components/BookingForm";

const BookingPage = () => {
  return (
    <div className="bg-[#111]">
      <BookingHero />
      <BookingForm />
    </div>
  );
};

export default BookingPage;

