export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorInitial: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  alt?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "anthropology-introduction-human-study",
    title: "Anthropology: Understanding Humans, Culture, and Society",
    excerpt:
      "Anthropology is the holistic study of human beings. This blog explains its scope, significance, and relevance for civil services.",
    content: `
      <h1>Anthropology: The Study of Humanity</h1>

      <p>Anthropology is the scientific study of human beings in their biological, social, and cultural dimensions. Unlike disciplines that focus on a single aspect of society, anthropology attempts to understand humanity as a whole. It asks fundamental questions about who we are, where we came from, how societies function, and how cultures shape human behavior.</p>

      <p>The relevance of anthropology becomes especially significant in a country like India, which is marked by immense diversity in language, culture, ethnicity, and social organization. For civil servants and policy makers, understanding this diversity is not optional—it is essential.</p>

      <h2>Why Anthropology Is a Holistic Discipline</h2>

      <p>Anthropology is unique because it integrates knowledge from natural sciences, social sciences, and humanities. It does not isolate humans as merely economic or political actors but studies them as biological organisms, social beings, and cultural creators.</p>

      <p>This holistic nature allows anthropology to explain why similar policies produce different outcomes in different communities, and why development interventions often fail when cultural factors are ignored.</p>

      <h2>Major Branches of Anthropology</h2>

      <ul>
        <li><strong>Physical Anthropology:</strong> Studies human evolution, genetics, and biological variation.</li>
        <li><strong>Social and Cultural Anthropology:</strong> Examines social institutions, customs, beliefs, and practices.</li>
        <li><strong>Archaeological Anthropology:</strong> Reconstructs past human societies through material remains.</li>
        <li><strong>Linguistic Anthropology:</strong> Studies language as a cultural and social tool.</li>
      </ul>

      <p>Each branch contributes to a deeper understanding of human adaptation, survival, and social organization.</p>

      <h2>Anthropology and Indian Society</h2>

      <p>India’s social reality cannot be understood without anthropology. Tribal communities, caste systems, kinship networks, marriage patterns, and religious traditions are deeply embedded in cultural contexts. Anthropology helps administrators understand these realities without prejudice or ethnocentrism.</p>

      <p>Policies related to tribal welfare, displacement, health, and education require anthropological insight to ensure acceptance and effectiveness.</p>

      <h2>Why Anthropology Matters for Civil Services</h2>

      <p>Civil servants work directly with people. Anthropology equips them with empathy, cultural sensitivity, and analytical clarity. It helps administrators move beyond stereotypes and design policies rooted in ground realities.</p>

      <h2>Conclusion</h2>

      <p>Anthropology is not merely an academic subject. It is a practical tool for governance, social harmony, and inclusive development. Understanding anthropology means understanding people—and governance ultimately is about people.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Jan 2024",
    readTime: "15 min read",
    category: "ANTHROPOLOGY",
    image: "/assets/images/blog/blog_anthropology_intro.png"
  },

  {
    id: "sociology-social-structure-change",
    title: "Sociology: Social Structure, Institutions, and Change",
    excerpt:
      "Sociology explains how societies function, maintain order, and respond to change—making it vital for governance.",
    content: `
      <h1>Sociology: Understanding Society</h1>

      <p>Sociology is the systematic study of society, social relationships, and institutions. It examines how individuals interact with one another and how these interactions create patterns that shape collective life.</p>

      <p>For IAS aspirants and administrators, sociology provides a framework to understand complex social realities such as inequality, conflict, cooperation, and social change.</p>

      <h2>What Is Social Structure?</h2>

      <p>Social structure refers to the organized pattern of relationships and institutions that constitute society. These include family, caste, class, religion, education, and political systems.</p>

      <p>Individuals are born into these structures and are influenced by them throughout life. Sociology helps explain how these structures shape opportunities, behavior, and identity.</p>

      <h2>Key Social Institutions</h2>

      <ul>
        <li><strong>Family:</strong> Primary unit of socialization.</li>
        <li><strong>Religion:</strong> Provides meaning and moral order.</li>
        <li><strong>Economy:</strong> Organizes production and distribution.</li>
        <li><strong>State:</strong> Regulates power and authority.</li>
      </ul>

      <h2>Social Stratification and Inequality</h2>

      <p>All societies are marked by inequality. Sociology studies stratification based on caste, class, gender, and ethnicity. In India, caste remains a powerful organizing principle affecting access to resources and social mobility.</p>

      <p>Understanding stratification is essential for designing welfare policies and affirmative action.</p>

      <h2>Social Change</h2>

      <p>Societies are not static. Industrialization, urbanization, globalization, and technology constantly reshape social life. Sociology analyzes how societies adapt to these changes and the conflicts they generate.</p>

      <h2>Relevance for Governance</h2>

      <p>Policies that ignore social structures often fail. Sociology enables administrators to anticipate resistance, manage conflict, and promote inclusive development.</p>

      <h2>Conclusion</h2>

      <p>Sociology offers administrators the intellectual tools to understand society beyond surface-level observations. It strengthens governance by aligning policy with social reality.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Jan 2024",
    readTime: "14 min read",
    category: "SOCIOLOGY",
    image: "/assets/images/blog/blog_sociology_structure.png"
  },

  {
    id: "general-studies-foundation-upsc",
    title: "General Studies for UPSC: Building the Foundation of a Civil Servant",
    excerpt:
      "General Studies forms the intellectual backbone of the UPSC examination and administrative thinking.",
    content: `
      <h1>General Studies: The Core of UPSC Preparation</h1>

      <p>General Studies (GS) is the backbone of the UPSC Civil Services Examination. It evaluates an aspirant’s understanding of society, governance, economy, ethics, and international relations.</p>

      <p>GS is not about memorizing facts. It tests analytical ability, clarity of thought, and awareness of real-world issues.</p>

      <h2>Structure of GS Papers</h2>

      <ul>
        <li><strong>GS Paper I:</strong> History, culture, society, geography</li>
        <li><strong>GS Paper II:</strong> Polity, governance, international relations</li>
        <li><strong>GS Paper III:</strong> Economy, environment, security</li>
        <li><strong>GS Paper IV:</strong> Ethics and integrity</li>
      </ul>

      <h2>Why General Studies Matters</h2>

      <p>GS reflects the mindset of an administrator. Questions demand interlinking concepts, critical thinking, and balanced judgment.</p>

      <h2>GS and Administrative Role</h2>

      <p>Administrators deal with multifaceted issues. GS preparation trains aspirants to think across domains rather than in silos.</p>

      <h2>Approach to GS Preparation</h2>

      <p>Effective GS preparation requires conceptual clarity, integration of current affairs, and regular answer writing practice.</p>

      <h2>Conclusion</h2>

      <p>General Studies is not just an exam requirement. It builds the intellectual foundation required for responsible and informed governance.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Jan 2024",
    readTime: "16 min read",
    category: "GENERAL STUDIES",
    image: "/assets/images/blog/blog_gs_foundation.png"
  }
  ,
  {
    id: "kinship-family-marriage-anthropology",
    title: "Kinship, Family, and Marriage: An Anthropological Understanding",
    excerpt:
      "Kinship systems form the foundation of social organization. Anthropology explains how family and marriage shape societies.",
    content: `
      <h1>Kinship, Family, and Marriage</h1>

      <p>Kinship is one of the most fundamental concepts in anthropology. It refers to the socially recognized relationships based on blood, marriage, and adoption. Every society organizes social life around kinship systems, which determine inheritance, residence, authority, and emotional bonds.</p>

      <p>Anthropology studies kinship not merely as biological relationships but as cultural constructions that vary widely across societies.</p>

      <h2>Understanding Kinship Systems</h2>

      <p>Kinship systems define how individuals relate to one another and how societies classify relatives. These systems influence social obligations, support networks, and group identity.</p>

      <ul>
        <li>Patrilineal descent</li>
        <li>Matrilineal descent</li>
        <li>Bilateral descent</li>
      </ul>

      <p>Each system reflects economic, ecological, and cultural conditions.</p>

      <h2>Family as a Social Institution</h2>

      <p>The family is the primary unit of socialization. Through the family, individuals learn language, norms, values, and social roles. Family structures vary from nuclear families to extended and joint families.</p>

      <h2>Marriage as a Social Arrangement</h2>

      <p>Marriage is not simply a personal relationship but a social institution regulating reproduction, inheritance, and alliance formation.</p>

      <ul>
        <li>Monogamy</li>
        <li>Polygyny</li>
        <li>Polyandry</li>
      </ul>

      <h2>Kinship in Indian Society</h2>

      <p>Indian kinship systems are deeply influenced by caste, religion, and regional traditions. Understanding these systems is crucial for administrators working at the grassroots level.</p>

      <h2>Administrative Relevance</h2>

      <p>Policies related to family welfare, inheritance, gender justice, and social security require sensitivity to kinship patterns.</p>

      <h2>Conclusion</h2>

      <p>Anthropological understanding of kinship helps administrators engage with communities respectfully and effectively.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Feb 2024",
    readTime: "16 min read",
    category: "ANTHROPOLOGY",
    image: "/assets/images/blog/blog_anthropology_kinship.png",
    alt: "Anthropological Diagram of Kinship and Family Systems"
  },

  {
    id: "social-change-modernization",
    title: "Social Change and Modernization: A Sociological Perspective",
    excerpt:
      "Sociology explains how societies transform under the forces of modernization, urbanization, and globalization.",
    content: `
      <h1>Social Change and Modernization</h1>

      <p>Social change refers to significant alterations over time in social structure, cultural patterns, and social behavior. Sociology studies how societies evolve in response to economic, technological, and political forces.</p>

      <h2>Forces Driving Social Change</h2>

      <ul>
        <li>Industrialization</li>
        <li>Urbanization</li>
        <li>Education</li>
        <li>Technology</li>
        <li>Globalization</li>
      </ul>

      <p>These forces reshape family structures, occupational patterns, and value systems.</p>

      <h2>Modernization Theory</h2>

      <p>Modernization theory views social change as a transition from traditional to modern society characterized by rationality, individualism, and institutional differentiation.</p>

      <h2>Social Change in India</h2>

      <p>India experiences uneven modernization. While urban areas rapidly modernize, rural regions often maintain traditional structures.</p>

      <h2>Resistance and Adaptation</h2>

      <p>Social change generates resistance, conflict, and adaptation. Sociology explains why communities resist change when it threatens identity or livelihood.</p>

      <h2>Relevance for Policy Making</h2>

      <p>Understanding social change helps administrators design policies that are adaptive and inclusive.</p>

      <h2>Conclusion</h2>

      <p>Sociology provides insights into managing social transformation without destabilizing society.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Feb 2024",
    readTime: "15 min read",
    category: "SOCIOLOGY",
    image: "/assets/images/blog/blog_sociology_modernization.png",
    alt: "Modernization and Social Change in Indian Society"
  },

  {
    id: "indian-society-gs1",
    title: "Indian Society for GS Paper I: Structure, Diversity, and Change",
    excerpt:
      "Indian society is complex and diverse. This blog explains its structure and relevance for GS Paper I.",
    content: `
      <h1>Understanding Indian Society</h1>

      <p>Indian society is characterized by unity in diversity. It consists of multiple religions, languages, castes, tribes, and cultural traditions coexisting within a single political framework.</p>

      <h2>Key Features of Indian Society</h2>

      <ul>
        <li>Caste system</li>
        <li>Religious pluralism</li>
        <li>Tribal diversity</li>
        <li>Regional cultures</li>
      </ul>

      <h2>Social Institutions</h2>

      <p>Institutions such as family, caste, and religion play a crucial role in shaping individual and collective behavior.</p>

      <h2>Impact of Modernization</h2>

      <p>Education, urbanization, and media are transforming social relations and identities.</p>

      <h2>Indian Society and Governance</h2>

      <p>Policy formulation requires deep understanding of social realities to ensure effective implementation.</p>

      <h2>Conclusion</h2>

      <p>A nuanced understanding of Indian society strengthens governance and social harmony.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Feb 2024",
    readTime: "17 min read",
    category: "GENERAL STUDIES",
    image: "/assets/images/blog/blog_gs_indian_society.png",
    alt: "Diversity of Indian Society for GS Paper 1"
  },

  {
    id: "public-administration-role",
    title: "Public Administration: Role, Challenges, and Ethical Responsibility",
    excerpt:
      "Public administration connects policy with people. Understanding its role is essential for effective governance.",
    content: `
      <h1>Public Administration in Governance</h1>

      <p>Public administration refers to the implementation of government policies and delivery of public services. It forms the operational backbone of the state.</p>

      <h2>Functions of Public Administration</h2>

      <ul>
        <li>Policy implementation</li>
        <li>Public service delivery</li>
        <li>Regulation and enforcement</li>
      </ul>

      <h2>Challenges in Administration</h2>

      <p>Administrators face challenges such as resource constraints, political interference, and ethical dilemmas.</p>

      <h2>Ethical Responsibility</h2>

      <p>Ethics ensures fairness, accountability, and transparency in administration.</p>

      <h2>Relevance for Civil Servants</h2>

      <p>Effective administration bridges the gap between state and citizens.</p>

      <h2>Conclusion</h2>

      <p>Public administration determines the success or failure of governance.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Feb 2024",
    readTime: "15 min read",
    category: "GOVERNANCE",
    image: "/assets/images/blog/blog_public_admin.png",
    alt: "Public Administration and Governance Structure"
  },
  {
    id: "religion-ritual-belief-anthropology",
    title: "Religion, Ritual, and Belief Systems: An Anthropological Perspective",
    excerpt:
      "Anthropology studies religion as a social and cultural system that gives meaning, order, and cohesion to human life.",
    content: `
      <h1>Religion, Ritual, and Belief Systems</h1>

      <p>Religion is one of the most enduring and universal aspects of human society. Every known society has developed systems of belief, ritual practices, and moral codes that help individuals understand their world and their place within it. Anthropology approaches religion not as a question of truth or falsehood, but as a cultural system that fulfills important social and psychological functions.</p>

      <p>Anthropologists study religion to understand how belief systems influence social organization, authority, morality, and collective identity. Rather than viewing religion purely as theology, anthropology treats it as a lived social experience.</p>

      <h2>Religion as a Cultural System</h2>

      <p>From an anthropological perspective, religion is a system of symbols that creates powerful and lasting moods and motivations. These symbols shape how individuals interpret suffering, success, death, and morality. Religious beliefs often provide explanations for natural phenomena and social events that lie beyond human control.</p>

      <p>In many traditional societies, religion is inseparable from daily life. Economic activities, political authority, and kinship obligations are often sanctified through religious beliefs.</p>

      <h2>Rituals and Their Social Function</h2>

      <p>Rituals are structured, repetitive actions performed in religious or cultural contexts. Anthropologists view rituals as mechanisms that reinforce social solidarity and shared values. Through rituals, communities reaffirm collective identity and social order.</p>

      <p>Rituals also help individuals cope with uncertainty, transition, and crisis. Birth, marriage, death, and seasonal changes are commonly marked by ritual practices.</p>

      <h2>Magic, Religion, and Science</h2>

      <p>Anthropology distinguishes between magic, religion, and science, while recognizing that these systems often coexist. Magic seeks to control supernatural forces, religion seeks to appease them, and science seeks to explain natural laws.</p>

      <p>Rather than dismissing magic as irrational, anthropologists analyze its psychological and social utility.</p>

      <h2>Religion in Indian Society</h2>

      <p>India’s religious diversity profoundly shapes social life. Religion influences caste relations, political mobilization, and cultural identity. Administrators must understand religious sensitivities to prevent conflict and promote harmony.</p>

      <h2>Administrative Relevance</h2>

      <p>Policies related to education, law, health, and social reform often intersect with religious beliefs. Anthropological insight helps administrators navigate these intersections with sensitivity.</p>

      <h2>Conclusion</h2>

      <p>Anthropology teaches us that religion is not merely belief—it is a social institution that structures meaning, morality, and collective life.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Feb 2024",
    readTime: "18 min read",
    category: "ANTHROPOLOGY",
    image: "/assets/images/blog/blog_anthropology_religion.png"
  },

  {
    id: "sociology-thinkers-classical-modern",
    title: "Sociological Thinkers: Classical and Modern Perspectives",
    excerpt:
      "Sociological thinkers provide the theoretical foundation for understanding society, power, and change.",
    content: `
      <h1>Sociological Thinkers and Their Ideas</h1>

      <p>Sociology as a discipline developed through the works of thinkers who sought to understand the rapid social changes brought by industrialization, urbanization, and political revolutions. Their ideas continue to shape how we interpret society today.</p>

      <h2>Karl Marx</h2>

      <p>Marx viewed society through the lens of economic relations. He argued that class struggle between those who control the means of production and those who sell their labor is the driving force of social change.</p>

      <p>Marx’s ideas remain relevant in understanding inequality, capitalism, and labor relations.</p>

      <h2>Émile Durkheim</h2>

      <p>Durkheim emphasized social order and collective conscience. He believed that shared norms and values hold society together. His work on religion and suicide demonstrated how social forces shape individual behavior.</p>

      <h2>Max Weber</h2>

      <p>Weber focused on social action and meaning. He highlighted the role of ideas, values, and bureaucracy in shaping modern society.</p>

      <h2>Indian Sociological Thinkers</h2>

      <p>Thinkers like G.S. Ghurye, M.N. Srinivas, and Andre Béteille analyzed caste, tribe, and social mobility in India.</p>

      <h2>Relevance for Governance</h2>

      <p>Understanding sociological theories enables administrators to analyze social problems structurally rather than emotionally.</p>

      <h2>Conclusion</h2>

      <p>Sociological thinkers provide enduring tools for understanding power, inequality, and social change.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Feb 2024",
    readTime: "17 min read",
    category: "SOCIOLOGY",
    image: "/assets/images/blog/blog_sociology_thinkers.png"
  },

  {
    id: "ethics-case-studies-upsc",
    title: "Ethics Case Studies in UPSC: How to Think, Not Memorize",
    excerpt:
      "Ethics case studies test moral reasoning, empathy, and administrative judgment.",
    content: `
      <h1>Ethics Case Studies</h1>

      <p>Ethics case studies in UPSC are designed to evaluate how aspirants respond to real-life dilemmas faced by civil servants. These questions do not have fixed answers; instead, they assess values, reasoning, and decision-making ability.</p>

      <h2>Purpose of Ethics Case Studies</h2>

      <p>Case studies test integrity, accountability, empathy, and courage. They reveal how aspirants balance rules with human considerations.</p>

      <h2>Stakeholder Analysis</h2>

      <p>Identifying stakeholders and understanding their interests is the first step in ethical decision-making.</p>

      <h2>Value-Based Decision Making</h2>

      <p>Decisions must align with constitutional values, public interest, and moral principles.</p>

      <h2>Administrative Constraints</h2>

      <p>Ethical decisions often involve trade-offs under constraints such as limited resources or political pressure.</p>

      <h2>Conclusion</h2>

      <p>Ethics case studies reward clarity of thought and moral courage rather than rote learning.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Feb 2024",
    readTime: "16 min read",
    category: "ETHICS",
    image: "/assets/images/blog/blog_ethics_case_studies.png"
  },

  {
    id: "constitution-governance-gs2",
    title: "Constitution and Governance: Understanding GS Paper II",
    excerpt:
      "GS Paper II evaluates knowledge of polity, governance, and constitutional values.",
    content: `
      <h1>Constitution and Governance</h1>

      <p>The Indian Constitution provides the framework for governance, defining powers, responsibilities, and limitations of the state. GS Paper II tests an aspirant’s understanding of this framework in practical governance contexts.</p>

      <h2>Constitutional Values</h2>

      <p>Values such as liberty, equality, justice, and fraternity guide governance and policy-making.</p>

      <h2>Institutions of Governance</h2>

      <p>Parliament, executive, judiciary, and constitutional bodies ensure accountability and balance of power.</p>

      <h2>Governance Challenges</h2>

      <p>Issues such as corruption, inefficiency, and lack of transparency undermine governance.</p>

      <h2>Role of Civil Servants</h2>

      <p>Civil servants operationalize constitutional values through policy implementation.</p>

      <h2>Conclusion</h2>

      <p>Understanding governance is essential for effective administration and democratic stability.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Feb 2024",
    readTime: "17 min read",
    category: "GENERAL STUDIES",
    image: "/assets/images/blog/blog_gs_constitution_gov.png"
  },
  {
    id: "economic-organization-anthropology",
    title: "Economic Organization and Subsistence: An Anthropological Perspective",
    excerpt:
      "Anthropology explains how different societies organize production, distribution, and consumption based on environment and culture.",
    content: `
      <h1>Economic Organization and Subsistence</h1>

      <p>Economic organization refers to the way societies arrange the production, distribution, and consumption of resources necessary for survival. Anthropology studies economic systems not merely as market transactions but as culturally embedded activities shaped by environment, technology, and social relationships.</p>

      <p>Unlike modern economics, which often assumes rational, profit-maximizing individuals, anthropology emphasizes cooperation, reciprocity, and social obligation as central economic principles in many societies.</p>

      <h2>Subsistence Patterns</h2>

      <p>Anthropologists classify societies based on their primary mode of subsistence. These patterns influence settlement, kinship, social hierarchy, and political organization.</p>

      <ul>
        <li><strong>Hunting and Gathering:</strong> Small, mobile groups dependent on wild resources.</li>
        <li><strong>Pastoralism:</strong> Livelihood based on domesticated animals.</li>
        <li><strong>Horticulture:</strong> Small-scale cultivation using simple tools.</li>
        <li><strong>Agriculture:</strong> Intensive farming with surplus production.</li>
        <li><strong>Industrial Economy:</strong> Mechanized production and wage labor.</li>
      </ul>

      <h2>Exchange Systems</h2>

      <p>Anthropology identifies three main forms of exchange: reciprocity, redistribution, and market exchange. In many traditional societies, reciprocity strengthens social bonds and mutual dependence.</p>

      <h2>Economic Organization in Tribal Societies</h2>

      <p>Tribal economies often prioritize subsistence security over accumulation. Land and resources are commonly owned, and economic activities are closely tied to ritual and kinship.</p>

      <h2>Impact of Modernization</h2>

      <p>Integration into market economies disrupts traditional systems, often leading to inequality and cultural dislocation.</p>

      <h2>Administrative Relevance</h2>

      <p>Development policies must account for indigenous economic systems to avoid livelihood loss and resistance.</p>

      <h2>Conclusion</h2>

      <p>Anthropology teaches that economic systems are social systems. Effective governance respects cultural patterns of production and exchange.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Mar 2024",
    readTime: "18 min read",
    category: "ANTHROPOLOGY",
    image: "/assets/images/blog/blog_anthropology_economic.png"
  },

  {
    id: "social-movements-india",
    title: "Social Movements in India: A Sociological Understanding",
    excerpt:
      "Social movements reflect collective efforts to challenge inequality, injustice, and exclusion in Indian society.",
    content: `
      <h1>Social Movements in India</h1>

      <p>Social movements are organized collective efforts aimed at bringing about or resisting social change. Sociology studies movements to understand how marginalized groups mobilize, articulate grievances, and influence policy.</p>

      <p>India has witnessed a wide range of social movements addressing caste discrimination, gender inequality, environmental degradation, and regional identity.</p>

      <h2>Characteristics of Social Movements</h2>

      <p>Social movements involve collective identity, shared goals, leadership, and sustained action. They often emerge when institutional mechanisms fail to address grievances.</p>

      <h2>Major Social Movements in India</h2>

      <ul>
        <li>Anti-caste movements</li>
        <li>Tribal movements</li>
        <li>Women’s movements</li>
        <li>Environmental movements</li>
        <li>Regional and linguistic movements</li>
      </ul>

      <h2>Role of Ideology and Leadership</h2>

      <p>Ideology provides direction, while leadership mobilizes resources and participation.</p>

      <h2>Impact on Policy and Society</h2>

      <p>Many progressive reforms, such as land rights and gender justice laws, emerged from sustained social movements.</p>

      <h2>Challenges Faced by Movements</h2>

      <p>Fragmentation, state repression, and co-option often weaken movements over time.</p>

      <h2>Conclusion</h2>

      <p>Social movements are vital expressions of democratic participation and social negotiation.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Mar 2024",
    readTime: "17 min read",
    category: "SOCIOLOGY",
    image: "/assets/images/blog/blog_sociology_movements.png"
  },

  {
    id: "economy-development-gs3",
    title: "Indian Economy and Development: Understanding GS Paper III",
    excerpt:
      "GS Paper III tests economic understanding, policy awareness, and developmental challenges.",
    content: `
      <h1>Indian Economy and Development</h1>

      <p>The Indian economy is a complex mix of traditional sectors and modern industries. GS Paper III evaluates an aspirant’s understanding of economic growth, development, and policy challenges.</p>

      <h2>Growth vs Development</h2>

      <p>Economic growth refers to increased output, while development emphasizes improved quality of life. India’s challenge lies in ensuring inclusive growth.</p>

      <h2>Key Sectors of the Economy</h2>

      <ul>
        <li>Agriculture</li>
        <li>Industry</li>
        <li>Services</li>
      </ul>

      <h2>Development Challenges</h2>

      <p>Poverty, unemployment, inequality, and regional imbalance remain persistent challenges.</p>

      <h2>Role of Government</h2>

      <p>Fiscal policy, monetary policy, and welfare schemes aim to promote stability and inclusion.</p>

      <h2>Sustainable Development</h2>

      <p>Balancing growth with environmental protection is crucial for long-term prosperity.</p>

      <h2>Conclusion</h2>

      <p>Understanding economic development is essential for informed governance and policy-making.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Mar 2024",
    readTime: "18 min read",
    category: "GENERAL STUDIES",
    image: "/assets/images/blog/blog_gs_economy.png"
  },

  {
    id: "welfare-schemes-implementation",
    title: "Welfare Schemes and Implementation Challenges in India",
    excerpt:
      "Welfare schemes are essential for social justice, but effective implementation determines their success.",
    content: `
      <h1>Welfare Schemes and Governance</h1>

      <p>Welfare schemes reflect the state’s commitment to social justice and inclusive development. India operates numerous schemes targeting poverty, health, education, and employment.</p>

      <h2>Objectives of Welfare Schemes</h2>

      <p>The primary objectives include poverty alleviation, social security, and human capital development.</p>

      <h2>Implementation Challenges</h2>

      <p>Leakages, lack of awareness, bureaucratic inefficiency, and exclusion errors often undermine effectiveness.</p>

      <h2>Role of Technology</h2>

      <p>Digital platforms and direct benefit transfers have improved transparency and reach.</p>

      <h2>Role of Civil Servants</h2>

      <p>Administrators play a crucial role in monitoring, grievance redressal, and community engagement.</p>

      <h2>Conclusion</h2>

      <p>Effective welfare delivery depends on administrative capacity, accountability, and empathy.</p>
    `,
    author: "Dr. Vivekananda IAS Faculty",
    authorInitial: "V",
    date: "Mar 2024",
    readTime: "17 min read",
    category: "GOVERNANCE",
    image: "/assets/images/blog/blog_welfare_schemes.png"
  }
];


export const getBlogById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};
