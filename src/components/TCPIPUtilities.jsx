import { useState } from 'react';
import { ChevronDown, ChevronRight, Network, Layers, Globe, Link } from 'lucide-react';

const TCPIPUtilities = () => {
  const [expandedSections, setExpandedSections] = useState({
    'link': false,
    'internet': false,
    'transport': false,
    'application': false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      id: 'link',
      title: 'Layer 2: Link Layer Protocols',
      description: 'Physical transmission of data and MAC address resolution',
      icon: <Link className="w-5 h-5" />,
      color: 'bg-red-500',
      protocols: [
        {
          name: 'ARP (Address Resolution Protocol)',
          utilities: [
            { command: 'arp', description: 'Displays and modifies the system\'s ARP cache. Useful for diagnosing IP-to-MAC resolution issues.', platforms: 'Unix-like, Windows' },
            { command: 'arping', description: 'Sends ARP requests to a specific host to check if it\'s alive and to get its MAC address. Similar to ping but at the link layer.', platforms: 'Linux' },
            { command: 'arp-scan', description: 'A command-line tool that uses ARP to discover hosts on the local network.', platforms: 'Linux, Third-party' },
            { command: 'Get-NetNeighbor', description: 'A PowerShell cmdlet that displays the ARP cache (neighbor cache).', platforms: 'Windows' },
            { command: 'rarpd', description: 'A daemon for the Reverse Address Resolution Protocol, used by diskless clients to obtain an IP address.', platforms: 'Unix-like' }
          ]
        }
      ]
    },
    {
      id: 'internet',
      title: 'Layer 3: Internet Layer Protocols',
      description: 'Logical addressing and routing of packets across networks',
      icon: <Layers className="w-5 h-5" />,
      color: 'bg-orange-500',
      protocols: [
        {
          name: 'ICMP (Internet Control Message Protocol)',
          utilities: [
            { command: 'ping', description: 'Sends ICMP Echo Request packets to a host to test connectivity. The most fundamental network utility.', platforms: 'Unix-like, Windows' },
            { command: 'traceroute / tracert', description: 'Traces the path that packets take to a destination host, showing each hop along the way. Uses ICMP Time Exceeded messages.', platforms: 'Unix-like (traceroute), Windows (tracert)' },
            { command: 'pathping', description: 'A more advanced version of traceroute that also provides information on network latency and packet loss at each hop.', platforms: 'Windows' },
            { command: 'mtr', description: 'Combines the functionality of ping and traceroute into a single, continuously updated diagnostic tool.', platforms: 'Linux, Third-party' },
            { command: 'hping3', description: 'A powerful packet crafting tool that can send custom ICMP, TCP, UDP, and RAW-IP packets. Often used for advanced network testing and security auditing.', platforms: 'Linux, Third-party' }
          ]
        },
        {
          name: 'IP (Internet Protocol) & Routing',
          utilities: [
            { command: 'ifconfig', description: '(Legacy) Configures network interfaces, including IP addresses, netmasks, and broadcast addresses.', platforms: 'Unix-like' },
            { command: 'ip', description: '(Modern) A powerful and versatile tool for managing network interfaces, IP addresses, routing tables, and ARP cache. Replaces ifconfig, route, and arp.', platforms: 'Linux' },
            { command: 'ipconfig', description: 'Displays the current TCP/IP network configuration and can be used to release and renew DHCP leases.', platforms: 'Windows' },
            { command: 'route', description: 'Displays and manipulates the IP routing table.', platforms: 'Unix-like, Windows' },
            { command: 'netsh', description: 'A command-line scripting utility that allows you to configure and display the status of various network communications server roles and components.', platforms: 'Windows' },
            { command: 'bird / quagga / frr', description: 'Routing software suites that implement various routing protocols like BGP, OSPF, and RIP. They allow a machine to function as a router.', platforms: 'Linux, Third-party' },
            { command: 'vtysh', description: 'The integrated shell for Quagga and FRRouting, providing a Cisco-like interface for configuring routing protocols.', platforms: 'Linux, Third-party' }
          ]
        }
      ]
    },
    {
      id: 'transport',
      title: 'Layer 4: Transport Layer Protocols',
      description: 'End-to-end communication and data delivery',
      icon: <Network className="w-5 h-5" />,
      color: 'bg-purple-500',
      protocols: [
        {
          name: 'TCP & UDP (Transmission Control Protocol & User Datagram Protocol)',
          utilities: [
            { command: 'netstat', description: 'Displays active network connections, routing tables, interface statistics, and more. Essential for seeing what ports are open and what connections are established.', platforms: 'Unix-like, Windows' },
            { command: 'ss', description: 'A modern replacement for netstat that is faster and provides more detailed information about network sockets.', platforms: 'Linux' },
            { command: 'tcpdump', description: 'A powerful command-line packet analyzer that allows you to capture and inspect network traffic on an interface.', platforms: 'Linux, Unix-like, Windows (via WinPcap)' },
            { command: 'Wireshark', description: 'The world\'s foremost graphical network protocol analyzer. It lets you see what\'s happening on your network at a microscopic level.', platforms: 'Windows, Linux, macOS (Third-party)' },
            { command: 'nmap', description: 'A powerful network exploration tool and security scanner. Used to discover hosts and services on a network, thus creating a "map" of the network.', platforms: 'Linux, Windows, macOS (Third-party)' },
            { command: 'netcat / nc', description: 'The "Swiss-army knife" of networking. It can read and write data across network connections using TCP or UDP. Useful for port scanning, file transfer, and as a backdoor.', platforms: 'Unix-like, Third-party' },
            { command: 'telnet', description: 'A simple, text-based tool for connecting to a remote host on a specific port. Often used to test if a TCP port is open and listening.', platforms: 'Unix-like, Windows' },
            { command: 'lsof', description: 'Lists open files. With the -i option, it can show which processes are using which network sockets.', platforms: 'Unix-like' },
            { command: 'socat', description: 'A more advanced version of netcat that can establish bidirectional data transfers between two locations.', platforms: 'Linux, Third-party' }
          ]
        }
      ]
    },
    {
      id: 'application',
      title: 'Layer 7: Application Layer Protocols',
      description: 'Services for user applications',
      icon: <Globe className="w-5 h-5" />,
      color: 'bg-green-500',
      protocols: [
        {
          name: 'DNS (Domain Name System)',
          utilities: [
            { command: 'nslookup', description: 'Queries DNS servers to find domain name or IP address mappings.', platforms: 'Unix-like, Windows' },
            { command: 'dig', description: '(Domain Information Groper) A more advanced and flexible tool for querying DNS servers. Provides detailed information about DNS records.', platforms: 'Unix-like, Third-party on Windows' },
            { command: 'host', description: 'A simple utility for performing DNS lookups.', platforms: 'Unix-like' },
            { command: 'dnsmasq', description: 'A lightweight, easy-to-configure DNS forwarder and DHCP server.', platforms: 'Linux, Third-party' },
            { command: 'bind-utils', description: 'A collection of utilities for the BIND DNS software, including dig and nslookup.', platforms: 'Linux' }
          ]
        },
        {
          name: 'DHCP (Dynamic Host Configuration Protocol)',
          utilities: [
            { command: 'dhclient', description: 'A DHCP client that can be used to get an IP address from a DHCP server.', platforms: 'Unix-like' },
            { command: 'ipconfig (/release, /renew)', description: 'The Windows utility for releasing and renewing DHCP leases.', platforms: 'Windows' },
            { command: 'dhcpd', description: 'The ISC DHCP server daemon.', platforms: 'Linux' },
            { command: 'dhcrelay', description: 'A DHCP relay agent that forwards DHCP requests between subnets.', platforms: 'Linux' }
          ]
        },
        {
          name: 'FTP/TFTP (File Transfer Protocol)',
          utilities: [
            { command: 'ftp', description: 'A command-line client for connecting to FTP servers to upload and download files.', platforms: 'Unix-like, Windows' },
            { command: 'tftp', description: 'A command-line client for the Trivial File Transfer Protocol, a simplified version of FTP often used for network booting and device configuration.', platforms: 'Unix-like, Windows' },
            { command: 'lftp', description: 'A sophisticated command-line file transfer program supporting FTP, FTPS, SFTP, HTTP, and more.', platforms: 'Linux, Third-party' },
            { command: 'FileZilla', description: 'A popular graphical FTP, FTPS, and SFTP client.', platforms: 'Windows, Linux, macOS (Third-party)' }
          ]
        },
        {
          name: 'HTTP/HTTPS (Hypertext Transfer Protocol)',
          utilities: [
            { command: 'curl', description: 'A powerful command-line tool for transferring data with URLs. Supports a wide range of protocols, including HTTP, HTTPS, FTP, and more.', platforms: 'Unix-like, Windows (built-in in recent versions)' },
            { command: 'wget', description: 'A command-line utility for downloading files from the web. Supports HTTP, HTTPS, and FTP.', platforms: 'Unix-like, Third-party on Windows' },
            { command: 'httpie', description: 'A user-friendly command-line HTTP client that provides a more intuitive interface than curl.', platforms: 'Third-party' },
            { command: 'ab (Apache Bench)', description: 'A command-line tool for benchmarking the performance of HTTP servers.', platforms: 'Linux, Third-party' },
            { command: 'openssl s_client', description: 'A command-line tool for connecting to SSL/TLS servers, including HTTPS servers, to inspect certificates and test security.', platforms: 'Unix-like, Third-party' }
          ]
        },
        {
          name: 'Email Protocols (SMTP, POP3, IMAP)',
          utilities: [
            { command: 'mail / mailx', description: 'A command-line utility for sending and reading email.', platforms: 'Unix-like' },
            { command: 'mutt / alpine', description: 'Text-based email clients that can use SMTP, POP3, and IMAP.', platforms: 'Unix-like' },
            { command: 'swaks', description: '(Swiss Army Knife for SMTP) A powerful and flexible SMTP testing tool.', platforms: 'Linux, Third-party' },
            { command: 'telnet', description: 'Can be used to manually connect to SMTP, POP3, and IMAP servers to test them.', platforms: 'Unix-like, Windows' }
          ]
        },
        {
          name: 'NTP (Network Time Protocol)',
          utilities: [
            { command: 'ntpdate', description: '(Legacy) A client for setting the system time from an NTP server.', platforms: 'Unix-like' },
            { command: 'ntpd', description: 'The NTP daemon that continuously adjusts the system time.', platforms: 'Unix-like' },
            { command: 'chrony', description: 'A modern and more accurate NTP implementation that is now the default on many Linux distributions.', platforms: 'Linux' },
            { command: 'w32tm', description: 'The Windows Time service command-line tool, used to configure and diagnose time synchronization.', platforms: 'Windows' }
          ]
        },
        {
          name: 'SNMP (Simple Network Management Protocol)',
          utilities: [
            { command: 'snmpwalk', description: 'A command-line tool that retrieves a subtree of management values from an SNMP agent.', platforms: 'Linux, Third-party' },
            { command: 'snmpget', description: 'A command-line tool that retrieves a specific variable from an SNMP agent.', platforms: 'Linux, Third-party' },
            { command: 'snmpset', description: 'A command-line tool that sets the value of a variable on an SNMP agent.', platforms: 'Linux, Third-party' },
            { command: 'snmptrap', description: 'A command-line tool for sending SNMP trap messages.', platforms: 'Linux, Third-party' },
            { command: 'Nagios / Zabbix / PRTG', description: 'Comprehensive network monitoring systems that heavily utilize SNMP to monitor the health and performance of network devices.', platforms: 'Third-party' }
          ]
        }
      ]
    }
  ];

  const getTotalUtilities = () => {
    return sections.reduce((total, section) => {
      return total + section.protocols.reduce((sectionTotal, protocol) => {
        return sectionTotal + protocol.utilities.length;
      }, 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-medium text-gray-900 mb-2">TCP/IP Network Utilities</h1>
          <p className="text-lg text-gray-600">Comprehensive reference for network troubleshooting and management tools</p>
          <p className="text-sm text-gray-500 mt-2">{getTotalUtilities()} utilities across {sections.length} protocol layers</p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div 
                className="p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`${section.color} p-2 rounded-lg text-white`}>
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-medium text-gray-900">{section.title}</h2>
                      <p className="text-sm text-gray-500">{section.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {section.protocols.reduce((total, protocol) => total + protocol.utilities.length, 0)} tools
                    </span>
                    {expandedSections[section.id] ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {expandedSections[section.id] && (
                <div className="border-t bg-gray-50">
                  {section.protocols.map((protocol, protocolIndex) => (
                    <div key={protocolIndex} className="border-b border-gray-200 last:border-b-0">
                      <div className="bg-gray-100 px-6 py-3">
                        <h3 className="text-lg font-medium text-gray-800">{protocol.name}</h3>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Command</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platforms</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {protocol.utilities.map((utility, utilityIndex) => (
                              <tr key={utilityIndex} className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-blue-600">
                                    {utility.command}
                                  </code>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                  {utility.description}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                  {utility.platforms}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            This comprehensive list includes utilities from Unix-like systems (Linux, macOS), Windows, and third-party providers. 
            Modern tools like <code>ip</code> and <code>ss</code> are recommended over legacy alternatives like <code>ifconfig</code> and <code>netstat</code> 
            for contemporary Linux systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TCPIPUtilities;