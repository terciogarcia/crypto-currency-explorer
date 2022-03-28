import { useContext } from 'react';
import DataRow from '../../DataRow';
import { CoinDetailsContext } from '../CoinDetails.context';
import TabContent from '../TabContent';

function ReputationTab() {
  const coin = useContext(CoinDetailsContext);

  if (!coin) return null;

  const upVotesPercentage = coin.sentiment_votes_up_percentage;
  const downVotesPercentage = coin.sentiment_votes_down_percentage;

  return (
    <TabContent>
      {Boolean(upVotesPercentage) && <DataRow title="Up votes" text={`${upVotesPercentage}%`} />}
      {Boolean(downVotesPercentage) && <DataRow title="Down votes" text={`${downVotesPercentage}%`} />}
    </TabContent>
  );
}

export default ReputationTab;
