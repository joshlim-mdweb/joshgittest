import SolutionPageLayout from '@/components/sections/SolutionPageLayout'

export default function AcademicsPage() {
  return (
    <SolutionPageLayout
      subtitle="For Educators & Students"
      title="Train with the tool studios actually hire for."
      description="Marvelous Designer is the garment tool working professionals use across game, VFX, fashion, and animation. Teaching it means your students graduate with real production skills — not just academic ones."
      trialLabel="Start Free Trial"
      valueProp={[
        {
          title: 'Industry-standard curriculum',
          desc: 'MD is used in the studios your students want to work at. Teaching it puts graduates directly into the workflows they\'ll encounter on day one.',
        },
        {
          title: 'Real production workflows',
          desc: 'Students learn garment creation the way it actually works — pattern-based construction, simulation, rigging, and export — not a simplified version.',
        },
        {
          title: 'Portfolio-ready from day one',
          desc: 'Every project a student completes in MD is production-quality. No extra polish needed to show it in a portfolio or demo reel.',
        },
      ]}
      blocks={[
        {
          title: 'The same tool your students will use on the job',
          description:
            'MD is the garment creation standard across game studios, VFX houses, and fashion pipelines worldwide. When students learn MD, they\'re not learning a classroom tool — they\'re learning the software recruiters and art directors expect to see on a resume.',
          subFeatures: [
            { title: 'Used in major productions', desc: '1M+ professional users across game, film, animation, and fashion' },
            { title: 'Recognized by studios globally', desc: 'The tool leads in character garment pipelines across industries' },
          ],
          reverse: false,
        },
        {
          title: 'Teach how garments are actually built',
          description:
            'Pattern-based garment construction mirrors real-world tailoring — students learn principles that transfer directly to professional work. Simulation, fabric physics, and rigging give them a complete production skillset, not a limited sandbox.',
          subFeatures: [
            { title: 'Pattern construction fundamentals', desc: 'Learn garment-making principles that carry into any production role' },
            { title: 'Physics simulation & fabric properties', desc: 'Understand how materials behave in real and digital environments' },
          ],
          reverse: true,
        },
        {
          title: 'From classroom to portfolio to career',
          description:
            'Every project built in MD is portfolio-ready. Students leave with garment assets that can go directly into a demo reel or character showcase. Paired with rigging and animation tools, the full character pipeline is available from day one of class.',
          subFeatures: [
            { title: 'Export for any 3D pipeline', desc: 'Assets work in Blender, Maya, Unreal, Unity and other standard tools' },
            { title: 'Full character pipeline in one tool', desc: 'Modeling, texturing, rigging, and animation — all in MD' },
          ],
          reverse: false,
        },
      ]}
    />
  )
}
