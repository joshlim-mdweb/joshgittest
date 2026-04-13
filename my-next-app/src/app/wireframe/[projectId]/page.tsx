import { redirect } from 'next/navigation'
import { PROJECTS } from '@/lib/screens'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>
}) {
  const { projectId } = await params
  const project = PROJECTS.find((p) => p.id === projectId)

  if (!project || project.screens.length === 0) {
    redirect('/wireframe')
  }

  redirect(`/wireframe/${projectId}/${project.screens[0].id}`)
}
