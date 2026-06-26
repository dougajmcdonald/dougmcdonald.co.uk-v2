import { Article } from '@layout/Article'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { Role } from '@components/Role'

const AchievementList = ({ achievements }: { achievements: string[] }) => {
  return (
    <ul className="my-2 ml-2">
      {achievements.map((achievement) => (
        <li className="text-primary-700 text-sm" key={achievement}>
          <span className="text-accent text-lg font-bold">·</span> {achievement}
        </li>
      ))}
    </ul>
  )
}

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
          industry="AI Native Hospitality Startup"
        >
          <Text>
            Founding-team role - strategic decision-maker, hands-on from discovery to production.
            DVx is a company creation platform backed by former executives from Tesla, Lululemon,
            Lyft, and others.
          </Text>
          <AchievementList
            achievements={[
              'Created the entire product design system from scratch in both design and code',
              'Delivered a digital "Live bill" and checkout to high end international restaurant group',
              'Developed automation and AI workflows which replaced 8 hours per week per venue, delivered across 28 venues',
            ]}
          />
        </Role>

        <Role
          title="Head of User Experience"
          dates="June 2023 - January 2025"
          company="Moneyhub"
          industry="Regulated Fintech Scale Up"
        >
          <Text>
            Leadership role, responsible for leading organisational UX strategy and product
            direction, growing the UX team and increasing organisational UX maturity. Working with
            the Product director promote sustainable product growth aligned to client outcomes.
          </Text>
          <AchievementList
            achievements={[
              'Led strategic product initiatives to win and extend key commercial contacts include £250k a quarter with Standard Life',
              'Rent Recognition - improving credit scores through submitting rent payment history to credit reference agencies',
              'Emergency Cash fund - increasing financial resilience for end users',
              'Pension finding services - locating lost pension accounts amongst many others',
            ]}
          />
        </Role>

        <Role
          title="Lead UX Developer"
          dates="June 2020 - June 2023"
          company="Moneyhub"
          industry="Regulated Fintech Scale Up"
        >
          <Text>
            As a hybrid UX Designer and Developer, I was hired to introduce design to an engineering
            led organisation in a way which was accessible and adoptable by Agile development teams.
            I delivered the entire design process for all new features in the Moneyhub whitelabel
            web & mobile app, including research, ideation, lo-fi & hi-fi design, prototyping,
            usability testing, developer handoff & ongoing support during development.
          </Text>
          <AchievementList
            achievements={[
              'Become the first fintech to provider Open Banking Payments as a Payment Initiation Services Provider',
              'Designed, built and drove adoption of a unified white-label design system with brand-token architecture in production at Standard Life, Mercer and Legal & General',
              'Design and delivered whitelabel widgets to Experian, Legal & General',
            ]}
          />
        </Role>

        <Role
          title="Principal Software Developer & UX Capability Lead"
          dates="March 2019 - June 2020"
          company="BMT Group"
          industry="Defence Consultancy"
        >
          <Text>
            Built a new Human Centred Design capability from zero to one in a commercially and
            security conscious environment whilst continuing to lead, mentor and develop the
            department wide engineering capability.
          </Text>
          <AchievementList
            achievements={[
              'Won and delivered £200k mobile app contract to deliver safety auditing to UK MoD ships',
              'Delivered GDS compatible project work focussing on the end user',
              'Won and delivered a £60k contract renewal replacing legacy systems with a modern web application',
            ]}
          />
        </Role>

        <Role
          title="Chartered IT Professional (CITP)"
          dates="May 2020"
          company="British Computer Society"
        >
          Gained Chartered IT Professional (CITP) status.
        </Role>
        <Role
          title="Senior Software Developer"
          dates="July 2012 - March 2019"
          company="BMT Group"
          industry="Defence Consultancy"
        >
          <Text>
            Key player in departmental growth from 10 to 120; concurrent technical lead, scrum
            master and project manager across classified defence programmes.
          </Text>
          <AchievementList
            achievements={[
              'Lead and won the bid for a complex geospatial, cyber security system. Then managed a team of 8 through delivery with £1m revenue.',
              'Technical architect and lead on numerous UK MoD and local government projects.',
              'Ran the graduate interview and assessment process for several years and mentored junior and mid-level engineers.',
              'Led and implemented the department’s process improvement strategy, including the transition from vanilla JS to React, from manual SQL scripts to source controlled database projects and VSS to git.',
            ]}
          />
        </Role>
        <Role
          title="Software Developer"
          dates="February 2011 - July 2012"
          company="BMT Group"
          industry="Defence Consultancy"
        >
          <Text>
            Developed complex line of business and large-scale management information systems.
            Included gathering and managing conflicting customer requirements and full
            responsibility for release planning and deployment.
          </Text>
          <AchievementList
            achievements={[
              'Built the company-wide Management Information System, which became critical infrastructure during BMT’s ~£90m MARS tanker programme win',
              'Led the migration from .NET webforms to .NET MVC in many of our core applications, which enabled effective unit testing for the first time',
              'Delivered eCassandra, a UK MoD risk-reporting system (£200k) using Ext.NET and Sencha.js',
            ]}
          />
        </Role>
        <Role
          title="IT Systems Developer"
          dates="August 2006 - February 2011"
          company="National Milk Records"
          industry="Agricultural lab testing"
        >
          <Text>
            Supported the UKs milk testing system used by 97% of UK farms, designing and maintaining
            database procedures for the UK's nationwide milk testing system.
          </Text>
          <AchievementList
            achievements={[
              'Manages and maintained a 100GB transactionally replicated database topology.',
              'Built iReports, giving farmers real-time access to test results with filtering and reporting which is still in active production use today.',
              'Solo developed "HAMSTA", the microbiology testing application serving results to B2B customers',
            ]}
          />
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
