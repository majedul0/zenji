import { Suspense, lazy } from 'react'
import { CanvasRoot } from './CanvasRoot'

const EmberField = lazy(() => import('./EmberField').then((m) => ({ default: m.EmberField })))

/**
 * Fixed full-viewport three.js layer sitting behind all page content.
 * Rendered once at the App root so particles persist across sections.
 */
export function BackgroundField({ pointer }) {
  return (
    <div className="background-field">
      <CanvasRoot camera={{ position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <EmberField pointer={pointer} />
        </Suspense>
      </CanvasRoot>
    </div>
  )
}
