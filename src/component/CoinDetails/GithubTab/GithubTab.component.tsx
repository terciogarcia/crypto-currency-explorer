import { useContext } from 'react';
import DataRow from '../../DataRow';
import { CoinDetailsContext } from '../CoinDetails.context';
import TabContent from '../TabContent';

function GithubTab() {
  const coin = useContext(CoinDetailsContext);

  if (!coin) return null;

  const githubUrl = coin.links.repos_url?.github[0];

  const {
    forks, stars, subscribers, total_issues,
  } = coin.developer_data;

  return (
    <TabContent>
      {githubUrl && <DataRow title="Repository" text={githubUrl} />}
      {Boolean(forks) && <DataRow title="Forks" text={`${forks}`} />}
      {Boolean(stars) && <DataRow title="Stars" text={`${stars}`} />}
      {Boolean(subscribers) && <DataRow title="Subscribers" text={`${subscribers}`} />}
      {Boolean(total_issues) && <DataRow title="Issues" text={`${total_issues}`} />}
    </TabContent>
  );
}
export default GithubTab;
