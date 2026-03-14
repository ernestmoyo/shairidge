'use client'

import { TeamCard } from '@/components/cards/TeamCard'
import { Button } from '@/components/common/Button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { TeamMember } from '@/types/business'

export const HomeTeamSection = () => {
  const [team, setTeam] = useState<TeamMember[]>([])

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const response = await fetch('/data/team.json')
        const data = await response.json()
        setTeam(data.slice(0, 2))
      } catch (error) {
        console.error('Failed to load team:', error)
      }
    }

    loadTeam()
  }, [])

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/stock/team-meeting.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/95" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Our Leadership
          </span>
          <h2 className="font-serif text-3xl md:text-[2.5rem] text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experienced professionals dedicated to your financial success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/team">
            <Button size="lg" variant="outline">
              Meet the Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
