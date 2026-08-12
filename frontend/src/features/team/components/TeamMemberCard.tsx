'use client'

import { useState } from 'react'
import type { TeamMember } from '../types'

// Blurbs longer than 200 characters gets cut off with a "See more" toggle
const BLURB_TRUNCATE_LENGTH = 200

// Fallback: Initials shown in the photo circle when no photo available
function getInitials(name: string): string {
  const words = name.trim().split(/\s+/)
  const first = words[0]?.[0] ?? ''
  const last = words.length > 1 ? (words[words.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  // imageFailed becomes true if the image file has a error
  const [imageFailed, setImageFailed] = useState(false)
  // Checks whether the user has clicked "See more" on a long blurb
  const [expanded, setExpanded] = useState(false)

  // Verifing if the real photo does not have a error
  const showPhoto = !!member.photoUrl && !imageFailed

  const isLongBlurb = !!member.blurb && member.blurb.length > BLURB_TRUNCATE_LENGTH
  const displayBlurb =
    member.blurb && isLongBlurb && !expanded
      ? `${member.blurb.slice(0, BLURB_TRUNCATE_LENGTH)}…`
      : member.blurb

  return (
    <div className="w-64 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {showPhoto ? (
        <img
          src={member.photoUrl ?? undefined}
          alt={member.name}
          onError={() => setImageFailed(true)}
          className="mx-auto h-28 w-28 rounded-md border border-zinc-200 object-cover dark:border-zinc-700"
        />
      ) : (
        // Initials placeholder — used when photoUrl is null or the image failed to load
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-md border border-zinc-200 bg-zinc-100 text-lg font-semibold text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
          {getInitials(member.name)}
        </div>
      )}

      {/* break-words wrap instead of overflowing the card */}
      <p className="mt-3 font-bold break-words">{member.name}</p>
      <p className="text-sm text-brand-500 break-words">{member.role}</p>

      <p className="mt-2 text-sm text-zinc-600 break-words dark:text-zinc-300">
        {/*Uses "No bio added" when the member has no blurb*/}
        {displayBlurb ?? 'No bio added'}
        {isLongBlurb && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="ml-1 font-bold text-zinc-900 hover:underline dark:text-white"
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        )}
      </p>
    </div>
  )
}