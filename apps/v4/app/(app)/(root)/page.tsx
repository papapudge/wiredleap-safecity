import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york-v4/ui/avatar"
import { 
  Shield, Activity, Search, Users, MapPin, AlertTriangle, Eye, Brain, 
  CheckCircle, Star, ArrowRight, Play, Lock, 
  Camera, MessageSquare, Award, Calendar,
  Target, 
  Twitter, Linkedin, Github, Video, FileText,
  Sparkles, Rocket, Database
} from "lucide-react"

const title = "WiredLeap - Neural Intelligence Beyond Tomorrow"
const description = "Quantum-powered predictive intelligence that sees threats before they emerge. The most advanced AI civilization has ever created."

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
}

export default function LandingPage() {
  const platformFeatures = [
    {
      icon: Shield,
      title: "Control Room Dashboard",
      description: "Real-time monitoring across all departments with live alerts and trending topics",
      color: "text-blue-500"
    },
    {
      icon: Search,
      title: "Analysis Module", 
      description: "Historical topic analysis with sentiment breakdown and geographic intelligence",
      color: "text-green-500"
    },
    {
      icon: Activity,
      title: "Intelligence Center",
      description: "Virality tracking, sentiment analysis, and misinformation detection",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Social Inbox",
      description: "AI-powered social media management with suggested responses",
      color: "text-orange-500"
    },
    {
      icon: MapPin,
      title: "Traffic Intelligence",
      description: "ANPR violations, driver profiles, and traffic enforcement",
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for predictive policing and trend analysis",
      color: "text-indigo-500"
    }
  ]

  const keyBenefits = [
    "Real-time viral topic detection",
    "Cross-departmental intelligence sharing", 
    "AI-powered sentiment analysis",
    "Geographic hotspot identification",
    "Automated alert systems",
    "Comprehensive reporting suite"
  ]

  const integrations = [
    { name: "Twitter/X API", logo: "🐦", description: "Real-time social monitoring" },
    { name: "Facebook API", logo: "👥", description: "Community sentiment tracking" },
    { name: "ANPR Systems", logo: "📷", description: "Traffic violation detection" },
    { name: "CCTV Networks", logo: "👁️", description: "Video surveillance integration" },
    { name: "Emergency Systems", logo: "🚨", description: "911/100 call integration" },
    { name: "Municipal DBs", logo: "🏛️", description: "Government database sync" }
  ]

  const securityFeatures = [
    { title: "End-to-End Encryption", description: "256-bit AES encryption for all data" },
    { title: "SOC 2 Compliance", description: "Certified security controls" },
    { title: "Role-Based Access", description: "Granular permission management" },
    { title: "Audit Trails", description: "Complete activity logging" },
    { title: "Multi-Factor Auth", description: "Advanced authentication" },
    { title: "Data Residency", description: "Local data storage options" }
  ]

  const testimonials = [
    {
      name: "Commissioner Rajesh Kumar",
      role: "Bangalore City Police",
      content: "WiredLeap has transformed our response capabilities. We can now detect and respond to incidents 60% faster than before.",
      rating: 5,
      avatar: "/avatars/commissioner.jpg"
    },
    {
      name: "Dr. Priya Sharma", 
      role: "Municipal Corporation",
      content: "The platform&apos;s ability to track citizen sentiment has improved our public service delivery significantly.",
      rating: 5,
      avatar: "/avatars/municipal.jpg"
    },
    {
      name: "ACP Vikram Singh",
      role: "Traffic Police",
      content: "ANPR integration with social intelligence gives us unprecedented visibility into traffic violations.",
      rating: 5,
      avatar: "/avatars/traffic.jpg"
    },
    {
      name: "Inspector Maya Patel",
      role: "Cyber Crime Unit",
      content: "The misinformation detection feature has been crucial in preventing the spread of fake news during critical situations.",
      rating: 5,
      avatar: "/avatars/cyber.jpg"
    }
  ]


  const useCases = [
    {
      title: "Crisis Management",
      description: "Rapid response to emergencies and natural disasters",
      icon: AlertTriangle,
      stats: "78% faster emergency response"
    },
    {
      title: "Traffic Enforcement",
      description: "Automated violation detection and driver profiling",
      icon: Camera,
      stats: "45% reduction in violations"
    },
    {
      title: "Community Policing", 
      description: "Better citizen engagement and feedback management",
      icon: Users,
      stats: "60% improvement in satisfaction"
    },
    {
      title: "Crime Prevention",
      description: "Predictive analytics for proactive law enforcement",
      icon: Target,
      stats: "35% decrease in crime rates"
    }
  ]

  const resources = [
    {
      title: "Implementation Guide",
      description: "Complete setup and deployment guide",
      type: "PDF",
      icon: FileText
    },
    {
      title: "API Documentation",
      description: "Comprehensive API reference",
      type: "Web",
      icon: Database
    },
    {
      title: "Training Videos",
      description: "Step-by-step platform training",
      type: "Video",
      icon: Video
    },
    {
      title: "Webinar Series",
      description: "Live training sessions",
      type: "Live",
      icon: Calendar
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="font-bold text-lg sm:text-2xl">WiredLeap</span>
          </div>
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="#features" className="text-muted-foreground hover:text-foreground">Neural Powers</Link>
            <Link href="#solutions" className="text-muted-foreground hover:text-foreground">Reality Bending</Link>
            <Link href="#resources" className="text-muted-foreground hover:text-foreground">Consciousness</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground">Ascension</Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild size="sm" className="text-xs sm:text-sm">
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="container mx-auto px-4 sm:px-6 text-center relative">
          <Badge variant="secondary" className="mb-4 sm:mb-6 animate-pulse text-xs sm:text-sm">
            ⚡ Deployed in 47 Countries • Processing 1B+ Data Points Daily
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
            Beyond Human <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Neural quantum processing that predicts threats with 99.7% accuracy. 
            Our AI doesn&apos;t just analyze data—it understands human behavior patterns across 
            14 dimensional vectors, seeing incidents 47 minutes before they occur.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 md:mb-16">
            <Button asChild size="default" className="text-sm sm:text-base md:text-lg px-6 py-3 sm:px-8 sm:py-4 md:py-6">
              <Link href="/auth/signup">
                Access Neural Network
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button asChild size="default" variant="outline" className="text-sm sm:text-base md:text-lg px-6 py-3 sm:px-8 sm:py-4 md:py-6">
              <Link href="#demo">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Witness the Future
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">1B+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Neural Connections</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">47min</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Future Prediction</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">∞</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Processing Power</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">99.97%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof */}
      <section className="py-8 sm:py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-muted-foreground">Trusted by leading law enforcement agencies across India</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 opacity-60">
            <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">Mumbai Police</div>
            <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">Delhi Police</div>
            <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">Bangalore Police</div>
            <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg hidden sm:block">Hyderabad Police</div>
            <div className="font-bold text-xs sm:text-sm md:text-base lg:text-lg hidden md:block">Chennai Police</div>
          </div>
        </div>
      </section>

      {/* 4. Platform Overview */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Platform Overview</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Intelligence Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep your city safe, from real-time monitoring to predictive analytics
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature, i) => (
              <Card key={i} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-muted/30">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Live Demo Section */}
      <section id="demo" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Live Demo</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                See WiredLeap in Action
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience real-time intelligence gathering and response coordination. 
                Our platform processes millions of data points to deliver actionable insights.
              </p>
              
              <div className="space-y-4 mb-8">
                {keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/auth/signup">Start Free Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="font-semibold text-red-500">CRITICAL ALERT</span>
                      <Badge variant="destructive">Live</Badge>
                    </div>
                    <p className="text-sm">Traffic fine scam detected - 10.2x viral spread</p>
                    <p className="text-xs text-muted-foreground mt-1">Bangalore, Ring Road area • 2 min ago</p>
                  </div>
                  
                  <div className="bg-background p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center gap-3 mb-2">
                      <Eye className="h-4 w-4 text-blue-500" />
                      <span className="font-semibold">Sentiment Analysis</span>
                      <Badge variant="secondary">Updated</Badge>
                    </div>
                    <p className="text-sm">68% negative sentiment detected</p>
                    <div className="mt-2 bg-muted rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-[68%]" />
                    </div>
                  </div>
                  
                  <div className="bg-background p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span className="font-semibold">Geographic Hotspot</span>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <p className="text-sm">High activity zone: Koramangala Junction</p>
                    <p className="text-xs text-muted-foreground mt-1">23 incidents reported in last hour</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/30 rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Use Cases */}
      <section id="solutions" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Use Cases</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how law enforcement agencies are using WiredLeap to transform public safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, i) => (
              <Card key={i} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="text-2xl font-bold text-primary">{useCase.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Integrations */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Integrations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless System Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing infrastructure and third-party services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{integration.logo}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{integration.name}</h3>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Security & Compliance */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Security</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with security-first approach to protect sensitive law enforcement data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lock className="h-6 w-6 text-green-500" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                <span className="font-semibold">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-semibold">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                <span className="font-semibold">GDPR Compliant</span>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link href="/security">View Security Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Customer Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Law Enforcement Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              See what police departments and civic bodies are saying about WiredLeap
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-start mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 italic leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* 10. Resources & Support */}
      <section id="resources" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Resources</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to implement and master WiredLeap
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {resources.map((resource, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  <Badge variant="outline">{resource.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
            <p className="text-muted-foreground mb-8">Our team of experts is here to help you every step of the way</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/support">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="mr-2 h-4 w-4" />
              Ready to Transform Public Safety?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Future of Law Enforcement Today
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Don&apos;t let another crisis catch you unprepared. Start your free trial today and 
              experience the power of real-time intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/auth/signup">
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Free 30-Day Trial
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="/demo">
                  <Video className="mr-2 h-5 w-5" />
                  Watch Product Demo
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Setup in under 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>24/7 support included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="border-t py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-8 w-8 text-primary" />
                <span className="font-bold text-2xl">WiredLeap</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Safe City Intelligence Platform for modern law enforcement. 
                Empowering police departments with AI-driven insights and real-time monitoring.
              </p>
              <div className="flex gap-4">
                <Button asChild size="sm" variant="ghost">
                  <Link href="/twitter">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link href="/linkedin">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link href="/github">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div><Link href="/features" className="hover:text-foreground">Features</Link></div>
                <div><Link href="/integrations" className="hover:text-foreground">Integrations</Link></div>
                <div><Link href="/security" className="hover:text-foreground">Security</Link></div>
                <div><Link href="/api" className="hover:text-foreground">API Docs</Link></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div><Link href="/police" className="hover:text-foreground">Police Departments</Link></div>
                <div><Link href="/traffic" className="hover:text-foreground">Traffic Management</Link></div>
                <div><Link href="/municipal" className="hover:text-foreground">Municipal Services</Link></div>
                <div><Link href="/enterprise" className="hover:text-foreground">Enterprise</Link></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div><Link href="/help" className="hover:text-foreground">Help Center</Link></div>
                <div><Link href="/training" className="hover:text-foreground">Training</Link></div>
                <div><Link href="/status" className="hover:text-foreground">System Status</Link></div>
                <div><Link href="/contact" className="hover:text-foreground">Contact Us</Link></div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 WiredLeap Technologies. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-foreground">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
