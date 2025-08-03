import CircularGallery from "./CircularGallery";
import { Laptop, Umbrella, Calendar, Clock } from "lucide-react";

export default function OrganizationCulture() {
  return (
    // Add responsive padding to the main section
    <section className="organization-section px-4 sm:px-6 lg:px-8">
      <div className="organization-wrapper max-w-7xl mx-auto">
        <div className="organization-header text-center">
          {/* Titles now use responsive text sizes from Tailwind */}
          <h1 className="organization-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            TECDIA'S
          </h1>
          <h2 className="organization-subtitle text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
            ORGANIZATION CULTURE
          </h2>

          {/* Responsive container for the gallery, height adjusts with screen size */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] my-8">
            <CircularGallery
              bend={3}
              textColor="#000000"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>

        {/* Work-Life Balance Section */}
        <div className="flex flex-col items-center mt-12">
          <div className="organization-heading-box">
            {/* Responsive heading for the section */}
            <h2 className="organization-heading text-3xl sm:text-4xl md:text-5xl">
              Work-life balance
            </h2>
          </div>
          {/* Layout switches from vertical (mobile) to horizontal (large screens) */}
          <div className="flex flex-col lg:flex-row bg-pink-200 rounded-2xl items-center justify-center mt-8 w-full">
            <div className="lg:w-1/2 p-6 md:p-12 text-center lg:text-left">
              {/* Paragraph with responsive padding and font size */}
              <p className="organization-paragraph text-base md:text-lg">
                At TECDIA, we believe life is about more than work—it’s about
                balancing your career with what truly matters. Whether it’s
                family time, hobbies, or personal downtime, we support it all.
                With flexible systems and a culture that values your
                well-being, we give you the freedom to thrive both inside and
                outside the office. Because a fulfilling life creates a
                successful career, and at TECDIA, we support the whole you.
              </p>
            </div>
            {/* Grid changes from 1 to 2 columns, padding and width are responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-pink-800 lg:rounded-r-2xl lg:rounded-bl-none rounded-b-2xl p-6 lg:w-1/2 w-full">
              <Card
                title="Reclaim Your Evenings"
                content="Enjoy a healthy work-life balance. We keep monthly overtime to a record low of just 4.8 hours."
                Icon={Laptop}
                color="blue"
              />
              <Card
                title="126 Days Off Annually"
                content="Relax and recharge with over a third of the year off, including all weekends and public holidays."
                Icon={Umbrella}
                color="green"
              />
              <Card
                title="Actually Use Your Vacation"
                content="We don't just offer paid leave; we encourage it. Our 79.2% usage rate shows we want you to take that trip."
                Icon={Calendar}
                color="pink"
              />
              <Card
                title="Own Your Schedule"
                content="Life isn't always 9-to-5. Our flextime system lets you adjust your work hours to fit your personal rhythm."
                Icon={Clock}
                color="purple"
              />
            </div>
          </div>
        </div>

        {/* Certification Section */}
        <div className="flex flex-col items-center justify-center mt-16 text-center">
          {/* Responsive title */}
          <div className="organization-certified-as text-4xl sm:text-5xl lg:text-6xl">
            Certified as
          </div>

          {/* Container is now full-width with a max-width, and has responsive padding */}
          <div className="flex flex-col items-center justify-center bg-[#fff4d7] w-full max-w-7xl mx-auto rounded-3xl mt-8 p-6 sm:p-8">
            <h3 className="organization-certification-title text-xl sm:text-2xl lg:text-3xl font-semibold">
              <span>Minato Ward Work-Life Balance Promotion Company</span>
            </h3>

            <div className="organization-certification-box w-full mt-6">
              {/* Layout switches from vertical to horizontal */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="organization-certification-logo border-solid border-4 flex-shrink-0">
                  {/* Responsive image size */}
                  <img
                    src="./minato.png"
                    alt="Minato"
                    className="w-[150px] md:w-[200px]"
                  />
                </div>
                <div className="organization-certification-text">
                  {/* Responsive font size and text alignment */}
                  <p className="text-base md:text-lg text-center md:text-left">
                    As a company that balances work and child-rearing and
                    creates a comfortable working environment for everyone,
                    Tecdia has been certified as a{" "}
                    <span className="highlighted-text">
                      "Minato Ward Work-Life Balance Promotion Company"
                    </span>{" "}
                    three times in a row from 2017 to 2021 and 2024. We will
                    continue to work toward becoming a better company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Card component remains the same, its container is now responsive.
function Card({ title, content, Icon, color }) {
  return (
    <div className={`organization-card ${color}`}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Icon className="organization-icon" strokeWidth={1.5} />
    </div>
  );
}