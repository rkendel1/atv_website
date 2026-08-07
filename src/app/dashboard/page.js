'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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
      <path
        d="M24 4L8 10v10c0 10 16 14 16 14s16-4 16-14v-10L24 4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(24, 24)">
        <circle cx="0" cy="-2" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="-3" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="-1" y1="4" x2="-1" y2="6" stroke="currentColor" strokeWidth="1" />
      </g>
    </svg>
  );
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin mb-4">
            <ATVLogo className="w-12 h-12 text-[var(--primary)]" />
          </div>
          <p className="text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/');
    return null;
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'agents', label: 'Agents', icon: '🤖' },
    { id: 'credentials', label: 'Credentials', icon: '🔐' },
    { id: 'policies', label: 'Policies', icon: '⚖️' },
    { id: 'audit', label: 'Audit Log', icon: '📋' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold hover:opacity-80">
            <ATVLogo className="w-8 h-8 text-[var(--primary)]" />
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent-light)] bg-clip-text text-transparent">
              ATV
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-400">
              {session?.user?.email || session?.user?.name}
            </div>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 rounded-lg border border-[var(--primary)] text-[var(--primary)] text-sm hover:bg-[var(--primary)]/10 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="fixed left-0 top-20 bottom-0 w-64 border-r border-[var(--border)] p-6 bg-[var(--surface)]/50 overflow-y-auto">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/50'
                    : 'text-gray-400 hover:text-white hover:bg-[var(--border)]'
                }`}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 ml-64 p-8">
          {activeTab === 'overview' && <OverviewTab session={session} />}
          {activeTab === 'agents' && <AgentsTab />}
          {activeTab === 'credentials' && <CredentialsTab />}
          {activeTab === 'policies' && <PoliciesTab />}
          {activeTab === 'audit' && <AuditTab />}
          {activeTab === 'settings' && <SettingsTab session={session} />}
        </main>
      </div>
    </div>
  );
}

function OverviewTab({ session }) {
  const stats = [
    { label: 'Active Agents', value: '12', icon: '🤖' },
    { label: 'Secure Credentials', value: '48', icon: '🔐' },
    { label: 'Policies Enforced', value: '7', icon: '⚖️' },
    { label: 'Audit Events', value: '1,240', icon: '📋' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 hover:border-[var(--primary)]/50 transition-all">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
            <div className="text-2xl font-bold mt-2">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'API key rotated', timestamp: '2 hours ago', icon: '🔑' },
              { action: 'Policy updated', timestamp: '1 day ago', icon: '📋' },
              { action: 'New agent connected', timestamp: '3 days ago', icon: '🤖' },
              { action: 'Credentials revoked', timestamp: '1 week ago', icon: '🛑' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-[var(--border)]/50 bg-[var(--surface)]/30">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.action}</span>
                </div>
                <span className="text-xs text-gray-500">{item.timestamp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10">
          <h2 className="text-lg font-semibold mb-4">Trust Score</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl font-bold text-[var(--primary)] mb-2">98</div>
            <div className="text-gray-400 text-sm text-center mb-6">
              Your trust score is excellent
            </div>
            <div className="w-full bg-[var(--border)] rounded-full h-2">
              <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] h-2 rounded-full" style={{ width: '98%' }} />
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span> Identity Verified
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span> Permissions Valid
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span> Policies Compliant
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span> Provenance Verified
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentsTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Connected Agents</h1>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-semibold hover:shadow-lg transition-all">
          Connect Agent
        </button>
      </div>

      <div className="space-y-4">
        {[
          { name: 'Claude Desktop', status: 'connected', version: 'v1.2.3' },
          { name: 'VS Code Extension', status: 'connected', version: 'v2.1.0' },
          { name: 'Cursor', status: 'connected', version: 'v1.0.5' },
        ].map((agent, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">{agent.name}</h3>
              <p className="text-sm text-gray-400">v{agent.version}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] text-xs font-semibold">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                {agent.status}
              </span>
              <button className="text-gray-400 hover:text-[var(--primary)] transition-colors">⋮</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CredentialsTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Secure Credentials</h1>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-semibold hover:shadow-lg transition-all">
          Add Credential
        </button>
      </div>

      <div className="space-y-4">
        {[
          { name: 'GitHub API Token', type: 'API Key', lastUsed: '2 hours ago' },
          { name: 'AWS Access Key', type: 'Cloud', lastUsed: '1 day ago' },
          { name: 'Database Password', type: 'Password', lastUsed: 'Never' },
        ].map((cred, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">{cred.name}</h3>
                <p className="text-sm text-gray-400">{cred.type}</p>
              </div>
              <button className="text-gray-400 hover:text-[var(--primary)] transition-colors">⋮</button>
            </div>
            <div className="text-xs text-gray-500">Last used: {cred.lastUsed}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PoliciesTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Access Policies</h1>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-semibold hover:shadow-lg transition-all">
          Create Policy
        </button>
      </div>

      <div className="space-y-4">
        {[
          { name: 'Production Access', agents: 3, status: 'active' },
          { name: 'Data Export', agents: 1, status: 'active' },
          { name: 'Staging Access', agents: 5, status: 'inactive' },
        ].map((policy, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-2">{policy.name}</h3>
                <p className="text-sm text-gray-400">{policy.agents} agents</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                policy.status === 'active'
                  ? 'bg-[var(--accent)]/20 text-[var(--accent)]'
                  : 'bg-gray-500/20 text-gray-400'
              }`}>
                {policy.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuditTab() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Audit Log</h1>

      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--surface)]/50">
              <th className="px-6 py-4 text-left font-semibold">Event</th>
              <th className="px-6 py-4 text-left font-semibold">Agent</th>
              <th className="px-6 py-4 text-left font-semibold">Timestamp</th>
              <th className="px-6 py-4 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { event: 'Credential Access', agent: 'Claude Desktop', time: '2024-08-07 14:32', status: 'allowed' },
              { event: 'Policy Violation', agent: 'VS Code', time: '2024-08-07 13:15', status: 'denied' },
              { event: 'API Key Rotation', agent: 'System', time: '2024-08-07 10:00', status: 'completed' },
            ].map((entry, idx) => (
              <tr key={idx} className="border-b border-[var(--border)] hover:bg-[var(--surface)]/30 transition-colors">
                <td className="px-6 py-4">{entry.event}</td>
                <td className="px-6 py-4 text-gray-400">{entry.agent}</td>
                <td className="px-6 py-4 text-gray-400">{entry.time}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    entry.status === 'allowed' ? 'bg-[var(--accent)]/20 text-[var(--accent)]' :
                    entry.status === 'denied' ? 'bg-red-500/20 text-red-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SettingsTab({ session }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="space-y-6 max-w-2xl">
        <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50">
          <h2 className="text-lg font-semibold mb-4">Account</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <div className="mt-2 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-gray-300">
                {session?.user?.email || 'Not set'}
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <div className="mt-2 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-gray-300">
                {session?.user?.name || 'Not set'}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50">
          <h2 className="text-lg font-semibold mb-4">API Keys</h2>
          <p className="text-sm text-gray-400 mb-4">Manage your API keys for programmatic access.</p>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black font-semibold hover:shadow-lg transition-all">
            Generate New Key
          </button>
        </div>

        <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5">
          <h2 className="text-lg font-semibold mb-4 text-red-400">Danger Zone</h2>
          <p className="text-sm text-gray-400 mb-4">Delete your account and all associated data.</p>
          <button className="px-4 py-2 rounded-lg border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-all">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
