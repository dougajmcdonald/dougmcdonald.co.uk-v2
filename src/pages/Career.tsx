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
          title="Head of Product Design"
          dates="January 2025 - Present"
          company="DVx Zumi UK Ltd"
        >
          <Text>
            Founding-team role at an AI hospitality startup; primary technical and product
            decision-maker, hands-on from discovery to production. Responsible for strategic roadmap
            and daily delivery. Cloud based systems integration with complex CMS and POS systems in
            realtime across 20+ luxury venues worldwide. Built an automated guest data pipeline
            using Playwright and GCP Cloud run tasks that replaced a 15-hour-per-week manual
            process. Introduced Omni as a semantic data layer across disparate client systems,
            replacing costly third-party reporting and standardising data delivery across the
            product. Reframed how the engineering team scopes work (PR/FAQ framing with Shape Up
            appetite sizing), making platform investment legible to non-technical leadership for the
            first time. Designed and implemented the organisation's design system, including
            automated design token export to tailwind variables for a multi tenant, white labeled
            product.
          </Text>
        </Role>

        <Role title="Head of User Experience" dates="June 2023 - January 2025" company="Moneyhub">
          <Text>
            Responsible for leading organisational UX strategy and product direction, growing the UX
            team and increasing organisational UX maturity. Working alongside the CCO, CTO and
            Product director using deep product and industry knowledge to promote sustainable
            product growth that delivers against client outcomes. Leading and coaching a team of UX
            designers who are responsible for taking early stage taking client opportunities running
            workshops to establish problem statements and create concept work to articulate these
            problems visually then turn the concepts into product features, collaborating with
            engineering teams to produce high quality technically feasible outputs across a wide
            range of clients in the financial services industry. In my role I designed and delivered
            novel functionality into the product including, Open Banking payment solutions in our
            role as a PISP, Rent Recognition, improving credit scores through submitting rent
            payment history to credit reference agencies, Emergency Cash fund building increasing
            financial resilience and Pension finding services locating lost pension accounts amongst
            many others. Beyond feature delivery, I created a conceptual data model linking
            behavioural analytics and user financial data to user and client outcomes to establish a
            product led future for the organisation. This enabled a transformative change in sales,
            product and development strategy unlocking new opportunities and upselling opportunities
            to existing clients. This has shifted the organisational dynamic from responding to
            client feature requests, to creating a clear product direction, backed by data analytics
            to demonstrate product success.
          </Text>
          <SubRole title="Lead UX Developer" dates="June 2020 - June 2023" company="Moneyhub">
            <Text>
              As a hybrid UX Designer and Developer, I was hired to introduce design to an
              engineering led organisation in a way which was accessible and adoptable by Agile
              development teams, due to resource balance this quickly shifted to a design only role.
              I delivered the entire design process for all new features in the Moneyhub whitelabel
              web & mobile app, including research, ideation, lo-fi & hi-fi design, prototyping,
              usability testing, developer handoff & ongoing support during development. This
              involved establishing a pragmatic UX process educating the immediate and wider teams
              of the value whilst delivering robust, thoughtful design solutions. The specific
              environment requires expert product and domain understanding to identify wider re-use
              and value from niche client requirements, whilst retaining consistency and growth in
              the product. As a team of one, serving an engineering team size of 50, I quickly
              realised that I needed to scale myself to support the business. As part of my role, I
              took on the responsibility of creating a scalable process and system to enable rapid
              growth. I led the project, alongside our Senior tech leads to architect, to design and
              implement a multi-tenanted white label design system and supporting design &
              development processes. The system codified design in a way that enabled complex
              theming and customisation across multiple major enterprise clients, increased delivery
              speed through solving problems like component accessibility in a single place and
              gained organisation wide adoption through collaboration and dedicated skill sharing
              sessions and documentation.
            </Text>
          </SubRole>
        </Role>

        <Role
          title="Principal Software Developer & UX Capability Lead"
          dates="March 2019 - June 2020"
          company="BMT Group"
        >
          <Text>
            Built a new practice from zero to one: recruited, onboarded and mentored, and won over a
            resistant function through sustained stakeholder work. Led MoD client engagements
            resulting in a £60k contract renewal and a new £200k contract for a mobile application
            for safety officers on major UK platforms. Experience working in government GDS
            processes, with a project for the (GLAA) to reduce time taken to complete an application
            process in a complex environment where decisions affected people’s lives. Continued
            leading, mentoring and developing the department wide engineering capability.
          </Text>
          <SubRole
            title="Chartered IT Professional (CITP)"
            dates="May 2020"
            company="British Computer Society"
          >
            <Text>
              Studied for, presented to a panel of my peers and gained Chartered IT Professional
              (CITP) membership proving that I operate at the highest levels of technical and
              professional competence and my skills are matched by my ethical integrity.
            </Text>
          </SubRole>
          <SubRole
            title="Senior Software Developer"
            dates="July 2012 - March 2019"
            company="BMT Group"
          >
            <Text>
              Key player in departmental growth from 10 to 120; concurrent technical lead, scrum
              master and project manager across classified defence programmes. Technical architect
              and lead on numerous UK MoD and local government projects. Prime-contractor technical
              and delivery lead on JUMP, a £1m/year, two-year classified programme; led 8 engineers
              and two subcontractor organisations, and won the extension. Led and implemented the
              department’s process improvement strategy, including the transition from vanilla JS to
              React, from manual SQL scripts to source controlled database projects and VSS to git.
              Ran the graduate interview and assessment process for several years and mentored
              junior and mid-level engineers.
            </Text>
          </SubRole>
          <SubRole title="Software Developer" dates="February 2011 - July 2012" company="BMT Group">
            <Text>
              My role involved the development of complex line of business and large-scale
              management information systems. Included gathering and managing conflicting customer
              requirements and full responsibility for release planning and deployment. I led the
              migration from .NET webforms to .NET MVC in many of our core applications, which
              enabled effective unit testing for the first time. I also advocated and implemented a
              transition from rigid front-end frameworks to more flexibly designed approaches,
              providing a better user experience for our customers.
            </Text>
          </SubRole>
        </Role>

        <Role
          title="IT Systems Developer"
          dates="August 2006 - February 2011"
          company="National Milk Records"
        >
          <Text>
            Initially supported the Artemis system, designing and maintaining database procedures
            for the UK's nationwide milk testing system. Learned to manage and maintain a 100GB
            transactionally replicated database topology. Latterly, worked in end to end software
            development where I built iReports, giving farmers real-time access to test results with
            filtering and reporting which is still in active production use today. Solo developed
            "HAMSTA", the microbiology testing application serving results for approximately 97% of
            UK dairy farmers.
          </Text>
        </Role>
        <Role title="Graduate Placement" dates="July 2005 - August 2006" company="Somerfield">
          <Text>
            Worked in several different departments, Hardware support, Customer support, IT
            Security, ePOS &amp; Enterprise Architecture over the course of a year. Learned SQL
            Server from a book and was offered a 3 month extension supporting the Project Office's
            data analysis team.
          </Text>
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
