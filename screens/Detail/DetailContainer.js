import Detail from "./Detail";

const DetailContainer = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  let details = {
    Name: item.name,
    Rank: item.rank,
    "Price USD": item.price_usd,
    "Percentage Change 24hrs": item.percent_change_24h,
    "Percentage Change 1hr": item.percent_change_1h,
    "Percentage Change 7d": item.percent_change_7d,
    "Price in BTC": item.price_btc,
    "Market Cap USA": item.market_cap_usd,
  };

  return (
    <Detail
      navigation={navigation}
      route={route}
      item={item}
      details={details}
    />
  );
};

export default DetailContainer;
