import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return <h1>VARTA 2026 is live 🚀</h1>
}
