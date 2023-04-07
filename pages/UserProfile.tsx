import React from 'react';
import { GetServerSidePropsContext } from 'next';

interface Props {
  username: string;
}

const UserProfile = ({ username }: Props) => {
  return (
    <>
      <h1>{username}</h1>
    </>
  );
};

export default UserProfile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params, req, res } = context;
  console.log('getServerSideProps ~ params:', params);

  return {
    props: {
      username: 'Karl',
    },
  };
}
