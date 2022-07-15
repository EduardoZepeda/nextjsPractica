import Loading from "@components/Loading/Loading";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import  { useSession, getSession } from "next-auth/react";


interface propsWithChildren {
    children: React.ReactNode
}


export const getServerSideProps: GetServerSideProps<{}> = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if(session === null){
    return {
      redirect : {
        destination : '/api/auth/signin',
        permanent : false
      },
    }
  }

  return {
    props: {session}
  }
}

const AuthRequired = ({ children }: propsWithChildren): JSX.Element => {
  const {data: session, status} = useSession()

  if (status === 'loading') {
    return <Loading/>
  }

  if(session == null){
    return <>
      <h1>Premium</h1>
      <p>You must be logged in to view this page.</p>
    </>
  }

  return (
    <>
        {children}
    </>
  )
}

export default AuthRequired;