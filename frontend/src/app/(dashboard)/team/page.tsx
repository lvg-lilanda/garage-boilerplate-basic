import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { EmptyState } from '@/components/shared/EmptyState'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'
import { teamName, teamMembers } from '@/features/team/data'

export const metadata: Metadata = { title: 'Team' }

export default async function TeamPage() {
  // Checks for valid session and redirects if not available
  await requireAuth()

  return (
    <div className="space-y-8">
      <h1 className="text-center text-2xl font-bold tracking-tight">{teamName}</h1>

      {teamMembers.length === 0 ? (
        // Edge case: No team members
        <EmptyState title="No team members available" />
      ) : (
        <div className="space-y-6">
          {/* First member gets its own centered row as per the mockup and member card rendered seperately*/}
          <div className="flex justify-center">
            <TeamMemberCard member={teamMembers[0]!} />
          </div>
          {/* Remaining members get a member card and is wrapped into lines based on screen size*/}
          {teamMembers.length > 1 && (
            <div className="flex flex-wrap justify-center gap-6">
              {teamMembers.slice(1).map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}