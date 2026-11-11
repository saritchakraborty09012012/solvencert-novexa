import React from 'react'

interface Props {
  state: 'hidden' | 'loading' | 'finish'
}

export default function TunnelLoader({ state }: Props) {
  if (state === 'hidden') return null
  const finishing = state === 'finish'

  return (
    <div className={`tunnel-loader${finishing ? ' finishing' : ''}`} role="status" aria-label="Loading next page" aria-live="polite">
      <div className="solar-stars" aria-hidden="true" />
      <div className="solar-streaks" aria-hidden="true" />
      {!finishing && <div className="solar-planets" aria-hidden="true">
        <span className="solar-sun" />
        <span className="solar-planet solar-planet--earth" />
        <span className="solar-planet solar-planet--jupiter" />
        <span className="solar-planet solar-planet--saturn" />
      </div>}
      {!finishing && (
        <div className="solar-loading">
          <span className="solar-loading__label">Loading</span>
          <span className="solar-dots" aria-hidden="true"><span /><span /><span /></span>
        </div>
      )}
    </div>
  )
}
