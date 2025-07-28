
import { Laptop, Umbrella, Calendar, Clock } from 'lucide-react';

export default function OrganizationCulture() {
  return (
    <section className="organization-section">
      <div className="organization-wrapper">
        <div className="organization-header">
          <h1 className="organization-title">TECDIA'S</h1>
          <h2 className="organization-subtitle">ORGANIZATION CULTURE</h2>
          {/* <div className="organization-tagline">
            <span>Fusion of India & Japan</span>
          </div> */}
        </div>

        {/* <div className="organization-reminder">
          This needs to be done <br />
          This needs to be done <br />
          This needs to be done <br />
          This needs to be done <br />
          This needs to be done <br />
          This needs to be done <br />
        </div> */}

        <div className="organization-section-content">
          <div className="organization-heading-box">
            <span className="organization-heading">Work-life balance</span>
          </div>
          <p className="organization-paragraph">
            A company must be a place that enriches and enriches the lives of its employees. Therefore, we want
            employees to value not only their work, but also their private life, including their family and hobbies.
            In order to realize the work-life balance for each employee, we are actively promoting awareness-raising
            activities and establishing various systems.
          </p>

          <div className="organization-grid">
            <Card
              title="Monthly overtime hours: 4.8 hours"
              content="We are implementing activities to reduce overtime work and encourage employees to leave work on time..."
              Icon={Laptop}
              color="blue"
            />
            <Card
              title="126 days off per year"
              content="Two days off per week (Saturday, Sunday, and public holidays)..."
              Icon={Umbrella}
              color="green"
            />
            <Card
              title="Paid acquisition rate 79.2%"
              content="We are promoting the use of paid leave and are working to create an environment..."
              Icon={Calendar}
              color="pink"
            />
            <Card
              title="Flextime system"
              content="This system allows employees to freely adjust their start and finish times..."
              Icon={Clock}
              color="purple"
            />
          </div>
        </div>

        <div className="organization-certification">
          <span className="organization-certified-as">CERTIFIED AS</span>
          <div className="organization-certification-title">
            <span>Minato Ward Work-Life Balance Promotion Company</span>
          </div>

          <div className="organization-certification-box">
            <div className="organization-certification-content">
              <div className="organization-certification-logo">
                <img src="./minato.png" alt="Minato" />
              </div>
              <div className="organization-certification-text">
                <p>
                  As a company that balances work and child-rearing and creates a comfortable working environment
                  for everyone, Tecdia has been certified as a{' '}
                  <span className="highlighted-text">"Minato Ward Work-Life Balance Promotion Company"</span> three
                  times in a row from 2017 to 2021 and 2024. We will continue to work toward becoming a better
                  company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line no-unused-vars
function Card({ title, content,Icon, color }) {
  return (
    <div className={`organization-card ${color}`}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Icon className="organization-icon" strokeWidth={1.5} />
    </div>
  );
}
