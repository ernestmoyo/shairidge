import { TeamMember } from '@/types/business'
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

interface TeamCardProps {
  member: TeamMember
}

export const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-subtle hover:shadow-card transition-all duration-200 overflow-hidden border border-gray-100">
      {member.image ? (
        <div className="w-full h-80 relative">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="w-full h-80 bg-primary flex items-center justify-center text-white text-5xl font-serif">
          {member.name.charAt(0)}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-primary mb-1">
          {member.name}
        </h3>
        <p className="text-accent text-sm font-medium mb-3">{member.title}</p>

        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{member.bio}</p>

        {/* Expertise */}
        <div className="flex flex-wrap gap-2 mb-4">
          {member.expertise.map((skill) => (
            <span
              key={skill}
              className="inline-block px-3 py-1 bg-surface-alt text-secondary text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* LinkedIn Link */}
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm"
          >
            <FaLinkedin /> LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}
