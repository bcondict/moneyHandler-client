import { Props } from "componentes/services/model/core.model";
import { View } from "react-native";

import { Navbar } from "componentes/navigation/ui/Navbar";

export const BasicLayout = (props: Props) => {
  return (
    <View>
      {props.children}
      <Navbar />
    </View>
  );
};
