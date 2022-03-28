import { useContext } from 'react';
import DataRow from '../../DataRow';
import { CoinDetailsContext } from '../CoinDetails.context';
import TabContent from '../TabContent';

function ContactTab() {
  const coin = useContext(CoinDetailsContext);

  if (!coin) return null;

  const homePage = coin.links.homepage?.[0];
  const blockChainSite = coin.links.blockchain_site?.[0];
  const officialForum = coin.links.official_forum_url?.[0];
  const chatUrl = coin.links.chat_url?.[0];

  return (
    <TabContent>
      {homePage && <DataRow title="Home" text={homePage} />}
      {blockChainSite && <DataRow title="Blockchain site" text={blockChainSite} />}
      {officialForum && <DataRow title="Official forum" text={officialForum} />}
      {chatUrl && <DataRow title="Chat" text={chatUrl} />}
    </TabContent>
  );
}

export default ContactTab;
