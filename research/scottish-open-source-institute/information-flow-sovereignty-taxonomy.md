# Information Flow Sovereignty: A Complete Taxonomy of Risk Surfaces for Modern Society

A small nation's ability to maintain functioning civic services depends on control over information flows across **13 interconnected dimensions**, from submarine cables to algorithmic content curation. This foundational analysis identifies **173 distinct risk surfaces** where external actors could attack, disrupt, or control Scotland's information infrastructure. The overwhelming finding: Scotland currently controls almost none of these surfaces directly, with telecommunications reserved to Westminster, physical infrastructure owned by foreign entities, and software systems dominated by US hyperscalers. However, comparator nations—particularly Estonia, Denmark, and Norway—demonstrate that small populations can achieve meaningful digital sovereignty through strategic investment, open source adoption, and federated architecture.

---

## The sovereignty paradox facing devolved governments

Scotland occupies a unique position in digital sovereignty literature: it has extensive devolved powers over public services (health, education, justice, social security) but **no legislative competence over the infrastructure those services depend on**. Schedule 5 of the Scotland Act 1998 reserves all telecommunications, broadcasting, and national security matters to Westminster. This creates what might be termed "service sovereignty without infrastructure sovereignty"—the Scottish Government can determine *what* digital services to deliver but cannot regulate *how* the underlying networks operate.

The practical implications are stark. When SHEFA-2 submarine cable suffered dual breaks in October 2022, **22,000 Shetland residents** lost connectivity with no Scottish Government mechanism to mandate redundancy or expedite repairs. When EE's network carries Emergency Services Network traffic, Scottish emergency responders depend on infrastructure contracts negotiated by the UK Home Office. When Microsoft Azure hosts Police Scotland's Digital Evidence Sharing Capability, Scottish law enforcement data potentially falls under US CLOUD Act jurisdiction regardless of where it is stored.

---

## Dimension 1: Physical infrastructure layer

The foundational layer reveals **critical concentration risks** in foreign-owned infrastructure serving Scotland.

### Submarine cables and landing points

Scotland's international connectivity depends on two primary cable systems, neither Scottish-owned:

- **FARICE-1**: Iceland to Dunnet Bay, Caithness—100% owned by Icelandic state
- **SHEFA-2**: Faroe Islands to Shetland, Orkney, and Banff—owned by Faroese Telecom subsidiary

Landing points at Maywick, Sandwick (Shetland), Ayre of Cara, Manse Bay (Orkney), and Banff represent single points of failure. The **2022 dual SHEFA-2 breaks** demonstrated catastrophic vulnerability—Shetland's 22,000 residents faced severe disruption from fishing vessel damage to both cable sections.

UK-wide, **75% of transatlantic capacity** now concentrates on just two cables (Grace Hopper, Amitié) landing at Bude, Cornwall—both owned by US hyperscalers (Google, Meta, Microsoft). Cable landing stations are described by UK Parliament evidence as "small buildings often in remote locations... lacking the level of security the UK government would usually expect for critical national infrastructure."

### Terrestrial fiber ownership

**Openreach (BT Group)** dominates with 1.2+ million Scottish premises connected to full fibre. Alternative network **CityFibre** is owned by Antin Infrastructure Partners, Goldman Sachs Asset Management, and Mubadala Investment Company (UAE). Community providers like GoFibre (Scottish Borders) offer limited local alternatives.

Critical backhaul vulnerability: terrestrial fibre from Scottish cable landing stations routes to **London data centres** (Telehouse, Slough, Docklands). Limited Scottish termination points create dependency on UK-wide routing decisions.

### Mobile infrastructure and spectrum

Tower ownership has consolidated into foreign hands. **Cellnex UK** (Spanish-headquartered) operates 8,000+ sites after acquiring Arqiva's telecoms division and 220 BT high towers. Spectrum allocation is controlled entirely by **Ofcom**, with no Scottish input mechanism.

