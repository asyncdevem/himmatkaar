"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Blog post data
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: string[];
}> = {
  "5-ways-to-build-successful-startup-pakistan": {
    title: "5 Ways to Build a Successful Startup in Pakistan",
    excerpt: "Discover the essential strategies and insights for launching and scaling your startup in Pakistan's growing entrepreneurial ecosystem.",
    author: "Ahmed Khan",
    date: "March 10, 2026",
    readTime: "5 min read",
    image: "/event-leadership.jpg",
    category: "Entrepreneurship",
    content: [
      "Pakistan's startup ecosystem is experiencing unprecedented growth, with young entrepreneurs leading the charge in innovation and digital transformation. Whether you're just starting out or looking to scale your venture, understanding the local landscape is crucial for success.",
      
      "## 1. Identify a Real Problem",
      "The most successful startups solve genuine problems that people face daily. Don't just chase trends—look for pain points in your community or industry. Talk to potential customers, understand their challenges, and validate your idea before investing significant resources.",
      
      "## 2. Build a Strong Team",
      "Your team is your greatest asset. Look for co-founders and early employees who complement your skills and share your vision. In Pakistan's collaborative culture, building relationships and trust within your team is essential. Diversity in skills, perspectives, and backgrounds will strengthen your startup.",
      
      "## 3. Leverage Local Resources",
      "Pakistan has a growing network of incubators, accelerators, and funding opportunities. Programs like Himmatkaar LaunchPad, Plan9, and the National Incubation Center provide mentorship, workspace, and connections. Don't hesitate to tap into these resources—they're designed to help you succeed.",
      
      "## 4. Focus on Digital Marketing",
      "With over 100 million internet users in Pakistan, digital marketing is no longer optional. Build a strong online presence through social media, content marketing, and SEO. Platforms like Facebook, Instagram, and LinkedIn are powerful tools for reaching your target audience cost-effectively.",
      
      "## 5. Stay Resilient and Adaptable",
      "The startup journey is filled with challenges and setbacks. What separates successful entrepreneurs from the rest is resilience and the ability to adapt. Be prepared to pivot when necessary, learn from failures, and keep pushing forward. The Pakistani market is dynamic—flexibility is key.",
      
      "## Conclusion",
      "Building a successful startup in Pakistan requires more than just a great idea. It demands dedication, strategic thinking, and the ability to navigate local challenges while leveraging unique opportunities. With the right approach and mindset, Pakistani entrepreneurs can create ventures that not only succeed locally but also compete globally.",
      
      "Remember, every successful startup you admire today started with someone taking that first step. Your journey begins now."
    ]
  },
  
  "power-of-youth-leadership-social-change": {
    title: "The Power of Youth Leadership in Social Change",
    excerpt: "Explore how young leaders are driving transformative change in communities across Pakistan through innovative solutions.",
    author: "Fatima Ali",
    date: "March 5, 2026",
    readTime: "7 min read",
    image: "/event-workshop.jpg",
    category: "Leadership",
    content: [
      "Young people are not just the leaders of tomorrow—they are the changemakers of today. Across Pakistan, youth-led initiatives are addressing critical social issues, from education and healthcare to environmental sustainability and economic empowerment.",
      
      "## The Rise of Youth Activism",
      "The past decade has witnessed a remarkable surge in youth activism in Pakistan. Armed with digital tools and a passion for change, young leaders are mobilizing communities, raising awareness, and implementing solutions that governments and traditional organizations have struggled to address.",
      
      "## Characteristics of Effective Youth Leaders",
      "What makes youth leaders so effective? First, they bring fresh perspectives unburdened by conventional thinking. They're digital natives who understand how to leverage technology for social good. Most importantly, they have a personal stake in creating a better future—they're building the world they'll inherit.",
      
      "## Real Impact Stories",
      "Consider the story of a 22-year-old from Lahore who started a community library in her neighborhood, providing free access to books and educational resources for underprivileged children. Or the group of university students in Karachi who developed a mobile app connecting food donors with those in need, reducing food waste while fighting hunger.",
      
      "## Challenges and Opportunities",
      "Despite their passion and innovation, young leaders face significant challenges: limited access to funding, lack of mentorship, and sometimes resistance from traditional power structures. However, these challenges are increasingly being addressed through programs like Himmatkaar, which provide the support, training, and networks young leaders need to succeed.",
      
      "## The Role of Education and Training",
      "Leadership isn't innate—it's developed through education, experience, and mentorship. Programs that focus on leadership development, critical thinking, and practical skills are essential for nurturing the next generation of changemakers. This includes not just technical skills but also emotional intelligence, communication, and ethical decision-making.",
      
      "## Building Sustainable Movements",
      "The most impactful youth-led initiatives are those that create sustainable change. This means building organizations with clear missions, developing leadership pipelines, and creating systems that can continue even as individual leaders move on to new challenges.",
      
      "## Call to Action",
      "If you're a young person passionate about making a difference, know that your voice matters and your actions can create real change. Start small, build your skills, connect with like-minded individuals, and don't be afraid to challenge the status quo. The world needs your energy, creativity, and commitment to justice.",
      
      "For those in positions to support youth leadership—whether as mentors, funders, or policymakers—invest in young people. Give them platforms, resources, and trust. The return on investment will be a more just, innovative, and sustainable society for all."
    ]
  },
  
  "tech-skills-young-professionals-2026": {
    title: "Tech Skills Every Young Professional Needs in 2026",
    excerpt: "Stay ahead of the curve with these essential technical skills that are shaping the future of work in Pakistan.",
    author: "Bilal Ahmed",
    date: "February 28, 2026",
    readTime: "6 min read",
    image: "/event-openhouse.jpg",
    category: "Technology",
    content: [
      "The workplace is evolving rapidly, and technology is at the heart of this transformation. Whether you're in tech or any other field, certain technical skills have become essential for career success in 2026 and beyond.",
      
      "## 1. Data Literacy",
      "Understanding data is no longer just for data scientists. Every professional needs to be able to read, interpret, and make decisions based on data. This includes basic statistics, data visualization, and the ability to use tools like Excel, Google Sheets, or more advanced platforms like Tableau.",
      
      "## 2. Digital Communication Tools",
      "Remote and hybrid work are here to stay. Mastering digital communication platforms—from Slack and Microsoft Teams to Zoom and project management tools like Asana or Trello—is crucial. But it's not just about knowing the tools; it's about communicating effectively in digital environments.",
      
      "## 3. Basic Coding and Automation",
      "You don't need to be a software engineer, but understanding basic programming concepts and being able to automate repetitive tasks can dramatically increase your productivity. Python is particularly valuable for its versatility and relatively gentle learning curve.",
      
      "## 4. AI and Machine Learning Fundamentals",
      "Artificial Intelligence is transforming every industry. Understanding how AI works, its capabilities and limitations, and how to leverage AI tools in your work is becoming as fundamental as computer literacy was a generation ago. Tools like ChatGPT, Midjourney, and industry-specific AI applications are changing how we work.",
      
      "## 5. Cybersecurity Awareness",
      "With increasing digitalization comes increased risk. Every professional needs to understand basic cybersecurity principles: password management, recognizing phishing attempts, secure data handling, and protecting sensitive information. A single security breach can have devastating consequences.",
      
      "## 6. Cloud Computing Basics",
      "Understanding cloud services like Google Drive, Dropbox, AWS, or Azure is essential. Most modern businesses operate in the cloud, and knowing how to work with cloud-based tools and understanding concepts like cloud storage, collaboration, and security is crucial.",
      
      "## 7. Digital Marketing Fundamentals",
      "Regardless of your role, understanding how digital marketing works—SEO, social media, content marketing, email campaigns—can be invaluable. In Pakistan's growing digital economy, these skills can open doors and create opportunities.",
      
      "## How to Develop These Skills",
      "The good news is that most of these skills can be learned online, often for free or at low cost. Platforms like Coursera, edX, YouTube, and local initiatives like Himmatkaar offer courses and training. The key is to start learning and practicing consistently.",
      
      "## The Importance of Continuous Learning",
      "Technology evolves rapidly. The specific tools and platforms we use today may be different in five years, but the underlying principles and the habit of continuous learning will remain valuable. Cultivate curiosity, stay updated with industry trends, and never stop learning.",
      
      "## Conclusion",
      "Technical skills are no longer optional—they're essential for career success in the modern workplace. But remember, technical skills complement, not replace, soft skills like communication, creativity, and critical thinking. The most successful professionals combine technical proficiency with strong interpersonal abilities.",
      
      "Start building these skills today, and you'll be well-positioned for the opportunities and challenges of tomorrow's workplace."
    ]
  },
  
  "building-sustainable-communities-guide": {
    title: "Building Sustainable Communities: A Guide",
    excerpt: "Learn practical approaches to creating lasting impact in your community through sustainable development initiatives.",
    author: "Sara Hussain",
    date: "February 20, 2026",
    readTime: "8 min read",
    image: "/about-hero.jpg",
    category: "Impact",
    content: [
      "Creating sustainable communities isn't just about environmental conservation—it's about building resilient, thriving societies where people can prosper while protecting the planet for future generations. This comprehensive guide explores practical approaches to community development that create lasting positive impact.",
      
      "## Understanding Sustainability",
      "Sustainability has three pillars: environmental, economic, and social. True sustainable development addresses all three simultaneously. A community project that improves the environment but leaves people economically worse off isn't sustainable. Similarly, economic growth that destroys the environment or increases inequality isn't sustainable either.",
      
      "## Start with Community Engagement",
      "The most successful community initiatives start by listening. Before implementing any project, engage with community members to understand their needs, priorities, and existing resources. Use participatory methods like community meetings, surveys, and focus groups. Remember: you're working with the community, not for them.",
      
      "## Identify Local Resources and Assets",
      "Every community has assets—people with skills, local organizations, natural resources, cultural traditions. Asset-based community development focuses on leveraging these existing strengths rather than only addressing deficits. This approach builds confidence and ownership within the community.",
      
      "## Focus on Education and Capacity Building",
      "Sustainable change requires building local capacity. This means training community members, developing local leadership, and creating systems that can continue without external support. Education initiatives—whether formal schooling, vocational training, or awareness campaigns—are investments in long-term sustainability.",
      
      "## Implement Environmental Solutions",
      "Environmental sustainability is crucial for community wellbeing. This might include: waste management systems, renewable energy projects, water conservation initiatives, urban gardening, or tree planting campaigns. Choose solutions appropriate for your local context and climate.",
      
      "## Create Economic Opportunities",
      "Economic sustainability means creating livelihoods that don't deplete resources. This could involve: supporting local businesses, developing cooperatives, promoting sustainable agriculture, or creating green jobs. The goal is economic development that benefits the community while protecting the environment.",
      
      "## Build Social Cohesion",
      "Strong communities are built on trust, cooperation, and shared identity. Create spaces and opportunities for people to connect: community centers, cultural events, sports programs, or volunteer initiatives. Social capital—the networks and relationships within a community—is as important as physical infrastructure.",
      
      "## Measure and Adapt",
      "Establish clear goals and metrics to track progress. But be flexible—community development is complex, and you'll need to adapt based on what you learn. Regular evaluation helps you understand what's working, what isn't, and why.",
      
      "## Ensure Inclusivity",
      "Sustainable communities are inclusive communities. Ensure that marginalized groups—women, minorities, people with disabilities, youth—have a voice in decision-making and benefit from development initiatives. Inequality undermines sustainability.",
      
      "## Partner Strategically",
      "No single organization can address all community needs. Build partnerships with local government, NGOs, businesses, and educational institutions. Each brings different resources, expertise, and perspectives. Effective partnerships multiply impact.",
      
      "## Think Long-Term",
      "Sustainable community development is a marathon, not a sprint. Quick fixes rarely create lasting change. Be patient, persistent, and committed to the long-term vision. Celebrate small wins while keeping sight of bigger goals.",
      
      "## Case Study: A Success Story",
      "Consider the example of a rural village in Punjab that transformed itself through community-led sustainable development. They started with a water conservation project, which led to improved agriculture, which created economic opportunities, which funded education initiatives, which developed local leadership, which sparked further innovation. Each success built on the previous one, creating a virtuous cycle of development.",
      
      "## Conclusion",
      "Building sustainable communities is challenging but deeply rewarding work. It requires vision, patience, collaboration, and commitment. But when done right, it creates lasting positive change that improves lives, protects the environment, and builds a better future for generations to come.",
      
      "Whether you're a community leader, activist, or concerned citizen, you have a role to play in building sustainable communities. Start where you are, use what you have, and do what you can. Every action matters."
    ]
  },
  
  "from-idea-to-launch-startup-journey": {
    title: "From Idea to Launch: A Startup Journey",
    excerpt: "Follow the inspiring journey of a Himmatkaar alumni who turned their innovative idea into a thriving business.",
    author: "Hassan Malik",
    date: "February 15, 2026",
    readTime: "10 min read",
    image: "/hero-person.jpg",
    category: "Success Stories",
    content: [
      "This is the story of Zara Ahmed, a 26-year-old entrepreneur from Karachi who transformed a simple observation into a successful startup that's now serving thousands of customers across Pakistan. Her journey through the Himmatkaar LaunchPad program offers valuable lessons for aspiring entrepreneurs.",
      
      "## The Spark of an Idea",
      "Zara's journey began during her final year of university when she noticed a recurring problem: students struggled to find affordable, quality study materials. Textbooks were expensive, libraries had limited copies, and online resources were scattered and unreliable. She wondered: what if there was a better way?",
      
      "## Initial Research and Validation",
      "Before diving in, Zara spent three months researching the problem. She surveyed over 200 students, interviewed professors, and analyzed existing solutions. The data confirmed her hypothesis: there was a significant gap in the market for an affordable, comprehensive digital learning platform tailored to Pakistani students.",
      
      "## Joining Himmatkaar LaunchPad",
      "Zara applied to Himmatkaar LaunchPad with a rough business plan and a lot of passion. The program provided structure to her ideas, connecting her with mentors who had built successful education technology companies. 'The mentorship was invaluable,' Zara recalls. 'They helped me avoid mistakes that could have killed the business before it started.'",
      
      "## Building the MVP",
      "With guidance from her mentors, Zara focused on building a Minimum Viable Product (MVP)—a basic version of her platform with just enough features to test with real users. She partnered with a technical co-founder she met through the program, and together they built the first version in three months.",
      
      "## The First Customers",
      "Launch day was nerve-wracking. Zara and her team had invited 50 students to try the platform. The feedback was mixed—some features worked great, others needed improvement. But crucially, students were willing to pay for the service. This validation gave the team confidence to continue.",
      
      "## Pivoting and Iterating",
      "The initial business model focused on individual subscriptions, but user feedback revealed that universities and coaching centers were more interested in bulk licenses. This insight led to a pivot that dramatically accelerated growth. 'We had to be willing to change our assumptions based on what the market was telling us,' Zara explains.",
      
      "## Securing Funding",
      "With traction and a refined business model, Zara was ready to raise capital. The connections made through Himmatkaar opened doors to angel investors. After pitching to 15 investors and facing multiple rejections, she secured PKR 3 million in seed funding. The key was demonstrating clear market demand and a path to profitability.",
      
      "## Scaling the Team",
      "With funding secured, Zara hired her first employees: a content creator, a customer success manager, and a marketing specialist. Building the right team was challenging. 'I learned that skills can be taught, but attitude and cultural fit are crucial,' she says. 'Hire people who believe in your mission.'",
      
      "## Overcoming Challenges",
      "The journey wasn't smooth. There were technical failures, cash flow crunches, and moments of doubt. During one particularly difficult period, a major client threatened to cancel their contract due to platform issues. The team worked around the clock to fix the problems and rebuild trust. These challenges, while painful, made the company stronger.",
      
      "## Achieving Product-Market Fit",
      "Eighteen months after launch, the platform was serving 5,000 active users across 20 universities. Customer retention was high, and word-of-mouth referrals were driving growth. The team had achieved product-market fit—that magical moment when customers love your product so much they tell others about it.",
      
      "## Current Status and Future Plans",
      "Today, Zara's company has 15 employees and serves over 50,000 students. Revenue has grown 300% year-over-year. But Zara isn't satisfied. 'We've barely scratched the surface,' she says. 'There are millions of students in Pakistan who could benefit from better access to education. That's what drives us forward.'",
      
      "## Lessons Learned",
      "Reflecting on her journey, Zara shares key lessons: Start before you're ready. Your first version will be imperfect—launch anyway. Listen to customers obsessively. Build a team that complements your weaknesses. Stay resilient—entrepreneurship is a rollercoaster. Focus on solving real problems, not chasing trends. Take care of your mental health—burnout is real.",
      
      "## Advice for Aspiring Entrepreneurs",
      "'If you're thinking about starting a business, stop overthinking and start doing,' Zara advises. 'You don't need a perfect plan or unlimited resources. You need a problem worth solving, the courage to start, and the resilience to keep going when things get tough. Programs like Himmatkaar can provide support, but ultimately, success comes from your determination and willingness to learn.'",
      
      "## Conclusion",
      "Zara's journey from idea to successful startup demonstrates that with the right combination of vision, validation, mentorship, and perseverance, young Pakistani entrepreneurs can build businesses that create real value. Her story is one of many emerging from Pakistan's growing startup ecosystem—a testament to the talent, creativity, and determination of the country's youth.",
      
      "What problem will you solve? Your startup journey could begin today."
    ]
  },
  
  "networking-tips-young-professionals": {
    title: "Networking Tips for Young Professionals",
    excerpt: "Master the art of professional networking with these proven strategies to build meaningful connections.",
    author: "Ayesha Raza",
    date: "February 10, 2026",
    readTime: "4 min read",
    image: "/track-fellowship.jpg",
    category: "Career",
    content: [
      "Networking is often misunderstood as collecting business cards or adding connections on LinkedIn. In reality, effective networking is about building genuine relationships that create mutual value over time. Here's how to do it right.",
      
      "## Start with the Right Mindset",
      "Approach networking with a giving mindset, not a taking one. Ask yourself: 'How can I help this person?' rather than 'What can I get from them?' This shift in perspective makes networking feel less transactional and more authentic. People can sense when you're genuinely interested in them versus when you're just looking for favors.",
      
      "## Leverage Your Existing Network",
      "You already have a network—classmates, colleagues, family friends, professors. Start there. Let people know what you're working on and what kind of connections would be valuable. Often, the best introductions come from people who already know and trust you.",
      
      "## Master the Art of Introduction",
      "When meeting someone new, have a clear, concise way to introduce yourself. This isn't about reciting your resume—it's about sharing who you are and what you're passionate about in a way that invites conversation. Practice your introduction until it feels natural, not rehearsed.",
      
      "## Ask Better Questions",
      "Instead of 'What do you do?', try 'What are you working on that excites you?' or 'What challenges are you facing in your work?' These questions lead to more interesting conversations and help you understand how you might be able to help.",
      
      "## Follow Up Meaningfully",
      "The fortune is in the follow-up. After meeting someone, send a personalized message within 24-48 hours. Reference something specific from your conversation. If you promised to share a resource or make an introduction, do it promptly. Consistency in follow-up sets you apart.",
      
      "## Use Social Media Strategically",
      "LinkedIn is powerful when used well. Share valuable content, engage with others' posts thoughtfully, and use it to stay connected with your network. But don't just connect and forget—engage regularly. Comment on updates, congratulate achievements, and share relevant opportunities.",
      
      "## Attend Events with Purpose",
      "Whether it's a conference, workshop, or meetup, go with specific goals. Maybe you want to meet three new people in your industry, or learn about a particular topic. Having purpose makes events more productive and less overwhelming.",
      
      "## Be Generous with Your Knowledge",
      "Share what you know freely. Write articles, give presentations, mentor others. When you're known as someone who adds value, people naturally want to connect with you. Generosity is magnetic.",
      
      "## Build Relationships, Not Just Contacts",
      "A thousand LinkedIn connections mean nothing if you don't have real relationships. Focus on depth over breadth. It's better to have 50 people who know you well and would vouch for you than 500 superficial connections.",
      
      "## Stay in Touch Regularly",
      "Don't only reach out when you need something. Check in periodically with your network. Share interesting articles, congratulate achievements, or simply ask how they're doing. Relationships require maintenance.",
      
      "## Overcome Networking Anxiety",
      "Many people find networking intimidating, especially introverts. Remember: most people feel the same way. Start small—set a goal to have one meaningful conversation at an event. Prepare some conversation starters. And remember, quality matters more than quantity.",
      
      "## Create Value for Your Network",
      "Think about how you can connect people in your network who might benefit from knowing each other. Become a connector. When you help others build their networks, you strengthen your own.",
      
      "## Conclusion",
      "Effective networking isn't about manipulation or using people—it's about building genuine relationships based on mutual respect and value. It takes time, effort, and authenticity. But the relationships you build through thoughtful networking can open doors, create opportunities, and enrich your professional and personal life in ways you can't imagine.",
      
      "Start today. Reach out to one person in your network. Have a real conversation. See where it leads. Your next opportunity might be just one connection away."
    ]
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0b]">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <article className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#39894c] hover:underline mb-8 font-semibold">
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-[#39894c] text-white px-4 py-2 rounded-full text-sm font-bold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="font-semibold">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 rounded-2xl overflow-hidden mb-12"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            {post.content.map((paragraph, idx) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-3xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={idx} className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                  {paragraph}
                </p>
              );
            })}
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Share this article</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-[#39894c] hover:text-white transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-[#39894c] hover:text-white transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-[#39894c] hover:text-white transition-colors">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-[#39894c] hover:text-white transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">About the Author</h3>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[#39894c] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-lg text-slate-900 dark:text-white">{post.author}</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  {post.author} is a passionate advocate for youth empowerment and innovation at Himmatkaar, dedicated to helping young professionals achieve their full potential.
                </p>
              </div>
            </div>
          </motion.div>
        </article>

        {/* Related Posts CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2d5f3d] rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Read More Articles</h2>
            <p className="text-lg mb-8 text-white/90">
              Explore more insights and stories from the Himmatkaar community
            </p>
            <Link href="/blog">
              <button className="bg-white text-[#2d5f3d] px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                View All Posts
              </button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
