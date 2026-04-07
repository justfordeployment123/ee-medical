import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

const routes = [
  '/about',
  '/software',
  '/healthcare-software-development',
  '/reliability',
  '/six-sigma-healthcare',
  '/medical-devices-quality-assurance',
  '/quality-assurance-audits',
  '/quality-system-regulation-qsr',
  '/quality-management-system-implementation',
  '/iso-13485-medical-quality-system-registration',
  '/iso-14971-medical-device-risk-management-for-medical-devices',
  '/free-iso-13485-2016-gap-analysis-tool',
  '/media',
  '/careers',
  '/ccc-mark-approval',
  '/ce-mark-approval',
  '/clinical-data-and-postmarket-compliance-under-the-mdr',
  '/fda-483-observations-warning-letters-recalls-remediation',
  '/pre-ide-process',
  '/fda-establishment-registration',
  '/fda-510k-application',
  '/fda-usa-agents-for-foreign-establishments',
  '/investigational-new-drug-ind-application',
  '/new-drug-application-overview',
  '/abbreviated-new-drug-application-anda-submissions-overview',
  '/biologics-license-application-bla-overview',
  '/dmf',
  '/cmc',
  '/ai-samd-pathway',
  '/ai-regulatory-strategy',
  '/ai-fda-readiness',
  '/pccp-authoring',
  '/ai-design-controls',
  '/fda-defense',
  '/share-your-project',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'http://b0sk8w488oos44wwko008wsw.72.60.29.89.sslip.io',
      dynamicRoutes: routes,
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
})
