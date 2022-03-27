import {
  PageContainer, PageHeader, PageContent, PageTitle,
} from './Page.styles';

interface PageProps {
    children: React.ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>
          Cryptocurrency Explorer
        </PageTitle>
      </PageHeader>
      <PageContent>
        {children}
      </PageContent>
    </PageContainer>
  );
}

export default Page;
