import SignOutButton from "@/components/SignOutButton";
import { useUserSync } from "@/hooks/userUserSync";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  useUserSync();
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <SignOutButton />
    </SafeAreaView>
  );
};
export default HomeScreen;
