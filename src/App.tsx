import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Users, 
  Calendar, 
  Trophy, 
  ArrowRight, 
  Mail, 
  Instagram,
  ChevronDown,
  Zap,
  Star,
  BookOpen,
  Target
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'events', 'ebm', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ACE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Events', 'Join', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white/80 hover:text-white transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-white font-semibold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ACE
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-light">Association of Computer Engineers</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Empowering the next generation of tech leaders through innovation, collaboration, and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('join')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Join ACE Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="border-2 border-white/30 px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About ACE</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The Association of Computer Engineers is the premier student organization of the CSE department, 
              fostering innovation, technical excellence, and professional development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Our Mission",
                description: "To bridge the gap between academic learning and industry requirements while fostering a culture of innovation and technical excellence."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community",
                description: "Building a strong network of passionate computer engineers who support each other's growth and success."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Innovation",
                description: "Encouraging creative problem-solving and cutting-edge technology exploration through various initiatives and projects."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Events</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From cutting-edge technical competitions to fun-filled cultural celebrations, ACE hosts diverse events throughout the year
            </p>
          </div>

          {/* Technical Events */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Technical Events</h3>
              <p className="text-lg text-white/70">Sharpen your coding skills and technical expertise</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "CodeFest",
                  description: "Annual flagship coding competition featuring algorithmic challenges, data structures problems, and competitive programming rounds",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Trophy className="w-6 h-6" />,
                  title: "A C Event",
                  description: "Specialized programming contest focusing on C language mastery, pointer manipulation, and system-level programming",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "Web Wars",
                  description: "Frontend development battle where teams compete to create stunning web applications using modern frameworks",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Tech Quiz",
                  description: "Mind-bending technical quiz covering programming concepts, latest technologies, and computer science fundamentals",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "Project Expo",
                  description: "Annual showcase platform for innovative student projects, research work, and technical solutions",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Debug Challenge",
                  description: "Test your debugging skills by finding and fixing errors in complex code snippets under time pressure",
                  color: "from-teal-500 to-blue-500"
                }
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className={`bg-gradient-to-r ${event.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-white/80 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Technical Events */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Non-Technical Events</h3>
              <p className="text-lg text-white/70">Fun activities and cultural celebrations for everyone</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "Spurthi",
                  description: "Annual mega cultural fest featuring dance competitions, music performances, drama, art exhibitions, photography contests, and fun games for the entire college",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Team Building",
                  description: "Interactive group activities, problem-solving games, and collaborative challenges to strengthen bonds among students",
                  color: "from-green-500 to-teal-500"
                },
                {
                  icon: <Trophy className="w-6 h-6" />,
                  title: "Sports Events",
                  description: "Cricket tournaments, badminton championships, table tennis competitions, and other sports activities for fitness enthusiasts",
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "Literary Events",
                  description: "Essay writing competitions, poetry recitations, debate contests, and storytelling sessions to enhance communication skills",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: "Cultural Nights",
                  description: "Theme-based celebrations, traditional festivals, costume parties, and entertainment evenings with music and dance",
                  color: "from-purple-500 to-violet-500"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Fun Challenges",
                  description: "Treasure hunts, quiz competitions, brain teasers, and interactive games designed for entertainment and team bonding",
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className={`bg-gradient-to-r ${event.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-white/80 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Workshops & Training</h3>
              <p className="text-lg text-white/70">Hands-on learning sessions with industry experts</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "ML Explore",
                  description: "Comprehensive machine learning workshop covering algorithms, data preprocessing, model training, and real-world applications",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "Figma Workshop",
                  description: "UI/UX design masterclass teaching interface design, prototyping, collaboration tools, and design systems using Figma",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "Web Development",
                  description: "Full-stack development training covering HTML, CSS, JavaScript, React, Node.js, and database integration",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Cloud Computing",
                  description: "AWS and Azure fundamentals workshop including deployment, scaling, and cloud architecture best practices",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "Mobile App Dev",
                  description: "Android and iOS development workshop using Flutter, React Native, and native development frameworks",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "DevOps Training",
                  description: "CI/CD pipelines, containerization with Docker, Kubernetes orchestration, and automation tools training",
                  color: "from-teal-500 to-blue-500"
                }
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className={`bg-gradient-to-r ${event.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-white/80 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Hackathons</h3>
              <p className="text-lg text-white/70">24-hour coding marathons to build innovative solutions</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Trophy className="w-8 h-8" />,
                  title: "Prajwalan",
                  description: "Our flagship internal hackathon where students collaborate in teams to develop innovative solutions for real-world problems. Features multiple tracks including web development, mobile apps, AI/ML, and IoT solutions with mentorship from industry experts.",
                  color: "from-orange-500 to-red-500",
                  features: ["24-hour coding marathon", "Multiple technology tracks", "Industry mentor guidance", "Cash prizes and internship opportunities"]
                },
                {
                  icon: <Star className="w-8 h-8" />,
                  title: "National Level Hackathons",
                  description: "Annual participation in prestigious national hackathons like Smart India Hackathon, HackIndia, and other inter-college competitions. Students get exposure to compete with top talent across the country and showcase their skills on a national platform.",
                  color: "from-blue-500 to-purple-500",
                  features: ["National competition exposure", "Inter-college collaboration", "Government and industry problems", "Recognition and career opportunities"]
                }
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className={`bg-gradient-to-r ${event.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {event.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-6">{event.description}</p>
                  <div className="space-y-2">
                    {event.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0" />
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personality Development */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Personality Development</h3>
              <p className="text-lg text-white/70">Build confidence and professional skills for career success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Skill Up",
                  description: "Comprehensive personality development program focusing on communication skills, leadership qualities, and professional etiquette",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "Public Speaking",
                  description: "Overcome stage fear and develop confident presentation skills through regular practice sessions and expert guidance",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Interview Prep",
                  description: "Mock interviews, resume building workshops, and HR round preparation with feedback from industry professionals",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "Leadership Training",
                  description: "Develop leadership qualities through team management exercises, decision-making scenarios, and responsibility assignments",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: "Time Management",
                  description: "Learn effective time management techniques, productivity hacks, and work-life balance strategies for academic and professional success",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Trophy className="w-6 h-6" />,
                  title: "Confidence Building",
                  description: "Interactive sessions to boost self-confidence, overcome social anxiety, and develop a positive mindset for personal growth",
                  color: "from-teal-500 to-blue-500"
                }
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className={`bg-gradient-to-r ${event.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-white/80 leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join ACE Section */}
      <section id="join" className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join ACE Today
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Become part of the premier CSE student organization and unlock opportunities for growth, 
              learning, and professional development in the tech industry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Why Join ACE?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Access to exclusive technical workshops and training",
                  "Direct interaction with industry alumni and professionals",
                  "Participate in cutting-edge projects and competitions",
                  "Build a strong professional network in tech industry",
                  "Gain insights into corporate expectations and culture",
                  "Enhance your skills through peer-to-peer learning",
                  "Get mentorship from senior students and alumni",
                  "Access to internship and job opportunities",
                  "Develop leadership and teamwork skills",
                  "Stay updated with latest technology trends",
                  "Participate in hackathons and coding competitions",
                  "Build impressive projects for your portfolio"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Alumni Network Benefits</h4>
                <div className="space-y-4 text-white/80">
                  <p className="leading-relaxed">
                    Connect with our extensive alumni network working in top tech companies like Google, Microsoft, Amazon, and leading startups.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                      <span>Regular alumni interaction sessions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                      <span>Industry insights and career guidance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                      <span>Referral opportunities for internships</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                      <span>Mock interviews and resume reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">How to Join</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h5 className="font-semibold text-white">Register</h5>
                      <p className="text-white/70 text-sm">Fill out the membership registration form with your details</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h5 className="font-semibold text-white">Orientation</h5>
                      <p className="text-white/70 text-sm">Attend the orientation session to learn about ACE activities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h5 className="font-semibold text-white">Get Active</h5>
                      <p className="text-white/70 text-sm">Start participating in events, workshops, and projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-lg">
                Become an ACE Member
              </button>
              <p className="text-white/60 mt-4">Open for all CSE students - Join us today!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have questions about ACE or want to know more about joining? We'd love to hear from you!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-white/80">ace@srkr.ac.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Instagram</h4>
                      <p className="text-white/80">@srkr_ace</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Office Hours</h4>
                  <div className="text-white/80 space-y-2">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ACE</span>
            </div>
            <p className="text-white/60">
              © 2025 Association of Computer Engineers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
