import Link from 'next/link'
import { notFound } from 'next/navigation'
import { fetchData } from '@/api/api'
import ClientData from '@/components/ClientData'
import { ROUTES } from '@/constants/routes';

export async function generateMetadata( { params } ) {
  const accountId = ( await params ).accountId
  const userData = await fetchData(accountId)
  return {
    title: `${ userData.data.name } ${ userData.data.lastName }`,
  }
}

export const fetchDataAPI = async ( accountId: string ) => {
  const resp = await fetch('some url', {
    cache: 'force-cache',
    next: { revalidate: 86400 },  // update data once a day
  })
  return fetchData(accountId)
}

export default async function Home( { params }: { params: Promise<{ accountId : string }> } ) {
  const accountId = ( await params ).accountId
  const userData = await fetchDataAPI(accountId)

  console.log('Loaded server page data', userData)

  if ( !userData ) notFound()

  return (
    <div>
      <div className="w-full">
        <ClientData userData={ userData.data } />
        <button className="border-2 border-blue-950 px-2 py-1 mt-3 rounded-md" style={ { fontVariant: 'small-caps' } }>
          <Link href={ ROUTES.home + '/77' }>
            redirect another account
          </Link>
        </button>
      </div>
    </div>
  )
}
