import { useSignOut } from "@/hooks/useSignOut";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const SignOutButton = () => {
  const { handleSignOut } = useSignOut();
  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Feather name="log-out" size={24} color="#E0245E" />
    </TouchableOpacity>
  );
};

export default SignOutButton;
