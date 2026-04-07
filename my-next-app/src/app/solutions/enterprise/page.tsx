import SolutionPageLayout from '@/components/sections/SolutionPageLayout'

export default function EnterprisePage() {
  return (
    <SolutionPageLayout
      subtitle="For Studios & Teams"
      title="The studio standard for garment production."
      description="From indie game studios to major VFX houses, Marvelous Designer is the tool production pipelines are built around. It's not just about what your artists can create — it's about how reliably and efficiently your whole team delivers."
      trialLabel="Start Free Trial"
      valueProp={[
        {
          title: 'Proven at studio scale',
          desc: 'Used across 1M+ creators and leading productions in game, film, and animation. MD is the de facto standard for garment pipelines.',
        },
        {
          title: 'Built for team workflows',
          desc: 'Consistent, repeatable results across your team. Garments that simulate the same way every time, on every machine.',
        },
        {
          title: 'End-to-end pipeline fit',
          desc: 'MD fits where you need it — between concept and rigging, between simulation and render. No rework, no format friction.',
        },
      ]}
      blocks={[
        {
          title: 'Garment quality that holds up in production',
          description:
            'Complex layered clothing, multiple simulation regions, fine fabric detail — MD handles the garment complexity that production demands without breaking your pipeline. The same asset that worked in preproduction works in final delivery.',
          subFeatures: [
            { title: 'Multi-layer simulation', desc: 'Simulate jackets over shirts over base layers with stable results' },
            { title: 'Consistent cross-machine results', desc: 'Same simulation behavior across your entire studio' },
          ],
          reverse: false,
        },
        {
          title: 'From concept to character — no dead ends',
          description:
            'MD exports clean geometry that your riggers, texture artists, and animators can work with immediately. Pattern-based construction means iteration is fast — change a silhouette without rebuilding from scratch.',
          subFeatures: [
            { title: 'Clean mesh export', desc: 'Quad mesh and standard formats your pipeline already knows' },
            { title: 'Rapid iteration', desc: 'Adjust fit, silhouette, and fabric without starting over' },
          ],
          reverse: true,
        },
        {
          title: 'Animation-ready for every production type',
          description:
            'Whether you\'re simulating cloth for a cutscene, rigging a hero character, or outputting for real-time engines, MD\'s animation and rendering tools carry garments through to the final stage — with fur strand preview, screen recording export, and IK posing built in.',
          subFeatures: [
            { title: 'IK pose & motion support', desc: 'Pose characters naturally for any production format' },
            { title: 'Real-time & offline rendering', desc: 'Preview in-tool, export for any downstream renderer' },
          ],
          reverse: false,
        },
      ]}
    />
  )
}
