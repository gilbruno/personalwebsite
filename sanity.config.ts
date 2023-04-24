import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig({
    projectId: '6hwupml2',
    dataset: 'production',
    title: 'My personal website',
    apiVersion: '2023-03-04',
    basePath: '/admin',
    plugins: [deskTool()]
})

export default config