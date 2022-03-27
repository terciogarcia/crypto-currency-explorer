import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

export const PageContainer = styled.div``;

export const PageHeader = styled(AppBar)`
  padding: .8rem 1.6rem;
  position: relative;
`;

export const PageTitle = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
`;

export const PageContent = styled.section`
  padding: 2rem .5rem;
  margin: auto;
  max-width: 1280px;
`;
