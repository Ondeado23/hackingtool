export const categories = [
  {
    id: 1,
    name: 'Anonymously Hiding',
    icon: '🔐',
    description: 'Tools for anonymous browsing and privacy protection',
    tools: [
      { name: 'Tor Browser', description: 'Anonymous browsing network' },
      { name: 'Proxychains', description: 'Chain multiple proxies' },
      { name: 'VPN Tools', description: 'Virtual Private Network utilities' },
    ],
  },
  {
    id: 2,
    name: 'Information Gathering',
    icon: '🔍',
    description: 'Reconnaissance and information collection tools',
    tools: [
      { name: 'Whois', description: 'Domain information lookup' },
      { name: 'Nmap', description: 'Network scanning and mapping' },
      { name: 'Shodan', description: 'Search engine for internet devices' },
    ],
  },
  {
    id: 3,
    name: 'SQL Injection',
    icon: '💉',
    description: 'SQL injection attack tools',
    tools: [
      { name: 'SQLMap', description: 'SQL injection detection and exploitation' },
      { name: 'SQL Fuzzer', description: 'Fuzz SQL databases' },
    ],
  },
  {
    id: 4,
    name: 'Phishing Attack',
    icon: '🎣',
    description: 'Phishing and social engineering tools',
    tools: [
      { name: 'Phishing Generator', description: 'Create phishing pages' },
      { name: 'Email Spoofing', description: 'Spoof email addresses' },
    ],
  },
  {
    id: 5,
    name: 'Web Attack',
    icon: '🌐',
    description: 'Web application attack tools',
    tools: [
      { name: 'BurpSuite', description: 'Web vulnerability scanner' },
      { name: 'OWASP ZAP', description: 'Web app security scanner' },
    ],
  },
  {
    id: 6,
    name: 'Exploit Framework',
    icon: '💣',
    description: 'Exploit development and delivery',
    tools: [
      { name: 'Metasploit', description: 'Exploitation framework' },
      { name: 'Shellcode Generator', description: 'Create payload shellcode' },
    ],
  },
  {
    id: 7,
    name: 'DDOS Attack',
    icon: '⚡',
    description: 'Distributed Denial of Service tools',
    tools: [
      { name: 'LOIC', description: 'Low Orbit Ion Cannon DDOS tool' },
      { name: 'Hping3', description: 'Network packet tool' },
    ],
  },
  {
    id: 8,
    name: 'XSS Attack',
    icon: '⚠️',
    description: 'Cross-Site Scripting attack tools',
    tools: [
      { name: 'XSS Filter Evasion', description: 'Bypass XSS filters' },
      { name: 'BeEF', description: 'Browser exploitation framework' },
    ],
  },
  {
    id: 9,
    name: 'Active Directory',
    icon: '🔑',
    description: 'Active Directory attack tools',
    tools: [
      { name: 'Mimikatz', description: 'Credential dumping tool' },
      { name: 'BloodHound', description: 'AD attack path mapping' },
    ],
  },
  {
    id: 10,
    name: 'Cloud Security',
    icon: '☁️',
    description: 'Cloud platform security testing',
    tools: [
      { name: 'AWS Security', description: 'AWS security scanner' },
      { name: 'Azure Scanner', description: 'Azure security tools' },
    ],
  },
  {
    id: 11,
    name: 'Cryptography',
    icon: '🔒',
    description: 'Cryptographic attack and analysis tools',
    tools: [
      { name: 'Hashcat', description: 'Password cracking utility' },
      { name: 'John the Ripper', description: 'Password cracking tool' },
    ],
  },
  {
    id: 12,
    name: 'Steganography',
    icon: '👁️',
    description: 'Hidden data extraction and embedding',
    tools: [
      { name: 'Steghide', description: 'Hide data in media files' },
      { name: 'OutGuess', description: 'Steganographic tool' },
    ],
  },
  {
    id: 13,
    name: 'Wireless Attack',
    icon: '📡',
    description: 'Wireless network penetration testing',
    tools: [
      { name: 'Aircrack-ng', description: 'WiFi security auditing' },
      { name: 'Hashcat', description: 'GPU-accelerated cracking' },
    ],
  },
  {
    id: 14,
    name: 'Malware Analysis',
    icon: '🦠',
    description: 'Malware detection and analysis',
    tools: [
      { name: 'ClamAV', description: 'Antivirus engine' },
      { name: 'Yara', description: 'Malware classification tool' },
    ],
  },
  {
    id: 15,
    name: 'Reverse Engineering',
    icon: '🔬',
    description: 'Binary analysis and reverse engineering',
    tools: [
      { name: 'IDA Pro', description: 'Disassembler and debugger' },
      { name: 'Ghidra', description: 'NSA reverse engineering tool' },
    ],
  },
  {
    id: 16,
    name: 'Social Engineering',
    icon: '🎭',
    description: 'Social engineering and pretexting tools',
    tools: [
      { name: 'Social Engineer Toolkit', description: 'SET framework' },
      { name: 'Pretext', description: 'Pretext scenario generation' },
    ],
  },
  {
    id: 17,
    name: 'Forensics',
    icon: '🔎',
    description: 'Digital forensics and incident response',
    tools: [
      { name: 'Volatility', description: 'Memory forensics' },
      { name: 'EnCase', description: 'Digital forensics platform' },
    ],
  },
  {
    id: 18,
    name: 'Exploitation',
    icon: '🚀',
    description: 'General exploitation tools',
    tools: [
      { name: 'RCE Tools', description: 'Remote code execution' },
      { name: 'Payload Generator', description: 'Crafted payload generation' },
    ],
  },
  {
    id: 19,
    name: 'Network Tools',
    icon: '🌍',
    description: 'General network utilities',
    tools: [
      { name: 'Wireshark', description: 'Network packet analyzer' },
      { name: 'Tcpdump', description: 'Packet capture utility' },
    ],
  },
  {
    id: 20,
    name: 'Documentation',
    icon: '📚',
    description: 'Guides and references',
    tools: [
      { name: 'Payloads', description: 'Payload database' },
      { name: 'Checklists', description: 'Penetration test checklists' },
    ],
  },
]

export function getAllTools() {
  const all = []
  categories.forEach((category) => {
    category.tools.forEach((tool) => {
      all.push({
        ...tool,
        category: category.name,
        categoryId: category.id,
        tags: generateTags(tool.name, category.name),
      })
    })
  })
  return all
}

function generateTags(toolName, categoryName) {
  const tags = []
  const name = toolName.toLowerCase()
  const category = categoryName.toLowerCase()

  if (category.includes('sql')) tags.push('sql')
  if (category.includes('web')) tags.push('web')
  if (category.includes('ddos')) tags.push('ddos')
  if (category.includes('wireless')) tags.push('wireless')
  if (category.includes('cloud')) tags.push('cloud')
  if (category.includes('active directory')) tags.push('ad')
  if (category.includes('malware')) tags.push('malware')
  if (category.includes('forensics')) tags.push('forensics')
  if (name.includes('nmap') || name.includes('scan')) tags.push('recon')
  if (name.includes('crack') || name.includes('hash')) tags.push('crypto')

  return tags
}
