import { Article } from '@layout/Article'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { Role } from '@components/Role'
import { SubRole } from '@components/Role'

export function Career() {
  return (
    <Article>
      <Heading level={2}>Career</Heading>
      <Text>
        I'm currently looking for my next role in the Product Engineer/Design Engineer space.
      </Text>
      <section className="flex flex-col">
        <Role
          title="Head of product design"
          dates="January 2025 - Present"
          company="DVx Zumi UK Ltd"
        >
          <Text>
            Founding-team role at an AI hospitality startup; primary technical and product
            decision-maker, hands-on from discovery to production. Responsible for strategic roadmap
            and daily delivery. Designed, built and shipped an LLM-powered (Google ADK) guest
            personalisation pipeline guiding the proof of concept through to production, creating
            the tools and agent to agent (A2A) communication to deliver a complex report via email
            to replace a costly manual business process. Cloud based systems integration with
            complex CMS and POS systems in realtime across 20+ luxury venues worldwide. Built an
            automated guest data pipeline using Playwright and GCP Cloud run tasks that replaced a
            15-hour-per-week manual process: identified the problem, scoped the solution and shipped
            it solo. Introduced Omni as a semantic data layer across disparate client systems,
            replacing costly third-party reporting and standardising data delivery across the
            product. Reframed how the engineering team scopes work (PR/FAQ framing with Shape Up
            appetite sizing), making platform investment legible to non-technical leadership for the
            first time. Designed and implemented the organisation's design system, including
            automated design token export to tailwind variables for a multi tenant, white labeled
            product.
          </Text>
        </Role>

        <Role title="Head of user experience" dates="June 2023 - January 2025" company="Moneyhub">
          <Text>
            Senior leadership in a regulated Open Banking fintech, working alongside CTO, CCO and
            Product Director on a multi-tenant white-label platform. HIred, mentored and coached
            designers and engineers to own the full problem space running their own research and
            presenting directly to engineering rather than handing over a file. Built a data model
            linking behavioural analytics to measurable client outcomes, shifting the product
            organisation from reactive feature delivery to an evidence-based roadmap. Led strategic
            product initiatives alongside the product director to win and extend key commercial
            contacts.
          </Text>
          <SubRole title="Lead UX developer" dates="June 2020 - June 2023" company="Moneyhub">
            <Text>
              First design-engineering hire and major front-end contributor in a 50-person
              engineering organisation; sole owner of the front end design across the white-label
              web app (and a packaged mobile app), from user research through build to shipped,
              in-production UI. Designed, built and drove adoption of a unified white-label design
              system with brand-token architecture in production at Standard Life, Mercer and Legal
              & General. Adoption was earned through skill-sharing and documentation, not mandate.
              Designed and delivered Moneyhub’s first Open Banking payment initiation (PISP)
              capability, working directly with standards bodies; it handles £500k–£1m in payments
              per month in production. Worked with the data science team to surface the
              auto-categorisation engine’s top predictions in a single interaction; the engine now
              powers categorisation for HSBC across several products. Designed and shipped tens of
              features, including Savings Goals feature, trialled with Standard Life (over £500k in
              goals set within the first two weeks) and rolled out across all clients.
            </Text>
          </SubRole>
        </Role>

        <Role
          title="Principal Software Developer & UX Capability Lead"
          dates="March 2019 - June 2020"
          company="BMT Group"
        >
          <Text>
            Built a new practice from zero to one: recruited, onboarded and mentored, and won round
            a resistant function through sustained stakeholder work. Led MoD client engagements
            resulting in a £60k contract renewal and a new £200k contract for a mobile application
            for safety officers on major UK platforms. Experience working in government GDS
            processes, with a project for the (GLAA) to reduce time taken to complete an application
            process in a complex environment where decisions affected people’s lives. Continue to
            lead, mentor and develop the department wide engineering capability.
          </Text>
          <SubRole
            title="Senior Software Developer"
            dates="July 2012 - March 2019"
            company="BMT Group"
          >
            <Text>
              Sixth hire in a department grown to 120; concurrent technical lead, scrum master and
              project manager across classified defence programmes. Technical architect and lead on
              numerous UK MoD and local government projects. Prime-contractor technical and delivery
              lead on JUMP, a £1m/year, two-year classified programme; led 8 engineers and two
              subcontractor organisations, and won the extension. Owner of the department's
              innovation process, facilitating and supporting engineers to go outside their area of
              expertise, try new ideas and bring those back to the team. Led and implemented the
              department’s process improvement strategy, including the transition from vanilla JS to
              React, from manual SQL scripts to source controlled database projects and VSS to git.
              Ran the graduate interview and assessment process for several years and mentored
              junior and mid-level engineers; I’m particularly proud that several of those hires are
              now senior engineers.
            </Text>
          </SubRole>
          <SubRole title="Software Developer" dates="February 2011 - July 2012" company="BMT Group">
            <Text>
              Led the migration of a large .NET Webforms estate onto ASP.NET MVC, retiring legacy
              incrementally and enabling unit testing across core applications for the first time.
              Built the company-wide Management Information System, which became critical
              infrastructure during BMT’s ~£90m MARS tanker programme win. Influenced buy vs build
              decisions for a complex gantt charting component to achieve this. Delivered
              eCassandra, a UK MoD risk-reporting system (£200k) using Ext.NET and Sencha.js
            </Text>
          </SubRole>
        </Role>

        <Role
          title="IT Systems Developer"
          dates="August 2006 - February 2011"
          company="National Milk Records"
        >
          <Text>
            Built iReports, giving farmers real-time access to test results with filtering and
            export, self-initiated, self-delivered, and still in active production today. Designed
            and maintained a 100GB transactionally replicated SQL Server topology. Owned HAMSTA, the
            microbiology testing application serving results for approximately 97% of UK dairy
            farmers.
          </Text>
        </Role>
        <Role title="Graduate Placement" dates="July 2005 - August 2006" company="Somerfield">
          <Text>TODO</Text>
        </Role>
        <Role
          title="BSc (Hons) Computer science"
          dates="Sep 2002 - July 2005"
          company="UWA (University of Wales, Aberystwyth)"
        >
          <Text>Undergraduate degree in Computer Science.</Text>
        </Role>
      </section>
    </Article>
  )
}
