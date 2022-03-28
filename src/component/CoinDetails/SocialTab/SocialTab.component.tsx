import { useContext } from 'react';
import DataRow from '../../DataRow';
import { CoinDetailsContext } from '../CoinDetails.context';
import TabContent from '../TabContent';

function SocialTab() {
  const coin = useContext(CoinDetailsContext);

  if (!coin) return null;

  const twitterFollowers = coin.community_data.twitter_followers;
  const facebookLikes = coin.community_data.facebook_likes;
  const subredditSubs = coin.community_data.reddit_subscribers;

  const twitterUser = coin.links.twitter_screen_name;
  const facebookUser = coin.links.facebook_username;
  const subredditUrl = coin.links.subreddit_url;

  return (
    <TabContent>
      {twitterUser && <DataRow title="Twitter" text={`@${twitterUser}`} />}
      {Boolean(twitterFollowers) && <DataRow title="Twitter followers" text={`${twitterFollowers}`} />}
      {subredditUrl && <DataRow title="Subreddit" text={subredditUrl} />}
      {Boolean(subredditSubs) && <DataRow title="Reddit Subscribers" text={`${subredditSubs}`} />}
      {facebookUser && <DataRow title="Facebook" text={facebookUser} />}
      {Boolean(facebookLikes) && <DataRow title="Facebook likes" text={`${facebookLikes}`} />}
    </TabContent>
  );
}

export default SocialTab;
