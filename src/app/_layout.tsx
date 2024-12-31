import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";

const RootLayout = () => {
  return (
    <ToastProvider>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{ headerShown: true, title: "Shop" }}
        />
        <Stack.Screen
          name="categories"
          options={{ headerShown: true, title: "Categories" }}
        />
        <Stack.Screen
          name="product"
          options={{ headerShown: true, title: "Product" }}
        />
        <Stack.Screen
          name="cart"
          options={{
            headerShown: true,
            presentation: "modal",
            title: "Shopping Cart",
          }}
        />
        <Stack.Screen name="auth" options={{ headerShown: true }} />
      </Stack>
    </ToastProvider>
  );
};

export default RootLayout;