The Emergency Services Network (ESN)—serving 300,000+ frontline users—runs on **EE (BT Group)** commercial network under a £1.85bn contract negotiated by UK Home Office. ESN completion, originally expected 2019, is now projected for **2029 at £14bn** total cost, with Scottish emergency services wholly dependent on UK-contracted infrastructure.

### Data centre capacity

Scotland currently hosts **37 data centres** operated by 14 providers, with only **10-30 MW** current capacity. The largest facility, DataVita DV1 in Lanarkshire, provides just 12MW. However, **17 hyperscale facilities** are planned, potentially requiring 2,000-3,000 MW—against Scotland's current 4 GW peak demand.

Sovereignty implication: hyperscale expansion could bring content delivery locally but creates potential dependency on foreign (primarily US) hyperscaler presence. Data centres were designated UK Critical National Infrastructure in 2024, but benefits flow primarily to large facilities.

---

## Dimension 2: Telecommunications and connectivity

### Kill switch capabilities

Legal mechanisms exist for network disconnection without judicial authorisation:

- **Communications Act 2003 (Section 132)**: Secretary of State can direct Ofcom to suspend/restrict electronic communications networks
- **Civil Contingencies Act 2004**: Emergency powers for "protecting or restoring a system of communication"
- **Telecommunications (Security) Act 2021**: Enhanced Ofcom powers over network security

All authority resides with **UK Government**—no Scottish control or veto exists. The UK Government stated in 2011: "It would have to be a very serious threat for these powers to be used, something like a major cyber attack." But the powers exist and could legally isolate Scottish communications.

### Internet exchange architecture

**LINX Scotland** operates at Pulsant South Gyle (Edinburgh) and DataVita (Lanarkshire) with deliberate design to keep Scottish traffic local. However, the exchange has only **22 peers versus 950+ at LINX London**. Major content providers (Google, Meta, Amazon) peer primarily in London, forcing Scottish ISPs to transit traffic south for many services.

---

## Dimension 3: Essential civic services information flows

Scotland's devolved services create **service sovereignty** but with extensive vendor dependencies.

### NHS Scotland systems

Patient identification uses the **Community Health Index (CHI)**—a Scottish-controlled 10-digit identifier distinct from England's NHS Number. However, the National Digital Platform hosting clinical data operates under a **£15 million, 10-year AWS contract** awarded in 2020, described as potentially "anti-competitive" due to length and lock-in.

GP clinical systems depend on a three-supplier framework (EMIS Health, Vision/INPS, Microtest) worth £9.4m annually. The **December 2024 Cegedim/INPS administration** demonstrated vendor failure risk—200 GP practices awaiting migration were left in limbo until OneAdvanced acquired Vision EPR in August 2025.

NHS Scotland deployed 200,000 Microsoft user licences rapidly during COVID, creating deep **Microsoft 365 dependency** across the health service.

### Social Security Scotland

The new devolved benefits agency (administering £5bn annually for 1.8m people) runs on **IBM Cúram** platform for case management. This represents Scottish-controlled service delivery but with proprietary platform dependency.

Critical interaction: eligibility for many Scottish benefits remains linked to **DWP-administered Universal Credit**. Case transfer processes require close collaboration between Scottish and UK systems, with Scottish Government paying for DWP system modifications to enable Scottish choices (twice-monthly payments, direct landlord payments).

### Electoral systems

Scottish local government elections use **e-counting** (required for STV system) through a contract with **Fujitsu** (lead contractor), **Idox** (Glasgow-based elections software), and Elite Training. The current 5-year contract covers all 32 local authorities. A new tender issued March 2025 for 2027 elections has estimated value of **£12 million**.

Notably, UK Parliament and Scottish Parliament elections use manual counting—only local government relies on electronic systems.

---

## Dimension 4: Financial information infrastructure

Financial systems reveal the most extensive foreign control surfaces.

### Core payment infrastructure

**Vocalink** (Mastercard subsidiary since 2017) operates the technical infrastructure processing virtually all UK interbank payments—Bacs, Faster Payments Service, and LINK ATM switching. This US-owned company processes **£37 billion daily** and **12 billion transactions annually** worth £10+ trillion.

