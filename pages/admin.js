import dynamic from 'next/dynamic'
import React from 'react'
const config = require('../public/admin/config.yml');

// const CMS = dynamic(
//   () =>
//     import('netlify-cms-app').then((cms) => {
//       console.log({cms: cms})
//       cms.init({ config })
//       // return cms()
//     }),
//   { ssr: false, loading: () => <p>Loading...</p> }
// )

// const AdminPage = () => {
//   console.log(CMS)
//   return CMS()
// }

// export default AdminPage

const AdminPage = () => {
  import('netlify-cms-app').then((cms) => {
    cms.init({ config })
    return cms
  })
}

export default dynamic(() => Promise.resolve(AdminPage), {
  ssr: false,
  loading: () => <p>Loading...</p>
})
