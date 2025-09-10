"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { 
  Shield, Eye, EyeOff, Mail, Lock, AlertCircle, 
  CheckCircle, Loader2, Smartphone, Key, 
  Chrome, Github, Building2, UserCheck,
  ArrowRight, Sparkles, Zap
} from "lucide-react"
import { 
  pageTransition, 
  staggerContainer, 
  staggerItem, 
  fadeInUp, 
  smoothTransition,
  buttonHover,
  buttonTap,
  pulseGlow
} from "@/lib/animations"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedCard } from "@/components/animated-card"
import { PageTransition } from "@/components/page-transition"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [twoFactorCode, setTwoFactorCode] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date())
  const router = useRouter()

  // Update time every second for Shadi Sen brand compliance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process with 2FA
    setTimeout(() => {
      if (email.includes("admin") || email.includes("demo")) {
        setTwoFactorEnabled(true)
        setShowTwoFactor(true)
        setIsLoading(false)
      } else {
        router.push("/dashboards/control-room")
      }
    }, 1500)
  }

  const handleTwoFactor = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      router.push("/dashboards/control-room")
    }, 1000)
  }

  const handleOAuthLogin = (provider: string) => {
    setIsLoading(true)
    // Simulate OAuth login
    setTimeout(() => {
      router.push("/dashboards/control-room")
    }, 2000)
  }

  const oauthProviders = [
    { name: "Google", icon: Chrome, color: "hover:bg-[#2b77ad]/10" },
    { name: "Microsoft", icon: Building2, color: "hover:bg-[#2b77ad]/10" },
    { name: "GitHub", icon: Github, color: "hover:bg-[#2b77ad]/10" },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Branding & Features */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-muted/50">
        <div className="relative z-10 p-12 flex flex-col justify-center">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center space-x-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <span className="font-bold text-3xl">
                WiredLeap
              </span>
            </Link>
            <h1 className="text-4xl font-bold mb-4">
              Neural Intelligence
              <br />
              <span className="text-primary">
                Beyond Tomorrow
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Quantum-powered predictive intelligence that sees threats before they emerge.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: Zap, text: "Real-time threat detection", color: "text-primary" },
              { icon: UserCheck, text: "AI-powered analytics", color: "text-primary" },
              { icon: Shield, text: "Enterprise-grade security", color: "text-primary" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 animate-in slide-in-from-left duration-500" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <span className="text-lg font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-card rounded-2xl border">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-semibold">Live Statistics</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <div className="text-2xl font-bold text-primary">1B+</div>
                <div className="text-muted-foreground">Data Points</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">99.7%</div>
                <div className="text-muted-foreground">Accuracy</div>
              </div>
            </div>
            {/* Shadi Sen Brand Compliant Time Display */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">System Time</span>
                <div className="flex items-center gap-2">
                  <div className="font-mono text-lg font-bold">
                    <span className="text-primary">
                      {String(currentTime.getHours()).padStart(2, '0')}
                    </span>
                    <span className="text-primary animate-pulse">:</span>
                    <span className="text-primary">
                      {String(currentTime.getMinutes()).padStart(2, '0')}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">
                      {String(currentTime.getSeconds()).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">WiredLeap</span>
            </Link>
          </div>

          {/* Login Form */}
          <Card className="bg-card border shadow-lg">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Sign in to your Safe City Intelligence Platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!showTwoFactor ? (
                <>
                  {/* OAuth Providers */}
                  <div className="space-y-3">
                    {oauthProviders.map((provider, i) => (
                      <Button
                        key={provider.name}
                        variant="outline"
                        className="w-full h-12 justify-start gap-3 transition-transform"
                        onClick={() => handleOAuthLogin(provider.name)}
                        disabled={isLoading}
                      >
                        <provider.icon className="h-5 w-5" />
                        Continue with {provider.name}
                      </Button>
                    ))}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  {/* Email/Password Form */}
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="officer@police.gov.in"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 pr-12 h-12"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          checked={rememberMe}
                          onCheckedChange={(checked) => setRememberMe(checked === true)}
                        />
                        <Label htmlFor="remember" className="text-sm">Remember me</Label>
                      </div>
                      <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-base font-medium"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing in...
                        </>
                      ) : (
                        <>
                          Sign In
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                /* Two-Factor Authentication */
                <form onSubmit={handleTwoFactor} className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Enter the 6-digit code from your authenticator app
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="2fa" className="text-sm font-medium">Verification Code</Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="2fa"
                        type="text"
                        placeholder="000000"
                        value={twoFactorCode}
                        onChange={(e) => setTwoFactorCode(e.target.value)}
                        className="pl-10 h-12 text-center text-lg tracking-widest"
                        maxLength={6}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12"
                    disabled={isLoading || twoFactorCode.length !== 6}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Verify & Sign In"
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full"
                    onClick={() => setShowTwoFactor(false)}
                  >
                    Back to login
                  </Button>
                </form>
              )}

              <div className="text-center text-sm">
                <span className="text-muted-foreground">Don&apos;t have an account? </span>
                <Link href="/auth/signup" className="text-[#1a365d] dark:text-[#4a90c2] hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Demo Credentials */}
          <Card className="border-dashed border-2 bg-gradient-to-r from-[#4a90c2]/5 to-[#2b77ad]/10 dark:from-[#1a365d]/20 dark:to-[#2b77ad]/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary" className="bg-[#2b77ad]/10 text-[#1a365d] dark:text-[#4a90c2]">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Demo Access
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Try these demo accounts to explore the platform
                </p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="font-medium text-[#1a365d] dark:text-[#4a90c2]">Control Room Admin</div>
                    <div className="text-muted-foreground">admin@wiredleap.com</div>
                    <div className="text-xs text-muted-foreground mt-1">Full platform access</div>
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="font-medium text-[#1a365d] dark:text-[#4a90c2]">Traffic Police</div>
                    <div className="text-muted-foreground">traffic@police.gov.in</div>
                    <div className="text-xs text-muted-foreground mt-1">Traffic monitoring focus</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Enterprise-grade security</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Protected by 256-bit encryption • SOC 2 compliant • GDPR ready
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}