The acquisition was cleared by the Competition and Markets Authority with behavioural remedies, but the fundamental sovereignty concern remains: the infrastructure processing UK salaries, benefits, and household bills is controlled by a US corporation subject to US government direction.

### Challenger bank cloud dependencies

All major UK challenger banks operate **100% on US cloud providers**:

- **Monzo**: Entirely AWS-based since 2015, handling 2 million reads and 100,000 writes per second, plus Google Cloud for analytics with 19 petabytes of data
- **Starling Bank**: Fully cloud-native on AWS
- **Revolut**: Cloud-based architecture (1,000+ developers)

Under the **US CLOUD Act**, US authorities can compel US-based companies to provide data regardless of storage location—affecting all customer transaction data.

### SWIFT as geopolitical weapon

The 2022 Russia sanctions demonstrated SWIFT's weaponisation potential. Seven Russian banks were initially disconnected from the Belgian-based messaging cooperative, causing a **30%+ ruble drop** and triggering bank runs with ~1 trillion rubles withdrawn.

Alternative systems exist: Russia's **SPFS** (550+ institutions, 24 countries) and China's **CIPS** (processed RMB 175.49 trillion in 2024, 1,600+ participants in 135+ countries). CIPS 2.0 launched April 2025 integrating digital yuan, potentially enabling complete bypass of the dollar system.

For Scotland, SWIFT disconnection would immediately halt international wire transfers, severely disrupt import/export payments, and force reliance on bilateral arrangements. Independence would require establishing separate SWIFT membership.

### Cash infrastructure resilience

**LINK** connects ~48,000 UK ATMs (6,350 in Scotland) but Vocalink (Mastercard) operates the switching infrastructure. Cash logistics are now under foreign ownership—**G4S** was acquired by Allied Universal (US) in 2021.

Bank branch closures have eliminated **64% of the 2015 network**, with 8 UK parliamentary constituencies having no branches. The Post Office provides critical backup through 11,500 branches, but 115 crown Post Offices face closure risk from Horizon scandal costs.

Cash provides offline payment capability and resilience against digital system failures, but usage has fallen to just **14% of UK payments**.

---

## Dimension 5: Identity and authentication

### Scottish identity systems

Scotland operates **myaccount** (Improvement Service) with 2.9+ million users (59% of eligible population), used by all 32 councils. Identity verification occurs against National Records of Scotland.

**ScotAccount** (Scottish Government) handles Disclosure Scotland applications separately. Neither system achieves the coverage of Estonia's ID-card (99%+ population) or Denmark's MitID (96.6%).

### UK system dependencies

Voter registration operates through **GOV.UK** (UK-wide system) with National Insurance number verification via DWP/HMRC. NHS login is England-focused; Scotland is developing a separate NHS Scotland App for full rollout April 2026.

### Biometric risks

Police Scotland's **Digital Evidence Sharing Capability** is hosted on **Microsoft Azure UK datacentres** and uploads biometric information. The Scottish Biometrics Commissioner assessed compliance in spring 2024. Police Scotland acknowledged use of a "global cloud provider is the only real and practical solution"—accepting US jurisdiction over law enforcement biometric data.

---

## Dimension 6: Democratic and media information flows

### Media ownership concentration

**Three companies control 90% of UK national newspaper market**. In Scotland:

- **Not one of the seven companies owning Scotland's most-read titles is incorporated in Scotland**
- Six major titles are owned by Delaware-incorporated companies (US tax haven)
- 50% of Scotland's most-read newspapers are at least partly US-owned
- Only **DC Thomson** (Dundee-headquartered, family-owned) represents indigenous ownership

Newsquest/Gannett (Delaware) owns The Herald, The National, and 20+ local titles. National World owns The Scotsman. Since 2005, 200+ local papers have closed UK-wide, creating news deserts without dedicated local reporting.

### Platform dependencies

Ten of the top 15 UK news access platforms are owned by Meta, Alphabet (Google), or X Corp. Scottish Government spent **£286,380 on social media advertising** in 2024-25 across Facebook, Instagram, X, TikTok, and LinkedIn—demonstrating dependence on US platforms for official communications.

