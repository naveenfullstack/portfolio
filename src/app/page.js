import Services from "@/components/Services";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/bg-image.jpg')",
      }}
    >
      <div className="w-full">
        <div>
          <Hero />
        </div>

        <div className="flex items-center justify-center">
          <div className="max-w-layout  pr-10 pl-10">
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
}
