import { GetServerSidePropsContext } from 'next';
import React from 'react';

interface Props {
  id: string;
}

const UserIdPage = ({ id }: Props) => {
  return <div>{id}</div>;
};

export default UserIdPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const userId = params!.uid;

  return {
    props: {
      id: userId,
    },
  };
}