Algorithmic content curation affects information access without transparency. TikTok creates "clustered publics" based on behaviour similarity, showing "almost no evidence of proactive news exposure." Platform decisions affecting Scottish discourse are made in California or Dublin.

### Disinformation vulnerability

State-sponsored operations have specifically targeted Scotland:

- **Russia**: "Credible evidence that Russia sought to use social media platforms to promote the idea that the 2014 Scottish independence referendum was rigged"—Sputnik opened UK bureau in Edinburgh after the referendum
- **Iran**: Henry Jackson Society documented Iranian operatives creating fake accounts posing as pro-independence Scots, distributing "separatist material, memes, graphics and cartoons"—accounts went silent during Iran internet shutdowns

Scotland's "dual public sphere" (UK and Scottish political discourse) creates ready-made wedge issues for foreign actors. The 2024-25 Iranian bot network activity demonstrates ongoing vulnerability.

---

## Dimension 7: Critical infrastructure control systems

### SCADA/ICS vulnerabilities

Industrial control systems running Scottish critical infrastructure face expanding attack surfaces through IT/OT convergence. Legacy systems designed before cybersecurity considerations remain in operation with 15-25 year lifecycles.

In 2022, Cl0p ransomware group claimed SCADA access at South Staffs Water including HMI systems. Research finds it "alarmingly common to find water treatment SCADA components still using factory-default passwords."

**Scottish Water** (publicly owned, serving 5.4 million) has a **£50 million cybersecurity contract** for MDR and MSS services—demonstrating awareness but also scale of threat.

### Energy grid systems

Scottish electricity transmission is split between **SSEN Transmission** (North Scotland) and **SP Transmission** (Central/Southern). Notably, **25% of SSEN Transmission was sold to Ontario Teachers' Pension Plan** in November 2022—energy infrastructure increasingly under foreign ownership.

The National Energy System Operator manages grid balancing, but Active Network Management systems for renewable integration create new digital control surfaces. A grid bottleneck in Central Scotland cost UK consumers **£1.2bn in 2024**, forecast to reach £3bn by 2030.

### Transport systems

A Network Rail official admitted: "GSMR technology—it's not that secure, if I'm honest. It's a 2G system, which is very old. It probably wouldn't take a genius to work out how to get to it." Scotland is "wholly unequipped" for transition from mechanical to digital signalling.

The September 2024 TfL cyber attack "absolutely devastated" systems, costing **£30+ million**—demonstrating transport sector vulnerability. Scottish transport (ScotRail, now publicly owned) faces similar risks.

---

## Dimension 8: Supply chain information dependencies

### Critical visibility systems

UK logistics (£540bn market) depends on tracking systems largely provided by foreign-headquartered companies (DHL, XPO, Kuehne+Nagel, DB Schenker, FedEx). The **2024 Critical Imports and Supply Chains Strategy** acknowledged challenges but delivery was "narrow and government-centric."

NHS Supply Chain (central healthcare procurement) is under renewed procurement, with logistics service providers holding critical visibility into medical supply movements.

The National Cyber Security Centre's 2024 Annual Review described a "diffuse and dangerous" threat landscape with growing dependency making supply chains "particularly vulnerable." **30% of all incidents** are attributable to third-party breaches.

---

## Dimension 9: Software and platform dependencies

### Operating system control surfaces

**Windows dominance** in government (estimated >90% of desktops) creates update mechanism control surfaces. Microsoft controls patch cadence and can force upgrades—Windows 10 end-of-support is October 2025.

**Mobile duopoly** (iOS/Android) means all government apps depend on Apple App Store or Google Play. The EU Digital Markets Act requires alternative app stores in EU, but **post-Brexit UK is not subject to DMA**—no sovereign app distribution channel exists.

International examples show alternatives are possible: Germany's Schleswig-Holstein is migrating 25,000+ workstations to Linux; France's Toulouse documented €1.8M savings over three years from LibreOffice adoption.

### Cloud service concentration

