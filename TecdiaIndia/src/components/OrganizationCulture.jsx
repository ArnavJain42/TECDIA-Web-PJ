import CircularGallery from "./CircularGallery";
import { Laptop, Umbrella, Calendar, Clock } from "lucide-react";

export default function OrganizationCulture() {
  return (
    <section className="organization-section">
      <div className="organization-wrapper">
        <div className="organization-header">
          <h1 className="organization-title xl:text-9xl md:text-9xl sm:text-8xl text-6xl">
            TECDIA'S
          </h1>
          <h2 className="organization-subtitle xl:text-6xl md:text-6xl sm:text-4xl text-3xl">
            ORGANIZATION CULTURE
          </h2>

          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={3}
              textColor="#000000"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="">
            <span className="organization-heading">Work-life balance</span>
          </div>
          <div className="flex  bg-pink-200 rounded-2xl items-center justify-center">
            <p className="organization-paragraph">
              At TECDIA, we believe life is about more than work—it’s about
              balancing your career with what truly matters. Whether it’s family
              time, hobbies, or personal downtime, we support it all. With
              flexible systems and a culture that values your well-being, we
              give you the freedom to thrive both inside and outside the office.
              Because a fulfilling life creates a successful career, and at
              TECDIA, we support the whole you.
            </p>
            <div className="grid grid-cols-2 gap-3 bg-pink-800 rounded-r-2xl h-[600px] wlgrid">
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

        <div className="flex flex-col items-center justify-center">
          <div className="organization-certified-as">Certified as</div>
          {/* Certification */}
          <div className="flex flex-col items-center justify-center bg-[#fff4d7] w-[1400px] rounded-3xl">
            <div className="organization-certification-title ">
              <span>Minato Ward Work-Life Balance Promotion Company</span>
            </div>

            <div className="organization-certification-box w-[100%]">
              <div className="flex">
                <div className=" organization-certification-logo border-solid border-4">
                  <img src="./minato.png" alt="Minato" />
                </div>
                <div className="organization-certification-text">
                  <p>
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

// eslint-disable-next-line no-unused-vars
function Card({ title, content, Icon, color }) {
  return (
    <div className={`organization-card ${color}`}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Icon className="organization-icon" strokeWidth={1.5} />
    </div>
  );
}
