import SolutionPageLayout from '@/components/sections/SolutionPageLayout'

export default function IndividualPage() {
  return (
    <SolutionPageLayout
      subtitle="For Individual Creators"
      title="Your garments, your workflow."
      description="Whether you're a freelancer building a portfolio or a solo artist shipping production assets, Marvelous Designer gives you simulation-based garment creation that fits your process — fast, precise, and ready for any pipeline."
      valueProp={[
        {
          title: 'Simulation-based speed',
          desc: 'Skip the manual sculpting. Create natural draping, realistic wrinkles, and complex layering in minutes — not hours.',
        },
        {
          title: 'Production-quality output',
          desc: 'From PBR textures to quad mesh export, your garments are ready for games, film, and fashion without extra cleanup.',
        },
        {
          title: 'Fits any pipeline',
          desc: 'Export to the tools you already use. MD integrates seamlessly with Blender, Maya, Unreal, Unity, and more.',
        },
      ]}
      blocks={[
        {
          title: 'Build realistic garments from patterns',
          description:
            'Marvelous Designer uses a pattern-based construction method that mirrors real garment-making. Design your pieces in 2D, simulate in 3D, and watch physics-accurate draping take shape in real time. No polygon modeling required.',
          subFeatures: [
            { title: 'Pattern-based construction', desc: 'Design garments the way tailors do — with patterns and seams' },
            { title: 'Real-time simulation', desc: 'See results instantly as you adjust fit, fabric weight, and layers' },
          ],
          reverse: false,
        },
        {
          title: 'Fabric that looks and behaves like the real thing',
          description:
            'Apply actual fabric properties — weight, stretch, stiffness — from a library of presets or custom-tuned values. Pair with high-resolution PBR texture maps and AI-generated textures to bring every material to life.',
          subFeatures: [
            { title: 'Fabric presets & custom physics', desc: 'Hundreds of presets across cotton, silk, denim, leather, and more' },
            { title: 'AI-powered texture generation', desc: 'Generate and apply material textures without leaving MD' },
          ],
          reverse: true,
        },
        {
          title: 'Ready to rig, animate, and render',
          description:
            'Your finished garment connects directly to avatar rigs via Everywear, supports IK-based posing, and renders with stylized schematic output or raw export for your renderer of choice.',
          subFeatures: [
            { title: 'Everywear rigging support', desc: 'Attach clothing to any rigged avatar without retopology' },
            { title: 'Wind, gravity & motion simulation', desc: 'Add life to your garments with physics-based animation' },
          ],
          reverse: false,
        },
      ]}
    />
  )
}
