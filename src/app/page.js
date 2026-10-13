export default function Home() {
  return (
    <main className="flex-1 bg-zinc-50 text-zinc-950">
      <section
        id="home"
        className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center justify-center bg-zinc-950 px-6 py-20 text-white"
      >
        <div className="max-w-3xl text-center">
          <p className="mb-4 font-medium text-emerald-400">
            Software Developer · Saskatchewan, Canada
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I’m Rommel Suela.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            I build business applications, APIs, and full-stack web experiences
            with .NET, C#, React, and TypeScript.
          </p>
          <a
            href="#experience"
            className="mt-8 inline-flex rounded-md bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            View my experience
          </a>
        </div>
      </section>

      <section id="about" className="scroll-mt-16 bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold text-emerald-700">A little about me</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            From backend systems to full-stack experiences
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            I’m a software developer with 9+ years of experience building and
            supporting business applications, REST APIs, integrations, and
            data-driven systems. My background is in C#, .NET, ASP.NET Core, and
            SQL Server, with a focus on maintainable architecture and practical
            solutions to business needs.
          </p>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            I also work with React, TypeScript, and JavaScript, bringing
            component-based interfaces together with APIs and application
            services. I value collaboration, clear communication, and continuous
            learning.
          </p>
        </div>
      </section>

      <section id="skills" className="scroll-mt-16 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold text-emerald-700">What I work with</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical skills
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <SkillGroup
              title="Languages"
              skills="C#, .NET, JavaScript, TypeScript, SQL, HTML5, CSS3"
            />
            <SkillGroup
              title="Frontend"
              skills="React, React Hooks, React Router, component-based UI, state management, Blazor, Fluent UI"
            />
            <SkillGroup
              title="Backend"
              skills="ASP.NET Core, ASP.NET Web API, REST APIs, JWT, WCF, Dapper, Entity Framework Core, dependency injection"
            />
            <SkillGroup
              title="Architecture & data"
              skills="OOP, SOLID, layered architecture, DTOs, repository and service patterns, SQL Server, T-SQL, relational design"
            />
            <SkillGroup
              title="Tools & platforms"
              skills="Git, GitHub, CI/CD fundamentals, Visual Studio, Azure fundamentals, Windows Server, Active Directory"
            />
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-16 bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold text-emerald-700">Where I’ve worked</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Experience & projects
          </h2>
          <div className="mt-10 space-y-10">
            <ExperienceItem
              title="Computer Technician"
              organization="MicroAge / Innovative Computer Group Ltd."
              location="Swift Current, Saskatchewan"
              dates="Aug 2025 – Present"
              highlights={[
                "Diagnose and resolve Windows hardware, software, network, and connectivity issues for business users.",
                "Set up and configure workstations, perform Windows installations and data transfers, and troubleshoot PCs and peripherals.",
                "Develop and maintain the business application, contributing to its migration from Power Apps to .NET Core, Blazor, Fluent UI, and SharePoint.",
              ]}
            />
            <ExperienceItem
              title="Senior Software Engineer"
              organization="Tech Mahindra Ltd."
              location="NCR / Manila, Philippines"
              dates="Jan 2022 – Sep 2023"
              highlights={[
                "Developed REST APIs and backend services with C#, ASP.NET Web API, ASP.NET Core, JWT, Dapper, SQL Server, and WCF.",
                "Worked on microservices, mobile and API integrations, third-party reporting, and business-system integrations.",
                "Contributed to Agile delivery, requirements analysis, debugging, code reviews, and maintainable application design.",
              ]}
            />
            <ExperienceItem
              title="Analyst Programmer I"
              organization="Ormina Realty and Development Corp."
              location="Quezon City, Philippines"
              dates="Mar 2019 – Jan 2022"
              highlights={[
                "Designed an Android point-of-sale application with biometric fingerprint verification.",
                "Built a real-time payment system using Web API and JWT for secure transactions with third-party agencies and banks.",
              ]}
            />
            <ExperienceItem
              title="Analyst Programmer"
              organization="Ormina Realty and Development Corp."
              location="Quezon City, Philippines"
              dates="Jul 2016 – May 2018"
              highlights={[
                "Delivered system enhancements and an SMS service for customer inquiries and notifications.",
                "Developed mobile meter-reading and IT inventory applications to improve data collection and resource tracking.",
              ]}
            />
            <ExperienceItem
              title="Programmer"
              organization="Digital Data Corp."
              location="NCR / Manila, Philippines"
              dates="2013 – 2016"
              highlights={[
                "Maintained and enhanced applications, supported deployments, and provided client support and user training.",
                "Contributed to mobile banking and business-system improvements, troubleshooting production issues with users.",
              ]}
            />
          </div>

          <article className="mt-12 rounded-xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
              Current project · 2026 – Present
            </p>
            <h3 className="mt-2 text-xl font-bold text-zinc-950">
              Competency Tracker
            </h3>
            <p className="mt-3 leading-7 text-zinc-700">
              Migrating a business application from Microsoft Power Apps to a
              custom .NET solution using C#, .NET Core, Blazor, Fluent UI, and
              SharePoint. The work includes reusable UI components, business
              logic, data workflows, and a React/TypeScript frontend integrated
              with REST APIs.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold text-emerald-700">Get in touch</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s connect
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            I’m based in Saskatchewan, Canada, and open to conversations about
            software development opportunities.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
            <a
              href="mailto:rommel.suela@gmail.com"
              className="font-medium text-emerald-800 underline underline-offset-4 hover:text-emerald-600"
            >
              rommel.suela.cn@gmail.com
            </a>
            <a
              href="tel:+16395410073"
              className="font-medium text-emerald-800 underline underline-offset-4 hover:text-emerald-600"
            >
              639-541-0073
            </a>
          </div>
          <p className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
            Full-Stack Developer · Software Developer · .NET Developer · C#
            Developer
          </p>
        </div>
      </section>
    </main>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5">
      <h3 className="font-semibold text-zinc-950">{title}</h3>
      <p className="mt-2 leading-7 text-zinc-600">{skills}</p>
    </article>
  );
}

function ExperienceItem({ title, organization, location, dates, highlights }) {
  return (
    <article className="border-l-2 border-emerald-600 pl-5 sm:pl-6">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm font-medium text-emerald-800">{dates}</p>
      </div>
      <p className="mt-1 font-medium text-zinc-700">{organization}</p>
      <p className="mt-1 text-sm text-zinc-500">{location}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-zinc-600">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
