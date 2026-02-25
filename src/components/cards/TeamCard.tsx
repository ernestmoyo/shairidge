import { TeamMember } from '@/types/business'
import { FaLinkedin } from 'react-icons/fa'

interface TeamCardProps {
  member: TeamMember
}

export const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image placeholder */}
      <div className="w-full h-80 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-6xl font-bold">
        {member.name.charAt(0)}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-poppins text-2xl font-bold text-primary mb-1">
          {member.name}
        </h3>
        <p className="text-secondary font-semibold mb-3">{member.title}</p>

        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

        {/* Expertise */}
        <div className="flex flex-wrap gap-2 mb-4">
          {member.expertise.map((skill) => (
            <span
              key={skill}
              className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs rounded-full"
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
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <FaLinkedin /> LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}