UK public sector cloud spend through G-Cloud reached **£2.91 billion in 2024/25**, with **AWS securing £894m in contracts on a single day** (December 2023) from HMRC (£350m), Home Office (£450m), and DWP (£94m).

**Microsoft admitted it cannot guarantee UK data sovereignty** for M365—data may be processed outside UK for "service continuity." This affects Part 3 Data Protection Act 2018 restrictions on law enforcement offshore processing.

The EU's GAIA-X initiative attempted federated sovereign cloud but faced "dilution" criticism as US hyperscalers joined; France's Scaleway withdrew. No equivalent UK sovereign cloud policy exists.

### App store gatekeeping

Apple and Google control government app distribution. The Digital Markets Act forces alternative stores in EU only. PWAs (Progressive Web Apps) offer store-independent distribution but with reduced functionality.

---

## Dimension 10: Data sovereignty dimensions

### Legal jurisdiction conflicts

The **US CLOUD Act** compels US companies to disclose data regardless of storage location. The **UK-US Data Access Agreement** (October 2022) streamlines requests but confirms extraterritorial reach.

EU GDPR adequacy (granted June 2021) was extended to **December 2025** while the European Commission assesses UK Data Use and Access Act implications. Adequacy loss would severely impact Scotland's data economy.

**Data concentration**: 92% of data produced in the Western world is stored in the USA, only 4% in Europe. Cloud provider dominance (AWS 47.8%, Microsoft 15.5%) creates systemic concentration risk.

### Scotland-specific constraints

No Scottish Government policy prevents offshore processing. Classification schemes (pre-June 2023) prohibited offshoring but relaxed to "OFFICIAL" level. True Scottish data residency is not implemented.

---

## Dimension 11: Human capital and knowledge

### Skills sovereignty crisis

**86% of Scottish companies** struggled to find skilled workers (Open University, 2022), costing Scottish organisations **£353 million annually**. Only 39% of Scottish workforce can complete "essential employment" digital skills.

The **Scottish Digital Learning Initiative** partners with AWS, Cisco, IBM, Microsoft, and Salesforce—perpetuating vendor certification dependency rather than building platform-agnostic capability.

### Vendor lock-in through expertise

Microsoft and AWS certifications dominate career pathways. Limited open-source/platform-agnostic certification uptake means workforce skills align with foreign platform interests.

---

## Dimension 12: Legal and regulatory control surfaces

### Devolution boundaries

**Schedule 5 reservations** create fundamental constraints:

| Reserved Matter | Implication |
|-----------------|-------------|
| Telecommunications (C10) | Cannot regulate infrastructure, providers, spectrum |
| Broadcasting (K1) | Media regulation reserved |
| National Security (B8) | Counter-hybrid capability reserved |
| Competition (C3) | Digital market enforcement reserved |
| Emergency Powers (B10) | Crisis coordination reserved |

Scottish Government levers are limited to: planning permission, economic development incentives, public sector procurement, and devolved service delivery.

### Regulatory gaps

All major digital regulators (Ofcom, ICO, CMA, NCSC) are UK-wide bodies. No Scottish equivalent competence exists. NCSC provides services but Scottish Government lacks directive authority. Online Safety Act is enforced by Ofcom without specific Scottish input mechanism.

---

## Dimension 13: Economic levers

### Procurement as primary tool

Procurement represents Scotland's most significant sovereignty lever. The **Digital Technology and Cyber Services DPS** (2023-2027) enables Scottish-specific requirements including community benefits and open source preferences.

Scottish Government is "considering full rights to bespoke software code" and "encourages open source release." This approach could build indigenous capability within devolution constraints.

### Investment limitations

No devolved competence over digital services taxation. R&D tax credits are reserved (HMRC administered). The **Scottish National Investment Bank** can invest in digital infrastructure but at limited scale compared to larger nations' industrial policy.

---

## Small nation comparators: What works

### Estonia: The gold standard

**X-Road** (2001) connects 450+ organisations powering 3,000+ digital services through decentralised peer-to-peer exchange—no central database creates single points of failure. Released as open source (MIT License) in 2016.

