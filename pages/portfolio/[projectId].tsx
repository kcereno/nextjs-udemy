import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname); // /portfolio/[projectId]
  console.log(router.query); // { projectId: 'karlcereno' }

  const { pathname, query } = router;
  const { projectId } = query;

  // or

  // const {
  //   pathname,
  //   query: { projectId },
  // } = router;

  return <div>The {projectId} page</div>;
};

export default PortfolioProjectPage;
