import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import project from './sanity/schemas/project-schema'

const config = defineConfig({
    projectId: '6hwupml2',
    dataset: 'production',
    title: 'My personal website',
    apiVersion: '2023-03-04',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: [project]}
})

export default config