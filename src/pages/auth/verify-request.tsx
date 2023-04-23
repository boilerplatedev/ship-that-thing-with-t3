import React from 'react'
import { type NextPage } from 'next'

import Logo from '@/client/components/common/logo'
import Page from '@/client/components/layouts/page'
import { withNoAuth } from '@/client/hooks/with-auth'

const VerifyRequest: NextPage = () => (
  <Page
    title='Check your email'
    className='flex items-center justify-center w-full min-h-screen bg-gray-50 animate-background'
  >
    <div className='flex flex-col space-y-4'>
      <Logo className='text-center' />
      <div className='flex min-w-[400px] flex-col space-y-4 rounded bg-white px-8 py-6 shadow'>
        <h2 className='text-2xl font-bold text-center'>Check your email</h2>
        <p>A sign in link has been sent to your email address.</p>
      </div>
    </div>
  </Page>
)

export default withNoAuth(VerifyRequest)
