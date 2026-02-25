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
        setTeam(data.slice(0, 2)) // Show first 2 team members
      } catch (error) {
        console.error('Failed to load team:', error)
      }
    }

    loadTeam()
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your financial success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/team">
            <Button size="lg" variant="secondary">
              Meet the Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
