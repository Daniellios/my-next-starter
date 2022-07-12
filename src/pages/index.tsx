import type { ReactElement } from 'react'
import { Head } from '@/components/Head/Head'
import React from 'react'
import Layout from '../layouts/Layout'
import NestedLayout from '@/layouts/NestedLayout'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}

export default Page