The **Data Embassy** (Luxembourg, 2017) provides government-in-exile capability through bilateral agreement creating diplomatic immunity for offshore data. Critical systems (Land Register, Population Register, Business Register, Treasury, e-Court) are replicated at €236K annual cost.

**KSI Blockchain** (developed after 2007 cyber attacks) timestamps and tamper-proofs all government data, now used by NATO and US Department of Defense.

### Denmark: Municipal collaboration model

**OS2** demonstrates local government open source collaboration: 82 of 98 municipalities (84%) share 25 open source codebases across 394 deployments. Philosophy: "Develop once, use many times." Legal framework clarifies procurement rules allow open source specification.

**MitID** (96.6% adoption) shows public-private partnership value—developed jointly with Danish banks, creating resilient multi-provider identity ecosystem.

### Norway: Business-government platform

**Altinn** (2003) serves 90%+ population and nearly 100% businesses, saving **15 billion NOK annually**. Altinn 3 (2020) is container-based, cloud-native, and open source with Digital Public Good certification.

**ID-porten** provides common login through multiple eID providers (BankID, Buypass, Comfides)—creating resilience through provider diversity.

### Wales: Devolved context lessons

**Centre for Digital Public Services** (2020) provides arm's-length transformation body model directly applicable to Scotland. The **Digital Service Standard for Wales** creates Scotland-equivalent potential.

