import { Props } from "componentes/services/model/core.model";
import { StyleSheet, View } from "react-native";

import { Navbar } from "componentes/navigation/ui/Navbar";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    // backgroundColor: "red",
  },
});

export const BasicLayout = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.children}
      <Navbar />
    </View>
  );
};
