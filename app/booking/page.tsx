import BookingHero from "@/features/booking/components/Hero";
import BookingForm from "@/features/booking/components/BookingForm";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const BookingPage = () => {
  return (
    <div className="bg-[#111]">
      <BookingHero />
      <Suspense fallback={null}>
        <BookingForm />
      </Suspense>
    </div>
  );
};

export default BookingPage;
