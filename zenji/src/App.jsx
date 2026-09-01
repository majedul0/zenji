import { Navbar } from './components/layout/Navbar'
import { Marquee } from './components/layout/Marquee'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { ProductGrid } from './components/sections/ProductGrid'
import { Lookbook } from './components/sections/Lookbook'
import { About } from './components/sections/About'
import { CTA } from './components/sections/CTA'
import { Cursor } from './components/cursor/Cursor'
import { BackgroundField } from './three/BackgroundField'
import { usePointer } from './hooks/usePointer'

function App() {
  const pointer = usePointer()

  return (
    <>
      <BackgroundField pointer={pointer} />
      <Cursor pointer={pointer} />

      <Marquee />
      <Navbar />

      <main>
        <Hero pointer={pointer} />
        <About />
        <Lookbook />
        <ProductGrid />
        <Marquee items={['ANIME INSPIRED', 'ZENJI STUDIO', 'MADE TO LAST', 'DEFY ORDINARY']} speed={22} />
        <CTA />
      </main>

      <Footer />
    </>
  )
}

export default App
