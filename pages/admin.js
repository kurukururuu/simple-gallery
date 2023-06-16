import dynamic from 'next/dynamic'
const config = require('../public/admin/config.yml');

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init({ config })
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
)

const AdminPage = () => {
  return <CMS />
}

export default AdminPage
