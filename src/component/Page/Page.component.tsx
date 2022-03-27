import { PageContainer, PageHeader, PageContent } from './Page.styles';

interface PageProps {
    children: React.ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <PageContainer>
      <PageHeader>Cryptocurrency Explorer</PageHeader>
      <PageContent>
        {children}
      </PageContent>
    </PageContainer>
  );
}

export default Page;