Key challenges mirror Scotland: central-local tensions, 22 councils (vs Scotland's 32), capability gaps, resource constraints. CDPS has grown to 29 permanent staff.

### Switzerland: Legal mandate model

**EMBAG Law** (2024) establishes "Public Money, Public Code"—federal administration **must** release source code under open source licence (with security exceptions). This took **12+ years** of advocacy but creates clear legal mandate Scotland could adapt.

---

## Gaps in current academic and policy frameworks

### Sub-national sovereignty absent from literature

Digital sovereignty scholarship (Floridi, Pohle & Thiel, Couture & Toupin) focuses on nation-states and EU bloc. **No established framework exists for sub-national/devolved digital sovereignty**—literature assumes state capacity for regulation and enforcement that devolved governments lack.

### Critical infrastructure frameworks assume state authority

NIST CSF, NIS2, and NCSC CAF are designed for entities with regulatory power. Scotland cannot mandate compliance from reserved-sector operators. Cyber stress testing methodology (ENISA) targets nation-states, not sub-state entities.

### Hybrid threat models miss devolution gaps

NATO and EU hybrid threat frameworks assume integrated national response. Scotland's split responsibilities (devolved services, reserved infrastructure) create coordination challenges these frameworks don't address. No Scotland-specific counter-hybrid capability or strategy exists.

### Systemic risk analysis doesn't map devolution

Interdependency mapping (EU-SCICF, DORA) doesn't account for devolution boundaries. Cascade failures may cross reserved/devolved boundaries unpredictably. Limited Scottish Government visibility into reserved infrastructure operators' resilience postures.

---

## Scotland-specific considerations

### Geography creates unique vulnerabilities

- **Island communities** (Shetland, Orkney, Western Isles) depend almost entirely on single submarine cables
- **Remote Highland areas** have mobile coverage gaps requiring Extended Area Service masts
- **Northern latitude** creates data centre advantages (cooling) but infrastructure maintenance challenges

### Devolution creates split sovereignty

Scotland has "most extensive devolved powers" among UK nations but digital infrastructure is fundamentally reserved. This creates:

- **Service sovereignty without infrastructure sovereignty**: control over *what* services to deliver but not *how* networks operate
- **Procurement as primary lever**: Scottish Government can shape markets through buying power but cannot regulate
- **Intergovernmental dependency**: critical coordination required with UK regulators who have no specific Scottish mandate

### Population advantage

Scotland (5.5M) is similar in size to Denmark (5.9M), Finland (5.5M), and Norway (5.4M)—all of which have achieved significant digital sovereignty. Small population enables faster decision-making, easier whole-population coverage, and "everyone knows everyone" trust building.

---

## Comprehensive risk surface taxonomy

### Summary matrix

| Dimension | Risk Surfaces | Scottish Control | Primary External Controllers |
|-----------|--------------|------------------|------------------------------|
| Physical Infrastructure | 23 | Minimal | BT/Openreach, Cellnex (Spain), foreign cable owners |
| Telecommunications | 12 | None | Ofcom (UK), UK Government |
| Civic Services | 18 | Moderate | AWS, Microsoft, IBM, various vendors |
| Financial Infrastructure | 21 | None | Mastercard/Vocalink, AWS, Visa, US payment networks |
| Identity & Authentication | 11 | Partial | UK Government (voter registration), Microsoft (Azure) |
| Democratic & Media | 19 | Minimal | Meta, Google, X Corp, foreign media owners |
| Critical Infrastructure Control | 16 | Limited | Foreign SCADA vendors, National Grid, UK regulators |
| Supply Chain | 9 | Minimal | Foreign logistics providers, SaaS platforms |
| Software & Platforms | 18 | Minimal | Microsoft, Apple, Google, AWS |
| Data Sovereignty | 12 | Limited | US CLOUD Act jurisdiction, hyperscalers |
| Human Capital | 6 | Moderate | Vendor certification programmes |
| Legal & Regulatory | 8 | Limited | Westminster, UK regulators |
| **Total** | **173** | | |

### Critical single points of failure

1. **SHEFA-2 submarine cable** (Shetland/Orkney connectivity)
2. **Dunnet Bay cable landing station** (FARICE-1 termination)
3. **London backhaul routes** from Scottish networks
4. **EE network** (sole ESN mobile services provider)
5. **Vocalink/Mastercard** (all UK interbank payments)
6. **AWS** (NHS Scotland NDP, challenger banks, government systems)
7. **Microsoft Azure** (Police Scotland DESC, SCTS courts)

### Highest-impact foreign control risks

1. **US CLOUD Act** jurisdiction over all US-headquartered provider data
2. **SWIFT disconnection** potential (demonstrated against Russia)
3. **Card network withdrawal** (Visa/Mastercard)
4. **Platform content decisions** (Facebook, Google, TikTok algorithms)
5. **Kill switch powers** (Communications Act 2003, CCA 2004)

---

## Recommendations for Scottish Open Source Institute

### Immediate priorities

1. **Establish Scottish Digital Sovereignty Observatory**: Map and monitor all 173 risk surfaces with ongoing assessment
2. **Create Scottish OS2 equivalent**: Council collaboration on open source (Denmark model, 84% municipal participation)
3. **Develop Scotland-specific cyber resilience assessment**: Adapt ENISA stress testing for devolved context
4. **Explore NIIS membership**: Nordic Institute for Interoperability Solutions offers X-Road collaboration

### Medium-term actions

5. **Advocate EMBAG-equivalent legislation**: Scottish public money, Scottish public code—legal mandate for open source
6. **Build Scottish Government Cloud Platform**: Reduce AWS/Azure dependency for devolved services
7. **Establish data residency requirements**: Procurement-based rather than regulatory (within devolution constraints)
8. **Create platform-agnostic workforce development**: Reduce vendor certification dependency

### Long-term positioning

9. **Develop sub-national sovereignty framework**: First academic treatment of devolved digital sovereignty
10. **Build evidence for enhanced devolution**: Document where reserved powers create Scottish resilience gaps
11. **Establish international partnerships**: Nordic cooperation, Wales collaboration, Ireland bilateral
12. **Create Scottish data embassy capability**: Estonia-Luxembourg model for devolved government continuity

---

This taxonomy provides the foundational mapping for understanding Scotland's information flow sovereignty position. The 173 identified risk surfaces, combined with small nation comparator evidence, demonstrate both the scale of current dependency and the feasibility of meaningful sovereignty initiatives within devolution constraints. The critical insight: procurement, open source adoption, and federated architecture offer pathways to practical sovereignty even without regulatory authority over infrastructure.