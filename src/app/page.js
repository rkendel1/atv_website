'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';

function ATVLogo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield */}
      <path
        d="M24 4L8 10v10c0 10 16 14 16 14s16-4 16-14v-10L24 4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lock inside shield */}
      <g transform="translate(24, 24)">
        <circle cx="0" cy="-2" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="-3" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="-1" y1="4" x2="-1" y2="6" stroke="currentColor" strokeWidth="1" />
      </g>
    </svg>
  );
}

function NavigationBar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold hover:opacity-80">
          <ATVLogo className="w-8 h-8 text-[var(--primary)]" />
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent-light)] bg-clip-text text-transparent">
            ATV
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm hover:text-[var(--primary)] transition-colors">
            Features
          </a>
          <a href="https://docs.agenttrustvault.com" className="text-sm hover:text-[var(--primary)] transition-colors">
            Docs
          </a>
          {session ? (
            <>
              <Link href="/dashboard" className="text-sm hover:text-[var(--primary)] transition-colors">
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 rounded-lg border border-[var(--primary)] text-[var(--primary)] text-sm hover:bg-[var(--primary)]/10 transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => signIn()}
                className="text-sm hover:text-[var(--primary)] transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => signIn()}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-semibold text-sm hover:shadow-lg hover:shadow-[var(--primary)]/50 transition-all"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const { data: session } = useSession();

  return (
    <section className="min-h-screen relative overflow-hidden pt-24">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-br from-[var(--primary)]/20 via-transparent to-[var(--accent)]/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 -right-1/2 w-full h-full bg-gradient-to-tl from-[var(--primary)]/20 via-transparent to-[var(--accent)]/20 rounded-full blur-3xl opacity-50 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
        {/* Left content */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 w-fit mb-6 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/50">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="text-sm text-[var(--accent)]">Trusted by AI teams worldwide</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="block">Trust Every</span>
            <span className="block bg-gradient-to-r from-[var(--primary)] via-[var(--accent-light)] to-[var(--primary)] bg-clip-text text-transparent">
              Agent.
            </span>
            <span className="block">Expose No Secrets.</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
            The secure foundation for trustworthy AI agents. Verify identities, govern permissions,
            protect credentials, and maintain complete audit trails without exposing sensitive information.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => signIn()}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/50 transition-all"
            >
              Start Free
            </button>
            <button className="px-8 py-3 rounded-lg border border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)]/10 transition-all">
              Book Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm border-t border-[var(--border)] pt-8">
            <div>
              <div className="text-2xl font-bold text-[var(--primary)]">98</div>
              <div className="text-gray-400">Trust Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--accent)]">4</div>
              <div className="text-gray-400">Verified Checks</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--primary)]">∞</div>
              <div className="text-gray-400">Agent Capacity</div>
            </div>
          </div>
        </div>

        {/* Right - Vault visualization */}
        <div className="relative h-full min-h-[500px] flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-md">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-3xl blur-2xl" />

            {/* Vault card */}
            <div className="relative h-full rounded-3xl border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--surface)] to-[var(--surface)]/50 p-8 flex flex-col justify-between overflow-hidden">
              {/* Background elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary)]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--accent)]/10 rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-24 h-24 rounded-2xl border-2 border-[var(--primary)]/50 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path d="M24 4L8 10v10c0 10 16 14 16 14s16-4 16-14v-10L24 4z" stroke="url(#grad)" strokeWidth="2" />
                      <circle cx="24" cy="24" r="6" fill="url(#grad)" />
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--primary)" />
                          <stop offset="100%" stopColor="var(--accent)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <span className="text-sm text-gray-300">Identity Verified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <span className="text-sm text-gray-300">Permissions Valid</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <span className="text-sm text-gray-300">Policies Compliant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <span className="text-sm text-gray-300">Provenance Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Verify',
      description: 'Establish verifiable agent identity',
      icon: '✓',
    },
    {
      title: 'Secure',
      description: 'Protect credentials and secrets',
      icon: '🔒',
    },
    {
      title: 'Govern',
      description: 'Enforce permissions and policies',
      icon: '⚖️',
    },
    {
      title: 'Prove',
      description: 'Maintain provenance and audit trails',
      icon: '📊',
    },
  ];

  return (
    <section id="features" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Built for Enterprise Trust</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Four pillars of agent trust. One platform for secure, governed AI collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 hover:border-[var(--primary)]/50 hover:bg-[var(--surface)]/80 transition-all group"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="rounded-2xl border border-[var(--primary)]/20 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to secure your agents?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Deploy ATV in minutes. Free tier includes everything you need to get started.
        </p>
        <button
          onClick={() => signIn()}
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/50 transition-all"
        >
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen bg-[var(--background)]">
        <HeroSection />
        <FeaturesSection />
        <CTASection />

        <footer className="border-t border-[var(--border)] py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4 font-bold">
                  <ATVLogo className="w-6 h-6 text-[var(--primary)]" />
                  ATV
                </Link>
                <p className="text-gray-400 text-sm">Trust Every Agent. Expose No Secrets.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-[var(--primary)]">Features</a></li>
                  <li><a href="#" className="hover:text-[var(--primary)]">Pricing</a></li>
                  <li><a href="#" className="hover:text-[var(--primary)]">Security</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Developers</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-[var(--primary)]">Documentation</a></li>
                  <li><a href="#" className="hover:text-[var(--primary)]">API Reference</a></li>
                  <li><a href="#" className="hover:text-[var(--primary)]">GitHub</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-[var(--primary)]">About</a></li>
                  <li><a href="#" className="hover:text-[var(--primary)]">Blog</a></li>
                  <li><a href="#" className="hover:text-[var(--primary)]">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[var(--border)] pt-8 flex items-center justify-between text-gray-400 text-sm">
              <p>&copy; 2024 Agent Trust Vault. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[var(--primary)]">Privacy</a>
                <a href="#" className="hover:text-[var(--primary)]">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
