import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import InventoryEntry from "../../components/InventoryEntry";
import ProfileHeader from "../../components/ProfileHeader";
import Logout from "../../components/Logout";
import AppStyles from "../../AppStyles";

export default function Profile({
  balance,
  username,
  navigation,
  user,
  logout,
  inventory,
  totalInvested,
  totalProfitLoss,
  setTotalProfitLoss,

}) {
  const roundedBalance = parseFloat(balance).toFixed(2);
  const roundedInvestment = parseFloat(totalInvested).toFixed(2);
  return (
    <View style={styles.container}>
      <ProfileHeader
        username={username}
        roundedBalance={roundedBalance}
        totalProfitLoss={totalProfitLoss}
        roundedInvestment={roundedInvestment}
      />

      <FlatList
        data={inventory}
        style={{ marginTop: 5 }}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <InventoryEntry
            user={user}
            item={item}
            key={index}
            inventory={inventory}
            setTotalProfitLoss={setTotalProfitLoss}
          />
        )}
      />

      <Logout logout={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppStyles.theme_1.DARK },
});
